import React,{FC} from 'react';

import './App.css';

import { SelectsAnidados } from './components/SelectsAnidados';


const API_KEY = 'f7d7761c4f2816d1f57170d58eb2e2b63ebb09a56f9dfde588c1570a3d70c4e2'

const App: FC = () =>  {
  return (
    <div className="App">
     <SelectsAnidados/>
    </div>
  );
}

export default App;
