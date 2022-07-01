export interface CreateArticleInput {
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: Date;
  duration: number;
  link: string;
}

export interface UpdateArticleInput {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: Date;
  duration: number;
  link: string;
}
