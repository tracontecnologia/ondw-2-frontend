import { IUser } from './IUser';

export interface ILoginResponse {
  token: string;
  user: IUser;
}
