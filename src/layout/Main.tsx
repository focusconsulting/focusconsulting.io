import {
  Box,
} from '@chakra-ui/react'
import * as React from 'react'
import './global.css';

interface MainProps {
  children: any,
}

const Main = ({ children }: MainProps) => {
  return (    
    <Box as="section">
      {children}
    </Box>
  )
}

export default Main;