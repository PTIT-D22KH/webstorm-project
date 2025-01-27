import {Button, Row, Col, Form, Input, notification} from "antd";
import {registerUserAPI} from "../services/api.service.js";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log(values);

        const res = await registerUserAPI
        (values.fullName,
            values.email,
            values.password,
            values.phoneNumber,
        );
        if (res.status === 201) {
            notification.success({
                message: "Register user ",
                description: "Register user successfully"
            })
            navigate("/login");
        } else {
            notification.error({
                message: "Error registering user",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <Form
            layout={"vertical"}
            form={form}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
        >

                <Row justify={"center"}>
                    <Col xs={24} md = {8} >
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md = {8}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md = {8}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col xs={24} md = {8}>
                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    // type: "regexp",
                                    pattern: new RegExp(/\d+/g),
                                    message: 'Phone number must not be null or wrong format!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                {/*<button type={"submit"}>Register</button>*/}
                <div>
                    <Button onClick={() => form.submit()} type="primary">Register</Button>

                </div>
        </Form>
    );
};

export default RegisterPage;