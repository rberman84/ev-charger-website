import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GlobalSchema = () => {
  useEffect(() => {
    // GLOBAL FOOTER: JSON-LD injector for town pages
    const script = document.createElement('script');
    script.innerHTML = `
(function(){
  // ====== EDIT THESE ONCE ======
  const BRAND = {
    legalName: "EV Charger Installation Suffolk",
    name: "EV Charger Installation Suffolk",
    phone: "+1-516-361-4068",
    websiteRoot: "${window.location.origin}", // Dynamic domain
    street: "123 Main Street",
    city: "Ronkonkoma",
    region: "NY",
    postalCode: "11779",
    priceRange: "$$",
    logo: "/assets/hero-ev-charger.jpg",
    heroImage: "/assets/hero-ev-charger.jpg",
    latitude: 40.814,
    longitude: -73.112,
    sameAs: ["https://www.facebook.com/evchargerinstallationsuffolk"]
  };

  // Map slugs -> towns you publish
  const TOWNS = {
    "huntington":"Huntington","commack":"Commack","hauppauge":"Hauppauge","smithtown":"Smithtown",
    "stony-brook":"Stony Brook","port-jefferson":"Port Jefferson","babylon":"Babylon","islip":"Islip",
    "bay-shore":"Bay Shore","sayville":"Sayville","patchogue":"Patchogue","ronkonkoma":"Ronkonkoma",
    "brookhaven":"Brookhaven","farmingville":"Farmingville","holbrook":"Holbrook","riverhead":"Riverhead",
    "southampton":"Southampton","east-hampton":"East Hampton","montauk":"Montauk","shelter-island":"Shelter Island",
    "hempstead":"Hempstead"
  };

  // Detect town from URL: /service-areas/<slug>/ or /ev-charger-installation-<slug>/
  const path = location.pathname.replace(/\\/+$/,'');
  const forced = window.__TOWN_SLUG_OVERRIDE__ || null; // optional override
  const serviceAreaMatch = path.match(/\\/service-areas\\/([^/]+)$/i);
  const installationMatch = path.match(/\\/ev-charger-installation-([^/]+)$/i);
  
  let slug = null;
  if (forced) {
    slug = forced;
  } else if (serviceAreaMatch) {
    slug = serviceAreaMatch[1].toLowerCase();
  } else if (installationMatch) {
    slug = installationMatch[1].toLowerCase();
  }
  
  const town = slug && TOWNS[slug] ? TOWNS[slug] : null;

  // Build IDs/URLs
  const pageUrl = BRAND.websiteRoot + path + "/";
  const orgId = BRAND.websiteRoot + "/#org";
  const serviceId = pageUrl + "#service";

  // ------- LocalBusiness (site-wide) -------
  const localBusiness = {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "@id": orgId,
    "name": BRAND.name,
    "legalName": BRAND.legalName,
    "url": BRAND.websiteRoot,
    "telephone": BRAND.phone,
    "priceRange": BRAND.priceRange,
    "image": BRAND.websiteRoot + BRAND.heroImage,
    "logo": BRAND.websiteRoot + BRAND.logo,
    "address": {
      "@type":"PostalAddress",
      "streetAddress": BRAND.street,
      "addressLocality": BRAND.city,
      "addressRegion": BRAND.region,
      "postalCode": BRAND.postalCode,
      "addressCountry": "US"
    },
    "geo": { 
      "@type": "GeoCoordinates", 
      "latitude": BRAND.latitude, 
      "longitude": BRAND.longitude 
    },
    "serviceArea": {
      "@type":"GeoShape",
      "circle": "40.90 -72.90 35mi"  // Suffolk County coverage
    },
    "areaServed": [{"@type":"AdministrativeArea","name":"Suffolk County, NY"}],
    "sameAs": BRAND.sameAs,
    "knowsAbout": [
      "Level 2 EV charger installation","Panel upgrades","Load calculations",
      "Trenching and conduit runs","Smart charger setup","PSEG-LI rebates"
    ]
  };

  // ------- Service (per-page, town-targeted when available) -------
  const service = {
    "@context":"https://schema.org",
    "@type":"Service",
    "@id": serviceId,
    "serviceType": "EV Charger Installation",
    "name": "EV Charger Installation" + (town ? " in " + town : ""),
    "provider": {"@id": orgId},
    "url": pageUrl,
    "category": "electrician",
    "areaServed": [
      {"@type":"AdministrativeArea","name":"Suffolk County, NY"}
    ],
    "offers": {
      "@type":"Offer",
      "category":"EV charger installation",
      "availability":"https://schema.org/InStock",
      "priceSpecification": {"@type":"PriceSpecification","priceCurrency":"USD","minPrice":850,"maxPrice":1500}
    }
  };
  if(town){ service.areaServed.push({"@type":"City","name":town,"address":{"@type":"PostalAddress","addressRegion":"NY"}}); }

  // ------- Conditional FAQ (only if a .faq block exists on page) -------
  let faqNode = null;
  const faqEl = document.querySelector('.faq');
  if(faqEl){
    const defaultFAQ = [
      ["Do I need a permit for an EV charger in Suffolk County?","Most towns require a permit. We handle the application and inspection for you."],
      ["How long does installation take?","Typical Level 2 installs take 3–5 hours once on site."],
      ["What does it cost?","Most installs fall between $850–$1,500; panel upgrades add cost."]
    ];
    faqNode = {
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity": defaultFAQ.map(([q,a])=>({
        "@type":"Question","name":q,
        "acceptedAnswer":{"@type":"Answer","text":a}
      }))
    };
  }

  // ------- BreadcrumbList (navigation structure) -------
  let breadcrumbNode = null;
  if (town && slug) {
    // For town pages: Home > Service Areas > Town Name
    breadcrumbNode = {
      "@context":"https://schema.org",
      "@type":"BreadcrumbList",
      "itemListElement": [
        { 
          "@type": "ListItem", 
          "position": 1, 
          "name": "Home", 
          "item": BRAND.websiteRoot + "/" 
        },
        { 
          "@type": "ListItem", 
          "position": 2, 
          "name": "Service Areas", 
          "item": BRAND.websiteRoot + "/service-areas/" 
        },
        { 
          "@type": "ListItem", 
          "position": 3, 
          "name": "EV Charger Installation in " + town, 
          "item": pageUrl 
        }
      ]
    };
  } else if (path.includes('/service-areas')) {
    // For service areas main page: Home > Service Areas
    breadcrumbNode = {
      "@context":"https://schema.org",
      "@type":"BreadcrumbList",
      "itemListElement": [
        { 
          "@type": "ListItem", 
          "position": 1, 
          "name": "Home", 
          "item": BRAND.websiteRoot + "/" 
        },
        { 
          "@type": "ListItem", 
          "position": 2, 
          "name": "Service Areas", 
          "item": pageUrl 
        }
      ]
    };
  }

  // Inject helper
  function injectLD(obj){
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  injectLD(localBusiness);
  injectLD(service);
  if(faqNode) injectLD(faqNode);
  if(breadcrumbNode) injectLD(breadcrumbNode);

  // Optional: GA4 trace
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({event:"ld_injected", town: town || "generic", hasFAQ: !!faqEl, hasBreadcrumb: !!breadcrumbNode});
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