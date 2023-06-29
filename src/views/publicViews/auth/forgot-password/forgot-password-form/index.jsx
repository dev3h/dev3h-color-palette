import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Space, Form, Input, notification } from "antd";
import * as services from "../../../../../services";
import ResetPasswordLayout from "../../../../../layouts/publicLayouts/auth-layouts/ResetPasswordLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const response = await services.forgotPassword(values);
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
  const goBack = () => {
    navigate(-1);
  };
  return (
    <ResetPasswordLayout>
      <div className="reset-header">
        <ArrowLeftOutlined className="reset-header-back" onClick={() => goBack()} />
        <div className="reset-header-title">Reset Password</div>
      </div>
      <Form name="reset" className="reset-form" onFinish={onFinish} layout="vertical">
        <Space direction="vertical" className="input-space">
          <Form.Item
            name="email"
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
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button-submit">
              Next
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </ResetPasswordLayout>
  );
};

export default ForgotPassword;
