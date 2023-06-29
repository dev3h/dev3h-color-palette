import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Space, message } from "antd";

import { StyledWrapper } from "..";
import * as services from "../../../../services";
import path from "../../../../utils/path";

const UserRegisterForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate(`${path?.USERAUTH}${path?.LOGIN}`);
  };
  const onFinish = async (values) => {
    const response = await services.register(values);
    if (response?.success) {
      message.success(response?.mes);
      form.resetFields();
      moveToLogin();
    }
  };

  return (
    <StyledWrapper>
      <h2>register</h2>
      <Form name="register" onFinish={onFinish} layout="vertical">
        <Space direction="vertical" className="input-space">
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "required username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="displayname"
            label="Displayname"
            rules={[
              {
                required: true,
                message: "required displayname!",
              },
            ]}
          >
            <Input placeholder="Displayname" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "required email!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "required password",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button-submit">
              SignUp
            </Button>
          </Form.Item>
        </Space>
      </Form>
      <div className="action">
        <Button type="link" onClick={() => moveToLogin()}>
          Already have an account?
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default UserRegisterForm;
