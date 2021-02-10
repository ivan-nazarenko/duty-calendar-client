import React, { useEffect } from 'react';
import { Form, Input, Button, Space, Row, Col, Divider, notification } from 'antd';
import { MinusCircleOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import styles from './ListForm.module.css';
import { List } from '../../interfaces';
import { validationMessages } from '../../helpers/intex';

const MAX_MEMBERS = 100;

type ListFormProps = {
    loading: boolean;
    initialData: List | null;
    onSubmit: (list: List) => void;
}

const ListForm = ({ initialData, onSubmit, loading }: ListFormProps) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialData) {
            form.setFieldsValue({
                name: initialData.name,
                members: initialData.members
            });
        }
    }, [initialData]);

    return (
        <div className={styles.listForm}>
            <Form
                name="list"
                form={form}
                onFinish={onSubmit}
                autoComplete="off"
                validateMessages={validationMessages}
                initialValues={
                    initialData ?
                        {
                            name: initialData.name,
                            members: initialData.members
                        } :
                        {
                            name: 'Новий Список'
                        }
                }
            >
                <Row gutter={5}>
                    <Col flex="auto">
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Будь ласка, введіть назву'
                                },
                                {
                                    max: 99,
                                    message: 'Максимальна довжина 100 символів'
                                }
                            ]}
                        >
                            <Input size='large' placeholder="Назва" />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Button
                                size="large"
                                type="default"
                                htmlType="submit"
                                icon={<SaveOutlined />}
                                loading={loading}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider />

                <Form.List
                    name="members"
                    rules={[
                        {
                            validator: async (_, members) => {
                                if (!members || members.length < 1) {
                                    notification.error({
                                        message: "Додайте як мінімум одного чергового"
                                    });
                                    return Promise.reject(new Error('Додайте як мінімум одного чергового'));
                                } else if (members.length > MAX_MEMBERS) {
                                    notification.error({
                                        message: "Максимальна кількість чергових - 100"
                                    });
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(field => (
                                <Row key={field.key} style={{ display: 'flex', marginBottom: 8 }} gutter={5} >
                                    <Col xs={12} sm={12} lg={7}>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'lastName']}
                                            fieldKey={[field.fieldKey, 'lastName']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Введіть прізвище'
                                                },
                                                {
                                                    max: 99,
                                                    message: 'Максимальна довжина 100 символів'
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Прізвище" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={12} sm={12} lg={7}>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'firstName']}
                                            fieldKey={[field.fieldKey, 'firstName']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Введіть ім\'я'
                                                },
                                                {
                                                    max: 99,
                                                    message: 'Максимальна довжина 100 символів'
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Ім'я" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={23} sm={23} lg={9}>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'email']}
                                            fieldKey={[field.fieldKey, 'email']}
                                            rules={[
                                                {
                                                    type: 'email',
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Email" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={1} sm={1} lg={1}>
                                        <MinusCircleOutlined className={styles.deleteMember} onClick={() => remove(field.name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                    disabled={form.getFieldValue("members") && form.getFieldValue("members").length > MAX_MEMBERS}
                                >
                                    Додати чергового
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form>
        </div >
    );
};

export default ListForm;