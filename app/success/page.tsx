// 'use client';

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';

// export default function SuccessPage() {
//   const searchParams = useSearchParams();
//   const sessionId = searchParams.get('session_id');
//   const [loading, setLoading] = useState(true);
//   const [orderDetails, setOrderDetails] = useState<any>(null);

//   useEffect(() => {
//     if (sessionId) {
//       // You can fetch order details here if needed
//       setLoading(false);
//     }
//   }, [sessionId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-yellow-400 text-2xl mb-4">Processing your order...</div>
//           <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <div className="bg-black/50 border border-yellow-500/30 rounded-2xl p-8 max-w-md text-center">
//         <div className="text-green-400 text-6xl mb-4">✓</div>
//         <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
//         <p className="text-gray-300 mb-6">
//           Thank you for your purchase. Your order has been confirmed and will be shipped soon.
//         </p>
//         <p className="text-yellow-400 text-sm mb-6">
//           Order ID: {sessionId}
//         </p>
//         <Link
//           href="/"
//           className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 inline-block"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// }


'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();
  const [hasClearedCart, setHasClearedCart] = useState(false);

  useEffect(() => {
    // Only clear cart once when the component mounts and we have a session ID
    if (sessionId && !hasClearedCart) {
      console.log('✅ Order completed, clearing cart...');
      clearCart();
      setHasClearedCart(true); // Mark that we've cleared the cart
    }
  }, [sessionId, clearCart, hasClearedCart]); // Add all dependencies

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/yhimg.png"
            alt="Yoruba Healer"
            fill
            className="object-contain"
          />
        </div>

        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-300 mb-6 text-lg">
          Thank you for your purchase. Your spiritual merchandise will be prepared with care and shipped to you soon.
        </p>

        {/* Order Details */}
        {sessionId && (
          <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400">Order Reference</p>
            <p className="text-yellow-400 font-mono text-sm">{sessionId}</p>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-black/30 border border-yellow-500/20 rounded-lg p-4 mb-6">
          <h3 className="text-yellow-400 font-semibold mb-2">What's Next?</h3>
          <ul className="text-gray-300 text-sm text-left space-y-1">
            <li>• You'll receive an order confirmation email</li>
            <li>• Your items will be shipped within 3-5 business days</li>
            <li>• Tracking information will be sent via email</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
          >
            Continue Shopping
          </Link>
          
          <Link 
            href="/merch"
            className="block w-full border-2 border-yellow-500 text-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
          >
            Browse More Merch
          </Link>
        </div>

        {/* Support */}
        <p className="text-gray-400 text-sm mt-6">
          Need help? <a href="mailto:info@yorubahealer.store" className="text-yellow-400 hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
}
