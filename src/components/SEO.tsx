import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function SEO({ 
  title = "NextHire - Réussissez vos entretiens avec l'IA",
  description = "NextHire combine agents vocaux IA et génération de CV intelligente pour booster votre carrière. Entraînez-vous avec des simulations réalistes et créez des CV parfaits.",
  keywords = "entretien, IA, CV, carrière, emploi, recrutement, préparation entretien, agent vocal",
  image = "/og-image.jpg",
  url = "https://nexthire.com",
  type = "website"
}: SEOProps) {
  const fullTitle = title === "NextHire - Réussissez vos entretiens avec l'IA" 
    ? title 
    : `${title} | NextHire`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('author', 'NextHire')
    updateMetaTag('theme-color', '#3b82f6')

    // Open Graph tags
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:title', fullTitle, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:site_name', 'NextHire', true)
    updateMetaTag('og:locale', 'fr_FR', true)

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:url', url, true)
    updateMetaTag('twitter:title', fullTitle, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Add structured data
    const addStructuredData = (data: object) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    }

    // Organization structured data
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NextHire",
      "url": "https://nexthire.com",
      "logo": "https://nexthire.com/logo.png",
      "description": description,
      "sameAs": [
        "https://twitter.com/nexthire",
        "https://linkedin.com/company/nexthire"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-1-XX-XX-XX-XX",
        "contactType": "customer service",
        "email": "contact@nexthire.com"
      }
    })

    // Website structured data
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NextHire",
      "url": "https://nexthire.com",
      "description": description,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nexthire.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })

    // Cleanup function
    return () => {
      // Remove structured data scripts on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(script => {
        if (script.textContent?.includes('NextHire')) {
          script.remove()
        }
      })
    }
  }, [title, description, keywords, image, url, type, fullTitle])

  return null
} 