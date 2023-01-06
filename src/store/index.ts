import { createStore } from "vuex";
// import order from "./modules/order";
// import product from "./modules/product";
import order from "@/store/modules/order";
import product from "@/store/modules/product";

export default createStore({
  modules: {
    order,
    product,
  },
});
