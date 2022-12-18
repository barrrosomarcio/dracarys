import { CardContainer, InfoBtn, Name, Type, BtnContainer } from "./style";
import { useNavigate } from "react-router-dom";

export const Card = ({ name, type, id, deleteCallback }) => {
  const navigate = useNavigate()

  return (
    <CardContainer>
      <Name>{name}</Name>
      <Type>{type}</Type>
      <BtnContainer>
        <InfoBtn
          alt="Mais Informações"
          onClick={() => navigate(`/dragon/${id}`)
        }
        >
          +
        </InfoBtn>
        <InfoBtn
          alt="Editar"
          onClick={() => navigate(`/edit/${id}`)}
        >
          E
        </InfoBtn>
        <InfoBtn
          alt="Deletar"
          onClick={() => deleteCallback(id)}
        >
          X
        </InfoBtn>
      </BtnContainer>
    </CardContainer>
  )
}