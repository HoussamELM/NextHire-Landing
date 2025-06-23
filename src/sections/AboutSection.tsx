export function AboutSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            À propos de NextHire
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            NextHire est une plateforme innovante qui révolutionne la préparation aux entretiens d'embauche 
            et la création de CV au Maroc. Nous utilisons les technologies les plus avancées pour vous donner 
            un avantage concurrentiel sur le marché du travail local.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 rounded-full bg-background px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span>Simulation d'entretien réaliste</span>
            </div>
            <div className="flex items-center space-x-2 rounded-full bg-background px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span>CV adaptés au marché marocain</span>
            </div>
            <div className="flex items-center space-x-2 rounded-full bg-background px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span>Feedback personnalisé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 