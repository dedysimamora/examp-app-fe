import React, { useState, useEffect } from "react";
import axios from "axios";
import { encrypt } from "../utils";
import { useRouter } from "next/router";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../styles/Login.module.css";
import {loginApi} from "../service/nextApi"
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Login() {
  const router = useRouter();
  const { Title, Paragraph } = Typography;
  const [errorMessage, seterrorMessage] = useState("");
  const onFinish = (data) => {

    let loginPayload = {
      identifier: data.username,
      password: encrypt(data.password),
    }

    loginApi(loginPayload)
    .then((response) => {
      if(response.data.success){
        router.push("/dashboard");
      }
    })
    .catch(function (error) {
      console.log(error, "<<<< error");
    });

  };
  const onFinishFailed = (data) => {
    console.log(data, "<<<< failed finish");
  };
  return (
    <>
      <Row
        style={{
          minHeight: "100vh",
          alignContent: "center",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 8, offset: 8 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 8, offset: 8 }}
          xxl={{ span: 5, offset: 9 }}
        >
          <Card
            style={{ width: "100%", borderRadius: "24px" }}
            className={"neumorpishTimbul"}
          >
            <Row>
              <Col span={24}>
                <Title className={styles.titleText}>Examp App</Title>
              </Col>
            </Row>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="formLogin"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  className={styles.neuInside}
                />
              </Form.Item>

              <Form.Item
                style={{ marginTop: "10px" }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  className={styles.neuInside}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  shape="round"
                  block
                  htmlType="submit"
                  className={styles.buttonLogin}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div style={{ width: "100%" }}>
              <Paragraph className={styles.errorMessage}>
                {errorMessage}
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
