<template>
  <div
    class="wrapper h-100 position-absolute fw-bold d-flex flex-column justify-content-center"
  >
    <a href="#/orders" class="text-decoration-none">ORDERS</a>
    <a href="#/products" class="text-decoration-none">PRODUCTS</a>
  </div>
</template>

<script>
import Orders from "./OrdersView.vue";
import Products from "./ProductsView.vue";
import NotFound from "./NotFound.vue";
import { defineComponent } from "vue";

const routes = {
  "/orders": Orders,
  "/products": Products,
};

export default defineComponent({
  mounted() {
    window.addEventListener("hashchange", () => {
      this.$emit(
        "path",
        routes[window.location.hash.slice(1) || "/"] || NotFound
      );
    });
  },
});
</script>
<style scoped>
div.wrapper {
  box-shadow: 12px 0 12px #f0f3f5;
  background: url("@/assets/avatar.png") center 48px no-repeat;
  width: 200px;
  font-size: 12px;
}
div.wrapper a {
  color: #36454d;
}
div.wrapper a:first-child {
  margin-bottom: 40px;
}
</style>
