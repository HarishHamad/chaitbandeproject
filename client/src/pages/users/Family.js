import React, { useState } from "react";
import { Table, Input, Select, Button } from "antd";
import { useCreate, useShow } from "@refinedev/core";

const FamilyDetails = ({ userid, familylist }) => {
  const { queryResult } = useShow({
    resource: "users",
    userid: userid,
    metaData: { populate: ["members", "addresses"] },
  });
  const { data: familyData, isLoading } = queryResult;
  const [data, setData] = useState(
    familylist?.map((item) => ({ ...item, key: item.id, isOld: true })) ?? []
  );
  const [editingKey, setEditingKey] = useState("");
  const { mutate } = useCreate();

  const [newFamily, setNewFamily] = useState({
    name: "",
    relation: "",
    age: "",    
    occupation: "",
    relationship:"",
    
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.id}
          onChange={(e) => handleInputChange(e, record.key, "id")}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.name}
          onChange={(e) => handleInputChange(e, record.key, "name")}
        />
      ),
    },
    {
      title: "Relation",
      dataIndex: "relationship",
      key: "relationship",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.relationship}
          onChange={(value) => handleInputChange(value, record.key, "relationship")}
        />
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.age}
          onChange={(e) => handleInputChange(e, record.key, "age")}
        />
      ),
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.occupation}
          onChange={(value) => handleInputChange(value, record.key, "occupation")}
        />
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <span>
          {editingKey === record.key ? (
            <>
              <Button type="primary" onClick={() => save(record.key)}>
                Save
              </Button>
              <Button onClick={cancel}>Cancel</Button>
            </>
          ) : (
            <>
              <Button onClick={() => edit(record.key)}>Edit</Button>
              <Button onClick={() => remove(record.key)}>Remove</Button>
            </>
          )}
        </span>
      ),
    },
  ];

  const handleInputChange = (e, key, field) => {
    const { value } = e.target;
    const updatedData = [...data];
    const target = updatedData.find((item) => item.key === key);
    if (target) {
      target[field] = value;
      setData(updatedData);
    }
  };

  const handleAdd = () => {
    const newData = {
      key: `${data.length + 1}`,
      name: newFamily.name,
      relation: newFamily.relation,
      age: newFamily.age,
      occupation: newFamily.occupation,
    };
    setData([...data, newData]);
    setNewFamily({
      name: "",
      relation: "",
      age: "",
      occupation: "",
    });
  };

  const handleRemove = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  const handleSave = (key) => {
    setEditingKey("");
  };

  const handleCancel = () => {
    setEditingKey("");
  };

  const isEditing = (record) => record.key === editingKey;

  const components = {
    body: {
      cell: EditableCell,
    },
  };

  const columnsWithEditability = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const edit = (key) => {
    setEditingKey(key);
  };

  const remove = (key) => {
    handleRemove(key);
  };

  const save = (key) => {
    handleSave(key);
  };

  const cancel = () => {
    handleCancel();
  };

  return (
    <div>
      <div>
        <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
          + Add Family Member
        </Button>
      </div>
      <Table
        components={components}
        bordered
        dataSource={data}
        columns={columnsWithEditability}
        rowClassName={() => "editable-row"}
        pagination={false}
      />
      <Button
        type="primary"
        onClick={() => {
          console.log("save data", data);
          data.forEach((item) => {
            if (!item.isOld) {
              const { key, ...remain } = item;
              remain["username"]="dds2dfsdf"
              remain["password"]="ddsd2fsdf"
              remain["email"]="ddsdfsd4f@a.com"
              remain['role'] = {"name":"Public"}
              //remain["age"] = parseInt(item.age);
              remain['parentid'] = userid

              mutate({
                resource: "users",
                values: remain,
              });
              item["isOld"] = true;
            }
          });
        }}
      >
        Save Family Members
      </Button>
    </div>
  );
};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "select" ? (
    <Select style={{ width: "100%" }}>
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
      <Select.Option value="option3">Option 3</Select.Option>
    </Select>
  ) : (
    <Input />
  );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default FamilyDetails;
