import { useState } from "react";
import PostCard from "../../components/PostCard";
import { postQueries } from "../../hooks/queries";

export default function Home() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data } = postQueries.useGetPosts({ limit, page });
  if(!data) return null;
  console.log(data);
  return <div>{data.map((post) => <PostCard key={post.id} {...post}/>)}</div>;
}
