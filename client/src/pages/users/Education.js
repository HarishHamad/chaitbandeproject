import React from "react";
import {
  Card,
  Avatar,
  Divider,
  Typography,
  Form,
  Input,
  Button,
  Select,
  message,
  Modal,
} from "antd";

import { UserOutlined } from "@ant-design/icons";
import { Create, CreateButton, useForm } from "@refinedev/antd";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_SERVER
const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY

const { Meta } = Card;
const { Title } = Typography;
const { Option } = Select;

const Education = ({
  parentId,
  isEducationModalOpen,
  setIsEducationModalOpen,
}) => {
  console.log("parentId", parentId);
  const { formProps, getInputProps, saveButtonProps } = useForm();

  const showModal = () => {
    setIsEducationModalOpen(true);
  };

  const handleOk = () => {
    console.log("handle Ok clicked ");
    setIsEducationModalOpen(false);
  };

  const handleCancel = () => {
    setIsEducationModalOpen(false);
  };

  const handleFormFinish = async(values) => {
    values = { ...values, userid: parentId };
    console.log("Submitted form values:", values);
    try {
      const response = await axios.post(API_URL + '/api/educations', {
          data:values,
      });

      console.log('Response:', response.data);
      setIsEducationModalOpen(false);
      // Perform any necessary actions after successful data submission
     
  }

  catch (error) {
      console.error('Error:', error);
      // Handle any errors that occur during the data submission
  }
    setIsEducationModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isEducationModalOpen}
       
        width={1220}
        destroyOnClose
        footer={null}
      >
        <Form
          {...formProps}
          layout="vertical"
          onFinish={(values) => formProps.onFinish?.(handleFormFinish(values))}
        >
          <Form.Item
            name="name"
            label="Educationname"
            rules={[
              { required: true, message: "Please enter your Educationname" },
            ]}
          >
            <Input placeholder="Education" />
          </Form.Item>
          {/* Rest of the form fields */}
          <Divider />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};


export default Education;