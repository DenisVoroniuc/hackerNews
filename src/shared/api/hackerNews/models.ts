export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
};

//TODO: better types
export type Comment = any;
