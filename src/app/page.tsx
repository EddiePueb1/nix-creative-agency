import Hero from '../components/home/Hero';
import Expertise from '../components/home/Expertise';
import Results from '../components/home/Results';
import Services from '../components/home/Services';
import Insights from '../components/home/Insights';
import { ContactForm } from '../components/ui/ContactForm';
import { Container } from '../components/ui/Container';

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <Services />
      <Results />
      <Insights />
      <Container className="py-24">
        <ContactForm />
      </Container>
    </main>
  );
}
