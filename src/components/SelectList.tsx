import React, { FC, useState, useEffect } from "react";

import { helpHttp } from "../helpers/helpHttps";

let help = helpHttp();

interface PropsList {
  url?: string;
  handleChange?: any;
  title: string;
  //states
  comunidad?: string | Array<any> | any;
  provincia?: any;
  municipio?: any;
  poblacion?: any;
  nucleo?: any;
  //setState
  setComunidad?: any | Array<any>;
  setProvincia?: any;
  setMunicipio?: any;
  setPoblacion?: any;
}







const SelectList: FC<PropsList> = ({
  url,
  title,
  setComunidad,
  comunidad,
  provincia,
  setProvincia,
  ...props
}) => {

  const [manejo, setManejo] = useState(false)
  const [manejoCC, setManejoCC] = useState(null)


  const fetcher = async (path: any, adicional = "") => {
    let response = await fetch(
      `https://apiv1.geoapi.es/${path}?${adicional || `CCOM=${manejoCC}`}&type=JSON&key=f7d7761c4f2816d1f57170d58eb2e2b63ebb09a56f9dfde588c1570a3d70c4e2`
    );
    console.log(response)
    console.log(adicional)
    return await response.json();
  };

  const handleChange = (e:any) => {
    let busqueda = e.target.options[e.target.selectedIndex].value

    let busqueda2 = e.target.options[e.target.selectedIndex].title
    if(busqueda){
      setManejo(true)
      setManejoCC(busqueda2)
    }
    console.log(busqueda)
    console.log(busqueda2)
  }




  useEffect(() => {
    const getData = async () => {
      try {
        const [comunidades,provincias]: Array<any> = await Promise.all([
          fetcher("comunidades"),
          fetcher("provincias", comunidad.CCOM),
        ]);
        console.log(provincias.data)
        console.log(comunidades.data);
        setComunidad(comunidades.data);
        setProvincia(provincias.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  },[]);

  return (
    <div>
      <h4>-- {title} --</h4>
      <select name="" id="" onChange={handleChange}>
        <option value="">---</option>
        {comunidad.map((el: any) => {
          return (
            <option value={el.COM} key={el.CCOM}>
              {el.COM}
            </option>
          );
        })}
        <option value="bendiciones la pepo">bendiciones la pepo</option>
      </select>
      <br />
      <select name="" id="" onChange = {handleChange}>
        {manejo ? provincia.map((el: any) => {
          return(
            <option title = {el.CCOM} value={el.PRO} key={el.PRO}>
              {el.PRO}
            </option>
          )
        }) : ''}
      </select>
    </div>
  );
};

export default SelectList;
