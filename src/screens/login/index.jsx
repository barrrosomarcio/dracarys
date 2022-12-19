import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Input,
  InputLabel,
  Button,
  PageContainer,
  Title,
  ErrorMessage,
} from './style'
import { DracarysContext } from '../../context/dracarys-context'

const MIN_FIELD_LENGHT = 6

export const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [failedLogIn, setFailedLogin] = useState(false)

  const { users, setLoggedIn } = useContext(DracarysContext)

  const logMeIn = () => {
    const userExists = users.filter(individualUser => individualUser.userName === user)
    
    if(userExists[0] && userExists[0].password === password) {
      setLoggedIn(true)
      return navigate('/listing')
    }
    return setFailedLogin(true)
  }

  const loginValidation = () => {
    return user.length >= MIN_FIELD_LENGHT && password.length >= MIN_FIELD_LENGHT
  }

  return (
    <PageContainer>
      <Container data-testid='login-container'>
        <Title data-testid='login-title'>Dracarys</Title>
        <>
          <InputLabel data-testid='login-user/label'>
            Usuário :
            <Input data-testid='login-user/input' value={user} onChange={e => setUser(e.target.value)}/>
          </InputLabel>
          <InputLabel data-testid='login-password/label'>
            Senha :
            <Input data-testid='login-password/input' value={password} onChange={e => setPassword(e.target.value)}/>
          </InputLabel>
        </>
        <Button data-testid='login-button' disabled={!loginValidation()} onClick={logMeIn}>Login</Button>
      </Container>
      {failedLogIn && <ErrorMessage data-testid='login-errormessage'>Usuário ou senha inválidos! Tente novamente.</ErrorMessage>}
    </PageContainer>
  )
}
