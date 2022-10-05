export interface Post {
    id: string;
    author: string;
    authorEmail: string;
    title: string;
    article: string;
    date: Date;
    imageUrl: string;
}
export interface PostRequest {
    page?: number;
    limit?: number;
}

interface PostResponseItem extends Omit<Post, "date" | "article" > {
    date: string;
    article: string;
}

export type PostResponse = PostResponseItem[];