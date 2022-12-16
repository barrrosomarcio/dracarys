import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { DracarysContextProvider } from '../../context/dracarys-context';
import App from "../../App";

const MockedApp = () => (
  // <MemoryRouter>
    <DracarysContextProvider>
      <App />
    </DracarysContextProvider>
  // {/* </MemoryRouter> */}
)
describe('Login', () => {

  it('should render login elements', () => {
    render(MockedApp())

    expect(screen.getByTestId('login-container')).toBeVisible()
    expect(screen.getByTestId('login-title')).toBeVisible()
    expect(screen.getByTestId('login-user/label')).toBeVisible()
    expect(screen.getByTestId('login-user/input')).toBeVisible()
    expect(screen.getByTestId('login-password/label')).toBeVisible()
    expect(screen.getByTestId('login-password/input')).toBeVisible()
    expect(screen.getByTestId('login-button')).toBeVisible()
    expect(screen.queryByTestId('login-errormessage')).toBeFalsy()
  })

  it('should only enable with correct login values', () => {
    render(MockedApp())
    expect(screen.getByTestId('login-button')).not.toBeEnabled()

    fireEvent.change(screen.getByTestId('login-user/input'), {target: {value: 'Usuário'}})
    fireEvent.change(screen.getByTestId('login-password/input'), {target: {value: '123456'}})

    expect(screen.getByTestId('login-button')).toBeEnabled()

    fireEvent.change(screen.getByTestId('login-password/input'), {target: {value: '123'}})
    expect(screen.getByTestId('login-button')).not.toBeEnabled()
  })

  it('should render ErrorMessage when invalid loggin', () => {
    render(MockedApp())
    expect(screen.getByTestId('login-button')).not.toBeEnabled()

    fireEvent.change(screen.getByTestId('login-user/input'), {target: {value: 'Usuário'}})
    fireEvent.change(screen.getByTestId('login-password/input'), {target: {value: '123456'}})
    fireEvent.click(screen.getByTestId('login-button'))

    expect(screen.getByTestId('login-errormessage')).toBeVisible()
  })

  it('should redirect to Listing after login', () => {
    render(MockedApp())
    expect(screen.getByTestId('login-button')).not.toBeEnabled()

    fireEvent.change(screen.getByTestId('login-user/input'), {target: {value: 'Drogon'}})
    fireEvent.change(screen.getByTestId('login-password/input'), {target: {value: 'dracarys'}})
    fireEvent.click(screen.getByTestId('login-button'))

    expect(window.location.pathname).toBe('/listing')
  })
})