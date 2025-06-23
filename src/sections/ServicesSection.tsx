import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, FileText, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    {
      id: "ai-job-interviewprep",
      icon: Mic,
      title: "AI Job InterviewPrep",
      description: "Préparez-vous efficacement aux entretiens d'embauche",
      features: [
        "Simulation d'entretien réaliste",
        "Feedback en temps réel",
        "Questions adaptées au poste",
        "Conseils personnalisés"
      ],
      color: "from-blue-500/10 to-purple-500/10",
      iconColor: "text-blue-600"
    },
    {
      id: "cv-generator",
      icon: FileText,
      title: "Générateur de CV",
      description: "Créez des CV professionnels adaptés au marché marocain",
      features: [
        "Modèles adaptés au marché local",
        "CV personnalisés selon le poste",
        "Export PDF professionnel",
        "Conseils d'amélioration"
      ],
      color: "from-green-500/10 to-teal-500/10",
      iconColor: "text-green-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span>Nos services phares</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Optimisez votre recherche d'emploi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez nos deux services innovants pour maximiser vos chances de succès
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                hoveredService === service.id ? 'border-primary/50 shadow-lg' : 'hover:border-primary/30'
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 ${
                hoveredService === service.id ? 'opacity-100' : ''
              }`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.color} transition-transform duration-300 ${
                    hoveredService === service.id ? 'scale-110' : ''
                  }`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor} transition-colors duration-300`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground">
                  {service.id === "ai-job-interviewprep" 
                    ? "Entraînez-vous avec notre simulateur qui reproduit des entretiens réels. Recevez des conseils personnalisés pour améliorer vos réponses et votre confiance."
                    : "Créez des CV professionnels et adaptés au marché marocain. Notre outil vous guide pour mettre en valeur vos compétences et expériences."
                  }
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full group transition-all duration-300 ${
                    hoveredService === service.id ? 'shadow-lg' : ''
                  }`}
                  onClick={() => {
                    if (service.id === "ai-job-interviewprep") {
                      window.open('https://nexthire-omega.vercel.app/', '_blank')
                    } else {
                      window.open('http://localhost:5173', '_blank')
                    }
                  }}
                >
                  {service.id === "ai-job-interviewprep" ? "Essayer AI Job InterviewPrep" : "Créer mon CV"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prêt à transformer votre carrière ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Rejoignez des milliers de candidats qui ont déjà amélioré leurs chances 
              de décrocher le job de leurs rêves avec NextHire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Sparkles className="mr-2 h-5 w-5" />
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 