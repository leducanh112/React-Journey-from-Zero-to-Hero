import { Button } from "antd";
import { useState } from "react";
import { StepForwardOutlined } from "@ant-design/icons";

function LearnButton() {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        code: 200,
        data: [],
      };
      if (result && result.code == 200) {
        setLoading(false);
      }
    }, 3000);
  };
  return (
    <>
      <Button
        danger={loading}
        ghost={true}
        type="primary"
        loading={loading}
        size="large"
        onClick={handleLoading}
      >
        Click
      </Button>
      <Button icon={<StepForwardOutlined rotate={90} spin={false} />}>
        Button
      </Button>
    </>
  );
}

export default LearnButton;
