// utils/shippingRates.ts
export const SHIPPING_RATES: Record<string, number> = {
  'GB': 10, // United Kingdom
  'US': 15, // United States
  'CA': 18, // Canada
  'FR': 12, // France
  'DE': 12, // Germany
  'ES': 12, // Spain
  'IT': 12, // Italy
  'NL': 12, // Netherlands
  'BE': 12, // Belgium
  'PT': 12, // Portugal
  'IE': 12, // Ireland
  'AU': 20, // Australia
  'NZ': 22, // New Zealand
  'JP': 18, // Japan
  'CN': 16, // China
  'IN': 20, // India
  'NG': 25, // Nigeria
  'GH': 25, // Ghana
  'KE': 25, // Kenya
  'ZA': 22, // South Africa
  'BR': 22, // Brazil
  'MX': 18, // Mexico
  'AR': 20, // Argentina
  'CL': 20, // Chile
  'AE': 18, // UAE
  'SA': 18, // Saudi Arabia
  'QA': 18, // Qatar
  'SG': 15, // Singapore
  'MY': 16, // Malaysia
  'ID': 18, // Indonesia
  'KR': 15, // South Korea
  'RU': 20, // Russia
  'TR': 15, // Turkey
  // Add more as needed
};

export const getShippingRate = (countryCode: string): number => {
  return SHIPPING_RATES[countryCode] || 20; // Default international rate
};