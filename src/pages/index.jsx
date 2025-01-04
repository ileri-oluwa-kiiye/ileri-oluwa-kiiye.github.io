import Hero from "../comp/LandingPage/hero"
import News from "../comp/LandingPage/news"
import Experience from "../comp/LandingPage/experience"
import Projects from "../comp/LandingPage/projects"
import Footer from "../comp/LandingPage/footer"
import Nav from "../comp/LandingPage/nav"

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <News />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default LandingPage