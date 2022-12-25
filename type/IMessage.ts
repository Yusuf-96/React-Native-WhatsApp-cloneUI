export interface IMessages {
  id: string;
  text: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}
