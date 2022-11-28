import { useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import request from "../stores/Request";

const queryHandler = async (page: string, url: string) => {
  const response = await request.get(url, {
    params: { page: page, offset: 8 },
  });
  //console.log(response.data, page);
  return response.data;
};

const useInfinitygroup = (url: string) => {
  const queryClient = useQueryClient();
  const [pages, setPages] = useState<number>(0);
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(
      ["group"],
      ({ pageParam = 0 }) => {
        return queryHandler(pageParam, url);
      },
      {
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

export default useInfinitygroup;
