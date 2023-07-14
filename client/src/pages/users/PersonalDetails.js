import React from 'react'
import {  Table } from 'antd';
import BusinessDetails from './Business';

const PersonalDetails = (props) => {
    const record = props.record.data;
    // console.log("record", (record.addresses[0].landmark));
    //  console.log("one by one", (record.email),(record.id),(record.username),(record.father),(record.dob))

   
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
                title: 'Divyang Description',
                dataIndex: 'divyangdescription',
                key: 'divyangdescription',
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
                divyangdescription:record.divyangdescription,
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
                divyangdescription : record.divyangdescription
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