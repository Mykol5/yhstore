// context/UserContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserContextType {
  hasSignedUp: boolean;
  setHasSignedUp: (signedUp: boolean) => void;
  userData: {
    name: string;
    email: string;
    age: string;
    location: string;
    country: string;
  } | null;
  setUserData: (data: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [hasSignedUp, setHasSignedUpState] = useState(false);
  const [userData, setUserDataState] = useState(null);

  // Load from localStorage on component mount
  useEffect(() => {
    const savedSignupStatus = localStorage.getItem('hasSignedUp');
    const savedUserData = localStorage.getItem('userData');
    
    if (savedSignupStatus === 'true') {
      setHasSignedUpState(true);
    }
    
    if (savedUserData) {
      setUserDataState(JSON.parse(savedUserData));
    }
  }, []);

  const setHasSignedUp = (signedUp: boolean) => {
    setHasSignedUpState(signedUp);
    localStorage.setItem('hasSignedUp', signedUp.toString());
  };

  const setUserData = (data: any) => {
    setUserDataState(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ 
      hasSignedUp, 
      setHasSignedUp, 
      userData, 
      setUserData 
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