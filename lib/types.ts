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
  highlights: HighlightItem[];
  links: LinkItem[];
};
