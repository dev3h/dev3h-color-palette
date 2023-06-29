import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Input, Button, Space } from "antd";

import { StyledWrapper } from "..";
import { StoreCurrentUserInfo } from "../../../../redux/reducers/auth-reducers/AuthSlice";
import path from "../../../../utils/path";
import * as services from "../../../../services";

const UserLoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const moveToRegister = () => {
    navigate(`${path?.USERAUTH}${path?.REGISTER}`);
  };
  const moveToReset = () => {
    navigate(path?.FORGOTPASSWORD);
  };
  const onFinish = async (values) => {
    const response = await services.login(values);
    if (response?.success) {
      dispatch(
        StoreCurrentUserInfo({
          isLogin: true,
          currentUser: response?.userData,
          token: response?.accessToken,
        })
      );
      navigate(path.HOME);
    }
  };
  return (
    <StyledWrapper>
      <h2>login</h2>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Space direction="vertical" className="input-space">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "press email!",
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
                message: "press password",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
  
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="button-submit">
              SignIn
            </Button>
          </Form.Item>
        </Space>
      </Form>
      <div className="action">
        <Button type="link" onClick={() => moveToReset()}>
          Forgot the password?
        </Button>
        <Button type="link" onClick={() => moveToRegister()}>
          Create new account
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default UserLoginForm;
