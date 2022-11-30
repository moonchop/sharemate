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
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
    fetchPreviousPage,
  } = useInfiniteQuery(
    ["post"],
    ({ pageParam = 0 }) => {
      console.log("**********받아오는중***********");
      return queryHandler(pageParam, url);
    },
    {
      // refetchOnWindowFocus: "always",
      // refetchOnMount: "always",
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage, "####", allPages);
        if (lastPage.length !== 8) {
          return;
        }
        return allPages.length; // 다음 페이지를 호출할 때 사용 될 pageParam
      },

      getPreviousPageParam: (lastpage, allpages) => {
        if (lastpage.length !== 8) {
          return;
        }
        return allpages.length - 1;
      },
    }
  );

  return {
    result: data,
    nextFetch: () => {
      console.log("@@@@@@@", hasNextPage);
      if (!hasNextPage) {
        console.log("이전호출");
        refetch();
      } else {
        console.log("다음호출");
        fetchNextPage();
      }
    },
    reFetch: () => refetch(),
  };
};

export default useInfinitypost;
