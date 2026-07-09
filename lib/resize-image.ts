// Browser-only helper: center-crops an image file to a square and resizes it,
// returning a JPEG data URL small enough to commit via the GitHub API.
export async function resizeImageToDataUrl(
  file: File,
  size = 512,
  quality = 0.85
): Promise<string> {
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new window.Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("Could not read that image file"));
      el.src = objectUrl;
    });

    const side = Math.min(img.naturalWidth, img.naturalHeight);
    const sx = (img.naturalWidth - side) / 2;
    const sy = (img.naturalHeight - side) / 2;
    const target = Math.min(size, side);

    const canvas = document.createElement("canvas");
    canvas.width = target;
    canvas.height = target;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas not supported in this browser");
    ctx.drawImage(img, sx, sy, side, side, 0, 0, target, target);

    return canvas.toDataURL("image/jpeg", quality);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
