import React from "react";

export interface Post {
    id: string;
    author: string;
    authorEmail: string;
    title: string;
    article: React.ReactNode;
    date: Date;
    imageUrl: string;
}
export interface PostRequest {
    page: number;
    limit: number;
}

export interface PostResponse extends Omit<Post, "date" | "article" > {
    date: string;
    article: string;
}