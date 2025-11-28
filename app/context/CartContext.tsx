// 'use client';

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   quantity: number;
//   size?: string;
//   color?: string;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: Omit<CartItem, 'quantity'>) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
//   clearCart: () => void;
//   getTotalItems: () => number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: Omit<CartItem, 'quantity'>) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(cartItem => 
//         cartItem.id === item.id && 
//         cartItem.size === item.size && 
//         cartItem.color === item.color
//       );

//       if (existingItem) {
//         // If item exists, update quantity
//         return prevItems.map(cartItem =>
//           cartItem.id === item.id && 
//           cartItem.size === item.size && 
//           cartItem.color === item.color
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         // If item doesn't exist, add new item
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id: number, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const getTotalItems = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeFromCart,
//       updateQuantity,
//       clearCart,
//       getTotalItems
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };



// 'use client';

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   quantity: number;
//   size?: string;
//   color?: string;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
//   clearCart: () => void;
//   getTotalItems: () => number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(cartItem => 
//         cartItem.id === item.id && 
//         cartItem.size === item.size && 
//         cartItem.color === item.color
//       );

//       if (existingItem) {
//         // If item exists, update quantity by adding the new quantity
//         return prevItems.map(cartItem =>
//           cartItem.id === item.id && 
//           cartItem.size === item.size && 
//           cartItem.color === item.color
//             ? { ...cartItem, quantity: cartItem.quantity + quantity }
//             : cartItem
//         );
//       } else {
//         // If item doesn't exist, add new item with the specified quantity
//         return [...prevItems, { ...item, quantity }];
//       }
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id: number, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const getTotalItems = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeFromCart,
//       updateQuantity,
//       clearCart,
//       getTotalItems
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };



'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  image: any;
  id: number;
  name: string;
  price: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => 
        cartItem.id === item.id && 
        cartItem.size === item.size && 
        cartItem.color === item.color
      );

      if (existingItem) {
        // If item exists, update quantity by adding the new quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id && 
          cartItem.size === item.size && 
          cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // If item doesn't exist, add new item with the specified quantity
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  // const removeFromCart = (id: number) => {
  //   setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  // };

// In your CartContext, update these functions:

const updateQuantity = (id: number, quantity: number, size?: string, color?: string) => {
  if (quantity <= 0) {
    removeFromCart(id, size, color);
    return;
  }
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    )
  );
};

const removeFromCart = (id: number, size?: string, color?: string) => {
  setCartItems(prevItems => 
    prevItems.filter(item => 
      !(item.id === id && item.size === size && item.color === color)
    )
  );
};

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};