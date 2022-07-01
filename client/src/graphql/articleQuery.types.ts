import { Article, ArticleRaw } from '../components/article/article.types';

export interface CreateArticleInput {
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: string;
  duration: number;
  link: string;
}

export interface UpdateArticleInput {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: string;
  duration: number;
  link: string;
}

export interface GetArticlesResponse {
  articles: ArticleRaw[];
}
