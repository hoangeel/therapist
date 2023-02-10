"use client"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/home/footer';
import Header from 'components/logged/header';
import ContentView from 'components/view/contentView';


export default function View() {
  return (
    <main>
      <Header/>
      <ContentView/>
      <Footer/>
    </main>
  )
}
