import { PageContainer, ContentContainer } from './style'
import { Header, DragonForm } from '../../components'
import { useParams } from 'react-router-dom'

export const EditDragon = () => {
  const params = useParams()

  return (
    <PageContainer>
      <Header
        title='Editar Dragão'
        shouldRenderTitle
        shloudRenderListingButton
      />
      <ContentContainer>
        <DragonForm
          id={params.id}
          edition
        />
      </ContentContainer>
    </PageContainer>
  )
}
