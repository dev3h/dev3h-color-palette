import propTypes from "prop-types";
import { Form, Input, Button, Space } from "antd";

import { StyledWrapper } from "..";

const UserRegisterForm = ({ moveForm }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
        <Button type="link" onClick={() => moveForm(false)}>
          Already have an account?
        </Button>
      </div>
    </StyledWrapper>
  );
};

UserRegisterForm.propTypes = {
  moveForm: propTypes.func.isRequired,
};

export default UserRegisterForm;
