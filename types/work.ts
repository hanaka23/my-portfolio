export type WorkImage = {
  src: string;
  alt: string;
  caption: string;
};

export type WorkSection = {
  heading: string;
  body: string;
};

export type Work = {
  id: string;
  title: string;
  sections: WorkSection[];
  tech: string[];
  image: WorkImage[];
};
