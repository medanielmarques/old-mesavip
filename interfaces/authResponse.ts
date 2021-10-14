export interface authResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
