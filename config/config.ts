// https://umijs.org/config/
import { defineConfig } from "@umijs/max";
import { defaultSettings } from "./defaultSettings";

export default defineConfig({
  /**
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  /**
   * @doc https://umijs.org/docs/api/config#targets
   */

  /**
   * @doc https://umijs.org/docs/guides/routes
   */
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: "/",
      redirect: "/welcome",
    },

    {
      path: "/welcome",
      name: "welcome",
      icon: "smile",
      component: "./Welcome",
      wrappers: ["@/wrappers/auth"],
    },

    {
      path: "/login",
      component: "./Login",
      wrappers: ["@/wrappers/authProvider"],
      layout: false,
    },
    {
      path: "*",
      layout: false,
      component: "./404",
    },
  ],
  /**
   * @doc ant https://ant.design/docs/react/customize-theme-cn
   * @doc umi theme 配置 https://umijs.org/docs/api/config#theme
   */
  theme: {
    "@border-radius-base": "8px",
    "@primary-color": "#9918A5",
    "@black-color": "#262626",
    "@white-color": "#ffffff",
  },
  /**
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  /**
   * @description 一个不错的热更新组件，更新时可以保留 state
   */
  fastRefresh: true,
  /**
   * @@doc https://umijs.org/docs/max/data-flow
   */
  model: {},
  /**
   * @doc https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
   */
  initialState: {},
  /**
   * @name layout
   * @doc https://umijs.org/docs/max/layout-menu
   */
  title: "Template",
  layout: {
    locale: true,
    ...defaultSettings,
  },

  /**
   * @doc https://umijs.org/docs/max/moment2dayjs
   */
  moment2dayjs: {
    preset: "antd",
    plugins: ["duration"],
  },
  /**
   * @name 国际化插件
   * @doc https://umijs.org/docs/max/i18n
   */
  // locale: {
  //   // default zh-CN
  //   default: "en-US",
  //   antd: true,
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   baseNavigator: true,

  // },
  /**
   * @doc https://umijs.org/docs/max/antd#antd
   */
  antd: {
    theme: {},
  },
  /**
   * @doc https://umijs.org/docs/max/request
   */
  request: {},
  /**
   * @doc https://umijs.org/docs/max/access
   */
  access: {},

  headScripts: [{ src: "/scripts/loading.js", async: true }],
  //================ pro 插件配置 =================
  presets: ["umi-presets-pro"],

  mfsu: false,
  requestRecord: {},
  define: {
    BACKEND_HOST_EXAMPLE: process.env.BACKEND_HOST_EXAMPLE,
  },
});
