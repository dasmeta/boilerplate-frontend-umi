import { PageContainer } from "@ant-design/pro-components";
import { useModel } from "@umijs/max";
import { Button, theme } from "antd";
import React, { useContext } from "react";
import { ExampleContext } from "../context/ExampleContext";

/**
 * @param param0
 * @returns
 */

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel("@@initialState");
  const { useToken } = theme;
  const exampleContext = useContext(ExampleContext);

  return (
    <PageContainer title="Welcome Page">
      <Button type="primary">Button Text</Button>
    </PageContainer>
  );
};

export default Welcome;
