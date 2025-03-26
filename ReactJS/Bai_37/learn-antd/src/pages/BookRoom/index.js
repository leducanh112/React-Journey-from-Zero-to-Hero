import {
  Input,
  Row,
  Col,
  Button,
  Checkbox,
  Space,
  DatePicker,
  Radio,
  Select,
} from "antd";
import { useState } from "react";
import { bookRoom } from "../../services/bookRoomService";

const { RangePicker } = DatePicker;
function BookRoom() {
  const [data, setData] = useState([
    {
      time: "14:00",
    },
  ]);

  const optionsTime = [];
  for (let i = 7; i <= 24; i++) {
    optionsTime.push({
      value: i > 9 ? `${i}:00` : `0${i}:00`,
      label: i > 9 ? `${i}:00` : `0${i}:00`,
    });
  }

  const handleSubmit = async () => {
    const response = await bookRoom(data);
    if (response) {
      alert("Chúc mừng bạn đã đặt phòng thành công!");
    } else {
      alert("Xin lỗi, vui lòng đặt lại sau");
    }
  };

  const handleChangeCheckbox = (e) => {
    const object = {
      ...data,
      services: e,
    };
    setData(object);
  };

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(object);
  };

  const handleChangeDate = (dates, dateStrings) => {
    const object = {
      ...data,
      dates: dateStrings,
    };
    setData(object);
  };
  const handleChangeRadio = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(object);
  };
  const handleChangeSelect = (e) => {
    const object = {
      ...data,
      time: e,
    };
    setData(object);
  };
  return (
    <>
      <h2>Book Room</h2>

      <Row gutter={[20, 20]}>
        <Col xxl={12} xs={24}>
          <p>Name</p>
          <Input
            name="fullName"
            placeholder="ex: Le Van A"
            onChange={handleChangeInput}
          ></Input>
        </Col>

        <Col xxl={12} xs={24}>
          <p>Phone Number</p>
          <Input
            name="phone"
            placeholder="ex: 0123456789"
            onChange={handleChangeInput}
          ></Input>
        </Col>

        <Col xxl={12} xs={24}>
          <p>Email</p>
          <Input
            name="email"
            placeholder="ex: levana@gmail.com"
            onChange={handleChangeInput}
          ></Input>
        </Col>

        <Col xxl={12}>
          <p>Additional Services</p>
          <Checkbox.Group onChange={handleChangeCheckbox}>
            <Space direction="vertical">
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        <Col xs={12}>
          <p>Gifts</p>
          <Radio.Group name="gift" onChange={handleChangeRadio}>
            <Space direction="vertical">
              <Radio value="Áo thun">Áo thun</Radio>
              <Radio value="Mũ">Mũ</Radio>
              <Radio value="Kem chống nắng">Kem chống nắng</Radio>
            </Space>
          </Radio.Group>
        </Col>

        <Col xs={12}>
          <p>Date</p>
          <RangePicker
            format="DD-MM-YYYY"
            onChange={handleChangeDate}
          ></RangePicker>
        </Col>

        <Col xs={12}>
          <p>Checkin Time</p>
          <Select
            style={{ width: "100%" }}
            defaultValue={data.time}
            options={optionsTime}
            onChange={handleChangeSelect}
          ></Select>
        </Col>

        <Col xxl={24} xs={24}>
          <Button type="primary" onClick={handleSubmit}>
            Book Room
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default BookRoom;
