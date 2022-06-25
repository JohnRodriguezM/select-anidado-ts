export interface PropsList {
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