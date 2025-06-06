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
        <form class="form-leads" name="leads">
          <label for="nome">Nome:</label>
          <input type="text" placeholder="Seu nome" />
          <label for="email">E-mail:</label>
          <input type="email" placeholder="Seu e-mail" />
          <button type="submit">Quero saber mais</button>
        </form>
        </section>

        <section>
          <div>
            <div>
            <h2>
            Por que escolher a Winn Energy?
            </h2>
            <p>
            Transformamos sua relação com a energia, oferecendo soluções que beneficiam você e o meio ambiente.
            </p>
            </div>
          </div>
        </section>

        <section>
          <div className="colorido p-6">
          <h2>Empresa certificada e reconhecida</h2>
          <p>Mais de 1.000 clientes satisfeitos e milhares de reais economizados em energia elétrica</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
