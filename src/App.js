import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button style={{background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
}} onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}