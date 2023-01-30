import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function SectionAnnoucement({ title, link, icon, isExternal }) {
  const color = useColorModeValue('gray.900', 'gray.200');
  const bg = useColorModeValue('gray.50', 'gray.900');
  return isExternal ? (
    <NavLink to={link} target="_blank" rel="noopener noreferrer">
      <Box
        as={'span'}
        fontSize="sm"
        color="gray.400"
        px="10"
        py="3"
        rounded={'full'}
        bg={bg}
        border="1px solid"
        borderColor="gray.500"
      >
        {title} {icon}
      </Box>
    </NavLink>
  ) : (
    <NavLink to={link}>
      <Box
        as={'span'}
        fontSize="sm"
        color={color}
        px="10"
        py="3"
        rounded={'full'}
        bg={bg}
        border="1px solid"
        borderColor="gray.500"
      >
        {title} {icon}
      </Box>
    </NavLink>
  );
}
