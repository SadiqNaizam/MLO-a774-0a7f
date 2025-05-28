import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        // Apply full-screen flex centering and background color as per Layout Requirements.
        // 'h-screen' ensures it takes full viewport height.
        // 'bg-background' uses the themed background color (blue in this case).
        // 'p-4' adds some padding around the content area, preventing direct edge contact.
        // 'font-sans' ensures consistent typography.
        'flex items-center justify-center h-screen bg-background p-4 font-sans',
        className
      )}
    >
      {/* Children will typically be the page content, e.g., an AuthLayout containing a LoginCard */}
      {children}
    </main>
  );
};

export default MainAppLayout;
