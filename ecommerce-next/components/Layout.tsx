import React from 'react'
import { Navbar } from './Navbar'
import Container from '@mui/material/Container';


const Layout = ({children}: any) => {
  return (
    <Container>
        <Navbar/>
        <main>
            {children}
        </main>
    </Container>
  )
}

export default Layout