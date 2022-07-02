import jwt_decode, { JwtPayload } from 'jwt-decode';

export const jwtValidate = (token: string) => {
  const decoded = jwt_decode<JWTCustomPayload>(token);
  console.log('decoded : ', decoded);
  const isExpired = Date.now() >= decoded.exp * 1000;
  return {
    isAuth: decoded && !isExpired,
    adminData: {
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name,
    },
  };
};

export interface JWTCustomPayload {
  sub: number;
  iat: number;
  exp: number;
  email: string;
  name: string;
}
