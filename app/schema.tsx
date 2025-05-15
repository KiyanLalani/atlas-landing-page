export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "Atlas Intelligence",
          "description": "An AI-powered educational iOS app that helps students study smarter with flashcards, web search, and curriculum support.",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "iOS",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "512"
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
            "url": "https://www.atlas-group.uk"
          },
          "potentialAction": {
            "@type": "DownloadAction",
            "target": "https://apps.apple.com/app/atlas-intelligence/id123456789"
          }
        })
      }}
    />
  );
} 