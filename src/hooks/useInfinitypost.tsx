import { useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import request from "../stores/Request";

const queryHandler = async (page: string, url: string) => {
  const response = await request.get(url, {
    params: { page: page, offset: 8 },
  });
  return response.data;
};

const useInfinitypost = (url: string) => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(
      ["post"],
      ({ pageParam = 0 }) => {
        return queryHandler(pageParam, url);
      },
      {
        // refetchOnWindowFocus: "always",
        // refetchOnMount: "always",
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length; // 다음 페이지를 호출할 때 사용 될 pageParam
        },
      }
    );

  return {
    result: data,
    nextFetch: () => fetchNextPage(),
  };
};

export default useInfinitypost;
