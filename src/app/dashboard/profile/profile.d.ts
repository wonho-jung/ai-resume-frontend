interface Data {
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  skills: string[];
  website: string;
  workExperience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  projects: {
    name: string;
    description: string;
    link: string;
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}
