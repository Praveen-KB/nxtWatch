import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../context/NxtWatchContext'
import {
  WebsiteLogo,
  LoginFormCont,
  InputLabel,
  InputContainer,
  PasswordInputFeild,
  FormCOnt,
  Errormsg,
  LoginBtn,
  ShowPasswordInt,
  ShowPassCont,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    passwordType: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = isDark => {
    const {password, passwordType} = this.state
    return (
      <>
        <InputLabel isDark={isDark} htmlFor="password">
          PASSWORD
        </InputLabel>
        <PasswordInputFeild
          type={passwordType ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          isDark={isDark}
        />
      </>
    )
  }

  Changed = () => {
    this.setState(prevState => {
      const passwordType = !prevState.passwordType
      return {passwordType}
    })
  }

  renderShowPassword = isDark => {
    const {passwordType} = this.state

    return (
      <ShowPassCont>
        <ShowPasswordInt
          type="checkbox"
          onChange={this.Changed}
          checked={passwordType}
          id="showPass"
        />
        <InputLabel isDark={isDark} htmlFor="showPass">
          Show Password
        </InputLabel>
      </ShowPassCont>
    )
  }

  renderUsernameField = isDark => {
    const {username} = this.state
    return (
      <>
        <InputLabel isDark={isDark} htmlFor="username">
          USERNAME
        </InputLabel>
        <PasswordInputFeild
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          isDark={isDark}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)

          return (
            <LoginFormCont isDark={isDark}>
              <FormCOnt onSubmit={this.submitForm} isDark={isDark}>
                <WebsiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  {this.renderUsernameField(isDark)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordField(isDark)}
                </InputContainer>
                {this.renderShowPassword(isDark)}
                <LoginBtn type="submit" className="login-button">
                  Login
                </LoginBtn>
                {showSubmitError && (
                  <Errormsg className="error-message">*{errorMsg}</Errormsg>
                )}
              </FormCOnt>
            </LoginFormCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
