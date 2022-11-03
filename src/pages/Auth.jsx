import FormAuth from 'components/Form/Form';
import React from 'react';

export const Auth = ({ onSubmit, onGoogleClick }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FormAuth onSubmit={onSubmit} onGoogleClick={onGoogleClick} />
    </div>
  );
};
