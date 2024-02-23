import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";

import singleSpaVue from "single-spa-vue";
import singleSpaCss from "single-spa-css";

const cssLifecycles = singleSpaCss({
  // required: a list of CSS URLs to load
  // can be omitted if webpackExtractedCss is set to true, do not specify Webpack extracted css files here
  cssUrls: [`${import.meta.env.VITE_BASE_URL}/assets/spa.css`],

  // optional: defaults to false. This controls whether extracted CSS files from Webpack
  // will automatically be loaded. This requires using the ExposeRuntimeCssAssetsPlugin,
  // which is documented below.
  webpackExtractedCss: false,

  // optional: defaults to true. Indicates whether the <link> element for the CSS will be
  // unmounted when the single-spa microfrontend is unmounted.
  shouldUnmount: true,

  // optional: defaults to 5000. The number of milliseconds to wait on the <link> to load
  // before failing the mount lifecycle.
  timeout: 5000,

  // optional: defaults to a standard <link rel="stylesheet" href="/main.css"> element
  // Customize the creation of the link element that is used by single-spa-css by providing a
  // function. For example, for setting the cross-origin or other HTML attributes on the <link>
  createLink(url) {
    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = url;
    return linkEl;
  },
});

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});

export const bootstrap = [vueLifecycles.bootstrap, cssLifecycles.bootstrap];
export const mount = [vueLifecycles.mount, cssLifecycles.mount];
export const unmount = [vueLifecycles.unmount, cssLifecycles.unmount];
