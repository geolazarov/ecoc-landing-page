import Nav from './components/Nav'
import Hero from './components/Hero'
import Candidacy from './components/Candidacy'
import Approach from './components/Approach'
import Mechanism from './components/Mechanism'
import Gallery from './components/Gallery'
import Firsts from './components/Firsts'
import Partnership from './components/Partnership'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Candidacy />
        <Approach />
        <Mechanism />
        <Gallery />
        <Firsts />
        <Partnership />
      </main>
      <Footer />
    </>
  )
}
