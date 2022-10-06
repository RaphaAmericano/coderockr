import { useState } from "react";
import PostCard from "../../components/PostCard";
import { postQueries } from "../../hooks/queries";
import scss from "./style.module.scss";

export default function Home() {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const { data } = postQueries.useGetPosts({ limit, page });
  if(!data) return null;
  
  return <main className={scss.container}>{data.map((post, i) => <PostCard key={post.id} odd={i % 2 === 0 } {...post}/>)}</main>;
}
