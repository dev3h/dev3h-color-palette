import styled from "styled-components";
import { Button, Space, Form, Input, notification } from "antd";

import * as services from "../../../../services";
import ResetPasswordLayout from "../../../../layouts/publicLayouts/auth-layouts/ResetPasswordLayout";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  .reset-container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .reset-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .reset-header-title {
        flex: 1;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
    .reset-form {
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
  const onFinish = async (values) => {
    const response = await services.resetPassword(values);
    if (response?.success) {
      notification.success({
        message: "Thành công",
        description: response?.mes,
      });
    } else {
      notification.error({
        message: "Thất bại",
        description: response?.mes,
      });
    }
  };
  return (
    <ResetPasswordLayout>
      <div className="reset-header">
        <div className="reset-header-title">Change new password</div>
      </div>
      <Form name="reset" className="reset-form" onFinish={onFinish} layout="vertical">
        <Space direction="vertical" className="input-space">
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "press password",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button-submit">
              Send
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </ResetPasswordLayout>
  );
};

export default RegisterCode;
