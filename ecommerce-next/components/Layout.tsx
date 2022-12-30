import React from 'react'
import { Navbar } from './Navbar'
import { MantineProvider } from '@mantine/core';
import { Container } from '@mantine/core';

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