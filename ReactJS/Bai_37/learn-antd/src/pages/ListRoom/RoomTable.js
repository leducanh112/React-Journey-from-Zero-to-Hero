import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom";

function RoomTable(props) {
  const { rooms, onReload } = props;
  const columns = [
    {
      title: "Tên Phòng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số Giường",
      dataIndex: "quantityBed",
      key: "quantityBed",
    },
    {
      title: "Số Người",
      dataIndex: "quantityPeople",
      key: "quantityPeople",
    },
    {
      title: "Loại Phòng",
      dataIndex: "typeRoom",
      key: "typeRoom",
      render: (_, record) => {
        console.log(record);
        return (
          <>
            {record.typeRoom ? (
              <Badge color="purple" text="VIP"></Badge>
            ) : (
              <Badge color="gray" text="Thường"></Badge>
            )}
          </>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        console.log(record);
        return (
          <>
            {record.status ? (
              <Badge color="green" text="Còn phòng"></Badge>
            ) : (
              <Badge color="red" text="Hết phòng"></Badge>
            )}
          </>
        );
      },
    },
    {
      title: "Hành Động",
      key: "actions",
      render: (_, record) => {
        console.log(record);
        return (
          <>
            <DeleteRoom record={record} onReload={onReload}></DeleteRoom>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={rooms} columns={columns} rowKey="id"></Table>
    </>
  );
}

export default RoomTable;
