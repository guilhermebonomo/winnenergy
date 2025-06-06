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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
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
        <form>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <button type="submit">Quero saber mais</button>
        </form>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
