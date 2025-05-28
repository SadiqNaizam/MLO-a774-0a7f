import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  autoComplete?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  className,
  inputClassName,
  labelClassName,
  autoComplete,
}) => {
  return (
    <div className={cn('grid w-full items-center gap-1.5 font-sans', className)}>
      <Label 
        htmlFor={id} 
        className={cn('text-sm font-medium text-muted-foreground', labelClassName)}
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={cn(
          'w-full border-x-0 border-t-0 border-b-2 border-input bg-transparent px-1 py-2 h-auto text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 rounded-none',
          inputClassName
        )}
      />
    </div>
  );
};

export default FormInput;
