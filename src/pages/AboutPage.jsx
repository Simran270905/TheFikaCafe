import AboutSection from "../components/About/AboutSection";
import AboutImg from "../../src/assets/image/about.jpg"; 
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";

export default function About() {
  return (
    <>
        <Navbar/>
      <AboutSection
        title="About"
        subtitle="Coffee Club"
        text="I'm a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and 
              make changes to the font."
        imageLeft={false}
        image={AboutImg}
        
      />
      <Newsletter/>
    </>
  );
}
