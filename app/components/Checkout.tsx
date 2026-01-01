'use client';

import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cart } = useCart(); // Changed from cartItems to cart
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    console.log('🟡 CHECKOUT BUTTON CLICKED');

    if (!cart || cart.length === 0) { // Added null check
      alert('Your cart is empty');
      return;
    }

    setIsLoading(true);

    try {
      console.log('📤 Creating checkout session...');
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart, // Changed from cartItems to cart
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();
      console.log('✅ Session created:', session);

      // Use the URL returned by Stripe's API
      if (session.url) {
        console.log('✅ Redirecting to Stripe Checkout...');
        window.location.href = session.url;
      } else {
        throw new Error('No checkout URL returned from Stripe');
      }
      
    } catch (error) {
      console.error('💥 Checkout failed:', error);
      alert('Failed to proceed to checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || !cart || cart.length === 0} // Added null check
      className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        (isLoading || !cart || cart.length === 0) ? 'opacity-50 cursor-not-allowed' : '' // Added null check
      }`}
    >
      {isLoading ? '🔄 Processing...' : `Proceed to Checkout (${cart?.length || 0} items)`} {/* Safe length access */}
    </button>
  );
}




// 'use client';

// import { loadStripe } from '@stripe/stripe-js';
// import { useCart } from '../context/CartContext';
// import { useState } from 'react';

// // Use the older stable version of Stripe.js to avoid Clover breaking changes
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {
//   apiVersion: '2023-10-16', // Force older API version
// });

// export default function Checkout() {
//   const { cartItems } = useCart();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCheckout = async () => {
//     console.log('🟡 CHECKOUT BUTTON CLICKED');

//     if (cartItems.length === 0) {
//       alert('Your cart is empty');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       console.log('📤 Creating checkout session...');
      
//       const response = await fetch('/api/create-checkout-session', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           items: cartItems,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const session = await response.json();
//       console.log('✅ Session created:', session);

//       // NEW APPROACH: Use window.location to redirect to Checkout
//       if (session.url) {
//         // For newer Stripe versions, the session might have a URL
//         console.log('✅ Redirecting to checkout URL');
//         window.location.href = session.url;
//       } else {
//         // For older approach, construct the URL manually
//         console.log('🔄 Constructing checkout URL');
//         const checkoutUrl = `https://checkout.stripe.com/pay/${session.id}`;
//         console.log('✅ Redirecting to:', checkoutUrl);
//         window.location.href = checkoutUrl;
//       }
      
//     } catch (error) {
//       console.error('💥 Checkout failed:', error);
//       alert('Failed to proceed to checkout. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleCheckout}
//       disabled={isLoading || cartItems.length === 0}
//       className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
//         (isLoading || cartItems.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
//       }`}
//     >
//       {isLoading ? '🔄 Processing...' : `Proceed to Checkout (${cartItems.length} items)`}
//     </button>
//   );
// }


// 'use client';

// import { useCart } from '../context/CartContext';
// import { useState } from 'react';

// export default function Checkout() {
//   const { cartItems } = useCart();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCheckout = async () => {
//     console.log('🟡 CHECKOUT BUTTON CLICKED');

//     if (cartItems.length === 0) {
//       alert('Your cart is empty');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       console.log('📤 Creating checkout session...');
      
//       const response = await fetch('/api/create-checkout-session', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           items: cartItems,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const session = await response.json();
//       console.log('✅ Session created:', session);

//       // Use the URL returned by Stripe's API
//       if (session.url) {
//         console.log('✅ Redirecting to Stripe Checkout...');
//         window.location.href = session.url;
//       } else {
//         throw new Error('No checkout URL returned from Stripe');
//       }
      
//     } catch (error) {
//       console.error('💥 Checkout failed:', error);
//       alert('Failed to proceed to checkout. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleCheckout}
//       disabled={isLoading || cartItems.length === 0}
//       className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
//         (isLoading || cartItems.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
//       }`}
//     >
//       {isLoading ? '🔄 Processing...' : `Proceed to Checkout (${cartItems.length} items)`}
//     </button>
//   );
// }