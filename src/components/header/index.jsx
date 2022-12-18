import { HeaderContainer, Title, NavButton, NavContainer } from './style.js'
import { useNavigate } from 'react-router-dom'

export const Header = ({
  shouldRenderTitle = false,
  shouldRenderNewButton = false,
  shloudRenderListingButton = false,
  title,
}) => {
  const navigate = useNavigate()
  return(
    <HeaderContainer>
      {shouldRenderTitle && <Title>{title}</Title>}
      <NavContainer>
        {shouldRenderNewButton && <NavButton onClick={() => navigate('/new')}>Cadastrar</NavButton>}
        {shloudRenderListingButton && <NavButton onClick={() => navigate('/listing')}>Voltar a Lista</NavButton>}
      </NavContainer>
    </HeaderContainer>
  )
}