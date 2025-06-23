import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, value: "200+", label: "Candidats formés" },
    { icon: TrendingUp, value: "78%", label: "Taux de réussite" },
    { icon: Award, value: "4.7/5", label: "Note utilisateurs" }
  ]

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="text-gradient font-semibold">Nouveau : Préparation d'entretien intelligente</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Réussissez vos entretiens.
            <span className="block text-gradient mt-2">Décrochez le job de vos rêves.</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Préparez-vous efficacement aux entretiens d'embauche et créez des CV professionnels 
            qui vous démarquent sur le marché du travail marocain.
          </p>
          
          {/* CTA Buttons */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Button 
              size="lg" 
              className="group text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://nexthire-omega.vercel.app/', '_blank')}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Essayer AI Job InterviewPrep
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Secondary CTA */}
          <div className={`mt-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Button 
              variant="ghost" 
              size="lg" 
              className="group text-lg hover:text-primary transition-all duration-300"
              onClick={() => window.open('http://localhost:5173', '_blank')}
            >
              Créer mon CV
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary gradient blob */}
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div 
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-secondary/20 opacity-20 animate-pulse" 
            style={{ 
              clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' 
            }} 
          />
        </div>
        
        {/* Secondary gradient blob */}
        <div className="absolute right-[calc(50%-4rem)] bottom-10 -z-10 transform-gpu blur-3xl sm:right-[calc(50%-18rem)] lg:right-48 lg:bottom-[calc(50%-30rem)] xl:right-[calc(50%-24rem)]">
          <div 
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-l from-primary/10 to-secondary/10 opacity-30 animate-pulse delay-1000" 
            style={{ 
              clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' 
            }} 
          />
        </div>
      </div>
    </section>
  )
} 