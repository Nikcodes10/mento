import { Footer, Form, Jumbotron, Navbar } from '../components/';

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className='home__layout'>
      <Jumbotron/>
      <Form/>
    </main>
    <Footer/>
    </>
  )
}