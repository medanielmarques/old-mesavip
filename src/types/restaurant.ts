interface Address {
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  logradouro: string;
  numero: string;
  complemento?: any;
}

export interface Restaurant {
  id?: string;
  name: string;
  bairro?: string;
  about?: string;
  phone?: string;
  site?: string;
  culinary: string;
  image: string;
  address: Address;
  avg_rating: number;
  operation_hours: string;
  total_reviews: number;
}
