import { PageContainer, ContentContainer } from './style'
import { Header, DragonForm } from '../../components'

export const NewDragon = () => {
  return (
    <PageContainer>
      <Header
        title='Criar novo Dragão'
        shouldRenderTitle
        shloudRenderListingButton
      />
      <ContentContainer>
      <DragonForm />
      </ContentContainer>
    </PageContainer>
  )
}
