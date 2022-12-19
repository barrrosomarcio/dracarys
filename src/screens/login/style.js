import styled from 'styled-components'

export const PageContainer = styled.div`
  widht: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  height: 300px;
  width: 300px;
  border-color: white;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items center;
  padding:20px;
  border-radius: 10px;
`

export const Title = styled.label`
  color: #950020;
  font-weight: 800;
  font-size:30px;
`

export const Input = styled.input`
  height: 30px;
`

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  `

export const Button = styled.button`
  color: #452b30;
  background-color: #838c94;
  width: 100px;
  height: 30px;
  font-color: #950020;
  font-size: 14px;
`

export const ErrorMessage = styled.label`
  margin-top: 10px;
  color: darkred;
`