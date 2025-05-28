import React from 'react';
import { cn } from '@/lib/utils';

interface SignUpLinkProps {
  href?: string;
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ 
  href = '#', 
  className 
}) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground font-sans', className)}>
      Don't have an account?{' '}
      <a
        href={href}
        className="font-medium text-accent hover:text-accent/90 hover:underline transition-colors"
      >
        SignUp
      </a>
    </p>
  );
};

export default SignUpLink;
