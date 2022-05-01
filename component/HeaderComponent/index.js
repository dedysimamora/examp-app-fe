import React from "react";
import { Row, Col, Typography, Menu, Avatar } from "antd";
import styles from "./HeaderComponent.module.css";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
const index = () => {
  const { Title } = Typography;

  return (
    <Row style={{ height: "100%" }}>
      <Col
        xs={{ span: 11, offset: 1, order: 1 }}
        sm={{ span: 11, offset: 1, order: 1 }}
        md={{ span: 6, offset: 1, order: 1 }}
        lg={{ span: 5, offset: 1, order: 1 }}
        xl={{ span: 4, offset: 1, order: 1 }}
        xxl={{ span: 3, offset: 1, order: 1 }}
        style={{ height: "100%" }}
        className={"centeringParentVertical"}
      >
        <div className={"neumorpismHeaderLogoDiv"}>
          <Title level={3} className={styles.headerComponentTitle}>
            Examp App
          </Title>
        </div>
      </Col>
      <Col
        xs={{ span: 2, offset: 0, order: 3 }}
        sm={{ span: 2, offset: 0, order: 3 }}
        md={{ span: 11, offset: 0, order: 2 }}
        lg={{ span: 11, offset: 1, order: 2 }}
        xl={{ span: 11, offset: 1, order: 2 }}
        xxl={{ span: 14, offset: 0, order: 2 }}
        style={{ justifyContent: "center" }}
        // className={"centeringParentVertical"}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            backgroundColor: "#e1e1e1",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          overflowedIndicator={<MenuOutlined style={{ color: "#9a9a9a" }} />}
        >
          <Menu.Item className="menuContainer" key={1}>
            <Link href="/dashboard">{"Subject"}</Link>
          </Menu.Item>
          <Menu.Item className="menuContainer" key={2}>
            <Link href="/profile">{"Profile"}</Link>
          </Menu.Item>
          <Menu.Item className="menuContainer" key={3}>
            <Link href="/chart">{"Chart"}</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col
        xs={{ span: 10, offset: 0, order: 2 }}
        sm={{ span: 10, offset: 0, order: 2 }}
        md={{ span: 6, offset: 0, order: 3 }}
        lg={{ span: 6, offset: 0, order: 3 }}
        xl={{ span: 7, offset: 0, order: 3 }}
        xxl={{ span: 6, offset: 0, order: 3 }}
        className={"centeringParentVertical"}
      >
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignContent: "center",
          }}
        >
          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 15 }}
            lg={{ span: 10 }}
            xl={{ span: 8 }}
            xxl={{ span: 8 }}
            style={{ alignItems: "center" }}
          >
            <div className={"centeringParentVertical"}>
              <Title level={5} className={styles.headerNameText}>
                Anton Susanto
              </Title>
            </div>
          </Col>
          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 5 }}
            lg={{ span: 4 }}
            xl={{ span: 4 }}
            xxl={{ span: 4 }}
            style={{ marginRight: "5px" }}
          >
            <Avatar
              size={{ xs: 40, sm: 40, md: 40, lg: 45, xl: 45, xxl: 45 }}
              icon={<UserOutlined />}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default index;
