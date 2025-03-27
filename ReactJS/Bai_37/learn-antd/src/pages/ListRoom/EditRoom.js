import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Modal,
  notification,
  message,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { updateRoom } from "../../services/roomsService";

const { Option } = Select;
function EditRoom(props) {
  const { record, onReload } = props;

  const [notiApi, contextHolder] = notification.useNotification();

  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const rules = [
    {
      required: true,
      message: "Bắt Buộc!",
    },
  ];

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const response = await updateRoom(record.id, values);
    console.log(response);
    if (response) {
      console.log("!23");
      onReload();
      setShowModal(false);
      notiApi.success({
        message: "Cập nhật thành công!",
        description: `Bạn đã cập nhật thành công phòng ${values.name}`,
      });
      // messageApi.open({
      //   type: "success",
      //   content: "Cập nhật thành công",
      // });
    }
  };

  return (
    <>
      {contextHolder}
      <Button
        onClick={() => setShowModal(true)}
        size="small"
        type="primary"
        icon={<EditOutlined />}
      ></Button>
      <Modal
        title="Chỉnh sửa phòng"
        open={showModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          name="edit-room"
          onFinish={handleSubmit}
          form={form}
          initialValues={record}
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
              Cập nhật
            </Button>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
}

export default EditRoom;
