export interface IPost {
  id: number;
  author: IPostAuthor;
  content: IPostContent[];
  publishedAt: Date;
}

export interface IPostAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface IPostContent {
  type: "paragraph" | "link";
  content: string;
}
