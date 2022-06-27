import React, { FC, useState, useEffect } from "react";

import { OptionElement } from "./OptionElement";

import { PropsList, initialForm } from "../types/type";

import { helpHttp } from "../helpers/helpHttps";

import { db } from "./../helpers/db";

let help = helpHttp();

const BASE_URL = "https://apiv1.geoapi.es/";

const API_KEY =
  "f7d7761c4f2816d1f57170d58eb2e2b63ebb09a56f9dfde588c1570a3d70c4e2";

export const SelectList: FC<PropsList> = ({
  url,
  title,
  comunidad,
  setComunidad,
  provincia,
  setProvincia,
  municipio,
  setMunicipio,
  ...props
}) => {
  const [manejoProvincia, setManejoProvincia] = useState(null);
  const [manejoMunicipio, setManejoMunicipio] = useState(null);

  const [form, setForm] = useState(initialForm);
  const [data, setData] = useState(db)

  const createData = (e:any) => {
    e.preventDefault();
    setData([...data,form])
  }

  const handleChange = async (e: any) => {
    let base = e.target.options[e.target.selectedIndex];
    let busquedaProvincia = base.dataset.provincia;
    let busquedaMunicipio = base.dataset.municipio;

    if (busquedaProvincia) setManejoProvincia(busquedaProvincia);
    if (busquedaMunicipio) setManejoMunicipio(busquedaMunicipio);
    //*funcion actualizadora para los datos

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const [comunidades, provincias, municipios]: Array<any> =
          await Promise.all([
            help.get(`${BASE_URL}comunidades?&type=JSON&key=${API_KEY}`),
            help.get(
              `${BASE_URL}provincias?CCOM=${manejoProvincia}&type=JSON&key=${API_KEY}`
            ),
            help.get(
              `${BASE_URL}municipios?CPRO=${manejoMunicipio}&type=JSON&key=${API_KEY}`
            ),
            help.get(
              `https://apiv1.geoapi.es/poblaciones?CPRO=04&CMUM=001&type=JSON&key=${API_KEY}`
            ),
          ]);
        setComunidad(comunidades.data);
        setProvincia(provincias.data);
        setMunicipio(municipios.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    return () => {
      getData();
    };
  }, [manejoProvincia, manejoMunicipio]);

  return (
    <div>
      <h4>-- Comunidad --</h4>
      <form action="" onSubmit = {createData}>
        <select name="comunidad" id="" onChange={handleChange}>
          <option value="">---</option>
          {comunidad.map((el: any) => {
            return (
              <OptionElement
                key={el.CCOM}
                provincia={el.CCOM}
                valor={el.COM}
                render={el.COM}
                label={el.COM}
              />
            );
          })}
        </select>
        <br />
        <h4>-- Provincia --</h4>
        <select name="provincia" id="" onChange={handleChange}>
          <option value="">---</option>
          {provincia.length > 0
            ? provincia.map((el: any) => {
                return (
                  <OptionElement
                    provincia={el.CCOM}
                    municipio={el.CPRO}
                    valor={el.PRO}
                    key={el.PRO}
                    render={el.PRO}
                    label={el.PRO}
                  />
                );
              })
            : ""}
        </select>
        <br />
        <h4>-- Municipio --</h4>
        <select name="municipio" id="" onChange={handleChange}>
          <option value="">---</option>
          {municipio.length > 0
            ? municipio.map((el: any) => {
                return (
                  <OptionElement
                    key={el.DMUN50}
                    municipio={el.CPRO}
                    valor={el.DMUN50}
                    render={el.DMUN50}
                    label={el.DMUN50}
                  />
                );
              })
            : ""}
        </select>
        <br /> <br />
        <input type="submit" value="Enviar Data" />
      </form>
    </div>
  );
};
