import { Badge, Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

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
        return (
          <>
            {record.typeRoom ? (
              <>
                <Tooltip title="Phòng VIP chuẩn 5 sao">
                  <Tag color="purple">VIP</Tag>
                </Tooltip>
              </>
            ) : (
              <Tooltip title="Phòng thường chuẩn 3 sao">
                <Tag color="gray">Thường</Tag>
              </Tooltip>
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
        return (
          <>
            {record.status ? (
              <Tag color="green">Còn phòng</Tag>
            ) : (
              <Tag color="red">Hết phòng</Tag>
            )}
          </>
        );
      },
    },
    {
      title: "Hành Động",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <DeleteRoom record={record} onReload={onReload}></DeleteRoom>
            <EditRoom record={record} onReload={onReload}></EditRoom>
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
