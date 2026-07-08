export type LinkItem = {
  id: string;
  label: string;
  url: string;
  icon: string;
};

export type HighlightItem = {
  id: string;
  title: string;
  description: string;
};

export type CommitteeMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
};

export type SiteContent = {
  society: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    mission: string;
    email: string;
    instagramHandle: string;
  };
  calendar: {
    embedUrl: string;
  };
  highlights: HighlightItem[];
  committee: CommitteeMember[];
  links: LinkItem[];
};
