export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Atlas Intelligence",
            "alternateName": ["Atlas AI", "Atlas Education App"],
            "description": "An AI-powered educational platform developed by Atlas Group that helps students and educators with advanced learning tools and curriculum support.",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "iOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP"
            },
            "featureList": [
              "AI Q&A Engine",
              "Smart Quiz Generator",
              "Flashcard Maker",
              "Essay Support",
              "Past Paper Locator",
              "Enhanced Thinking",
              "Deep Research",
              "Curriculum Alignment"
            ],
            "creator": {
              "@type": "Organization",
              "name": "Atlas Group",
              "url": "https://www.atlasintel.co.uk"
            },
            "keywords": "Atlas Intelligence, Atlas AI, Atlas Education, Atlas Group, AI in education, educational technology"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Atlas Group",
            "alternateName": ["Atlas Intelligence", "Atlas AI", "Atlas Education"],
            "url": "https://www.atlasintel.co.uk",
            "logo": "https://i.postimg.cc/6QnyBL8X/Atlas-Intelligence-Gold.png",
            "description": "Atlas Group develops innovative AI-powered educational technology solutions to transform learning experiences for students and educators.",
            "sameAs": [
              "https://twitter.com/atlas_groupai",
              "https://www.instagram.com/atlas_group_intelligence"
            ],
            "foundingDate": "2023",
            "foundingLocation": "United Kingdom",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "support@atlasintel.co.uk"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.atlasintel.co.uk",
            "name": "Atlas Intelligence by Atlas Group",
            "description": "Official website for Atlas Intelligence, the AI-powered education platform developed by Atlas Group."
          }
        ])
      }}
    />
  );
}
