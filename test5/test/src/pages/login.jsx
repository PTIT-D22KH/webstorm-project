import {Button, Col, Divider, Form, Input, message, notification, Row} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {ArrowRightOutlined} from "@ant-design/icons";
import {loginrAPI} from "../services/api.service.js";
import {useState} from "react";

const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async (values) => {
        setLoading(true);
        const res = await loginrAPI(values.email, values.password);
        console.log(res);
        if (res.status == 200) {
            message.success("Login successfully");
            navigate("/");
        } else {
            notification.error({
                message: "Login failed",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false);
    }
    return (
        <Row justify={'center'} style={{marginTop: "30px"}}>
            <Col xs = {24} md = {16} lg = {8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                     border: "1px solid #ccc",
                    borderRadius: "5px"
                }
                }>

                    <legend>Login</legend>
                    <Form
                        form = {form}
                        layout={"vertical"}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label={"Email"}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type:"email",
                                    message: "Wrong email format!",
                                },
                            ]}
                            >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={"Password"}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Button
                                    loading={loading}
                                    type={"primary"} onClick={() => form.submit()}>
                                    Login
                                </Button>
                                <Link to={"/"}>Go to homepage <ArrowRightOutlined/></Link>
                            </div>
                        </Form.Item>
                    </Form>
                    <Divider/>
                    <div style={{textAlign: "center"}}>
                        Not having account ? <Link to={"/register"}>Register here</Link>
                    </div>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage;