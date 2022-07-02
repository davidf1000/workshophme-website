import { Article } from '../components/article/article.types';

export const validateArticleForm = (formData: Article) => {
  //   id: number;
  //   title: string;
  //   desc: string;
  //   imageUrl: string;
  //   publishedDate: Date;
  //   duration: number;
  //   link: string;
  const { id, title, desc, imageUrl, publishedDate, duration, link } = formData;
  const res = {
    error: false,
    result: {
      title: '',
      desc: '',
      imageUrl: '',
      publishedDate: '',
      duration: '',
      link: '',
    },
  };
};
