import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GlobalSchema = () => {
  useEffect(() => {
    // Global JSON-LD auto-injection script
    const script = document.createElement('script');
    script.innerHTML = `
(function(){
  // BRAND CONFIG - Update these details
  const BRAND = {
    name: "EV Charger Installation Suffolk",
    legalName: "EV Charger Installation Suffolk", 
    domain: "evchargerinstallationsuffolk.com",
    phone: "+1-516-361-4068",
    email: "info@evchargerinstallationsuffolk.com",
    address: {
      street: "123 Main Street",
      city: "Ronkonkoma", 
      state: "NY",
      zip: "11779",
      country: "US"
    },
    image: "https://evchargerinstallationsuffolk.com/og-image-ev-charger.jpg",
    socialProfiles: [
      "https://www.facebook.com/evchargerinstallationsuffolk"
    ]
  };

  // TOWNS - Add all your service areas here
  const TOWNS = {
    "ronkonkoma": "Ronkonkoma",
    "patchogue": "Patchogue", 
    "smithtown": "Smithtown",
    "huntington": "Huntington",
    "hempstead": "Hempstead",
    "islip": "Islip",
    "brookhaven": "Brookhaven",
    "stony-brook": "Stony Brook",
    "riverhead": "Riverhead"
  };

  // Detect current page type
  const forced = window.__TOWN_SLUG_OVERRIDE__;
  const m = forced ? [null, forced] : location.pathname.match(/\\/service-areas\\/([^/]+)\\/?$/i);
  const townSlug = m ? m[1] : null;
  const townName = townSlug ? TOWNS[townSlug] : null;
  
  // Base LocalBusiness schema
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": "https://" + BRAND.domain + "/#org",
    "name": BRAND.name,
    "legalName": BRAND.legalName,
    "url": "https://" + BRAND.domain,
    "telephone": BRAND.phone,
    "email": BRAND.email,
    "priceRange": "$$",
    "image": BRAND.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip,
      "addressCountry": BRAND.address.country
    },
    "areaServed": [
      {"@type": "AdministrativeArea", "name": "Suffolk County, NY"},
      {"@type": "AdministrativeArea", "name": "Nassau County, NY"}
    ],
    "sameAs": BRAND.socialProfiles,
    "knowsAbout": [
      "Level 2 EV charger installation",
      "Tesla Wall Connector installation", 
      "Panel upgrades and load calculations",
      "Trenching and conduit runs",
      "Smart charger setup and WiFi configuration",
      "PSEG-LI rebates and permits",
      "Commercial EV charging stations"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.8176,
        "longitude": -73.0417
      },
      "geoRadius": 50000
    }
  };

  // Schema graph to inject
  let schemaGraph = [localBusiness];

  // Add town-specific Service schema if on a town page
  if (townName && townSlug) {
    const townService = {
      "@type": "Service",
      "@id": "https://" + BRAND.domain + "/service-areas/" + townSlug + "/#service",
      "serviceType": "EV Charger Installation",
      "name": "EV Charger Installation in " + townName,
      "description": "Professional EV charger installation services in " + townName + ", NY. Licensed electricians specializing in Level 2 home charging stations.",
      "provider": {"@id": "https://" + BRAND.domain + "/#org"},
      "areaServed": [
        {"@type": "AdministrativeArea", "name": "Suffolk County, NY"},
        {"@type": "City", "name": townName, "address": {"@type": "PostalAddress", "addressRegion": "NY"}}
      ],
      "url": "https://" + BRAND.domain + "/service-areas/" + townSlug + "/",
      "category": "electrician",
      "offers": {
        "@type": "Offer",
        "category": "EV charger installation",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": 850,
          "maxPrice": 1500
        }
      }
    };
    schemaGraph.push(townService);

    // Add FAQ schema for town pages
    const faqSchema = {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a permit for an EV charger in " + townName + "?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most towns in Suffolk County require a permit for EV charger installation. We handle the permit application and inspection process for you to ensure code compliance."
          }
        },
        {
          "@type": "Question", 
          "name": "How long does EV charger installation take in " + townName + "?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical Level 2 EV charger installations take 3-5 hours once on site. This includes electrical work, mounting, and testing. Panel upgrades may require additional time."
          }
        },
        {
          "@type": "Question",
          "name": "What does EV charger installation cost in " + townName + "?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Most EV charger installations range from $850 to $1,500. Panel upgrades typically add $1,500-$3,000. We provide free estimates with transparent pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle PSEG-LI rebates for " + townName + " residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we help " + townName + " residents navigate PSEG-LI rebate programs and can assist with rebate applications to reduce your installation costs."
          }
        }
      ]
    };
    schemaGraph.push(faqSchema);
  }

  // Create and inject the JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  };

  // Remove any existing auto-injected schema
  const existing = document.querySelector('script[data-schema="auto-injected"]');
  if (existing) existing.remove();

  // Inject new schema
  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.setAttribute('data-schema', 'auto-injected');
  schemaScript.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(schemaScript);

  // GA4 tracking (optional)
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function track(ev, data) { 
      window.dataLayer.push({event: ev, ...data}); 
    }
    
    const trackingTown = townSlug || 'generic';
    track('ld_injected', { 
      town: trackingTown,
      schema_types: schemaGraph.map(s => s['@type']).join(','),
      page_type: townSlug ? 'town_page' : 'general_page'
    });
  }

  console.log('Global Schema injected for:', townSlug || 'general page', schemaGraph.length, 'schemas');
})();
`;

    // Append to head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <Helmet>
      {/* Additional meta tags for better SEO */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="Suffolk County" />
      <meta name="geo.position" content="40.8176;-73.0417" />
      <meta name="ICBM" content="40.8176, -73.0417" />
    </Helmet>
  );
};

export default GlobalSchema;