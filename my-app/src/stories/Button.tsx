import React from 'react';

// Simplified version without external CSS

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Simple inline styles to avoid CSS dependencies
  const baseStyle = {
    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    border: 0,
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    backgroundColor: backgroundColor || (primary ? '#1ea7fd' : 'transparent'),
    color: primary ? 'white' : '#333',
    boxShadow: primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    padding: size === 'small' ? '10px 16px' : size === 'large' ? '12px 24px' : '11px 20px',
    fontSize: size === 'small' ? '12px' : size === 'large' ? '16px' : '14px',
  };
  
  return (
    <button
      type="button"
      style={baseStyle}
      {...props}
    >
      {label}
    </button>
  );
};
