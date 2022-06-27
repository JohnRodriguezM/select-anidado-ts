export interface PropsList {
  url?: string;
  handleChange?: any;
  title: string;
  comunidad?: Array<any> | any;
  provincia?: any;
  municipio?: any;
  nucleo?: any;
  setComunidad?: any | Array<any>;
  setProvincia?: any;
  setMunicipio?: any;
}

export interface propsOption {
  provincia?: any;
  municipio?: any;
  poblacion?: any;
  valor: any;
  render: any;
  label?: any;
}

interface Form {
  comunidad: string;
  provincia: string;
  municipio: string;
}

export const initialForm: Form = {
  comunidad: "",
  provincia: "",
  municipio: "",
};