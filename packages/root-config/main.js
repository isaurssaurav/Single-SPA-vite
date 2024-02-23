import { registerApplication, start } from "single-spa";
console.log(import.meta.env.VITE_MF_VUE_APP, '******')

registerApplication(
  // Name of our single-spa application
  "@single-spa/app1",
  // loadingFunction
  () => import("http://127.0.0.1:8081/spa.js"),
  // activityFunction
  (location) =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname.startsWith("/home"),
);

/**
 * Register the next microfrontend
 */
/**
registerApplication(
  // Name of our single-spa application
  '@single-spa/app2',
  // loadingFunction
  () => import('./example.app.js'),
  // activityFunction
  location =>
    location.pathname === '/about'
);
 */

start({ urlRerouteOnly: true }); // for vue3 route
