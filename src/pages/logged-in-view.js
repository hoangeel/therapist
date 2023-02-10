"use client"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/home/footer';
import Started from 'components/logged/started';
import Header from 'components/logged/header';


export default function Logged() {
  return (
    <main >
      <Header/>
      <Started/>
      <Footer/>
    </main>
  )
}
