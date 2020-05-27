export interface UserModel {
  id: number;
  username: string;
  password: string;
  name: string;
  surname1: string;
  surname2: string;
  image: string;
  mail: string;
  role: { id: number, role: string };
}
