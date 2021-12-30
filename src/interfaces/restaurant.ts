export interface Restaurant {
  id?: string;
  name: string;
  about?: string;
  phone?: string;
  site?: string;
  culinary: string;
  image: string;
  bairro?: string;
  address?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: any;
  avg_rating: number;
  operation_hours: string;
  total_ratings?: string;
}
