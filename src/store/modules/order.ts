import { orders } from "@/data/front-end-data.json";
import { MyState, Order } from "@/interfaces/interfaces";

export default {
  mutations: {
    updateOrders(state: MyState, orders: Order[]) {
      state.orders = orders;
    },
  },
  state: {
    orders,
  },
  getters: {
    orders(state: MyState) {
      return state.orders;
    },
  },
};
