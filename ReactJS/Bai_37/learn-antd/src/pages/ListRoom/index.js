import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomsService";
import { Row, Card, Col, Badge, Button } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";

function ListRoom() {
  const [isGrid, setIsGrid] = useState(true);
  const [rooms, setRooms] = useState();
  const fetchApi = async () => {
    const response = await getListRoom();
    setRooms(response.reverse());
  };

  useEffect(() => {
    fetchApi();
  }, []);
  const handleReload = () => {
    fetchApi();
  };
  return (
    <>
      <Button onClick={() => setIsGrid(true)}>
        <UnorderedListOutlined />
      </Button>
      <Button onClick={() => setIsGrid(false)}>
        <AppstoreOutlined />
      </Button>
      {isGrid ? (
        <RoomGrid rooms={rooms}></RoomGrid>
      ) : (
        <RoomTable rooms={rooms} onReload={handleReload}></RoomTable>
      )}
    </>
  );
}

export default ListRoom;
