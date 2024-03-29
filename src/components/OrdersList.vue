<template>
  <section v-show="showOrders">
    <div
      v-for="(order, index) in orders"
      :key="order"
      class="d-flex justify-content-between align-items-center table-orders table-orders-big border"
      role="button"
    >
      <div
        class="name text-decoration-underline"
        @click="openOrder(order, index)"
      >
        {{ order.title }}
      </div>
      <div class="products-count-block d-flex">
        <div class="list-img" role="button"></div>
        <div class="products-count">
          <div class="fw-bold">{{ order.products.length }}</div>
          <span>products</span>
        </div>
      </div>
      <div>
        <div>{{ shortDate(order.date) }}</div>
        <div class="fw-bold full-date">
          {{ fullDate(order.date) }}
        </div>
      </div>
      <div>
        <div class="usd">
          {{ numberWithSpaces(price(order.products, "USD")) }} $
        </div>
        <div class="fw-bold">
          {{ numberWithSpaces(price(order.products, "UAH")) }} UAH
        </div>
      </div>
      <div
        class="delete"
        role="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="sendDataToModal(order)"
      ></div>
      <DeleteModal :order="orderInModal" />
    </div>
  </section>
  <section>
    <SelectedOrder
      :selectedOrderProps="orderInModal"
      :products="products"
      :showOrders="showOrders"
      :orderIndex="orderIndex"
      @hideModal="hideModal"
      @deleteProduct="deleteProduct"
    />
  </section>
</template>

<script lang="ts">
import { months } from "@/data/months";
import DeleteModal from "./DeleteModal.vue";
import SelectedOrder from "./SelectedOrder.vue";
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import { Order, Product } from "@/interfaces/interfaces";

export default defineComponent({
  components: { SelectedOrder, DeleteModal },
  data: () => ({
    orderInModal: {},
    showOrders: true,
    orderIndex: 0,
    showModal: false,
    products: [] as Product[],
  }),
  computed: mapGetters(["orders"]),
  methods: {
    ...mapMutations(["updateOrders"]),
    deleteProduct(id: number) {
      this.products = this.products.filter(
        (product: Product) => product.id !== id
      );
    },
    hideModal() {
      this.showOrders = true;
    },
    openOrder(order: Order, index: number) {
      this.orderIndex = index;
      this.showOrders = false;
      this.showModal = true;
      this.orderInModal = order;
      this.products = order.products;
    },
    sendDataToModal(order: Order) {
      this.orderInModal = order;
    },
    numberWithSpaces(number: number) {
      let parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    },
    day(date: string) {
      const day = new Date(date).getDate();
      if (day < 10) {
        return "0" + day;
      }
      return day;
    },
    monthInDigits(date: string) {
      const month = new Date(date).getMonth() + 1;
      if (month < 10) {
        return "0" + month;
      }
      return month;
    },
    monthInSymbols(date: string) {
      return months[new Date(date).getMonth()];
    },
    year(date: string) {
      return new Date(date).getFullYear();
    },
    shortYear(date: string) {
      return new Date(date).getFullYear().toString().slice(2, 4);
    },
    shortDate(date: string) {
      return this.monthInDigits(date) + " / " + this.shortYear(date);
    },
    fullDate(date: string) {
      return (
        this.day(date) +
        " / " +
        this.monthInSymbols(date) +
        " / " +
        this.year(date)
      );
    },
    price(orderProducts: [], currency: string) {
      let sum = 0;
      orderProducts.forEach(({ price }: Product) => {
        price.forEach((onePrice: { symbol: string; value: number }) => {
          if (onePrice.symbol === currency) {
            sum += onePrice.value;
          }
        });
      });
      return sum;
    },
  },
});
</script>

<style scoped>
.table-orders {
  height: 70px;
  margin-bottom: 10px;
  color: #546e7a;
  padding-left: 33px;
}
.table-orders-big {
  padding-right: 33px;
  width: 1437px;
}
.table-orders .name {
  font-size: 19px;
}
.table-orders .list-img {
  background: url("@/assets/list.png") no-repeat;
  width: 43px;
  height: 42px;
  margin-right: 21px;
}
.table-orders .products-count-block {
  font-size: 15px;
}
.table-orders .products-count {
  line-height: 18px;
  padding-top: 5px;
  text-align: left;
}
.table-orders .full-date {
  font-size: 14px;
}
.table-orders .usd {
  font-size: 10px;
  text-align: left;
}
.table-orders .delete {
  background: url("@/assets/delete.png") no-repeat;
  width: 13px;
  height: 15px;
}
.table-orders .close-button button {
  padding-top: 22px;
  padding-left: 21px;
  margin: 0;
}
</style>
