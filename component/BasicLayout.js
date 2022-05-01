import React from "react";
import { Layout } from "antd";
import styles from "./BasicLayout.module.css";
import HeaderComponent from "./HeaderComponent/index";

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = (props) => {
  // console.log(props, "<<<<< props")
  return (
    <Layout style={{ minHeight: "100vh !important" }}>
      <Header
        style={{
          backgroundColor: "#e0e0e0ed",
          color: "white",
          boxShadow: "6px 6px 12px #b8b9be, -6px -6px 12px #ffffff",
          zIndex: 999,
          padding: 0
        }}
      >
        <HeaderComponent />
      </Header>
      <Content style={{ backgroundColor: "#e0e0e0ed" }}>
        {props.children}
      </Content>
      <Footer style={{ backgroundColor: "#e0e0e0ed" }}></Footer>
    </Layout>
  );
};

export default BasicLayout;
