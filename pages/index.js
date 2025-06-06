import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Winn Energy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Reduza sua conta de luz com energia limpa e acessível" />
        <p className="description">
          Descubra como a energia solar pode transformar sua economia e contribuir para um planeta mais sustentável. Soluções personalizadas da Winn Energy.
          </p>
          {/* NOVA SEÇÃO */}
          <section className="hero">
          <h2>Sobre a Winn Energy</h2>
          <p>
            Ajudamos empresas a economizar com soluções em energia solar e sustentável.
          </p>
        </section>

        {/* OUTRA SEÇÃO */}
        <section className="formulario">
        <h3>Cadastre-se para saber mais:</h3>
        <form class="form-leads">
          <label for="nome">Nome:</label>
          <input type="text" placeholder="Seu nome" />
          <label for="email">E-mail:</label>
          <input type="email" placeholder="Seu e-mail" />
          <button type="submit">Quero saber mais</button>
        </form>
        </section>
        <section>
          <div className="colorido">
          <h2>Empresa certificada e reconhecida</h2>
          <p>Mais de 1.000 clientes satisfeitos e milhares de reais economizados em energia elétrica</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-winn-blue mb-4">
            Por que escolher a Winn Energy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformamos sua relação com a energia, oferecendo soluções que beneficiam você e o meio ambiente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <benefit.icon className="w-10 h-10 text-winn-green" />
              </div>
              <h3 className="text-xl font-semibold text-winn-blue mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
      
      <Footer />
    </div>
  )
}
