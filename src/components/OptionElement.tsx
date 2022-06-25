import React,{FC} from 'react';
import { useState, useEffect } from 'react';


interface propsOption {
  provincia?: any;
  municipio?: any;
  poblacion?: any;
  valor: any;
  render: any;
}


export const OptionElement: FC<propsOption> = ({
  provincia,
  municipio,
  poblacion,
  valor,
  render,
}) => {
  return (
    <option
    data-municipio={municipio}
    data-provincia={provincia}
    data-poblacion = {poblacion}
    value={valor}>
      {render}
    </option>
  );
};
