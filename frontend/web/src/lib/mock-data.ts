// frontend/web/src/lib/mock-data.ts

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  isNew?: boolean;
  onSale?: boolean;
}

// --- NEW, THEMED DATA ---
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Tropical Paradise Smoothie',
    category: 'Smoothies',
    price: 7.99,
    imageUrl: 'https://images.unsplash.com/photo-1610970881699-44a5c8a0f1b2?w=500&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 2,
    name: 'Classic Orange Juice',
    category: 'Juices',
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Acai Berry Bowl',
    category: 'Fruit Bowls',
    price: 9.50,
    imageUrl: 'https://images.unsplash.com/photo-1590301429070-652328265586?w=500&auto=format&fit=crop',
    onSale: true,
  },
  {
    id: 4,
    name: 'Green Detox Juice',
    category: 'Juices',
    price: 6.99,
    imageUrl: 'https://images.unsplash.com/photo-1533087352348-12a2337d1e8c?w=500&auto=format&fit=crop',
  },
];