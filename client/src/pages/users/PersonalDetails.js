import React from "react";
import { Table } from "antd";
import BusinessDetails from "./Business";

const PersonalDetails = (props) => {
  const record = props.record.data;
  console.log(
    "one by one",
    record.email,
    record.id,
    record.username,
    record.father,
    record.dob
  );

  const expandedRowRender = () => {
    const columns = [
      {
        title: "Gotra",
        dataIndex: "gotra",
        key: "gotra",
      },
      {
        title: "Mother Name",
        dataIndex: "mother",
        key: "mother",
      },

      {
        title: "Divyang Description",
        dataIndex: "divyangdescription",
        key: "divyangdescription",
      },
    ];
    const data = [];
    for (let i = 0; i < Array(record).length; ++i) {
      data.push({
        id: record.id,
        username: record.gotra,
        email: record.mother,
        father: record.father,
        mobile: record.mobile,
        jatti: record.jati,
        occupation: record.occupation,
        divyangdescription: record.divyangdescription,
        gotra: record.gotra,
        mother: record.mother,
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "EmailId",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Father Name",
      key: "father",
      dataIndex: "father",
    },
    {
      title: "Jatti",
      dataIndex: "jatti",
      key: "jatti",
    },
  ];
  const data = [];
  for (let i = 0; i < Array(record).length; ++i) {
    data.push({
      id: record.id,
      username: record.username,
      email: record.email,
      father: record.father,
      jatti: record.jati,
      divyangdescription: record.divyangdescription,
    });
  }

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
      />
    </>
  );
};
export default PersonalDetails;
