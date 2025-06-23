import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Zap, Brain, Smartphone } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Mic,
      title: "Simulation réaliste",
      description: "Entraînez-vous avec des entretiens qui reproduisent fidèlement les conditions réelles du marché marocain."
    },
    {
      icon: Zap,
      title: "Feedback immédiat",
      description: "Recevez des conseils instantanés et personnalisés pour améliorer vos réponses et votre présentation."
    },
    {
      icon: Brain,
      title: "CV adaptés au marché local",
      description: "Nos modèles sont conçus pour répondre aux attentes des recruteurs marocains et internationaux."
    },
    {
      icon: Smartphone,
      title: "Interface intuitive",
      description: "Une expérience simple et efficace, accessible depuis tous vos appareils, où que vous soyez."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pourquoi nous choisir
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez les avantages qui font de NextHire la solution idéale pour votre carrière
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prêt à transformer votre carrière ?
            </h3>
            <p className="text-lg text-muted-foreground">
              Rejoignez des milliers de candidats qui ont déjà amélioré leurs chances 
              de décrocher le job de leurs rêves avec NextHire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 