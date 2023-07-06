import React, { useState } from "react";
import { Table, Input, Select, Button } from "antd";
import { useCreate, useShow } from "@refinedev/core";

const BusinessDetails = ({ userid, businesslist }) => {
  console.log("USER ID in business deta ", userid )
  const { queryResult } = useShow({resource:"businesses",userid:userid, metaData: { populate: ["businesses","educations", "addresses"]}});
  const { data:businessdata, isLoading } = queryResult;
  console.log("businessdata",businessdata)
  const [data, setData] = useState(businesslist?.map((item) => ({ ...item, key: item.id,isOld: true })) ?? []);
  console.log("BusinessDetails data",data)
  const [editingKey, setEditingKey] = useState("");
  const { mutate } = useCreate();

  const [newBusiness, setNewBusiness] = useState({
    ownerName: "",
    businessName: "",
    category: "",
    businessType: "",
    businessRole: "",
    turnover: "",
    size: "",
    businessSector: ""
  });

  const categories = ["Category 1", "Category 2", "Category 3"];
  const businessTypes = ["Type 1", "Type 2", "Type 3"];
  const businessRoles = ["Role 1", "Role 2", "Role 3"];
  const businessSectors = ["Sector 1", "Sector 2", "Sector 3"];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.ownerName}
          onChange={(e) => handleInputChange(e, record.key, "ID")}
        />
      ),
    },
    {
      title: "Owner Name",
      dataIndex: "ownerName",
      key: "ownerName",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.ownerName}
          onChange={(e) => handleInputChange(e, record.key, "ownerName")}
        />
      ),
    },
    {
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.businessName}
          onChange={(e) => handleInputChange(e, record.key, "businessName")}
        />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      editable: true,
      render: (_, record) => (
        <Select
          value={record.category}
          onChange={(value) => handleSelectChange(value, record.key, "category")}
        >
          {categories.map((category) => (
            <Select.Option key={category} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Business Type",
      dataIndex: "businessType",
      key: "businessType",
      editable: true,
      render: (_, record) => (
        <Select
          value={record.businessType}
          onChange={(value) => handleSelectChange(value, record.key, "businessType")}
        >
          {businessTypes.map((type) => (
            <Select.Option key={type} value={type}>
              {type}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Business Role",
      dataIndex: "businessRole",
      key: "businessRole",
      editable: true,
      render: (_, record) => (
        <Select
          value={record.businessRole}
          onChange={(value) => handleSelectChange(value, record.key, "businessRole")}
        >
          {businessRoles.map((role) => (
            <Select.Option key={role} value={role}>
              {role}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Turnover",
      dataIndex: "turnover",
      key: "turnover",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.turnover}
          onChange={(e) => handleInputChange(e, record.key, "turnover")}
        />
      ),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      editable: true,
      render: (_, record) => (
        <Input
          value={record.size}
          onChange={(e) => handleInputChange(e, record.key, "size")}
        />
      ),
    },
    {
      title: "Business Sector",
      dataIndex: "businessSector",
      key: "businessSector",
      editable: true,
      render: (_, record) => (
        <Select
          value={record.businessSector}
          onChange={(value) => handleSelectChange(value, record.key, "businessSector")}
        >
          {businessSectors.map((sector) => (
            <Select.Option key={sector} value={sector}>
              {sector}
            </Select.Option>
          ))}
        </Select>
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


              <Button onClick={() => handleRemove(record.key)}>Remove</Button>

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

  const handleSelectChange = (value, key, field) => {
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
      ownerName: newBusiness.ownerName,
      businessName: newBusiness.businessName,
      category: newBusiness.category,
      businessType: newBusiness.businessType,
      businessRole: newBusiness.businessRole,
      turnover: newBusiness.turnover,
      size: newBusiness.size,
      businessSector: newBusiness.businessSector,
    };
    setData([...data, newData]);
    setNewBusiness({
      ownerName: "",
      businessName: "",
      category: "",
      businessType: "",
      businessRole: "",
      turnover: "",
      size: "",
      businessSector: ""
    });
  };

  const handleRemove = (key) => {
    console.log("Key =>", key, " end of key")
    console.log("Before ",data)
    const updatedData = data.filter((item) => item.key !== key);
    console.log("Updated")
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

  return (
    <div>
      <div>
        <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
          + Add Business
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
 <Button type="primary" onClick={() => {
          console.log("save data", data)
          data.map((item) => {
            if (!item.isOld) {
              console.log("item", item)
              const { key, ...remain } = item;
              // const [[key, value], ...remain] = item;
              // console.log("key", key);
              remain["turnover"] = parseFloat(item.turnover)
              remain["size"] = parseInt(item.size)
              console.log("remain", remain);
              remain['userid'] = userid
              mutate({
                resource: "businesses",
                values: remain,
              });
              item["isOld"] = true;
            }
          })

        }}>Save Businesses</Button>
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

export default BusinessDetails;