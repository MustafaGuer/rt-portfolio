import GreetingSection from "./Greeting/Greeting";
import About from "./About/About";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <GreetingSection />
      <About />
      <Works />
      <Contact />
    </>
  );
};

export default Home;