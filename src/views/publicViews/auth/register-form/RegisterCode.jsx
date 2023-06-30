import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Space, Form, Input, notification } from "antd";

import * as services from "../../../../services";
import path from "../../../../utils/path";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  .card {
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .header-title {
        flex: 1;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
    .form {
      padding: 0px 50px;
    }
    .input-space {
      width: 100%;
    }
    .button-submit {
      width: 100%;
      text-transform: uppercase;
    }
  }
`;

const RegisterCode = () => {
  const navigate = useNavigate();
  const onFinish = async ({ code }) => {
    const response = await services.finalRegister(code);
    if (response?.success) {
      notification
        .success({
          message: "Thành công",
          description: response?.mes,
        })
        .then(navigate(path?.LOGIN));
    } else {
      notification
        .error({
          message: "Thất bại",
          description: response?.mes,
        })
        .then(navigate(path?.LOGIN));
    }
  };
  return (
    <StyledWrapper>
      <div className="card">
        <div className="header">
          <div className="header-title">
            Check mail and enter your code to verify account
          </div>
        </div>
        <Form name="registercode" className="form" onFinish={onFinish} layout="vertical">
          <Space direction="vertical" className="input-space">
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: "press code",
                },
              ]}
            >
              <Input placeholder="code" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="button-submit">
                Submit
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </div>
    </StyledWrapper>
  );
};

export default RegisterCode;
