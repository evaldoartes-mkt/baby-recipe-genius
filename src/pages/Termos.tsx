import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Termos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8 text-foreground">Termos de Serviço</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <p className="text-muted-foreground mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p>
              Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e 
              condições deste Termo de Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Definições</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Produto:</strong> Refere-se ao e-book "337 Receitas para Bebês" e todos os materiais bônus incluídos</li>
              <li><strong>Serviço:</strong> Refere-se ao acesso ao produto digital e suporte fornecido</li>
              <li><strong>Usuário/Cliente:</strong> Qualquer pessoa que acesse ou utilize nosso site e serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Uso do Produto</h2>
            <p className="mb-4">
              Ao adquirir nosso produto, você recebe uma licença pessoal e intransferível para uso 
              do material. É expressamente proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Compartilhar, distribuir ou revender o conteúdo</li>
              <li>Reproduzir ou copiar o material para uso comercial</li>
              <li>Modificar ou criar trabalhos derivados sem autorização</li>
              <li>Remover marcas d'água ou avisos de direitos autorais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site e do produto, incluindo textos, gráficos, imagens, receitas e 
              materiais, são protegidos por direitos autorais e são propriedade exclusiva do autor. 
              O uso não autorizado pode resultar em ação legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compra e Pagamento</h2>
            <p className="mb-4">
              Todos os pagamentos são processados através da plataforma Hotmart, que garante a 
              segurança das transações. Ao realizar uma compra:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Você concorda em fornecer informações de pagamento verdadeiras e completas</li>
              <li>Você autoriza o processamento da transação</li>
              <li>Os preços estão sujeitos a alterações sem aviso prévio</li>
              <li>O acesso ao produto é concedido imediatamente após a confirmação do pagamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Política de Garantia e Reembolso</h2>
            <p className="mb-4">
              Oferecemos uma garantia incondicional de 7 dias a partir da data de compra:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Você pode solicitar reembolso total dentro de 7 dias</li>
              <li>Não é necessário justificar o motivo do reembolso</li>
              <li>O reembolso será processado pela Hotmart em até 30 dias</li>
              <li>Após o reembolso, o acesso ao produto será revogado</li>
            </ul>
            <p className="mt-4">
              Para solicitar reembolso, entre em contato através do suporte da Hotmart ou do email 
              fornecido no momento da compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Entrega do Produto</h2>
            <p>
              O produto é digital e será entregue imediatamente após a confirmação do pagamento através 
              de email. É responsabilidade do cliente:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Fornecer um endereço de email válido</li>
              <li>Verificar a caixa de spam/lixo eletrônico</li>
              <li>Manter as credenciais de acesso em segurança</li>
              <li>Baixar e salvar o material em local seguro</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Isenção de Responsabilidade</h2>
            <p className="mb-4">
              O conteúdo fornecido é apenas para fins informativos e educacionais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Não substituímos orientação médica ou nutricional profissional</li>
              <li>Consulte sempre um pediatra antes de introduzir novos alimentos</li>
              <li>Não nos responsabilizamos por reações alérgicas ou problemas de saúde</li>
              <li>Os resultados podem variar de acordo com cada criança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos, incidentais, 
              especiais ou consequenciais resultantes do uso ou incapacidade de usar nosso produto ou serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Suporte ao Cliente</h2>
            <p>
              Fornecemos suporte por email para questões relacionadas ao acesso e uso do produto. 
              O tempo de resposta é de até 48 horas úteis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo 
              conteúdo ou práticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Modificações dos Termos</h2>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações 
              entram em vigor imediatamente após a publicação. O uso continuado do site após as 
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Rescisão</h2>
            <p>
              Podemos suspender ou encerrar seu acesso ao produto e serviço imediatamente, sem aviso 
              prévio, se houver violação destes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Lei Aplicável</h2>
            <p>
              Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer 
              disputa será resolvida nos tribunais brasileiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contato</h2>
            <p>
              Para questões sobre estes Termos de Serviço, entre em contato através do email 
              fornecido no momento da compra ou através do suporte da Hotmart.
            </p>
          </section>

          <section className="bg-muted/30 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3">Aceitação dos Termos</h3>
            <p>
              Ao realizar uma compra ou usar nossos serviços, você declara que leu, entendeu e 
              concordou com estes Termos de Serviço e nossa Política de Privacidade.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Termos;
