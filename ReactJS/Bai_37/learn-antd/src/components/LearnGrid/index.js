import { Row, Col } from "antd";
import "./LearnGrid.css";
import CardItem from "../CardItem";
function LearnGrid() {
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
    </>
  );
}

export default LearnGrid;
