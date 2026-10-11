import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/data/industries";
import IndustryLandingClient from "./IndustryLandingClient";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// SSG: Pre-render static HTML pages for all business industries at build time!
export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!ind) {
    return { title: "Industry Not Found | Vedant Web" };
  }

  return {
    title: `Web Development for ${ind.name} | Website design in 501/- Only | Vedant Web`,
    description: `Specialized website design, portals, and lead systems built for ${ind.name}. Special promotion: Website design in 501/- Only. Mobile-first UX and 48-hour prototype delivery.`,
    keywords: [
      `web development for ${ind.name}`,
      `website design ${ind.name}`,
      `website design in 501 ${ind.name}`,
      `best website agency for ${ind.name}`,
      `web portal for ${ind.name}`,
    ],
    openGraph: {
      title: `Web Development for ${ind.name} — Website design in 501/- Only`,
      description: `Bespoke websites and portals engineered for ${ind.name}.`,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const ind = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!ind) {
    notFound();
  }

  return (
    <IndustryLandingClient
      industry={ind}
    />
  );
}
