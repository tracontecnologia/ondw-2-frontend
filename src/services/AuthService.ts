import { ILoginResponse, ISignUpPayload, IUser } from '../interfaces';
import { Api } from '../providers';

function login(email: string, password: string) {
  return Api.post<ILoginResponse>('/auth/login', { email, password });
}

function signUp(data: ISignUpPayload) {
  return Api.post<IUser>('/v1/users', data);
}

export const AuthService = {
  login,
  signUp,
};
