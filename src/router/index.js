import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ComingView from "../views/ComingView.vue";
import ConsumptionView from "../views/OrderView.vue";
import StockView from "../views/StockView.vue";
import PriceEditView from "../views/PriceEditView.vue";
import PackView from "../views/PackView.vue";
import DBView from "../views/DBView.vue";
import FinanceView from "../views/FinanceView.vue";
import PriceToPDF from "../views/PriceToPDF.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        isHeaderHidden: true,
      },
    },
    {
      path: "/coming",
      name: "coming",
      component: ComingView,
    },
    {
      path: "/order",
      name: "order",
      component: ConsumptionView,
    },
    {
      path: "/stock",
      name: "stock",
      component: StockView,
    },
    {
      path: "/priceedit",
      name: "priceedit",
      component: PriceEditView,
    },
    {
      path: "/pack",
      name: "pack",
      component: PackView,
    },
    {
      path: "/databases",
      name: "databases",
      component: DBView,
    },
    {
      path: "/finance",
      name: "finance",
      component: FinanceView,
    },
    {
      path: "/price",
      name: "price",
      component: PriceToPDF,
      meta: {
        isHeaderHidden: true,
      },
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
