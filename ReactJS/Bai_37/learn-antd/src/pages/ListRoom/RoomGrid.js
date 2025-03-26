import { Row, Card, Col, Badge, Button } from "antd";
import { useEffect, useState } from "react";
function RoomGrid(props) {
  const { rooms } = props;

  return (
    <>
      <Row gutter={[20, 20]}>
        {rooms &&
          rooms.map((item) => (
            <Col xs={12} key={item.id}>
              <Badge.Ribbon
                text={item.typeRoom ? "VIP" : "Thường"}
                color={item.typeRoom ? "purple" : "gray"}
              >
                <Card title={item.name}>
                  <p>
                    Số giường: <strong>{item.quantitybed}</strong>
                  </p>
                  <p>
                    Số người: <strong>{item.quantityPeople}</strong>
                  </p>
                  <p>
                    {" "}
                    {item.status ? (
                      <Badge status="success" text="Còn phòng"></Badge>
                    ) : (
                      <Badge status="error" text="Hết phòng"></Badge>
                    )}
                  </p>
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default RoomGrid;
