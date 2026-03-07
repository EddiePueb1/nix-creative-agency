import ServiceHero from '@/components/services/ServiceHero';
import ServiceIndustries from '@/components/services/ServiceIndustries';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceWork from '@/components/services/ServiceWork';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import ServiceStats from '@/components/services/ServiceStats';
import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const resolvedParams = await params;
  const currentServiceId = resolvedParams.serviceId.toLowerCase();
  const data = servicesData[currentServiceId];

  // Next.js handles 404s gracefully
  if (!data) {
    notFound();
  }

  return (
    <main className="pt-32">
      <ServiceHero data={data.hero} />
      <ServiceIndustries industries={data.industries} />
      <ServiceApproach data={data.approach} />
      <ServiceWork data={data.work} />
      <ServiceCapabilities data={data.capabilities} />
      <ServiceStats data={data.stats} />
    </main>
  );
}
