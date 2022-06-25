import React,{FC,useState,useEffect} from 'react'
import {SelectList} from './SelectList'

export const SelectsAnidados = (props:any) => {
  const [comunidad, setComunidad] = useState([])
  const [provincia, setProvincia] = useState([])
  const [municipio, setMunicipio] = useState([])
  const [poblacion, setPoblacion] = useState([])


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

