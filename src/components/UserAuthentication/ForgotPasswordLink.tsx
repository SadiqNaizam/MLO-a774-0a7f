import React from 'react';
import { cn } from '@/lib/utils';

interface ForgotPasswordLinkProps {
  href?: string;
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({
  href = '#',
  className,
}) => {
  return (
    <a
      href={href}
      className={cn(
        'text-xs font-medium text-muted-foreground hover:text-primary transition-colors font-sans',
        className
      )}
    >
      Forgot Password
    </a>
  );
};

export default ForgotPasswordLink;
