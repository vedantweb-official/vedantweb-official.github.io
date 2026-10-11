import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES_DATA } from "@/data/cities";
import CityLandingClient from "./CityLandingClient";

interface CityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// SSG: Pre-generate physical static HTML pages for all Indian cities at build time!
export async function generateStaticParams() {
  return CITIES_DATA.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = CITIES_DATA.find((c) => c.slug === slug);

  if (!city) {
    return { title: "City Not Found | Vedant Web" };
  }

  return {
    title: `Best Web Agency & Website Developers in ${city.name} | Website design in 501/- Only | Vedant Web`,
    description: `Looking for top website developers in ${city.name}, ${city.state}? Special offer: Website design in 501/- Only. Mobile-first, Google local SEO, and 48-hour delivery.`,
    keywords: [
      `web agency in ${city.name}`,
      `website developer in ${city.name}`,
      `website design in 501 ${city.name}`,
      `web development company ${city.name}`,
      `low cost web designer in ${city.name}`,
      `best website developers near me ${city.name}`,
    ],
    openGraph: {
      title: `Website Developers in ${city.name} — Website design in 501/- Only`,
      description: `Fast, modern, and SEO-optimized web development for businesses in ${city.name}.`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = CITIES_DATA.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  // Schema.org Structured Data for Local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Vedant Web — Web Agency in ${city.name}`,
    description: `Professional website and web application development services in ${city.name}, ${city.state}. ${city.tagline}.`,
    url: `https://portfolio.kshitiz.store/city/${city.slug}`,
    telephone: "+91-9140448004",
    email: "vedantwebofficial@gmail.com",
    priceRange: "₹501 - ₹15000",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    openingHours: "Mo-Sa 09:00-20:00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CityLandingClient city={city} />
    </>
  );
}
