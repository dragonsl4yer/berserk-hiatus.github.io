type IssueInfo = {
  year: number | string;
  number: number;
  chapter?: string | number;
  date?: string;
  released: boolean;
  arc?: string;
  ah?: boolean;
  double_issue?: boolean;
};

type ArcInfo = {
  key: string;
  name: string;
  color: string;
};

type SeriesInfo = {
  arcs: Map<string, ArcInfo>;
  name: string;
  ongoing: boolean;
  streaksThreshold: number;
  showFaq: boolean;
  faq?: FaqItem[];
  attribution?: AttributionInfo;
};

type FaqItem = {
  question: string;
  answer: string;
};

type Streak = {
  start: IssueInfo;
  end: IssueInfo;
  released: boolean;
  count: number;
};

type LinkItem = {
  name: string;
  link: string;
};

type AttributionInfo = {
  authors: LinkItem[];
  sources: LinkItem[];
};
