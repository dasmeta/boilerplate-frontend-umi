import { Typography } from "antd";
import React from "react";
import styles from "./index.less";

const { Paragraph } = Typography;

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.pageTitleContainer}>
      <Typography.Title
        ellipsis={{ rows: 1 }}
        level={2}
        className={styles.title}
      >
        {title}
      </Typography.Title>
    </div>
  );
};

export default PageTitle;
