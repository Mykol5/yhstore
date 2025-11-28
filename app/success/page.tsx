'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // You can fetch order details here if needed
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-yellow-400 text-2xl mb-4">Processing your order...</div>
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black/50 border border-yellow-500/30 rounded-2xl p-8 max-w-md text-center">
        <div className="text-green-400 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-300 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        <p className="text-yellow-400 text-sm mb-6">
          Order ID: {sessionId}
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}