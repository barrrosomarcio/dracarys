import { useEffect, useState } from "react"
import { Header } from "../../components"
import { getDragonsList, deleteDragon } from "../../utils/api"
import { PageContainer, ListingContainer } from './style'
import { SortByName } from "../../utils/funcs"
import { Card } from "../../components/card"

export const Listing = () => {
  const [dragonsList, setDragonsList] = useState([])
  
  const fetchDragonsList = async () => {
    const response = await getDragonsList()
    setDragonsList(SortByName(response))
  }
  
  const deleteDragonFromList = async (id) => {
    await deleteDragon(id)
    return fetchDragonsList()
  }

  useEffect(() => {
    fetchDragonsList()
  },[])

  console.log(dragonsList)
  return (
    <PageContainer>
      <Header
        title='Lista de Dragões'
        shouldRenderTitle
        shouldRenderNewButton
      />
      <ListingContainer>
        {dragonsList.map(dragon => 
          <Card
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            id={dragon.id}
            deleteCallback={deleteDragonFromList}
          />
        )}
      </ListingContainer>
    </PageContainer>
  )
}