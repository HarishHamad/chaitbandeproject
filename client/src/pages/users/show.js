import React from 'react';
import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography } from "antd";
const { Title, Text } = Typography;

const UserShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    console.log("Data", data);
    const record = data?.data;
    return (
        <Show isLoading={isLoading}>
        <Title level={5}>Id</Title>
        <Text>{record?.id}</Text>

        <Title level={5}>Name</Title>
        <Text>{record?.username}</Text>
    </Show>
    );
};

export default UserShow;