import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  padding = 'md',
  shadow = 'md',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-lg bg-white';
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };

  const classes = `${baseStyles} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${className || ''}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
