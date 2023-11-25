import customAxios from './customAxios';

const ENDPOINT = 'vota-app';

export interface CreateUser {
  Correo: string;
  Contrasña: string;
}
interface User extends CreateUser {
  Id: number;
}
export async function autentificarUsuario(usuario: CreateUser) {
  try {
    const {data: createdNote} = await customAxios.post<User>(
      `${ENDPOINT}/autentificar`,
      usuario,
    );
    return createdNote;
  } catch (error) {
    console.log('ERROR:', error);
    throw new Error(`Something was wrong ${error}`);
  }
}

export async function obtenerAcuerdos() {
  try {
    const {data: acuerdos} = await customAxios.get(
      `${ENDPOINT}/acuerdos`,
    );
    return acuerdos;
  } catch (error) {
    console.log('ERROR:', error);
    throw new Error(`Something was wrong ${error}`);
  }
}
