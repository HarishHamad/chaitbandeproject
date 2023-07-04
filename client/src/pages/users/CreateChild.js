import React from 'react';
import { Create, useForm } from '@refinedev/antd';
import { Col, Row, Form, Input, Select, Upload, Button, Space ,Modal} from 'antd';



const CreateChild = ({parentId, isModalOpen, setIsModalOpen}) => {
    console.log("parentId",parentId)
    const { formProps, getInputProps, saveButtonProps } = useForm();

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleFormFinish = (values) => {
        values={...values, role:2}
        console.log("values", values)
        // values={...values, classes:selectedClassId,subject:selectedSubjectId,topics:selectedTopicId}

        formProps.onFinish?.(mediaUploadMapper(values));
        // Handle form submission with mappedValues

    };
    return (
        <div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
           
            <Form {...formProps} layout="vertical" onFinish={handleFormFinish}>
                <Form.Item
                    label="UserName"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter username',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Password',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
           
            </Modal>
        </div>
    );
};

export default CreateChild;