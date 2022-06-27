import React, { FC } from "react";

import { propsOption } from "../types/type";

export const OptionElement: FC<propsOption> = ({
  provincia,
  municipio,
  poblacion,
  valor,
  render,
  label,
}) => {
  return (
    <option
      data-municipio={municipio}
      data-provincia={provincia}
      data-poblacion={poblacion}
      value={valor}
      label = {label}
    >
      {render}
    </option>
  );
};
