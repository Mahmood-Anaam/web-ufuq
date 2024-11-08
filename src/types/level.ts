type Character = {
  name: string;
  description: string;
};

export type Level = {
  id: number;
  title: string;
  image: string;
  description: string;
  character: Character;
  tags: string[];
};
