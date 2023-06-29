import { useParams } from "react-router-dom";
import { Button, Space, Form, Input, notification } from "antd";

import * as services from "../../../../../services";
import ResetPasswordLayout from "../../../../../layouts/publicLayouts/auth-layouts/ResetPasswordLayout";

const NewPassWord = () => {
  const { token } = useParams();
  const onFinish = async (values) => {
    values.token = token;
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

export default NewPassWord;
