import { useState } from 'react';
import { Sparkles, Home, Building2, CheckCircle2, Phone, Mail, MapPin, Sofa, Car, Hammer } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá Horebe, gostaria de um orçamento grátis.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nLocalização: ${formData.location}\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/258876681940?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', service: '', location: '', message: '' });
  };

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Limpeza Residencial',
      description: 'Limpeza geral de casas e apartamentos, limpeza profunda e limpeza pós-eventos.'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Limpeza Comercial',
      description: 'Soluções profissionais para escritórios, lojas, empresas e condomínios.'
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Limpeza Pós-Obra',
      description: 'Remoção de resíduos, limpeza pesada e preparação para entrega.'
    },
    {
      icon: <Sofa className="w-12 h-12" />,
      title: 'Lavagem de Estofos',
      description: 'Lavagem profissional de sofás, colchões, tapetes e cadeiras.'
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Carwash Horebe Shine',
      description: 'Lavagem de viaturas simples e completa, lavagem a seco e polimento básico.'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Serviços Personalizados',
      description: 'Soluções sob medida para atender às suas necessidades específicas.'
    }
  ];

  const values = [
    { title: 'Responsabilidade', description: 'Comprometidos com cada tarefa' },
    { title: 'Qualidade', description: 'Excelência em cada detalhe' },
    { title: 'Pontualidade', description: 'Cumprimento rigoroso de prazos' },
    { title: 'Confiança', description: 'Transparência nas relações' },
    { title: 'Sustentabilidade', description: 'Respeito ao meio ambiente' }
  ];

  return (
    <div className="size-full bg-background text-foreground overflow-y-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-xl">Horebe Limpezas</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Início</a>
              <a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a>
              <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
            </nav>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary/5 to-accent/20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Horebe Limpezas e Serviços
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Qualidade, Confiança e Excelência em Cada Detalhe. Transformamos espaços, valorizamos ambientes!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Solicitar Orçamento Grátis
                </a>
                <a
                  href="#services"
                  className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Ver Serviços
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">

                <div>
                  <div className="text-3xl mb-2">100%</div>
                  <div className="text-muted-foreground">Profissionalismo</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">24/7</div>
                  <div className="text-muted-foreground">Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Sobre Nós</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Horebe Limpezas e Serviços nasce com o objetivo de fornecer serviços de limpeza modernos, eficientes e acessíveis em Moçambique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Garantir ambientes limpos, saudáveis e organizados, com profissionalismo e dedicação.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="mb-3">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência nacional em serviços de limpeza e higienização em Moçambique.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="mb-3">Valores</h3>
              <div className="text-muted-foreground space-y-1">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{value.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços de limpeza profissional para atender todas as suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-background rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl mb-6 text-center">Por que escolher a Horebe?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Equipa Treinada e Profissional</h4>
                  <p className="text-muted-foreground">Profissionais qualificados e com experiência comprovada</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Produtos de Qualidade</h4>
                  <p className="text-muted-foreground">Utilizamos produtos seguros e eficazes</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Preços Acessíveis</h4>
                  <p className="text-muted-foreground">Tarifas justas e competitivas</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Atendimento Personalizado</h4>
                  <p className="text-muted-foreground">Soluções adaptadas às suas necessidades</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Compromisso com Prazos</h4>
                  <p className="text-muted-foreground">Pontualidade e cumprimento de horários</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Segurança e Higiene</h4>
                  <p className="text-muted-foreground">Seguimos as melhores práticas de HST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Entre em Contacto</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Solicite um orçamento gratuito e sem compromisso. Estamos prontos para atendê-lo!
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Telefone / WhatsApp</h4>
                    <p className="text-muted-foreground">+258 876681940</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-muted-foreground">horebelimpezas@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Localização</h4>
                    <p className="text-muted-foreground">Maputo, Moçambique</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-accent/30 rounded-xl p-6">
                <h4 className="mb-3">Horário de Atendimento</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>8h às 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8h às 14h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2">Tipo de Serviço *</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="residencial">Limpeza Residencial</option>
                    <option value="comercial">Limpeza Comercial</option>
                    <option value="pos-obra">Limpeza Pós-Obra</option>
                    <option value="estofos">Lavagem de Estofos</option>
                    <option value="carwash">Carwash Horebe Shine</option>
                    <option value="personalizado">Serviço Personalizado</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block mb-2">Localização</label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Ex: Sommerschield, Polana, etc."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Mensagem *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    placeholder="Descreva suas necessidades..."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Solicitar Orçamento Grátis
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl mb-4">Precisa de limpeza profissional?</h3>
            <p className="text-xl mb-6 opacity-90">Fale connosco hoje mesmo! Atendimento rápido e orçamento grátis!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+258876681940"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
              <a
                href="https://wa.me/258876681940"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span>Horebe Limpezas</span>
              </div>
              <p className="opacity-80">
                Qualidade, Confiança e Excelência em Cada Detalhe. Transformamos espaços, valorizamos ambientes!
              </p>
            </div>
            <div>
              <h4 className="mb-4">Serviços</h4>
              <ul className="space-y-2 opacity-80">
                <li>Limpeza Residencial</li>
                <li>Limpeza Comercial</li>
                <li>Limpeza Pós-Obra</li>
                <li>Lavagem de Estofos</li>
                <li>Carwash Horebe Shine</li>
                <li>Serviços Personalizados</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Empresa</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#home" className="hover:opacity-100">Início</a></li>
                <li><a href="#about" className="hover:opacity-100">Sobre Nós</a></li>
                <li><a href="#services" className="hover:opacity-100">Serviços</a></li>
                <li><a href="#contact" className="hover:opacity-100">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contacto</h4>
              <ul className="space-y-2 opacity-80">
                <li>📱 +258 876681940</li>
                <li>📧 horebelimpezas@gmail.com</li>
                <li>📍 Maputo, Moçambique</li>
                <li className="mt-4">
                  <a
                    href="https://wa.me/258876681940"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-80">
            <p>&copy; 2026 Horebe Limpezas e Serviços. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Maputo, Moçambique | Seguimos boas práticas de Higiene e Segurança no Trabalho (HST)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
