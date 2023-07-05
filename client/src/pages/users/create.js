import { Create, useForm } from '@refinedev/antd';

import { getValueProps, mediaUploadMapper } from "@refinedev/strapi-v4";
import { Col, DatePicker, Form, Input, Row, Select, Upload } from 'antd';
import Business from './Business';
import Personal from './Personal';

import Education from './Education';
const API_URL = process.env.REACT_APP_API_SERVER
const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Personal Profile`,
    children: <Personal />,
  },
  {
    key: '2',
    label: `Business Profile`,
    children: <Business />,
  },
  {
    key: '3',
    label: `Education Profile`,
    children: <Education />,
  },
];
const { TextArea } = Input;


const UserCreate = () => {
  const { formProps, getInputProps, saveButtonProps } = useForm();
  const handleFormFinish = (values) => {
    values = { ...values, role: 2 }
    console.log("values", values)
    // values={...values, classes:selectedClassId,subject:selectedSubjectId,topics:selectedTopicId}

    formProps.onFinish?.(mediaUploadMapper(values));
    // Handle form submission with mappedValues

  };
  const PersonalProfile = () => {
  }
  return (
    <div>
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical" onFinish={handleFormFinish}>
          <Row>
            <Col span={24}>  
            <Form.Item
              name="photo"
              valuePropName="photo"
              getValueProps={(data) => getValueProps(data, API_URL)}
              noStyle
            >
              <Upload.Dragger
                name="files"
                action={`${API_URL}/api/upload`}
                headers={{
                 
                  Authorization: `Bearer ${localStorage.getItem(
                    TOKEN_KEY,
                   
                  )}`,
                }}
                accept="image/*"
              >
                <p className="ant-upload-text">
                   Photo
                </p>
              </Upload.Dragger>
            </Form.Item>
            </Col>
          </Row>
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
              <Form.Item label="First Name" name="firstname"
                rules={[{ required: true, message: 'Please enter your first name' }]}>
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Last Name" name="lastname">
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Father Name" name="fathername">
                <Input placeholder=" Father Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>

            <Col span={8}>
              <Form.Item label="Mother Name" name="mothername">
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
              <Form.Item label="Date of Birth" name="dob" >
                <DatePicker style={{ width: '100%' }} placeholder="Select Date" />
              </Form.Item>
            </Col>
          </Row>


          <Row>

            <Col span={8}>
              <Form.Item label="Caste" name="cast" >
                <Select placeholder="Select Cast">
                  <Option value="general">General</Option>
                  <Option value="obc">OBC</Option>
                  <Option value="sc/st">SC/ST</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Jati" name="jati" >
                <Select placeholder="Select Jati">
                  <Option value="SEERVI">SEERVI</Option>
                  <Option value="JAAT">JAAT</Option>
                  <Option value="SEN">SEN</Option>
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
            {/* <Col span={8}>
              <Form.Item label="ISDivyang" name="isdivyang">
                <Select placeholder="Select divyang">
                  <Option value="YES">YES</Option>
                  <Option value="NO">NO</Option>    
                </Select>
              </Form.Item>
            </Col> */}
            <Col span={8}>
              <Form.Item label="DivyangDescription" name="divyangdescription">
               <TextArea rows={4} placeholder="Divyang Description" maxLength={6} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Create>
    </div>
  );
};

export default UserCreate;