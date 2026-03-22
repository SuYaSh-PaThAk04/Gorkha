export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tag?: 'Chef Special' | 'Popular' | 'New';
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'steam-momo',
    title: 'Steam Momo',
    subtitle: '10 pieces',
    emoji: '🥟',
    items: [
      { name: 'Veg Momo', price: '₹39 / ₹69', description: 'Classic steamed dumplings with fresh vegetables' },
      { name: 'Paneer Momo', price: '₹49 / ₹79', description: 'Steamed dumplings stuffed with cottage cheese' },
    ],
  },
  {
    id: 'fried-momo',
    title: 'Fried Momo',
    subtitle: '10 pieces',
    emoji: '🍟',
    items: [
      { name: 'Veg Momo', price: '₹49 / ₹79', description: 'Golden crispy fried vegetable dumplings' },
      { name: 'Paneer Momo', price: '₹59 / ₹109', description: 'Crispy fried paneer-stuffed dumplings' },
    ],
  },
  {
    id: 'kurkure-momo',
    title: 'Kurkure Momo',
    subtitle: '10 pieces',
    emoji: '✨',
    items: [
      { name: 'Veg Momo', price: '₹59 / ₹119', description: 'Extra crunchy veg momo with spice coating' },
      { name: 'Paneer Momo', price: '₹69 / ₹139', description: 'Crispy paneer momo with kurkure crust' },
      { name: 'Cheese Corn Momo', price: '₹79 / ₹149', description: 'Cheesy corn filling in a crunchy shell', tag: 'Popular' },
    ],
  },
  {
    id: 'tandoori-momo',
    title: 'Tandoori Momo',
    subtitle: '8 pieces',
    emoji: '🔥',
    items: [
      { name: 'Schezwan Gravy Momo', price: '₹99', description: 'Spicy schezwan sauce over tandoori momo' },
      { name: 'Veg Tandoori Momo', price: '₹99 / ₹129', description: 'Dry or with signature gravy' },
      { name: 'Tandoori Paneer Momo', price: '₹119 / ₹139', description: 'Charcoal-kissed paneer momo' },
      { name: 'Afgani Veg Malai Momo', price: '₹99 / ₹129', description: 'Rich malai-based creamy sauce' },
      { name: 'Afgani Paneer Momo', price: '₹119 / ₹139', description: 'Premium paneer in afghani malai gravy' },
    ],
  },
  {
    id: 'chef-special',
    title: "Chef's Special",
    subtitle: '8 pieces',
    emoji: '👨‍🍳',
    items: [
      { name: 'Nepali Jhol Momo', price: '₹49 / ₹99', description: 'Authentic Nepali-style momo in aromatic broth', tag: 'Chef Special' },
    ],
  },
  {
    id: 'chinese',
    title: 'Chinese Special',
    emoji: '🍜',
    items: [
      { name: 'Street Style Chow-min', price: '₹49 / ₹79', description: 'Classic street-style stir-fried noodles' },
      { name: 'Chilli Garlic Noodles', price: '₹59 / ₹119', description: 'Fiery garlic noodles with veggies' },
      { name: 'Schezwan Noodles', price: '₹59 / ₹119', description: 'Bold schezwan sauce tossed noodles' },
      { name: 'Paneer Hakka Noodles', price: '₹69 / ₹129', description: 'Stir-fried hakka noodles with paneer' },
      { name: 'Veg Manchurian', price: '₹79 / ₹149', description: 'Crispy veg balls in manchurian gravy', tag: 'Popular' },
      { name: 'Crispy Chilli Potato', price: '₹69 / ₹129', description: 'Crunchy potatoes tossed in chilli sauce' },
      { name: 'Honey Chilli Potato', price: '₹79 / ₹149', description: 'Sweet & spicy glazed potato bites' },
    ],
  },
  {
    id: 'fries',
    title: 'Fries',
    emoji: '🍟',
    items: [
      { name: 'French Fries', price: '₹49 / ₹89', description: 'Classic golden salted fries' },
      { name: 'Peri Peri Fries', price: '₹59 / ₹99', description: 'Spiced with signature peri peri seasoning' },
      { name: 'Peri Peri Cheesy Fries', price: '₹69 / ₹119', description: 'Loaded with melted cheese & peri peri', tag: 'Popular' },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    emoji: '🍝',
    items: [
      { name: 'Red Sauce Pasta', price: '₹99', description: 'Classic tomato-based pasta' },
      { name: 'White Sauce Pasta', price: '₹129', description: 'Creamy béchamel sauce pasta' },
      { name: 'Mix Sauce Pasta', price: '₹149', description: 'Best of both — red and white sauce', tag: 'Popular' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    emoji: '🥪',
    items: [
      { name: 'Grilled Club Cheese Sandwich', price: '₹119', description: 'Multi-layer grilled cheese club' },
      { name: 'Bombay Style Sandwich', price: '₹139', description: 'Iconic Mumbai street-style sandwich' },
      { name: 'Grilled Veg Pizza Sandwich', price: '₹149', description: 'Pizza-topped grilled veggie sandwich', tag: 'New' },
    ],
  },
  {
    id: 'burger',
    title: 'Burger',
    emoji: '🍔',
    items: [
      { name: 'Veg Aloo Tikki Burger', price: '₹49', description: 'Classic aloo tikki patty burger' },
      { name: 'Veg Aloo Tikki Cheese Burger', price: '₹69', description: 'Tikki burger with melted cheese' },
      { name: 'Crispy Paneer Burger', price: '₹79', description: 'Golden crispy paneer patty' },
      { name: 'Crispy Paneer Cheese Burger', price: '₹99', description: 'Premium paneer burger with cheese', tag: 'Popular' },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    subtitle: 'S/M | Extra Cheese/Toppings +₹30',
    emoji: '🍕',
    items: [
      { name: 'Margherita', price: '₹99 / ₹180', description: 'Classic cheese pizza, timeless and pure' },
      { name: 'Cheese Corn', price: '₹99 / ₹180', description: 'Sweet corn with stretchy cheese' },
      { name: 'Fresh Veggie', price: '₹129 / ₹249', description: 'Cheese, onion & capsicum' },
      { name: 'Farmhouse', price: '₹149 / ₹299', description: 'Onion, capsicum, corn & olives', tag: 'Popular' },
      { name: 'Deluxe Veggie', price: '₹159 / ₹349', description: 'Onion, capsicum, corn, mushroom, tomato, olives' },
      { name: 'Tandoori Paneer', price: '₹179 / ₹379', description: 'Tandoori paneer, onion, capsicum, mushroom, olives, red pepper', tag: 'Chef Special' },
    ],
  },
  {
    id: 'combo',
    title: 'Combo Meals',
    subtitle: 'Value deals',
    emoji: '🎁',
    items: [
      { name: 'Aloo Tikki Cheese Burger + Fries + Cold Drink', price: '₹139', description: 'Complete meal deal', tag: 'Popular' },
      { name: 'Paneer Cheese Burger + Fries + Cold Drink', price: '₹159', description: 'Premium burger combo' },
      { name: 'Manchurian (Gravy) + Veg Fried Rice', price: '₹149', description: 'Chinese comfort food combo' },
      { name: 'Manchurian (Gravy) + Paneer Hakka Noodle', price: '₹159', description: 'Noodles & manchurian fusion' },
      { name: 'Manchurian (Gravy) + Paneer Fried Rice', price: '₹179', description: 'Premium rice combo' },
    ],
  },
  {
    id: 'soup',
    title: 'Soup',
    emoji: '🍲',
    items: [
      { name: 'Sweet Corn Soup', price: '₹49', description: 'Hot, sweet & salty — perfect comfort soup' },
      { name: 'Manchow Soup', price: '₹79', description: 'Hot & spicy Chinese-style manchow soup' },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    emoji: '🧇',
    items: [
      { name: 'Chocolate Waffle', price: '₹99', description: 'Warm Belgian waffle with chocolate sauce', tag: 'Popular' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    emoji: '☕',
    items: [
      { name: 'Hot Coffee', price: '₹30', description: 'Fresh brewed hot coffee' },
      { name: 'Cold Coffee', price: '₹79', description: 'Chilled cold coffee blend' },
      { name: 'Cold Drink 750ml', price: '₹40', description: 'Assorted cold beverages' },
      { name: 'Water Bottle Small', price: '₹10', description: '250ml water bottle' },
      { name: 'Water Bottle 1L', price: '₹18', description: '1 litre water bottle' },
    ],
  },
];

export const allCategories = ['All', ...menuData.map(c => c.title)];