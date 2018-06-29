/*eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, message, Checkbox } from 'antd'
import loginName from 'images/login/user.png'
import passWord from 'images/login/password.png'
import logo from 'images/login/logo.png'
import qiu from 'images/login/qiu.png'
import dianshang from 'images/login/dianshang.png'
import style from './index.less'
import { userLoginAct } from './reduck'
import storage from '../../utils/storage'
import * as urls from '../../global/routepath'

const FormItem = Form.Item

@Form.create()
@connect(state => {
  return {
    userInfo: state.userLogin
  }
})
export default class Login extends Component {
  state = {
    loginType: 2,
  }

  componentWillMount() {
    console.log(this.props)
    const userInfo = storage.get('user')
    if (userInfo && userInfo.accessToken) {
      this.props.history.replace(urls.HOME)
    }
  }

  login = () => {
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        this.props.dispatch(userLoginAct({ userName: values.userName, password: values.password }))
          .then(res => {
            if (res && res.code === 0) {
              this.props.history.replace(urls.HOME)
            }
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={style['wrapper']}>
        <div className={style['wrap']}>
          <img className={style['img-qiu']} src={qiu} />
          <div className={style['logo-title-wrap']}>
            <img className={style['logo']} src={logo} />
            <div className={style['title']}>管理后台模版</div>
          </div>
          <div className={style['login-flex-wrap']}>
            <img className={style['img-dianshang']} src={dianshang} />
            <Form className={style['user-login-wrap']}>
              <FormItem >
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名' }],
                  initialValue: ''
                })(
                  <div className={style['input-row']}>
                    <div className={style['icon']}>
                      <img src={loginName} />
                    </div>
                    <Input
                      type='text'
                      className={style['input']}
                      placeholder='请输入用户名'
                      autoComplete={'off'}
                    />
                  </div>
                )}
              </FormItem>
              <FormItem >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                  initialValue: ''
                })(
                  <div className={style['input-row']}>
                    <div className={style['icon']}>
                      <img src={passWord} />
                    </div>
                    <Input
                      type='password'
                      className={style['input']}
                      placeholder='请输入密码'
                      autoComplete={'off'}
                    />
                  </div>
                )}
              </FormItem>
              <FormItem >
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox
                    className={style['rember-password']}>
                    记住密码
                  </Checkbox>
                )}
              </FormItem>
              <Button
                type='primary'
                className={style['btn-login']}
                onClick={this.login}
              >
                登&nbsp;&nbsp;录
              </Button>
            </Form>
          </div>
          <div className={style['bottom-img']} />
          <div className={style['trapezoid']} />
        </div>
      </div>
    )
  }
}
