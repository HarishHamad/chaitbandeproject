import React from 'react';
import { Create, useForm } from '@refinedev/antd';

import { Col, Row, Form, Input, Select, Upload, Button, Space,DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { getValueProps, mediaUploadMapper } from "@refinedev/strapi-v4";
import Personal from './Personal';
import Business from './Business';

import { Tabs } from 'antd';
import Education from './Education';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Personal Profile`,
    children: <Personal/>,
  },
  {
    key: '2',
    label: `Business Profile`,
    children: <Business/>,
  },
  {
    key: '3',
    label: `Education Profile`,
    children: <Education/>,
  },
];

const UserCreate = () => {
    const { formProps, getInputProps, saveButtonProps } = useForm();
    const handleFormFinish = (values) => {
        values={...values, role:2}
        console.log("values", values)
        // values={...values, classes:selectedClassId,subject:selectedSubjectId,topics:selectedTopicId}
        
        formProps.onFinish?.(mediaUploadMapper(values));
        // Handle form submission with mappedValues

    };
    return (
        <div>
         <Create saveButtonProps={saveButtonProps}>

            <Form {...formProps} layout="vertical" onFinish={handleFormFinish}>
            <Row>
          <Col span={8}>
    <Form.Item label="Username Name" name="username" 
    rules={[{ required: true, message: 'Please enter your Username' }]}>
      <Input placeholder="Username" />
    </Form.Item>
    </Col>
    <Col span={8}>
    <Form.Item label="email" name="email" 
    rules={[{ required: true, message: 'Please enter your email' }]}>
      <Input placeholder="Email" />
    </Form.Item>
</Col>
    <Col span={8}>
    <Form.Item label="password" name="password" 
    rules={[{ required: true, message: 'Please enter your password' }]}>
      <Input placeholder=" Password" />
    </Form.Item>
    </Col>
    </Row>

   
    <Row>
          <Col span={8}>
    <Form.Item label="First Name" name="firstName" 
    rules={[{ required: true, message: 'Please enter your first name' }]}>
      <Input placeholder="First Name" />
    </Form.Item>
    </Col>
    <Col span={8}>
    <Form.Item label="Last Name" name="lastName" 
    rules={[{ required: true, message: 'Please enter your last name' }]}>
      <Input placeholder="Last Name" />
    </Form.Item>
</Col>
    <Col span={8}>
    <Form.Item label="Father Name" name="fatherName" 
    rules={[{ required: true, message: 'Please enter your Father name' }]}>
      <Input placeholder=" Father Name" />
    </Form.Item>
    </Col>
    </Row>

   

    <Row>

    <Col span={8}>
    <Form.Item label="Mother Name" name="motherName" 
    rules={[{ required: true, message: 'Please enter your Mother name' }]}>
      <Input placeholder=" Mother Name" />
    </Form.Item>
    </Col>
    <Col span={8}>
    <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select your gender' }]}>
      <Select placeholder="Select Gender">
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
        <Option value="other">Other</Option>
      </Select>
    </Form.Item>
    </Col>
  
    <Col span={8}>
    <Form.Item label="Date of Birth" name="dob" rules={[{ required: true, message: 'Please select your date of birth' }]}>
      <DatePicker style={{ width: '100%' }} placeholder="Select Date" />
    </Form.Item>
    </Col>
    </Row>


    <Row>

    <Col span={8}>
    <Form.Item label="Caste" name="caste" rules={[{ required: true, message: 'Please select your gender' }]}>
      <Select placeholder="Select Caste">
        <Option value="general">General</Option>
        <Option value="obc">OBC</Option>
        <Option value="sc/st">SC/ST</Option>
      </Select>
    </Form.Item>
    </Col>

    
   
    <Col span={8}>
    <Form.Item label="Martial status" name="martial" 
    rules={[{ required: true, message: 'Please select your Martial staus' }]}
    >
      <Select placeholder="martial status">
        <Option value="married">Married</Option>
        <Option value="unmarried">Unmarried</Option>
        <Option value="divorced">Divorced</Option>
        
      </Select>
    </Form.Item>
    </Col>
    </Row>
                
            </Form>
            </Create>
        </div>
    );
};

export default UserCreate;