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
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title } = Typography;
const { Option } = Select;

const BusinessProfile = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Profile updated successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
    message.error("Please fill in all required fields.");
  };

  return (
   
      
          <Card style={{ width: 600, marginLeft: "380px" }}>
            <Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title="Business Name"
              description="A short description of the business"
            />
            <Divider />

            <Title level={4}>Business Information</Title>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="businessName"
                label="Business Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your business name",
                  },
                ]}
              >
                <Input placeholder="Business Name" />
              </Form.Item>
              <Form.Item
                name="contactNumber"
                label="Contact Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter your contact number",
                  },
                ]}
              >
                <Input placeholder="Contact Number" />
              </Form.Item>
              <Form.Item
                name="businessType"
                label="Type of Business"
                rules={[
                  {
                    required: true,
                    message: "Please select the type of business",
                  },
                ]}
              >
                <Select placeholder="Select Type">
                  <Option value="type1">Service Business</Option>
                  <Option value="type2">Manufacturing Business</Option>
                  <Option value="type3">Merchandising Business</Option>
                  <Option value="type1">Sole Proprietorship</Option>
                  <Option value="type2">Corporation</Option>
                  <Option value="type3">Cooperative</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input.TextArea placeholder="Address" rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save Profile
                </Button>
              </Form.Item>
            </Form>
          </Card>
       
      
  );
};

export default BusinessProfile;
