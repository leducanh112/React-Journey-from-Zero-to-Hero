import { Button, Form, Input, InputNumber, Select, Switch } from "antd";
import FormItem from "antd/es/form/FormItem";
import { createRoom } from "../../services/roomsService";

const { Option } = Select;
function CreateRoom() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const response = await createRoom(values);
    console.log(response);
    if (response) {
      form.resetFields();
    }
  };
  const rules = [
    {
      required: true,
      message: "Bắt Buộc!",
    },
  ];
  return (
    <>
      <h2>Create New Room</h2>
      <Form
        layout="vertical"
        name="create-room"
        onFinish={handleSubmit}
        form={form}
      >
        <Form.Item label="Room Name" name="name" rules={rules}>
          <Input />
        </Form.Item>

        <Form.Item label="Số giường" name="quantityBed" rules={rules}>
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Số người" name="quantityPeople" rules={rules}>
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="utils">
          <Select mode="multiple" style={{ width: "100%" }}>
            <Option value="Wifi">Wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
          </Select>
        </Form.Item>

        <Form.Item valuePropName="checked" label="Trạng thái" name="status">
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
        </Form.Item>

        <Form.Item valuePropName="checked" label="Loại phòng" name="typeRoom">
          <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
        </Form.Item>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </FormItem>
      </Form>
    </>
  );
}

export default CreateRoom;
