export interface GameInterface {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  genre: string;
  rating: number;
  price: number;
  gallery: Array<string>;
  publisher?: string;
  developer?: string;
  size?: number;
  age?: number;
  category?: string;
  date?: string;
  discountPrice?: number;
  comments?: [
    {
      title: string,
      description: string;
      rating: number;
      username: string;
      date: Date;
    }
  ];
}
