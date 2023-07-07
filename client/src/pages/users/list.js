import {
  DateField,
  getDefaultSortOrder,
  ImageField,
  List,
  useSelect,
  useTable,
  ShowButton,
  EditButton,
  DeleteButton,
} from "@refinedev/antd";
import React, { useState } from "react";
import { Button, Form, Space, Table } from "antd";
import CreateChild from "./CreateChild";
import BusinessProfile from "./Business";
import Education from "./Education";

const UserList = () => {
  const { tableProps, sorter } = useTable({
    initialSorter: [{ field: "id", order: "desc" }],
    meta: {
      populate: ["photo"],
    },
  });
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  const [parentId, setParentId] = useState(null);
  // console.log("user tableProps", tableProps.dataSource[0].photo.formats.thumbnail.url);
  console.log("user tableProps", tableProps);

  return (
    <div>
      {isModalOpen ? (
        <CreateChild
          parentId={parentId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        ""
      )}
      {isBusinessModalOpen ? (
        <BusinessProfile
          parentId={parentId}
          isBusinessModalOpen={isBusinessModalOpen}
          setIsBusinessModalOpen={setIsBusinessModalOpen}
        />
      ) : (
        ""
      )}
      {isEducationModalOpen ? (
        <Education
          parentId={parentId}
          isEducationModalOpen={isEducationModalOpen}
          setIsEducationModalOpen={setIsEducationModalOpen}
        />
      ) : (
        ""
      )}
      <List>
        <Form layout="inline" />
        <br />
        <Table
          {...tableProps}
          rowKey="id"
          pagination={{ ...tableProps.pagination, showSizeChanger: true }}
        >
          <Table.Column
            dataIndex="id"
            key="id"
            title="ID"
            defaultSortOrder={getDefaultSortOrder("id", sorter)}
            sorter={{ multiple: 3 }}
          />

          <Table.Column
            dataIndex="photo"
            key="photo"
            title="User Profile"
            defaultSortOrder={getDefaultSortOrder("photo", sorter)}
            sorter={{ multiple: 3 }}
          />
          <Table.Column
            dataIndex="username"
            key="name"
            title="Name"
            defaultSortOrder={getDefaultSortOrder("name", sorter)}
            sorter={{ multiple: 2 }}
          />
          <Table.Column
            title="Actions"
            dataIndex="actions"
            render={(_, record) => (
              <Space>
                <EditButton size="small" recordItemId={record.id} />
                <ShowButton size="small" recordItemId={record.id} />
                <DeleteButton size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </div>
  );
};

export default UserList;
