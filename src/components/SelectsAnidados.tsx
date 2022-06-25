import React,{FC,useState,useEffect} from 'react'
import SelectList from './SelectList'

export const SelectsAnidados = (props:any) => {
  const [comunidad, setComunidad] = useState([])
  const [provincia, setProvincia] = useState([])
  const [municipio, setMunicipio] = useState("")
  const [poblacion, setPoblacion] = useState("")




  return (
    <div>
      <h2>selects anidados</h2>
      <SelectList
      title = "Comunidad"
      setComunidad = {setComunidad}
      comunidad = {comunidad}
      provincia = {provincia}
      setProvincia = {setProvincia}
      />
    </div>
  )
}

