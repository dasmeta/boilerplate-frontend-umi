import { LogoutOutlined } from "@ant-design/icons";
import {
  Settings as LayoutSettings,
  SettingDrawer,
} from "@ant-design/pro-components";
import type { RunTimeLayoutConfig } from "@umijs/max";
import { history } from "@umijs/max";
import { Button } from "antd";
import { RuntimeAntdConfig } from "umi";
import { defaultSettings } from "../config/defaultSettings";
import { DefaultSettingsType } from "../types";
import generateColorWithOpacity from "../utils/colorGenerator";
import { ExampleContextProvider } from "./context/ExampleContext";
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

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    return !!jwtToken;
  };

  // Function to handle logout
  const handleLogout = () => {
    // Remove JWT token from local storage
    localStorage.removeItem("jwtToken");
    // Redirect to the login page
    history.push("/login"); // Replace "/login" with the actual login page path
  };

  return {
    actionsRender: () => [
      isAuthenticated() && (
        <Button
          type="primary"
          onClick={handleLogout}
          icon={<LogoutOutlined />}
        />
      ),
    ],
    waterMarkProps: {},
    onPageChange: (location) => {},
    layoutBgImgList: [],
    links: [<a href="link1"> link 1 </a>, <a href="link2"> link 2 </a>],
    menuHeaderRender: undefined,
    breadcrumbRender: (routers = []) => {
      return [...routers];
    },

    childrenRender: (children) => {
      return (
        <>
          <ExampleContextProvider>{children}</ExampleContextProvider>
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
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
