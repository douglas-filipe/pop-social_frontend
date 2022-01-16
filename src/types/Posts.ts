export interface IPosts {
  _id: string;
  description: string;
  imgUrl: string;
  author: {
    _id: string;
    name: string;
  };
  likes: [];
  createdAt: string
}
