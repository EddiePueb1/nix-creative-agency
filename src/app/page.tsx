import Hero from '../components/home/Hero';
import Expertise from '../components/home/Expertise';
import Results from '../components/home/Results';
import Services from '../components/home/Services';
import Insights from '../components/home/Insights';

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <Services />
      <Results />
      <Insights />
    </main>
  );
}
