import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Use React.ComponentProps to get props from Shadcn Button
type ShadcnButtonProps = React.ComponentProps<typeof Button>;

interface LoginButtonProps extends ShadcnButtonProps {
  // children is already part of ShadcnButtonProps (React.ReactNode)
}

const LoginButton: React.FC<LoginButtonProps> = ({
  className,
  children = 'Login',
  ...props
}) => {
  return (
    <Button
      type="submit" // Defaulting to submit, can be overridden by props
      variant="default" // This variant uses primary colors from the theme
      className={cn('h-10 px-4 py-2 font-sans', className)} // Default h-10, common for shadcn buttons.
      {...props}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
