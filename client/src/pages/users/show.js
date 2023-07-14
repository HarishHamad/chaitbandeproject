import React, { useEffect } from "react";
import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Tabs, Typography } from "antd";
import BusinessDetails from "./Business";
import EducationForm from "./Education";
import AddressDetails from "./Address";



const { Title, Text } = Typography;

import {  Card } from "antd";

import PersonalDetails from "./PersonalDetails";
import FamilyDetails from "./Family";
import OrganizationalChart from "./orgChart";

const { Meta } = Card;

const UserShow = () => {
  const { queryResult } = useShow({
    metaData: {
      populate: ["businesses", "educations", "photo", "addresses", "families","users" ],
    },
  });
  // console.log("queryResult",queryResult)
  const { data, isLoading } = queryResult;
  const record = data?.data;
  // console.log("USer show record", record);
   console.log("User Show Data", data);
  let businesslist = record?.businesses;
  let educationlist = record?.educations;
  let addresslist = record?.addresses;
  let familylist = record?.families;
  let children = record?.users
  console.log("children,",children)
  let modified = children?children.map((child)=>{return {...child, parentId:record.id}}):[]
  modified.push(record)
  console.log("modified", modified)
  useEffect(() => {
    businesslist = record?.businesses ?? [];
    educationlist = record?.educations ?? [];
    addresslist = record?.addresses ?? [];
    modified = children?children.map((child)=>{return {...child, parentId:record.id}}):[]
    modified.push(record)
  }, [data]);

  if (isLoading) {
    return <h1>Still loading </h1>;
  }

  let imgurl =
    record?.photo != null
      ? `${record?.photo?.formats?.thumbnail?.url}`
      : "https://www.gauchercommunity.org/wp-content/uploads/2020/09/avatar-placeholder-150x150.png";
  // console.log("imageeurl",imgurl)
  const items = [
    {
      key: "1",
      label: `Personal Details`,
      children: <PersonalDetails userid={record?.id} record={data} />,
    },

    {
      key: "2",
      label: `Business Profile`,

      children: (
        <BusinessDetails userid={record?.id} businesslist={businesslist} />
      ),
    },
    {
      key: "3",
      label: `Education Profile`,
      children: (
        <EducationForm userid={record?.id} educationlist={educationlist} />
      ),
    },

    {
      key: "4",
      label: `families`,
      children: <FamilyDetails userid={record?.id} children={children} />,
    },
    {
      key: "5",
      label: `Addresses`,
      children: (
        <AddressDetails userid={record?.id} addresslist={addresslist} />
      ),
    },
    {
      key: "6",
      label: `Family Tree`,
      children: (
        <OrganizationalChart data={modified} />
      ),
    },
  ];

  const onChange = (key) => {
    // console.log(key);
  };

  if (isLoading) {
    return <h1> Page loading</h1>;
  } else {
    console.log(
      "business list in show",
      businesslist,
      "record =>",
      record.businesses
    );
    return (
      <Show isLoading={isLoading}>
        <Card
          style={{
            width: 500,
            margin: "auto",
            background: " white",
            position: "relative",
            display: " flex",
            alignItems: "flex-end",
            transition: "0.4s ease-out",
            boxShadow: "0px 7px 10px rgba(black, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              style={{
                borderRadius: "100%",
                display: "inline",
              }}
              alt="example"
              src={imgurl}
            />

            <div
              style={{
                // display: 'flex',
                alignItems: "center",
                alignContent: "center",
                marginLeft: "60px",
              }}
            >
              <p>
                Name :{" "}
                <b>
                  {record.firstname} {record.lastname}
                </b>
              </p>
              {/* {console.log(record)} */}
              <p>Category: {record.occupation}</p>
              <p>DOB : {record.dob} </p>
              <p>Marital : {record.marital} </p>
            </div>
          </div>
        </Card>

        {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /> */}
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Show>
    );
  }

  // return (<>

  //   <Show isLoading={isLoading}>

  //     <Card
  //       style={{
  //         width: 500,
  //         margin: "auto",

  //       }}
  //     >
  //       <div style={{
  //         display: "flex",
  //         flexDirection: "row"
  //       }}>

  //         <img style={{
  //           borderRadius: '100%',
  //           display: 'inline',
  //         }}
  //           alt="example"
  //           src={imgurl}
  //         />

  //         <div style={{

  //           // display: 'flex',
  //           alignItems: 'center',
  //           alignContent: 'center',
  //           marginLeft: '60px'

  //         }}>

  //           <p>Name : <b>{record.firstname}  {record.lastname}</b></p>
  //           {/* {console.log(record)} */}
  //           <p>Caste: {record.cast}</p>
  //           <p>DOB : {record.dob} </p>
  //           <p>Marital : {record.marital} </p>
  //         </div>
  //       </div>

  //     </Card>

  //     {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /> */}
  //     <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  //   </Show>
  // </>
};

export default UserShow;
