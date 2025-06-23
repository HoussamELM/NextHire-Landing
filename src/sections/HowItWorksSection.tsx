import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, FileText } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En quelques étapes simples, améliorez vos chances de décrocher le job de vos rêves
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Prepwise Process */}
          <div>
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Mic className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">AI Job InterviewPrep</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle className="text-lg">Choisir un poste</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sélectionnez le type de poste pour lequel vous souhaitez vous entraîner
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle className="text-lg">Simuler un entretien</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Répondez aux questions de notre agent vocal IA en temps réel
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle className="text-lg">Recevoir un feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Obtenez un feedback détaillé et des conseils d'amélioration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CV Generator Process */}
          <div>
            <div className="flex items-center justify-center space-x-3 mb-8">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Générateur de CV IA</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle className="text-lg">Renseigner ses infos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complétez votre profil avec vos expériences et compétences
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle className="text-lg">Générer le CV</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Notre IA crée un CV professionnel adapté au poste ciblé
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle className="text-lg">Télécharger le PDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez votre CV au format PDF prêt à envoyer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 