import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8 text-foreground">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <p className="text-muted-foreground mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais 
              quando você visita nosso site e adquire nossos produtos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Nome e endereço de email fornecidos voluntariamente</li>
              <li>Informações de pagamento processadas por nosso gateway de pagamento seguro (Hotmart)</li>
              <li>Dados de navegação através de cookies e ferramentas de análise (Google Analytics)</li>
              <li>Endereço IP e informações do dispositivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
            <p className="mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Processar e entregar seu pedido</li>
              <li>Enviar emails transacionais relacionados à sua compra</li>
              <li>Melhorar nosso site e experiência do usuário</li>
              <li>Enviar comunicações de marketing (você pode cancelar a inscrição a qualquer momento)</li>
              <li>Analisar o desempenho de nossas campanhas publicitárias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Utilizamos cookies e tecnologias similares, incluindo o Google Analytics e Google Ads, para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Analisar o tráfego do site e comportamento dos usuários</li>
              <li>Personalizar sua experiência</li>
              <li>Medir a eficácia de nossas campanhas publicitárias</li>
              <li>Realizar remarketing e exibir anúncios relevantes</li>
            </ul>
            <p className="mt-4">
              Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar 
              a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
            <p className="mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar seus dados com:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Processadores de pagamento (Hotmart) para processar transações</li>
              <li>Provedores de serviços de email para comunicações</li>
              <li>Google Analytics e Google Ads para análise e publicidade</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="mb-4">De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Publicidade do Google</h2>
            <p>
              Utilizamos o Google Ads e recursos de remarketing. Isso significa que fornecedores terceirizados, 
              incluindo o Google, podem exibir nossos anúncios em sites na internet. O Google utiliza cookies 
              para veicular anúncios com base em visitas anteriores ao nosso site.
            </p>
            <p className="mt-4">
              Você pode desativar o uso de cookies do Google visitando as{" "}
              <a 
                href="https://policies.google.com/technologies/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Configurações de anúncios do Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
              descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Menores de Idade</h2>
            <p>
              Nosso site e serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente 
              informações pessoais de menores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
              alterações significativas publicando a nova política nesta página com uma nova data de 
              "Última atualização".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, 
              entre em contato conosco através do email fornecido no momento da compra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidade;
