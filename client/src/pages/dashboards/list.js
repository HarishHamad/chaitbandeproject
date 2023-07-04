import React from 'react';
import {
    DateField, getDefaultSortOrder, ImageField, List, useSelect, useTable,ShowButton, EditButton, DeleteButton
} from "@refinedev/antd";import {
    Show,
    ListButton,
} from "@refinedev/antd";
import { Typography } from "antd";

const DashboardList = () => {
    const { tableProps, sorter } = useTable({initialSorter: [ { field: "id",order: "desc"}]});

    // const { queryResult } = useShow();
    // const { data, isLoading } = queryResult;

    console.log("tableProps", tableProps);
    return (
        <div>
            <h1>DashboardList</h1>
        </div>
    );
};

export default DashboardList;