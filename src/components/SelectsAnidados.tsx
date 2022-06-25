import React,{FC,useState,useEffect} from 'react'
import SelectList from './SelectList'

export const SelectsAnidados = (props:any) => {
  const [comunidad, setComunidad] = useState([])
  const [provincia, setProvincia] = useState([])
  const [municipio, setMunicipio] = useState("")
  const [poblacion, setPoblacion] = useState("")


  const handleChange = (e:any) => {
    console.log(e.target.options[e.target.selectedIndex].value)
  }

  return (
    <div>
      <h2>selects anidados</h2>
      <SelectList
      title = "Comunidad"
      handleChange = {handleChange}
      setComunidad = {setComunidad}
      comunidad = {comunidad}
      provincia = {provincia}
      setProvincia = {setProvincia}
      />
    </div>
  )
}

