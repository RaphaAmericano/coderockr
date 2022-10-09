import { InfiniteData, useInfiniteQuery, useMutation, useQuery } from "react-query";
import { postRequests } from "../../api/requests";
import { postSchemas } from "../../api/schemes";

export function useGetPosts(params?: postSchemas.PostRequest) {
  async function requestFn() {
    return postRequests.getPosts(params!);
  }

  const query = useQuery<postSchemas.PostResponse, unknown, postSchemas.Post[]>(
    ["get-posts", params],
    requestFn,
    {
      enabled: Boolean(params),
      staleTime: 4000,
      select: (data) =>
        data.map((post) => ({ ...post, date: new Date(post.date) })),
    }
  );

  return query;
}

export function useGetPostInfinityQuery(params?: postSchemas.PostRequest) {
  async function requestFn() {
    return postRequests.getPosts(params!);
  }

  const inifinyQuery = useInfiniteQuery<postSchemas.PostResponse, unknown, postSchemas.Post[]>(["get-posts-infinity", params], requestFn, {
    getNextPageParam: (lastPage, pages) => lastPage,
    getPreviousPageParam: (firstPage, allPages) => firstPage,
  });

  return inifinyQuery;
}

export function usePostNewPost(){
  const mutation = useMutation<unknown, unknown, postSchemas.PostNewPostRequestParams>(
    postRequests.postPost
  );

  return mutation;
}