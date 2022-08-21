export interface RestaurantInterface {
  id: string;
  name: string;
  description: string;
  logo: string;
  image: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
}

export interface RestaurantsInterfaceResponse {
  data: RestaurantInterface[];
  success: boolean;
  pagination: {
    total: number;
    per_page: number;
  };
}

export interface RestaurantsByIdInterfaceResponse {
  data: RestaurantInterface;
  success: boolean;
  pagination: {
    total: number;
    per_page: number;
  };
}

export const defaultRestaurants = {
  data: [],
  success: false,
  pagination: {
    total: 0,
    per_page: 0,
  },
};

export const defaultRestaurantById = {
  data: {
    id: "",
    name: "",
    description: "",
    logo: "",
    image: "",
    telephone: "",
    price_range: "",
    payment_methods: "",
    website: "",
    opening_hours: "",
  },
  success: false,
  pagination: {
    total: 0,
    per_page: 0,
  },
};
