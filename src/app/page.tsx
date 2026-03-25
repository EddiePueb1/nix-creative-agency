import Hero from '../components/home/Hero';
import Expertise from '../components/home/Expertise';
import WhoWeHelp from '../components/home/WhoWeHelp';
import Services from '../components/home/Services';
import Results from '../components/home/Results';
import Insights from '../components/home/Insights';
import WhyNix from '../components/home/WhyNix';
import { ContactForm } from '../components/ui/ContactForm';
import { Container } from '../components/ui/Container';

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <WhoWeHelp />
      <Services />
      <Results />
      <Insights />
      <WhyNix />
      <Container className="py-24" id="contact">
        <ContactForm />
      </Container>
    </main>
  );
}
