export interface Product {
   id: string;
   title: string;
   price: string;
   description: string;
   category: {
      id: string;
      name: string;
      image?: string;
   };
   images?: [string];
   categoryId?: string;
}

export interface Category {
   id: string;
   name: string;
   image: string;
}

export interface Column {
   id: string;
   align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
   label: string;
   width: string;
}
