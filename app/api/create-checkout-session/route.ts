// // import { NextResponse } from 'next/server';
// // import Stripe from 'stripe';

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
// //   apiVersion: '2023-10-16',
// // });

// // export async function POST(request: Request) {
// //   try {
// //     const { items } = await request.json();

// //     // Create line items for Stripe
// //     const lineItems = items.map((item: any) => {
// //       const unitAmount = Math.round(parseFloat(item.price.replace('£', '')) * 100); // Convert to cents
      
// //       return {
// //         price_data: {
// //           currency: 'gbp',
// //           product_data: {
// //             name: item.name,
// //             description: `${item.size ? `Size: ${item.size}` : ''} ${item.color ? `Color: ${item.color}` : ''}`.trim(),
// //           },
// //           unit_amount: unitAmount,
// //         },
// //         quantity: item.quantity,
// //       };
// //     });

// //     // Create Stripe checkout session
// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ['card'],
// //       line_items: lineItems,
// //       mode: 'payment',
// //       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
// //       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
// //       metadata: {
// //         items: JSON.stringify(items),
// //       },
// //     });

// //     return NextResponse.json({ id: session.id });
// //   } catch (error) {
// //     console.error('Stripe session creation error:', error);
// //     return NextResponse.json(
// //       { error: 'Error creating checkout session' },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// console.log('🔵 API Route: Stripe secret key exists:', !!process.env.STRIPE_SECRET_KEY);

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2025-11-17.clover',
// });

// export async function POST(request: Request) {
//   console.log('🟡 API: POST /api/create-checkout-session called');
  
//   try {
//     const requestBody = await request.json();
//     console.log('📥 API: Request body received:', requestBody);
    
//     const { items } = requestBody;
//     console.log('📦 API: Items from request:', items);

//     if (!items || items.length === 0) {
//       console.log('❌ API: No items in cart');
//       return NextResponse.json(
//         { error: 'No items in cart' },
//         { status: 400 }
//       );
//     }

//     console.log('🔢 API: Processing', items.length, 'items');

//     // Create line items for Stripe
//     const lineItems = items.map((item: any, index: number) => {
//       console.log(`📝 API: Processing item ${index + 1}:`, item);
      
//       // Extract price - handle "£80.00" format
//       const priceString = item.price;
//       console.log(`💰 API: Item ${index + 1} price string:`, priceString);
      
//       const unitAmount = Math.round(parseFloat(priceString.replace('£', '')) * 100);
//       console.log(`💰 API: Item ${index + 1} unit amount:`, unitAmount);

//       if (isNaN(unitAmount)) {
//         console.error(`❌ API: Invalid price for item ${index + 1}:`, priceString);
//         throw new Error(`Invalid price format for item: ${item.name}`);
//       }

//       // Build description with variations
//       const descriptionParts = [];
//       if (item.size) descriptionParts.push(`Size: ${item.size}`);
//       if (item.color) descriptionParts.push(`Color: ${item.color}`);
//       const description = descriptionParts.join(' • ') || 'Standard item';

//       console.log(`📄 API: Item ${index + 1} description:`, description);

//       return {
//         price_data: {
//           currency: 'gbp',
//           product_data: {
//             name: item.name,
//             description: description,
//           },
//           unit_amount: unitAmount,
//         },
//         quantity: item.quantity,
//       };
//     });

//     console.log('🎫 API: Creating Stripe checkout session...');
//     console.log('📋 API: Line items to send to Stripe:', lineItems);

//     // Create Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
//       metadata: {
//         items: JSON.stringify(items),
//       },
//     });

//     console.log('✅ API: Stripe session created successfully');
//     console.log('🎫 API: Session ID:', session.id);
//     console.log('🔗 API: Success URL:', session.success_url);
//     console.log('🔗 API: Cancel URL:', session.cancel_url);

//     return NextResponse.json({ 
//       id: session.id,
//       success_url: session.success_url,
//       cancel_url: session.cancel_url 
//     });

//   } catch (error) {
//     console.error('💥 API: STRIPE SESSION CREATION FAILED:');
//     console.error('💥 API: Error name:', error instanceof Error ? error.name : 'Unknown error');
//     console.error('💥 API: Error message:', error instanceof Error ? error.message : error);
//     console.error('💥 API: Error stack:', error instanceof Error ? error.stack : 'No stack');
    
//     return NextResponse.json(
//       { 
//         error: 'Error creating checkout session',
//         details: error instanceof Error ? error.message : 'Unknown error'
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Use stable version
});

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    console.log('Creating checkout session for items:', items);

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => {
      const unitAmount = Math.round(parseFloat(item.price.replace('£', '')) * 100);

      const descriptionParts = [];
      if (item.size) descriptionParts.push(`Size: ${item.size}`);
      if (item.color) descriptionParts.push(`Color: ${item.color}`);
      const description = descriptionParts.join(' • ') || 'Standard item';

      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.name,
            description: description,
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });

    // Create Stripe checkout session with proper configuration
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      metadata: {
        items: JSON.stringify(items),
      },
      // Ensure URL is generated
      submit_type: 'pay',
    });

    console.log('Stripe session created:', {
      id: session.id,
      url: session.url,
      success_url: session.success_url
    });

    // Return both ID and URL
    return NextResponse.json({ 
      id: session.id,
      url: session.url // This is the important part!
    });

  } catch (error) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}