import { useEffect, useState } from 'react'
import { FormContainer, FormInput, FormLabel, FormBtn } from './style'
import { getThisDragon, newDragon, editDragon } from '../../utils/api'
import { useNavigate } from 'react-router-dom'

export const DragonForm = ({ id, edition }) => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [newHistorie, setNewHistorie] = useState('')
  const [histories, setHistories] = useState([])
  
  const isEdition = async (id) => {
      const data = await getThisDragon(id)
      console.log(data)
      setName(data.name)
      setType(data.type)
      setHistories([...data.histories])
  }
  useEffect(() => {
    if(edition) {
      isEdition(id)
    }
  },[])

  return (
    <FormContainer>
      <>
        <FormLabel>
          Nome:
          <FormInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Tipo: 
          <FormInput
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Histórias: 
          <FormInput
            value={newHistorie}
            onChange={(e) => setNewHistorie(e.target.value)}
          />
          <button
            onClick={() => {
              setHistories([...histories, newHistorie])
              setNewHistorie('')
            }}
          >
            +
          </button>
        </FormLabel>
      </>
      <FormBtn
        onClick={() => {
          isEdition ?
          editDragon(id, {
            name,
            type,
            histories
          }) :
          newDragon({
            name,
            type,
            histories
          })
        navigate('/listing')
        }}
      >
        Enviar
      </FormBtn>
      <FormLabel>
        Histórias:
        {histories.length > 0 && histories.map(history =>
          <label>
            * {history}
          </label>
          )}
      </FormLabel>
    </FormContainer>
  )
}
