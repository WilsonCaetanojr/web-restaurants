import { useContext, useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { ContainerCardRestaurant } from "../molecules/ContainerCardRestaurant/ContainerCardRestaurant";
import { HeaderHome } from "../molecules/HeaderHome/HeaderHome";

import { getAllRestaurants } from "../../repositories/restaurant/restaurantRepository";
import { GlobalContext } from "../../contexts/GlobalContex";
import { defaultRestaurants } from "../../repositories/restaurant/restaurantInterface";
import { LoadingSpinner } from "../atoms/LoadingSpinner/LoadingSpinner";

interface ScrollingElement {
  scrollHeight: number;
  scrollTop: number;
  clientHeight: number;
}

const limitPerPage = 10;
export const HomeRestaurants = () => {
  const [searchText, setSearchText] = useState("Restaurante X");
  const { loading, setLoading } = useContext(GlobalContext);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "restaurants",
    ({ pageParam = 1 }) => {
      try {
        return getAllRestaurants(pageParam, limitPerPage);
      } catch (err) {
        return defaultRestaurants;
      }
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.pagination.total / limitPerPage;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight }: ScrollingElement =
        event.target.scrollingElement;
      console.log(
        !!(!fetching && scrollHeight - scrollTop <= clientHeight * 1.5)
      );

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        setLoading(true);
        if (hasNextPage) await fetchNextPage();
        setLoading(false);
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [fetchNextPage, hasNextPage, setLoading]);

  // console.log({ data, loading });

  return (
    <>
      {loading && <LoadingSpinner />}
      <HeaderHome />
      <ContainerCardRestaurant restaurants={data} searchText={searchText} />
    </>
  );
};
