/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useState} from 'react';
import INICIO from './Navegacion';

export const AppContext = createContext({
  UserId: 0,
  AcuerdoId: 0,
  EncabezadoId: 0,
  setAcuerdoId: (id: number) => {},
  setEncabezadoId: (id: number) => {},
});

function App(): JSX.Element {
  const [UserId, setUserId] = useState<number>(0);
  const [AcuerdoId, setAcuerdo] = useState<number>(0);
  const [EncabezadoId, setEncabezado] = useState<number>(0);

  const setAcuerdoId = (id: number) => {
    setAcuerdo(id);
  };

  const setEncabezadoId = (id: number) => {
    setEncabezado(id);
  };
  return (
    <AppContext.Provider
      value={{
        UserId,
        AcuerdoId,
        EncabezadoId,
        setAcuerdoId,
        setEncabezadoId,
      }}>
      <INICIO />
    </AppContext.Provider>
  );
}

export default App;
