import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Prêt à transformer votre carrière ?
            </h2>
          </div>
          
          <p className="text-xl text-primary-foreground/90 mb-8">
            Rejoignez des milliers de candidats qui ont déjà amélioré leurs chances 
            de décrocher le job de leurs rêves avec NextHire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group text-lg px-8 py-4"
              onClick={() => window.open('https://nexthire-omega.vercel.app/', '_blank')}
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-primary-foreground/70">
            Aucune carte de crédit requise • Essai gratuit de 7 jours
          </p>
        </div>
      </div>
    </section>
  )
} 