import { useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import request from "../stores/Request";

const queryHandler = async (page: string) => {
  const response = await request.get(`/user/list?page=${page}`);
  return response.data;
};

const useInfinityQuery = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(
      ["page"],
      ({ pageParam = 0 }) => {
        return queryHandler(pageParam);
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length + 1; // 다음 페이지를 호출할 때 사용 될 pageParam
        },
      }
    );

  return {
    result: data,
    nextFetch: () => fetchNextPage(),
  };
};

export default useInfinityQuery;
