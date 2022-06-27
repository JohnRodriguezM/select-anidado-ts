import React,{FC,useState} from 'react'
import {SelectList} from './SelectList'

export const SelectsAnidados: FC = (props) => {
  const [comunidad, setComunidad] = useState([])
  const [provincia, setProvincia] = useState([])
  const [municipio, setMunicipio] = useState([])


  return (
    <section>
      <h2>selects anidados</h2>
      <SelectList

      title = "Comunidad"
      comunidad = {comunidad}
      setComunidad = {setComunidad}

      provincia = {provincia}
      setProvincia = {setProvincia}

      municipio = {municipio}
      setMunicipio = {setMunicipio}
      />
    </section>
  )
}

