import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FormInput from './FormInput';
import ForgotPasswordLink from './ForgotPasswordLink';
import LoginButton from './LoginButton';
import SignUpLink from './SignUpLink';

const LoginCard: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle login logic here
    console.log('Login attempt:', { email, password });
    // For demonstration, clear fields after simulated login
    // setEmail(''); 
    // setPassword('');
  };

  return (
    <Card className="w-[360px] max-w-full bg-card text-card-foreground shadow-md rounded-md font-sans">
      <CardHeader className="pt-8 px-8 pb-6">
        <CardTitle className="text-center text-3xl font-bold text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8 pt-0">
        <form onSubmit={handleLogin} className="space-y-6">
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <div>
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <div className="flex justify-end mt-2">
              <ForgotPasswordLink />
            </div>
          </div>
          <LoginButton type="submit" className="w-full">
            Login
          </LoginButton>
          <SignUpLink />
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
