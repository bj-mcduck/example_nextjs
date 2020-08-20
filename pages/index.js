import Head from 'next/head'
import Products from '../components/products'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react'

// export async function getStaticProps(context) {
//   return {
//     props: {}
//   }
// }

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Trufla example from Brandon McKay</title>
      </Head>

      <Header as='h1'>Products</Header>
      <Products />
    </div>
  )
}
