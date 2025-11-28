'use client';

import { useState } from 'react';

export default function DebugTest() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    console.log('🟢 BUTTON CLICKED! Count:', clickCount + 1);
    setClickCount(prev => prev + 1);
    alert('Button clicked! Check console.');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Debug Test Page</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Test Button (Clicked: {clickCount})
      </button>
      <p className="mt-4">Check browser console when clicking the button.</p>
    </div>
  );
}