import { Row, Col } from "antd";
function LearnGrid() {
  return (
    <>
      <Row gutter={20}>
        <Col span={2}>Cot 1</Col>
        <Col span={4}>Cot 2</Col>
        <Col span={8}>Cot 3</Col>
        <Col span={10}>Cot 4</Col>
      </Row>
    </>
  );
}

export default LearnGrid;
