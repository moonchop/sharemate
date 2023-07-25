import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import request from "../stores/Request";

const queryHandler = async (page: string, url: string) => {
  const response = await request.get(url, {
    params: { page: page, offset: 8 },
  });
  //console.log("page", page);
  return response.data;
};

const useInfinityQuery = (url: string) => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery(
    ["page"],
    ({ pageParam = 0 }) => {
      return queryHandler(pageParam, url);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) {
          //console.log("aa");
          return;
        }
        //console.log("lastPage", lastPage);
        //console.log("Allpage", allPages);
        return allPages.length; // 다음 페이지를 호출할 때 사용 될 pageParam
      },
    }
  );

  return {
    result: data,
    nextFetch: () => {
      if (!hasNextPage) {
        refetch();
      } else {
        fetchNextPage();
      }
    },
    reFetch: () => refetch(),
  };
};

export default useInfinityQuery;
