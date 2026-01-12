
export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: string;
  image: string;
  diameter?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type ViewType = 'catalog' | 'order-list';
