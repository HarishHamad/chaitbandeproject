import { Badge, Dropdown, Space, Table } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { useShow } from "@refinedev/core";

import React from 'react'

export default function PersonalDetails(props) {
    const record = props.record.data;
    // console.log("record", (record))

    // const items = [
    //     {
    //         key: '1',
    //         label: 'Action 1',
    //     },
    //     {
    //         key: '2',
    //         label: 'Action 2',
    //     }
    // ]
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
            title: 'Gotra',
            dataIndex: 'gotra',
            key: 'gotra',
        },
        {
            title: 'Jatti',
            dataIndex: 'jatti',
            key: 'jatti',
        },
        // {
        //     title: 'Action',
        //     dataIndex: 'operation',
        //     key: 'operation',
        //     render: () => (
        //         <Space size="middle">
        //             <a>Pause</a>
        //             <a>Stop</a>
        //             <Dropdown
        //                 menu={{
        //                     items,
        //                 }}
        //             >
        //                 <a>
        //                     More <DownOutlined />
        //                 </a>
        //             </Dropdown>
        //         </Space>
        //     ),
        // },
    ];

    const data = [];


    for (let i = 0; i < Array(record).length; ++i) {
        data.push({
            id: record.id,
            username: record.username,
            email: record.email,
            father: record.father,
            gotra: record.gotra,
            jatti: record.jati,
        });
    }


    
        // record && Array.isArray(record) && record.map((ele, i) => {
        //    return console.log("element", {i})
        //     // return (
        //     //     <>
        //     //         data.push(
        //     //         key:{ele.id.toString()},
        //     //         date: '2014-12-24 23:12:00',
        //     //         name: 'This is production name',
        //     //         upgradeNum: 'Upgraded: 56',
        //     //         );

        //     //     </>
        //     // );
        // })
    


    const expandedRowRender = () => {
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'EmailId',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Father Name',
                key: 'father',
                render: () => <Badge status="success" text="Finished" />,
            },
            {
                title: 'Gotra',
                dataIndex: 'gotra',
                key: 'gotra',
            },
            {
                title: 'Jatti',
                dataIndex: 'jatti',
                key: 'jatti',
            },
            // {
            //     title: 'Date',
            //     dataIndex: 'date',
            //     key: 'date',
            // },
            // {
            //     title: 'Name',
            //     dataIndex: 'name',
            //     key: 'name',
            // },
            // {
            //     title: 'Status',
            //     key: 'state',
            //     render: () => <Badge status="success" text="Finished" />,
            // },
            // {
            //     title: 'Upgrade Status',
            //     dataIndex: 'upgradeNum',
            //     key: 'upgradeNum',
            // },

        ];
        // const data = [];
        // for (let i = 0; i < 3; ++i) {
        //     data.push({
        //         key: i.toString(),
        //         date: '2014-12-24 23:12:00',
        //         name: 'This is production name',
        //         upgradeNum: 'Upgraded: 56',
        //     });
        // }
    }
    return (
        <>
            <div>PersonalDetails</div>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
            />

            {/* <Table
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
                size="small"
            /> */}
        </>

    )
}
