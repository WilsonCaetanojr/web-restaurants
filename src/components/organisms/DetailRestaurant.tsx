import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { defaultRestaurantById } from "../../repositories/restaurant/restaurantInterface";
import { getRestaurantById } from "../../repositories/restaurant/restaurantRepository";
import { LoadingSpinner } from "../atoms/LoadingSpinner/LoadingSpinner";
import { BoxDetail } from "../molecules/BoxDetail/BoxDetail";
import { HeaderDetail } from "../molecules/HeaderDetail/HeaderDetail";

const CACHE_TIME_5_MINUTES = 5 * 60 * 1000;

export const DetailRestaurant = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, isLoading, isError } = useQuery(
    ["restaurant", id],
    async () => {
      return id?.toString()
        ? await getRestaurantById(id?.toString())
        : defaultRestaurantById;
    },
    {
      cacheTime: CACHE_TIME_5_MINUTES,
    }
  );

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError ? (
        <>Error</>
      ) : (
        <>
          <HeaderDetail {...(data?.data || defaultRestaurantById.data)} />
          <BoxDetail {...(data?.data || defaultRestaurantById.data)} />
        </>
      )}
    </>
  );
};
