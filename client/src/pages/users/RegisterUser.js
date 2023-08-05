import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Select, Upload, Button, message } from "antd";
import { getValueProps } from "@refinedev/strapi-v4";
import { useForm } from "@refinedev/core";
import { Tabs } from 'antd';
import CreateProfile from "./ProfileCreate";
import AddressDetails from "./Address";
import InfoPage from "./Info";
import AddressForm from "./Address";
import ConnectedForm from "./ConnectForm";

const onChange = (key) => {
  console.log(key);
};


const RegisterUser = () => {
 
  const items = [
    {
      key: '1',
      label: `ChaitBande`,
      children: <InfoPage/>,
    },
    {
      key: '2',
      label: `Profile`,
      children: <ConnectedForm />,
    },
    
   
  ];
  
  return(

  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
};

export default RegisterUser;
