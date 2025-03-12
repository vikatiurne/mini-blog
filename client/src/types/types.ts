export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Post {
  content: string;
  title: string;
  author: string;
  comments?: Comment[] | null;
}

export interface Comment {
  postId: string;
  message: string;
  username: string;
  timestamp: Date;
}
