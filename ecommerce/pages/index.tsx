import { Container } from '@mantine/core';
import { Layout } from '../components/Layout';
import { NavBar } from '../components/NavBar';
import { ProductData } from "../utils/data";

export default function Home() {
  return (
    <Container>
      <NavBar/>
    </Container>
    // <Layout>
    //   Home Page
    // </Layout>
  )
}
