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
  const { data, isLoading, isFetching, isRefetching } = postQueries.useGetPosts(
    { limit, page }
  );

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

  useEffect(() => {console.log(isLoading)},[isLoading]);
  useEffect(() => {console.log(isFetching)},[isFetching]);
  useEffect(() => {
    if (data !== undefined) {
      setPosts(data);
    }
  }, []);

  useEffect(() => {
    if (isRefetching && data !== undefined) {
      setPosts(
        (prev: postSchemas.Post[]) => {
          const newState = [...new Map(prev.concat(data).map((m) => [m.id, m])).values()];
          return newState;
        }
      );
    }
  }, [isRefetching]);

  function fetchPosts() {
    if (!isLoading) {
      setLimit((prev) => {
        if (prev + 6 <= 100) {
          return prev + 6;
        } else {
          return 100 - prev;
        }
      });
    }
  }

  return (
    <main className={scss.container}>
      {posts.map((post, i) => (
        <PostCard key={post.id} odd={i % 2 === 0} {...post} />
      ))}
      { isFetching && <div className={scss.loader}><Oval 
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
