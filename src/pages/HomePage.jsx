import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/Work";
import AboutSection from "../components/Home/About";
import SubscriptionPlans from "../components/Home/Subscription";
import CoffeeStory from "../components/Home/Coffee";
import Newsletter from "../components/Home/Newsletter";
import Animation from "../components/Home/Animation";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 mt-20">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AboutSection />
      <Animation/>
      <SubscriptionPlans />
      <CoffeeStory />
      <Newsletter />
    </div>
  );
}
