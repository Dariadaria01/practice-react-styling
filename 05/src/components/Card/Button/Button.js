import React from 'react';

const Button = ({ children, onClick, variant }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.375rem 0.75rem',
        backgroundColor: '#0d6efd',
        color: '#fff',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
