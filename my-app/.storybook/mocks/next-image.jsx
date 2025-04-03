// .storybook/mocks/next-image.js
import React from 'react';

// Mock Next.js Image component
const Image = ({ 
  src, 
  alt, 
  width = 100, 
  height = 100, 
  fill, 
  sizes, 
  quality,
  priority,
  placeholder,
  style,
  className,
  layout, // Handle old/deprecated props but ignore them
  ...props 
}) => {
  const imgStyle = {
    objectFit: props.objectFit || 'cover',
    ...(fill ? { width: '100%', height: '100%' } : {}),
    ...style,
  };

  // Convert relative paths to absolute
  const imgSrc = typeof src === 'object' 
    ? src.src 
    : (src?.startsWith('/') ? src : `/${src}`);

  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={imgStyle}
      {...props}
    />
  );
};

export default Image;