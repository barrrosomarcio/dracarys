import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getThisDragon } from "../../utils/api"
import { PageContainer, ContentContainer } from './style'
import { Header } from "../../components"

export const Details = () => {
  const params = useParams()
  const [dragon, setDragon] = useState([])

  const fetchDragon = async (id) => {
    const response = await getThisDragon(id)
    setDragon(response)
  }

  useEffect(() => {
    fetchDragon(params.id)
  },[])

  return (
    <PageContainer>
      <Header
        shouldRenderTitle
        title='Detalhes'
        shloudRenderListingButton
      />
      <ContentContainer>
        <h1>Nome: {dragon.name}</h1>
        <h2>Tipo: {dragon.type}</h2>
        <h3>Data de Criação: {dragon.createdAt}</h3>
      </ContentContainer>
    </PageContainer>
  )
}