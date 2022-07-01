// title, desc, imageUrl, publishedDate, duration(min), link

export interface Article {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: Date;
  duration: number;
  link: string;
}
export interface ArticleRaw {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: string;
  duration: number;
  link: string;
}
