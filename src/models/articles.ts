export interface Article {
  id: number;
  headLine: string;
  snippet: string;
  fullStory: string;
  location: string;
  nsfw: boolean;
  hasVideoPlaceholder: boolean;
  numberOfImages: number;
  categoryId: number;
  relatedArticleIds: number[];
}

export type Articles = Article[];
