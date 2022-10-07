import { useState, useEffect, useRef, useCallback } from "react";
import { postSchemas } from "../../api/schemes/index";
import PostCard from "../../components/PostCard";
import { postQueries } from "../../hooks/queries";
import scss from "./style.module.scss";
import { Oval } from "react-loader-spinner";

export default function Home() {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<postSchemas.Post[]>([]);
  // const { data, isLoading, isFetching, isRefetching } = postQueries.useGetPosts(
  //   { limit, page }
  // );

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = postQueries.useGetPostInfinityQuery({ limit, page });
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(event: Event) {
    const { target, currentTarget } = event;
    const { scrollY, innerHeight } = currentTarget as Window;
    const {
      body: { offsetHeight },
    } = target as Document;
    if (innerHeight + scrollY >= offsetHeight) {
      fetchPosts();
    }
  }

  function fetchPosts() {
      setLimit((prev) => {
        if(prev + 6 >= 100 ) return 100;
        return prev + 6;
      });
  }

  if(!data) return null;

  const { pages } = data;

  return (
    <main className={scss.container}>
      {pages.flat().map((post, i) => (
        <PostCard key={post.id} odd={i % 2 === 0} {...post} />
      ))}
      { isFetchingNextPage && <div className={scss.loader}><Oval 
      height={80}
      width={80}
      color="rgba(241, 161, 10, 1)"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="rgba(52, 35, 3, 1)"
      strokeWidth={2}
      strokeWidthSecondary={2}
      /></div>}
    </main>
  );
}
