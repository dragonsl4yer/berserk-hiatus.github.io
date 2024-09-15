import { createRouter, createWebHistory } from "vue-router";
import SeriesInfo from "./SeriesInfo.vue";
import { nextTick } from "vue";

const routes = [
  {
    path: "/berserk-hiatus.github.io",
    name: "berserk",
    component: SeriesInfo,
    meta: {
      dir: "Berserk",
      title: "BERSERK",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: { name: "hxh" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  await nextTick(() => {
    const suffix = import.meta.env.VITE_TITLE_SUFFIX;
    document.title = `${to.meta.title} ${suffix}`;
  });
});

export default router;
