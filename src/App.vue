<template>
  <TopMenu />
  <NavigationMenu @path="getPath" />
  <component :is="currentView" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import TopMenu from "./components/TopMenu.vue";
import Orders from "./components/OrdersView.vue";

export default defineComponent({
  data() {
    return {
      currentView: Orders,
    };
  },
  components: {
    TopMenu,
    NavigationMenu,
  },
  methods: {
    getPath(currentView: never) {
      this.currentView = currentView;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
