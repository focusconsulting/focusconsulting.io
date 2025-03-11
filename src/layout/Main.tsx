import {
  Box,
} from '@chakra-ui/react'
import * as React from 'react'

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