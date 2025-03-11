import * as React from 'react'
import { Box } from '@chakra-ui/react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './global.css';

interface LayoutProps {
  children: any,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100%">
      <Header />
      <Main>
        {children}
      </Main>   
      <Footer />      
    </Box>
  )
}

export default Layout