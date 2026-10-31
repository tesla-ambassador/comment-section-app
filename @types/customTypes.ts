export type content = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: user;
  commentId: number;
};

export type reply = {
  details: content;
  replyingTo: string;
};

export type user = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type comment = {
  commentContent: content;
  replies: reply[];
};

export type replies = {
  id: number,
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: user;
}
