import { ContactForm } from '@/components/ui/ContactForm';
import { Container } from '@/components/ui/Container';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
