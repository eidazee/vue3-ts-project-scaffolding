import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

/*
 * declare module "vue-router" {
 * 	interface RouteMeta {
 * 		authorization?: boolean;
 * 	}
 * }
 */

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",

		/*
		 * route level code-splitting
		 * this generates a separate chunk (About.[hash].js) for this route
		 * which is lazy-loaded when the route is visited.
		 */
		component: () => import("@/views/HomeView.vue"),
		// meta: { authorization: true },
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
