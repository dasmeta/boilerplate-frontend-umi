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
    <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
      <LoginComponent logo={settings.logo} />
    </Row>
  );
};

export default Login;
