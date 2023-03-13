import styled from 'styled-components'

export const LoginFormCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : 'transparent')};
  margin: auto;
  width: 100vw;
`

export const WebsiteLogo = styled.img`
  width: 185px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
`

export const PasswordInputFeild = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: ${props => (props.isDark ? 'transparent' : '#e2e8f0')};
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const FormCOnt = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin: 10px;
  background-color: ${props => (props.isDark ? '#000' : 'transparent')};
  max-width: 350px;
  flex-shrink: 1;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 64px 48px 64px 48px;
`

export const LoginBtn = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Errormsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

export const ShowPasswordInt = styled.input`
  border: none;
  margin-right: 10px;
`

export const ShowPassCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 10px 0 0 0;
`
