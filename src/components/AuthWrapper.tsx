import React, { useState } from 'react';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';

interface AuthWrapperProps {
  onAuthenticated: () => void;
}

export function AuthWrapper({ onAuthenticated }: AuthWrapperProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <LoginPage 
          onLogin={onAuthenticated}
          onSwitchToSignup={() => setIsLogin(false)}
        />
      ) : (
        <SignupPage 
          onSignup={onAuthenticated}
          onSwitchToLogin={() => setIsLogin(true)}
        />
      )}
    </>
  );
}