import { Row, Col, Carousel, Collapse, Tabs } from "antd";
import "./LearnGrid.css";
import CardItem from "../CardItem";

const { Panel } = Collapse;
function LearnGrid() {
  const items = [
    {
      key: 1,
      label: "Tab 1",
      children: "Noi dung tab 1",
    },
    {
      key: 2,
      label: "Tab 2",
      children: "Noi dung tab 2",
    },
    {
      key: 3,
      label: "Tab 3",
      children: "Noi dung tab 3",
    },
  ];
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={6} lg={6} md={12} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} lg={6} md={12} xs={24}>
          <CardItem title="Box 2" />
        </Col>
        <Col xxl={6} lg={6} md={12} xs={24}>
          <CardItem title="Box 3" />
        </Col>
        <Col xxl={6} lg={6} md={12} xs={24}>
          <CardItem title="Box 4" />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} lg={16} md={24} xs={24}>
          <CardItem title="Box 5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} lg={8} md={24} xs={24}>
          <CardItem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} lg={8} md={24} xs={24}>
          <CardItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} lg={16} md={24} xs={24}>
          <CardItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} lg={8} md={24} xs={24}>
          <CardItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} lg={8} md={24} xs={24}>
          <CardItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} lg={8} md={24} xs={24}>
          <CardItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Carousel autoplay dotPosition="bottom" effect="fade">
        <div className="slider-item">1</div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
      </Carousel>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="This is panel header 1" key="1">
          <p>1</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>2</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>3</p>
        </Panel>
      </Collapse>
      <Tabs items={items}></Tabs>
    </>
  );
}

export default LearnGrid;
