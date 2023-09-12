import { Login as LoginComponent } from "@dasmeta/auth-interface";
import { history, useModel } from "@umijs/max";
import { Row } from "antd";
import React from "react";

/**
 * @param param0
 * @returns
 */

const Login: React.FC = () => {
  const { initialState }: any = useModel("@@initialState");
  const { settings } = initialState;

  function onLoginSuccess(jwt: string | undefined) {
    if (!jwt) {
      return;
    }
    localStorage.setItem("jwtToken", jwt || "");
    history.push("/");
  }

  return (
    // <AuthProvider
    //   theme={{
    //     colorPrimary: settings.colorPrimary,
    //     borderRadius: settings.borderRadius,
    //   }}
    //   provider={Provider.STRAPI}
    //   config={{
    //     host: "https://app.dasmeta.com/api",
    //     onLoginSuccess: ({ jwt }) => {
    //       onLoginSuccess(jwt);
    //     },
    //     onLoginFail: (message: string) => {
    //       alert(message);
    //     },
    //   }}
    // >
    <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
      <LoginComponent logo={settings.logo} />
    </Row>
    // </AuthProvider>
  );
};

export default Login;
