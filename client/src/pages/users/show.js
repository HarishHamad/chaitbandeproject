import React, { useEffect } from 'react';
import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Collapse, Tabs, Typography } from "antd";
import BusinessDetails from './Business';
import EducationForm from './Education';
import AddressDetails from './Address';
import Family from './Family';
import { image, reducer } from '@uiw/react-md-editor';
const { Title, Text } = Typography;
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Personal from './Personal';
import PersonalDetails from './PersonalDetails';
const { Meta } = Card;

const UserShow = () => {

  const { queryResult } = useShow({ metaData: { populate: ["businesses", "educations", "photo", "addresses"] } });
  const { data, isLoading } = queryResult;
  // console.log("User Show Data", data);
  let businesslist = []
  let educationlist = []
  if (isLoading) {
    return <h1>Still loading </h1>
  }
  const record = data?.data;
  businesslist = record?.businesses ?? []
  educationlist = record?.educationlist ?? []
  // console.log("record", record)


  let imgurl = record?.photo != null ? `${record?.photo?.formats?.thumbnail?.url}` : "https://www.gauchercommunity.org/wp-content/uploads/2020/09/avatar-placeholder-150x150.png"
  // console.log("imageeurl",imgurl)
  const items = [

    {
      key: '1',
      label: `Personal Details`,
      children: <PersonalDetails userid={record?.id} record={data} />,
    },

    {
      key: '2',
      label: `Business Profile`,

      children: <BusinessDetails userid={record?.id} businesslist={businesslist} />,
    },
    {
      key: '3',
      label: `Education Profile`,
      children: <EducationForm userid={record?.id} educationlist={educationlist} />,
    },

    {
      key: '4',
      label: `Family`,
      children: <Family userid={record?.id} />,
    },
    {
      key: '5',
      label: `Addresses`,
      children: <AddressDetails userid={record?.id} />,
    },
  ];

  const onChange = (key) => {

    // console.log(key);
  };


  return (<>



    <Show isLoading={isLoading}>


      <Card
        style={{
          width: 400,
          margin: "auto",

        }}
      >
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>

          <img style={{
            borderRadius: '100%',
            display: 'inline',
          }}
            alt="example"
            src={imgurl}
          />

          <div style={{

            // display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            marginLeft: '60px'

          }}>

            <p>Name : <b>{record.firstname}  {record.lastname}</b></p>
            {/* {console.log(record)} */}
            <p>Caste: {record.cast}</p>
            <p>DOB : {record.dob} </p>
            <p>Marital : {record.marital} </p>
          </div>
        </div>

      </Card>


      {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /> */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Show>
  </>
  );
};

export default UserShow;