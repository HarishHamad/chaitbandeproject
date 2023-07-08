import React from 'react'
import {  Table } from 'antd';

const PersonalDetails = (props) => {
    const record = props.record.data;
    console.log("record", (record))
    //  start expandedRowRender
    const expandedRowRender = () => {
         // Start code 
         const columns = [

            {
                title: 'Gotra',
                dataIndex: 'gotra',
                key: 'gotra',
            },
            {
                title: 'Mother Name',
                dataIndex: 'mother',
                key: 'mother',
            },
            {
                title: 'Mobile number',
                dataIndex: 'mobile',
                key: 'mobile',
            },
            {
                title: 'Divyang',
                dataIndex: 'isdivyang',
                key: 'isdivyang',
            }
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
                occupation:record.occupation,
                isdivyang:record.isdivyang,
                gotra:record.gotra,
                mother:record.mother,
            });
        }
        // End code 
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };
    //  End expandedRowRender

        // Start code 
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'User Name',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'EmailId',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Father Name',
                key: 'father',
                dataIndex: 'father'
                // render: () => <Badge status="success" text="Finished" />,
            },
            {
                title: 'Jatti',
                dataIndex: 'jatti',
                key: 'jatti',
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
            });
        }
        // End code 
    return (
        <>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
            />

        </>
    );
};
export default PersonalDetails;