const CONTENT_PATH = "data/content.json";

function apiHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function getConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH ?? "main";

  if (!token || !repo) {
    throw new Error(
      "GITHUB_TOKEN and GITHUB_REPO environment variables must be set to save content"
    );
  }

  return { token, repo, branch };
}

function toBase64(str: string): string {
  return Buffer.from(str, "utf-8").toString("base64");
}

export async function commitNewFile(
  repoPath: string,
  base64Content: string,
  commitMessage: string
): Promise<void> {
  const { token, repo, branch } = getConfig();
  const url = `https://api.github.com/repos/${repo}/contents/${repoPath}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: { ...apiHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({
      message: commitMessage,
      content: base64Content,
      branch,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to commit file to GitHub: ${res.status} ${text}`);
  }
}

export async function commitContentJson(
  contentObject: unknown,
  commitMessage: string
): Promise<void> {
  const { token, repo, branch } = getConfig();
  const apiBase = `https://api.github.com/repos/${repo}/contents/${CONTENT_PATH}`;
  const headers = apiHeaders(token);

  const getRes = await fetch(`${apiBase}?ref=${branch}`, { headers });
  if (!getRes.ok) {
    const text = await getRes.text();
    throw new Error(`Failed to read current content from GitHub: ${getRes.status} ${text}`);
  }
  const getData = (await getRes.json()) as { sha: string };

  const newContent = JSON.stringify(contentObject, null, 2) + "\n";

  const putRes = await fetch(apiBase, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: commitMessage,
      content: toBase64(newContent),
      sha: getData.sha,
      branch,
    }),
  });

  if (!putRes.ok) {
    const text = await putRes.text();
    throw new Error(`Failed to commit content to GitHub: ${putRes.status} ${text}`);
  }
}
