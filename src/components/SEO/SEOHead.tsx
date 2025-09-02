import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEOHead = ({
  title = "EV Charger Installation Long Island | PowerUp EV - #1 Tesla & Home Charging Experts",
  description = "Professional EV charger installation throughout Long Island. Licensed experts in Tesla, home & commercial EV charging stations. Serving Nassau & Suffolk Counties. Free estimates!",
  keywords = "EV charger installation Long Island, Tesla charger installation, home EV charging station, electric vehicle charger Nassau County, Suffolk County EV installation",
  canonicalUrl,
  ogImage = "/og-image.jpg",
  schemaData
}: SEOHeadProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PowerUp EV Long Island" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PowerUp EV Long Island" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Local Business Information */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="Long Island" />
      <meta name="geo.position" content="40.7891;-73.1350" />
      <meta name="ICBM" content="40.7891, -73.1350" />
      
      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;