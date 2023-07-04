import React from 'react'
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { Row, Col ,Cascader} from 'antd';
const { Option } = Select;


  const onChange = (value) => {
    console.log(value);
  };



 function Education() {
  return (
    <div>
          <div style={{    margin: '70px'}}>
      
      {/* <Form onFinish={onFinish} layout="vertical"> */}
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} layout='vertical'>
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
      <Input placeholder="Father Name" />
    </Form.Item>
    </Col>
    </Row>
      <Row>
      <Col span={8}>
      <Form.Item label="Your Work" name="yourWork"
       rules={[{ required: true, message: 'Please select your Your ' }]}>
        <Select placeholder="Select Class">
          <Option value="student">student</Option>
          <Option value="privatejob">Private job</Option>
          <Option value="govermentjob">Goverment job</Option>
          <Option value="business">business </Option>
          
        </Select>
      </Form.Item>
      </Col>



     <Col span={8}>
      <Form.Item label="School Name" name="schoolName"
       rules={[{ required: true, message: 'Please enter your school name' }]}>
        <Input placeholder="school Name" />
      </Form.Item>
      </Col>


      <Col span={8}>
      <Form.Item label="College Name" name="collegeName" 
    //   rules={[{ required: true, message: 'Please enter your College name' }]}
      >
        <Input placeholder="College Name" />
      </Form.Item>
      </Col>


      
      </Row>




  
      <Row>


        
      <Col span={8}>
      <Form.Item label="Class" name="class" rules={[{ required: true, message: 'Please select your Class' }]}>
        <Select placeholder="Select Class">
          <Option value="">Primary</Option>
          <Option value="">Secondary</Option>
          <Option value="">Higher Secondary</Option>
          
        </Select>
      </Form.Item>
      </Col>
        
        
      <Col span={8}>
      
<Form.Item label="Graduation">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'MBA',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Finance',
                    },

                    {
                        value: 'Marketing',
                        label: 'Marketing',
                      },
                  ],
                },
              ]}
            />
          </Form.Item>
 </Col>

 <Col span={8}>
      <Form.Item label="Company Name" name="companyName" 
    //   rules={[{ required: true, message: 'Please enter your Company name' }]}
      >
        <Input placeholder="Company  Name" />
      </Form.Item>
      </Col>
 
      
      </Row>
  
      <Row>



      <Col span={8}>
      <Form.Item label="Caste" name="caste" rules={[{ required: true, message: 'Please select your gender' }]}>
        <Select placeholder="Select Caste">
          <Option value="male">General</Option>
          <Option value="female">OBC</Option>
          <Option value="other">SC/ST</Option>
        </Select>
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
      
    
      </Row>
      
      <Row>
            <Col span={8}>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your valid Email Address' }]}>
        <Input placeholder="Email" />
      </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item label="Contact" name="lastName" rules={[{ required: true, message: 'Please enter your Contact Number' }]}>
        <Input placeholder="Contact Number" type='Number' />
      </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item label="Pincode" name="fatherName" rules={[{ required: true, message: 'Please enter your Pincode Number' }]}>
        <Input placeholder="Pincode" />
      </Form.Item>
      </Col>
    
      </Row>
  
  
  
  
      <Row>
       
      <Col span={8}>
      
  
  <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please select your State' }]}>
        <Select placeholder="Select State">
          <Option value="">Madhya pradesh</Option>
          <Option value="">Karnatak</Option>
          <Option value="">Punjab</Option>
          <Option value="">Haryana</Option>
          <Option value="">Jammu Kashmir</Option>
          <Option value="">kerala</Option>
          <Option value="">Bihar</Option>
          <Option value="">Uttar Pradesh</Option>
          <Option value="">Telangana</Option>
          
        </Select>
      </Form.Item>
      </Col>

      <Col span={8}>
      <Form.Item label="District" name="District" rules={[{ required: true, message: 'Please enter your District' }]}>
        <Input placeholder="District" />
      </Form.Item>
      </Col>

      <Col span={8}>
      <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your Address' }]}>
        <Input placeholder="Full Address" />
      </Form.Item>
      </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    {/* </Form> */}
    </Form>
    </div>
    </div>
  )
}
export default Education;