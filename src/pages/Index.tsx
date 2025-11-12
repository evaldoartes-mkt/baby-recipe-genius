import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Shield, Clock, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/baby-eating-hero.jpg";
import babyFirstFood from "@/assets/baby-first-food.jpg";
import babyHappyMeal from "@/assets/baby-happy-meal.jpg";
import babyMessyFace from "@/assets/baby-messy-face.jpg";

const AFFILIATE_LINK = "https://go.hotmart.com/P102760337U?redirectionUrl=https%3A%2F%2Fcrescendosaudavel.com.br%2Freceitas-para-bebes-black-novembro";
const CHECKOUT_LINK = "https://go.hotmart.com/P102760337U?ap=9f82&redirectionUrl=https%3A%2F%2Fpay.hotmart.com%2FH86343822E%3Foff%3Dy77ya5bk%26checkoutMode%3D10";

const Index = () => {
  const handleCTAClick = () => {
    // Google Analytics conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'G-XXXXXXXXXX/conversion',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    window.open(CHECKOUT_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Star className="w-4 h-4 fill-primary" />
                <span>Aprovado por +10.000 famílias</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                337 Receitas para Alimentar seu Bebê com{" "}
                <span className="text-primary">Saúde e Praticidade</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                A solução completa criada por uma mãe pesquisadora que já passou pelas suas dúvidas. 
                Receitas nutritivas, simples e testadas por milhares de famílias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  onClick={handleCTAClick}
                >
                  Quero as 337 Receitas Agora!
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  asChild
                >
                  <a href="#beneficios">Saiba Mais</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Acesso imediato</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Bebê feliz comendo alimentos saudáveis"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">337</div>
                <div className="text-sm">Receitas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Veja como é fácil transformar a alimentação do seu bebê
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card">
              {/* Placeholder for video - replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center mx-auto">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
                  </div>
                  <p className="text-muted-foreground">Vídeo em breve</p>
                </div>
              </div>
              {/* Replace the div above with actual video embed:
              <iframe
                className="w-full h-full"
                src="YOUR_VIDEO_URL"
                title="Vídeo de Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Por que escolher nossas receitas?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "337 Receitas Completas",
                description: "Desde os 6 meses até a fase pré-escolar"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Testadas e Aprovadas",
                description: "Por mais de 10.000 famílias brasileiras"
              },
              {
                icon: <Check className="w-8 h-8" />,
                title: "Simples e Práticas",
                description: "Receitas fáceis para o dia a dia corrido"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Bônus Exclusivos",
                description: "Guias extras para facilitar sua rotina"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { img: babyFirstFood, title: "Primeiras Papinhas", desc: "Introdução alimentar segura e nutritiva" },
              { img: babyHappyMeal, title: "Refeições Completas", desc: "Nutrição balanceada em cada prato" },
              { img: babyMessyFace, title: "Alegria Garantida", desc: "Sabores que seu bebê vai adorar" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 group-hover:shadow-[var(--shadow-soft)] transition-all duration-300">
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            O que você vai receber
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "337 receitas nutritivas organizadas por faixa etária",
              "Guia completo de introdução alimentar",
              "Receitas para alergias e restrições alimentares",
              "Cardápios semanais prontos",
              "Dicas de congelamento e armazenamento",
              "Lista de compras organizada",
              "Acesso vitalício com atualizações gratuitas",
              "Suporte via email para suas dúvidas"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            O que as mães estão dizendo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Essas receitas salvaram meu dia a dia! Meu bebê come de tudo agora e eu não fico mais perdida na cozinha.",
                rating: 5
              },
              {
                name: "Ana Paula",
                text: "Adorei a organização por idade e as receitas são realmente práticas. Vale muito a pena!",
                rating: 5
              },
              {
                name: "Juliana Santos",
                text: "Meu filho tinha muita dificuldade para comer. Com essas receitas ele ficou interessado na comida. Obrigada!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Você tem 7 dias para testar todas as receitas. Se por qualquer motivo você não ficar satisfeita, 
              devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Comece Hoje a Transformar a Alimentação do seu Bebê
            </h2>
            <p className="text-xl text-muted-foreground">
              Acesso imediato após a compra. Comece a usar as receitas ainda hoje!
            </p>
            
            <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-primary/20">
              <div className="text-sm text-muted-foreground mb-2">Investimento único de</div>
              <div className="text-5xl font-bold text-primary mb-6">R$ 39,90</div>
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 w-full md:w-auto"
                onClick={handleCTAClick}
              >
                Garantir Meu Acesso Agora
              </Button>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Compra 100% segura</span>
                <span>•</span>
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Receitas para Bebês. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="hover:text-foreground transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
