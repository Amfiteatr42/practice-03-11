import React from 'react';

export const Home = ({ userInfo: { name, email } }) => {
  return (
    <div>
      User {name} signed in with email: {email}
    </div>
  );
};
