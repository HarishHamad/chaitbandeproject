import {
    DateField, getDefaultSortOrder, ImageField, List, useSelect, useTable,ShowButton, EditButton, DeleteButton
} from "@refinedev/antd";
import React, { useState } from 'react';
import { Button, Form, Space, Table } from "antd";
import CreateChild from "./CreateChild";


const UserList = () => {

    const { tableProps, sorter } = useTable({initialSorter: [ { field: "id",order: "desc"}]});
    console.log("user tableProps", tableProps);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [parentId, setParentId] = useState(null)
    return (
        <div>
            {isModalOpen?<CreateChild parentId={parentId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />:""}
        <List>
                <Form layout="inline" />
                <br />
                <Table {...tableProps} rowKey="id" pagination={{ ...tableProps.pagination, showSizeChanger: true }}>
                    <Table.Column
                        dataIndex="id"
                        key="id"
                        title="ID"
                        defaultSortOrder={getDefaultSortOrder("id", sorter)}
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
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                size="small"
                                hideText
                                recordItemId={record.id}
                            />
                            <Button onClick = {()=>{
                                console.log("On Click this parentId", record.id)
                                setParentId(record.id)
                                setIsModalOpen(true)
                                }}>CreateChild</Button>
                        </Space>
                    )}
                />
                
                </Table>
                </List>
        </div>
    );
};

export default UserList;