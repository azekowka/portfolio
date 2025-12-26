export type Experience = {
  title: string;
  employmentType: string;
  company: {
    name: string;
    url: string;
    image?: string;
  };
  location: {
    name: string;
  };
  start: string;
  end: string;
  description: string[];
};
