import Image from 'next/image'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import Masthead from '../components/Masthead/Masthead'

export default function Home() {
  return (
    <div className='container'>

      <Header/>

      <main className='main'>
        <Masthead/>
      </main>

      <Footer/>

    </div>
  )
}
