import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/UserAuthentication/LoginCard';

/**
 * LoginPage serves as the main authentication page for users.
 * It utilizes the MainAppLayout for overall page structure (e.g., centering content)
 * and renders the LoginCard component, which contains the login form and related UI elements.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
