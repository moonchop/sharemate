import React, { useState, useEffect } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type pageNum = number;

interface feeddata {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const QueryHandler = () => {};

const useInfinityQuery = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(
      ["feed"],
      async ({ pageParam = 1 }) => {
        const res = await axios.get(
          "https://reqres.in/api/users?page=" + pageParam
        );
        return res.data;
      },
      {
        getNextPageParam: (lastPage) => {
          return lastPage.page + 1; // 다음 페이지를 호출할 때 사용 될 pageParam
        },
      }
    );

  return {
    result: data,
    nextFetch: () => fetchNextPage(),
  };
};

export default useInfinityQuery;
