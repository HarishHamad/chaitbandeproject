import React from 'react';
import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Collapse, Typography } from "antd";
import BusinessDetails from './Business';
import EducationForm from './Education';
import AddressDetails from './Address';
const { Title, Text } = Typography;

const UserShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    console.log("Data", data);
    const record = data?.data;
    const items = [
   
        {
          key: '1',
          label: `Business Profile`,
          children: <BusinessDetails userid={record?.id}/>,
        },
        {
          key: '2',
          label: `Education Profile`,
          children: <EducationForm userid={record?.id}/>,
        },
        {
            key: '3',
            label: `Addresses`,
            children: <AddressDetails userid={record?.id}/>,
          },
      ];
      const onChange = (key) => {
        console.log(key);
      };
    return (
        <Show isLoading={isLoading}>
        <Title level={5}>Id</Title>
        <Text>{record?.id}</Text>

        <Title level={5}>Name</Title>
        <Text>{record?.username}</Text>
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
    </Show>
    );
};

export default UserShow;