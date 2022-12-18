import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  border-color: grey;
  border-style: solid;
  border-radius: 10px;
  margin-bottom: 3px;
`

export const Name = styled.h2`
  color: darkred;
`

export const Type = styled.label``

export const InfoBtn = styled.button`
  background-color: transparent;
  font-weight: 800;
  border-radius: 5px;
  margin-right: 3px;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`