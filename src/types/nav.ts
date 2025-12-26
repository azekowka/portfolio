export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
};

export type Experience = {
  title: string;
  employmentType: string;
  company: {
    name: string;
    url: string;
    image: string;
  };
  location: {
    name: string;
  };
  start: string;
  end: string;
  description: string[];
};
