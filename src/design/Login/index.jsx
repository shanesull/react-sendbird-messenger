import React, { Fragment, useState } from 'react'
import { Row, Col, Form, Input, Button, Checkbox, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Logo } from '@assets/images/logo/ic-main-sendbird-logo-white.svg'
import { Loading } from '@components'
import { PRIMARY_COLOR, USERNAME, PASSWORD } from '@constants'

const { Title, Text } = Typography

export default function Login() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [loading, setLoading] = useState(false)

    async function onFinish(values) {
        console.log('Success:', values)

        try {
            navigate('/dashboard')
        } catch (error) {
            setLoading(false)
        }
    }

    function onFinishFailed(errorInfo) {
        // console.log('Failed:', errorInfo)
    }

    function navigateRegister() {
        navigate('/register')
    }

    return (
        <Fragment>
            <Loading spinning={loading}>
                <Row>
                    <Col
                        xs={24}
                        sm={{ span: 8, offset: 8 }}
                        md={{ span: 12, offset: 6 }}
                        lg={{ span: 8, offset: 8 }}
                        xl={{ span: 6, offset: 9 }}
                    >
                        <Row
                            style={{
                                height: 'calc(100vh - 100px)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '10vh',
                                }}
                            >
                                <Logo fill={PRIMARY_COLOR} />
                            </Row>
                            <Row style={{ justifyContent: 'center' }}>
                                <Title
                                    style={{
                                        fontFamily: '"Hanalei", cursive',
                                    }}
                                    level={2}
                                >
                                    SendBird Messenger
                                </Title>
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    height: '5vh',
                                }}
                            >
                                <Text>{t('src.screens.login.SIWSTGS')}</Text>
                            </Row>
                            <Form
                                style={{ padding: '0 5vw' }}
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    emailOrYourPhoneNumber: USERNAME,
                                    password: PASSWORD,
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="emailOrYourPhoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input Email or Your phone number!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Email or your phone number" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button type="link" htmlType="submit">
                                            {t('src.screens.login.Continue')}
                                        </Button>
                                    </div>
                                </Form.Item>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Form.Item
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                        name="remember"
                                        valuePropName="checked"
                                        noStyle
                                    >
                                        <Checkbox>
                                            {t('src.screens.login.KMSI')}
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                            </Form>
                        </Row>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: 100,
                            }}
                        >
                            <Button onClick={navigateRegister} type="link">
                                {t('src.screens.login.NOS')}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Loading>
        </Fragment>
    )
}
