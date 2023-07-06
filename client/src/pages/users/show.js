import React, { useEffect } from 'react';
import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Collapse, Tabs, Typography } from "antd";
import BusinessDetails from './Business';
import EducationForm from './Education';
import AddressDetails from './Address';
import Family from './Family';
const { Title, Text } = Typography;

const UserShow = () => {
    const { queryResult } = useShow({metaData: { populate: ["businesses","educations", "addresses"]}});
    const { data, isLoading } = queryResult;
    console.log("User Show Data", data);
    let businesslist=[]
    let educationlist=[]
    if(isLoading){
      return <h1>Still loading </h1>
    }
    const record = data?.data;
    businesslist=record?.businesses??[]
    educationlist=record?.educationlist??[]
    const items = [
   
        {
          key: '1',
          label: `Business Profile`,
          children: <BusinessDetails userid={record?.id} businesslist={businesslist}/>,
        },
        {
          key: '2',
          label: `Education Profile`,
          children: <EducationForm userid={record?.id} educationlist={educationlist}/>,
        },

        {
          key: '3',
          label: `Family`,
          children: <Family userid={record?.id} />,
        },
        {
            key: '4',
            label: `Addresses`,
            children: <AddressDetails userid={record?.id} />,
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
        {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /> */}
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Show>
    );
};

export default UserShow;