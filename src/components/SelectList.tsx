import React, { FC, useState, useEffect } from "react";

import { helpHttp } from "../helpers/helpHttps";

let help = helpHttp();

interface PropsList {
  url?: string;
  handleChange: any;
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

const fetcher = async (path: any, adicional = "") => {
  let response = await fetch(
    `https://apiv1.geoapi.es/${path}?${adicional}&type=JSON&key=f7d7761c4f2816d1f57170d58eb2e2b63ebb09a56f9dfde588c1570a3d70c4e2`
  );
  return await response.json();
};

const SelectList: FC<PropsList> = ({
  url,
  handleChange,
  title,
  setComunidad,
  comunidad,
  provincia,
  setProvincia,
  ...props
}) => {
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
  }, []);

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
        {comunidad ? provincia.map((el: any) => {
          return(
            <option value={el.PRO} key={el.PRO}>
              {el.COM}
            </option>
          )
        }) : ''}
      </select>
    </div>
  );
};

export default SelectList;
