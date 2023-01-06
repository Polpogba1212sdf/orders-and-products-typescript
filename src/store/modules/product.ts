import { products } from "@/data/front-end-data.json";
import { MyState } from "@/interfaces/interfaces";

export default {
  state: {
    products,
  },
  getters: {
    products(state: MyState) {
      return state.products;
    },
  },
};
