import React,{FC} from 'react';
import { useState, useEffect } from 'react';


interface propsOption {
  provincia?: any;
  municipio?: any;
  poblacion?: any;

manejo?: any;

  valor: any;
  render: any;
}


export const OptionElement: FC<propsOption> = ({
  provincia,
  municipio,
  poblacion,

manejo,

  valor,
  render,
}) => {
  return (
    <option
    data-municipio={municipio}
    data-provincia={provincia}
    data-poblacion = {poblacion}
    data-manejoo = {manejo}
    value={valor}>
      {render}
    </option>
  );
};
