import {
  AuthProvider,
  Login as LoginComponent,
  Provider,
} from "@dasmeta/auth-interface";
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
  console.log(initialState, "initialState");
  return (
    <AuthProvider
      provider={Provider.STRAPI}
      config={{
        host: "https://app.dasmeta.com/api",
        onLoginSuccess: ({ jwt }) => {
          localStorage.setItem("jwtToken", jwt || "");
          history.push("/");
        },
        onLoginFail: (message: string) => {
          alert(message);
        },
      }}
    >
      <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
        <LoginComponent logo={settings.logo} />
      </Row>
    </AuthProvider>
  );
};

export default Login;
