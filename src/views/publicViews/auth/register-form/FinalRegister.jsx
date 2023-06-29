import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import path from "../../../../utils/path";
import { message, Result } from "antd";
const FinalRegister = () => {
  const { status } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "success") {
      message.success("Đăng ký thành công").then(() => {
        navigate(`${path?.USERAUTH}${path?.LOGIN}`);
      });
    } else if (status === "failed") {
      message.error("Đăng ký thất bại").then(() => {
        navigate(`${path?.USERAUTH}${path?.LOGIN}`);
      });
    }
  }, []);
  return (
    <div>
      {status === "success" ? (
        <Result
          status="success"
          title="Đăng ký tài khoản thành công"
          subTitle="đăng nhập ngay để trải nghiệm"
        />
      ) : (
        <Result status="error" title="Đăng ký tài khoản thất bại" />
      )}
    </div>
  );
};

export default FinalRegister;
