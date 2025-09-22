import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const LoginButton: React.FC = () => {
  const { login } = useAuth();

  return (
    <Button
      colorScheme="blue"
      size="md"
      onClick={login}
      leftIcon={<span>🔐</span>}
    >
      Sign in
    </Button>
  );
};

export default LoginButton;