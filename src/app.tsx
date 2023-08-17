import {
  Settings as LayoutSettings,
  SettingDrawer,
} from "@ant-design/pro-components";
import type { RunTimeLayoutConfig } from "@umijs/max";
import { RuntimeAntdConfig } from "umi";
import { defaultSettings } from "../config/defaultSettings";
import { DefaultSettingsType } from "../types";
import generateColorWithOpacity from "../utils/colorGenerator";
import { errorConfig } from "./requestErrorConfig";
const isDev = process.env.NODE_ENV === "development";

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  loading?: boolean;
}> {
  return {
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout api https://procomponents.ant.design/components/layout

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  const settings: DefaultSettingsType = initialState?.settings || {};

  return {
    actionsRender: () => [],
    waterMarkProps: {},
    onPageChange: () => {},
    theme: "light",
    layoutBgImgList: [],
    links: [],
    menuHeaderRender: undefined,

    childrenRender: (children) => {
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                //form props(setInitialState)
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    navTheme: settings.navTheme,
    layout: settings.layout,
    contentWidth: settings.contentWidth,
    fixedHeader: settings.fixedHeader,
    fixSiderbar: settings.fixSiderbar,
    colorWeak: settings.colorWeak,
    pwa: settings.pwa,
    logo: settings.logo,
    // https://procomponents.ant.design/en-US/components/layout
    token: {
      sider: {
        colorBgMenuItemSelected: generateColorWithOpacity(
          initialState?.settings?.colorPrimary || "#1677ff",
          0.2
        ),
      },
      header: {
        colorBgMenuItemSelected: generateColorWithOpacity(
          initialState?.settings?.colorPrimary || "#1677ff",
          0.2
        ),
      },
      //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    },
    ...initialState?.settings,
  };
};

export const antd: RuntimeAntdConfig = (memo) => {
  console.log(memo, "memo");
  memo.theme ??= {};
  memo.theme.token = {
    borderRadius: defaultSettings.borderRadius,
    colorPrimary: defaultSettings.colorPrimary,
  };

  return memo;
};

export const request = {
  ...errorConfig,
};
