// context/UserContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  age: string;
  location: string;
  country: string;
}

interface UserContextType {
  hasSignedUp: boolean;
  setHasSignedUp: (signedUp: boolean) => void;
  hasPurchased: boolean; // NEW: Track if user has made a purchase
  setHasPurchased: (purchased: boolean) => void; // NEW
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  selectedCountry: string; // NEW: For shipping calculation
  setSelectedCountry: (country: string) => void; // NEW
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [hasSignedUp, setHasSignedUpState] = useState(false);
  const [hasPurchased, setHasPurchasedState] = useState(false); // NEW
  const [userData, setUserDataState] = useState<UserData | null>(null);
  const [selectedCountry, setSelectedCountryState] = useState('GB'); // Default to UK

  // Load from localStorage on component mount
  useEffect(() => {
    const savedSignupStatus = localStorage.getItem('yh_hasSignedUp');
    const savedUserData = localStorage.getItem('yh_userData');
    const savedPurchaseStatus = localStorage.getItem('yh_hasPurchased');
    const savedCountry = localStorage.getItem('yh_selectedCountry');
    
    if (savedSignupStatus === 'true') {
      setHasSignedUpState(true);
    }
    
    if (savedPurchaseStatus === 'true') {
      setHasPurchasedState(true);
    }
    
    if (savedUserData) {
      try {
        setUserDataState(JSON.parse(savedUserData));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
    
    if (savedCountry) {
      setSelectedCountryState(savedCountry);
    }
  }, []);

  const setHasSignedUp = (signedUp: boolean) => {
    setHasSignedUpState(signedUp);
    localStorage.setItem('yh_hasSignedUp', signedUp.toString());
  };

  const setHasPurchased = (purchased: boolean) => {
    setHasPurchasedState(purchased);
    localStorage.setItem('yh_hasPurchased', purchased.toString());
  };

  const setUserData = (data: UserData) => {
    setUserDataState(data);
    localStorage.setItem('yh_userData', JSON.stringify(data));
  };

  const setSelectedCountry = (country: string) => {
    setSelectedCountryState(country);
    localStorage.setItem('yh_selectedCountry', country);
  };

  return (
    <UserContext.Provider value={{ 
      hasSignedUp, 
      setHasSignedUp, 
      hasPurchased, // NEW
      setHasPurchased, // NEW
      userData, 
      setUserData,
      selectedCountry, // NEW
      setSelectedCountry // NEW
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}




// // context/UserContext.tsx
// 'use client';

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// interface UserContextType {
//   hasSignedUp: boolean;
//   setHasSignedUp: (signedUp: boolean) => void;
//   userData: {
//     name: string;
//     email: string;
//     age: string;
//     location: string;
//     country: string;
//   } | null;
//   setUserData: (data: any) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export function UserProvider({ children }: { children: ReactNode }) {
//   const [hasSignedUp, setHasSignedUpState] = useState(false);
//   const [userData, setUserDataState] = useState(null);

//   // Load from localStorage on component mount
//   useEffect(() => {
//     const savedSignupStatus = localStorage.getItem('hasSignedUp');
//     const savedUserData = localStorage.getItem('userData');
    
//     if (savedSignupStatus === 'true') {
//       setHasSignedUpState(true);
//     }
    
//     if (savedUserData) {
//       setUserDataState(JSON.parse(savedUserData));
//     }
//   }, []);

//   const setHasSignedUp = (signedUp: boolean) => {
//     setHasSignedUpState(signedUp);
//     localStorage.setItem('hasSignedUp', signedUp.toString());
//   };

//   const setUserData = (data: any) => {
//     setUserDataState(data);
//     localStorage.setItem('userData', JSON.stringify(data));
//   };

//   return (
//     <UserContext.Provider value={{ 
//       hasSignedUp, 
//       setHasSignedUp, 
//       userData, 
//       setUserData 
//     }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// }