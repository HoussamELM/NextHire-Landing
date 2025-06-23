import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Full-Stack",
      company: "TechCorp",
      content: "Grâce à AI Job InterviewPrep, j'ai pu m'entraîner pour mon entretien chez Google. Le feedback était incroyablement précis et j'ai décroché le poste ! L'agent vocal est si réaliste qu'on oublie qu'on parle à une IA.",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Thomas Martin",
      role: "Chef de Projet",
      company: "InnovateLab",
      content: "Le générateur de CV IA a créé un CV parfaitement adapté au poste que je visais. En 2 semaines, j'ai eu 3 entretiens ! La qualité est professionnelle et le processus est très simple.",
      rating: 5,
      avatar: "TM"
    },
    {
      name: "Sophie Bernard",
      role: "UX Designer",
      company: "DesignStudio",
      content: "L'agent vocal est si réaliste ! J'ai pu pratiquer mes réponses sans stress et améliorer ma confiance en moi. Le feedback détaillé m'a permis d'identifier mes points d'amélioration.",
      rating: 5,
      avatar: "SB"
    },
    {
      name: "Alexandre Moreau",
      role: "Data Scientist",
      company: "DataFlow",
      content: "NextHire m'a vraiment aidé à me préparer pour mon entretien. Les questions étaient pertinentes et le feedback constructif. Je recommande vivement !",
      rating: 5,
      avatar: "AM"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ce que disent nos utilisateurs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez les témoignages de candidats qui ont transformé leur carrière avec NextHire
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="mt-16 hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300" />
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} chez {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-16 md:hidden">
          <div className="relative">
            <Card className="relative group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[currentIndex].role} chez {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full bg-background px-4 py-2 text-sm font-medium shadow-sm">
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span>Plus de 500+ candidats ont déjà amélioré leurs chances avec NextHire</span>
          </div>
        </div>
      </div>
    </section>
  )
} 