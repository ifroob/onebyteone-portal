import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Set page title
    document.title = 'onebyteone - Software Solutions One Byte at a Time';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'onebyteone delivers custom software solutions, web applications, and cloud consulting services. Helping businesses grow with scalable technology solutions one byte at a time.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'onebyteone delivers custom software solutions, web applications, and cloud consulting services. Helping businesses grow with scalable technology solutions one byte at a time.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'software development, web applications, CRM, AI health app, cloud consulting, custom software, React, Next.js, JavaScript');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'software development, web applications, CRM, AI health app, cloud consulting, custom software, React, Next.js, JavaScript';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set Open Graph tags
    const setOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.getElementsByTagName('head')[0].appendChild(ogTag);
      }
    };

    setOGTag('og:title', 'onebyteone - Software Solutions One Byte at a Time');
    setOGTag('og:description', 'Professional software development company specializing in custom web applications, CRM systems, AI health applications, and cloud consulting services.');
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.href);

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "onebyteone",
      "description": "Software development company specializing in custom solutions",
      "url": window.location.origin,
      "logo": "",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "contact@onebyteone.com"
      },
      "sameAs": [
        "https://linkedin.com/company/onebyteone",
        "https://twitter.com/onebyteone",
        "https://github.com/onebyteone"
      ],
      "services": [
        "Custom Software Development",
        "Web Application Development", 
        "Cloud Consulting",
        "CRM Development",
        "AI Application Development"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.getElementsByTagName('head')[0].appendChild(script);

  }, []);

  return null;
};

export default SEO;