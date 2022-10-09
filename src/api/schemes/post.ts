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

export interface PostNewPostRequestParams extends Omit<Post, "id" | "authorEmail" | "article" | "date" >{
    post: string;
}

export interface PostNewPostResponse extends Omit<Post, "id" | "authorEmail" | "article" | "date" >{
    args: object;
    data: string;
    files: object;
    form: object;
    json: PostNewPostRequestParams
}

export type PostResponse = PostResponseItem[];