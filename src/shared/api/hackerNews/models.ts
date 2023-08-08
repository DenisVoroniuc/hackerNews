type GenericId<T extends number = number> = T;

export type Story = {
  by: string;
  descendants: number;
  id: GenericId;
  kids: Array<GenericId> | undefined;
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
};

export type Comment = {
  by: string;
  descendants: number;
  id: GenericId;
  kids: Array<GenericId> | undefined;
  score: number;
  time: number;
  title: string;
  type: "comment";
  url: string;
};
