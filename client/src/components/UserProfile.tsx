import React from 'react';
import {
  Box,
  Button,
  Avatar,
  Text,
  VStack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <Menu>
      <MenuButton>
        <HStack spacing={3} cursor="pointer">
          <Avatar
            size="sm"
            src={user.profilePicture}
            name={user.name}
          />
          <Text fontSize="sm">{user.name}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <VStack spacing={2} p={2}>
          <Avatar
            size="md"
            src={user.profilePicture}
            name={user.name}
          />
          <Text fontWeight="bold">{user.name}</Text>
          <Text fontSize="sm" color="gray.500">{user.email}</Text>
        </VStack>
        <MenuDivider />
        <MenuItem onClick={logout}>
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;