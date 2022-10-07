import { useState, useEffect, useRef, useCallback } from "react";
import PostCard from "../../components/PostCard";
import { postQueries } from "../../hooks/queries";
import scss from "./style.module.scss";

export default function Home() {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = postQueries.useGetPosts({ limit, page });

  if (!data) return null;


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(event: Event){
    
    const { target, currentTarget } = event;
    const { scrollY, innerHeight } = currentTarget as Window;
    const { body: { offsetHeight }} = target as Document;
    if((innerHeight + scrollY) >= offsetHeight){
      console.log(target);
      console.log(currentTarget);
      setLimit(prev => prev + 6 )
    }
  };  

  return (
    <main className={scss.container}>
      {data.map((post, i) => (
        <PostCard key={post.id} odd={i % 2 === 0} {...post} />
      ))}
      {(isLoading || isFetching) && <div>Carregando</div>}
    </main>
  );
}
