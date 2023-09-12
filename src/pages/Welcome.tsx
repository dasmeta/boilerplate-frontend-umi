import { PageContainer } from "@ant-design/pro-components";
import { useModel } from "@umijs/max";
import { List, Typography, theme } from "antd";
import React, { useContext, useEffect, useState } from "react";
import api from "../../utils/axios";
import { ExampleContext } from "../context/ExampleContext";

/**
 * @param param0
 * @returns
 */

const Welcome: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = theme.useToken();
  const { initialState } = useModel("@@initialState");
  const { useToken } = theme;
  const exampleContext = useContext(ExampleContext);
  const { Paragraph } = Typography;

  //api call example
  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageContainer title="Welcome Page">
      <List
        loading={loading}
        header={
          <Typography.Title level={3}>Api call data example</Typography.Title>
        }
        bordered
        dataSource={data}
        renderItem={(item: { username: string }) => (
          <List.Item>
            <Typography.Text mark>{item.username}</Typography.Text>
          </List.Item>
        )}
      />
    </PageContainer>
  );
};

export default Welcome;
