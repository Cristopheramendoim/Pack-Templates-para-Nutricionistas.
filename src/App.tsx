/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  const [isDepois, setIsDepois] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div className="logo">
            <span className="dot"></span>NutriTemplates
          </div>
          <a
            href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
            className="nav-cta"
          >
            Quero por R$ 9,99
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg">
          <img src="/assets/hero-marble.jpg" alt="" />
        </div>
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">✦ Feito para nutricionistas</span>
            <h1>
              Pare de perder horas no Canva. Tenha posts <em>prontos</em> em 5
              minutos.
            </h1>
            <p className="sub">
              Pack completo de templates 100% editáveis no Canva, feitos para
              nutricionistas atraírem mais pacientes no Instagram — sem saber
              nada de design.
            </p>
            <div className="hero-actions">
              <a
                href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
                className="btn-primary"
              >
                Quero o meu pack agora →
              </a>
              <span className="price-tag">
                De R$ 47 por apenas <strong>R$ 9,99</strong>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone-mock">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar"></div>
                  <div>
                    <div className="name">seu.consultorio</div>
                    <div className="handle">Nutricionista</div>
                  </div>
                </div>
                <div className={`grid3 antes ${!isDepois ? "active" : ""}`}>
                  <div className="cell">foto solta</div>
                  <div className="cell">print</div>
                  <div className="cell">sem padrão</div>
                  <div className="cell">texto ilegível</div>
                  <div className="cell">cores soltas</div>
                  <div className="cell">sem marca</div>
                  <div className="cell">baixa qualidade</div>
                  <div className="cell">feed confuso</div>
                  <div className="cell">pouco profissional</div>
                </div>
                <div className={`grid3 depois ${isDepois ? "active" : ""}`}>
                  <div className="cell">Dica do dia</div>
                  <div className="cell">Receita fit</div>
                  <div className="cell">Antes / Depois</div>
                  <div className="cell">Mito ou verdade</div>
                  <div className="cell">Depoimento</div>
                  <div className="cell">Agende consulta</div>
                  <div className="cell">Cardápio</div>
                  <div className="cell">Benefícios</div>
                  <div className="cell">Sua marca</div>
                </div>
              </div>
              <div className="toggle-row">
                <span
                  className={`toggle-label ${!isDepois ? "on" : ""}`}
                  id="labelAntes"
                >
                  Antes
                </span>
                <button
                  className={`switch ${isDepois ? "is-on" : ""}`}
                  id="gridSwitch"
                  aria-label="Alternar entre antes e depois"
                  onClick={() => setIsDepois(!isDepois)}
                ></button>
                <span
                  className={`toggle-label ${isDepois ? "on" : ""}`}
                  id="labelDepois"
                >
                  Depois
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="dor">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">O problema</span>
            <h2>Isto já te aconteceu?</h2>
            <p>
              Entre consultas e planos alimentares, o Instagram acaba ficando
              sempre para depois.
            </p>
          </div>
          <div className="dor-grid">
            <div className="dor-card">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#E7A23A"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="#E7A23A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Não sobra tempo</h3>
              <p>
                Entre pacientes, planos alimentares e a rotina do consultório,
                criar posts todos os dias parece impossível.
              </p>
            </div>
            <div className="dor-card">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="#E7A23A"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8 15l2.5-3 2 2L16 10"
                    stroke="#E7A23A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Design não é o teu forte</h3>
              <p>
                Horas tentando alinhar cores e fontes — e o resultado nunca fica
                com cara de profissional.
              </p>
            </div>
            <div className="dor-card">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18l5-6 4 3 7-9"
                    stroke="#E7A23A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Feed sem consistência afasta pacientes</h3>
              <p>
                Uma marca desorganizada passa insegurança — e quem procura
                nutricionista quer confiar numa autoridade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solucao">
        <div className="wrap">
          <div className="solucao-img">
            <img
              src="/assets/nutricionista.jpg"
              alt="Nutricionista sorrindo, segurando tablet com gráficos de conteúdo"
            />
            <div className="solucao-badge">
              <span className="num">5min</span>
              <span className="txt">
                para ter um post pronto e profissional
              </span>
            </div>
          </div>
          <div className="solucao-text">
            <span className="eyebrow">A solução</span>
            <h2>A tua salvação está aqui</h2>
            <p>
              O{" "}
              <span className="strong-line">
                Pack Canva para Nutricionistas
              </span>{" "}
              foi criado para resolver isto de uma vez por todas.
            </p>
            <p>
              Em vez de começares do zero, abres o template, trocas o texto e a
              foto, e pronto: um post com aparência profissional em minutos.
            </p>
            <p>
              <span className="strong-line">
                Sem curso de design. Sem Photoshop. Sem stress.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="inclui">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">O que está incluído</span>
            <h2>Tudo o que precisas para o teu feed</h2>
          </div>
          <div className="inclui-grid">
            <div className="inclui-item">
              <span className="check">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#FAF6EE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Templates editáveis no Canva, prontos para feed e stories
              </span>
            </div>
            <div className="inclui-item">
              <span className="check">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#FAF6EE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Paleta de cores e tipografia pensadas para nutrição</span>
            </div>
            <div className="inclui-item">
              <span className="check">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#FAF6EE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Modelos para dicas, receitas, antes/depois e depoimentos
              </span>
            </div>
            <div className="inclui-item">
              <span className="check">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#FAF6EE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Layouts para promoções e captação de pacientes</span>
            </div>
            <div className="inclui-item">
              <span className="check">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#FAF6EE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Acesso imediato após a compra, uso ilimitado</span>
            </div>
            <div className="inclui-item">
              <span className="check">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#FAF6EE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>100% editável — cores, textos e fotos à tua escolha</span>
            </div>
          </div>
        </div>
      </section>

      <section className="canva-section">
        <div className="wrap flex flex-col md:flex-row items-center gap-12">
          <div className="canva-text flex-1 text-center md:text-left">
            <h2>+50 Imagens</h2>
            <p>
              Templates prontos para editar no Canva. Substitua fotos e textos
              em segundos e tenha um feed irresistível para atrair novos
              pacientes.
            </p>
          </div>
          <div className="canva-img flex-1 w-full">
            <img
              src="/assets/canva.jpg"
              alt="Templates no Canva"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="oferta" id="oferta">
        <div className="wrap">
          <div className="oferta-box">
            <span className="eyebrow">Oferta por tempo limitado</span>
            <h2>Menos do que um lanche. Para usar para sempre.</h2>
            <div className="price-block">
              <span className="price-old">R$ 47</span>
              <span className="price-new">
                <sup>R$</sup>9,99
              </span>
            </div>
            <a
              href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
              className="btn-oferta"
            >
              Quero o meu pack por R$ 9,99
            </a>
            <p className="microcopy">
              Pagamento seguro · Acesso imediato · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      <section className="garantia">
        <div className="wrap">
          <div className="garantia">
            <div className="garantia-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
                  stroke="#1E3A2E"
                  strokeWidth="1.6"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#1E3A2E"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3>Risco zero</h3>
              <p>
                Se em 7 dias sentires que não é para ti, devolvemos o teu
                dinheiro sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} NutriTemplates. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

function Obrigado() {
  return (
    <div className="obrigado-page">
      <div className="card">
        <div className="check-badge">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l6 6L20 6"
              stroke="#1E3A2E"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1>Pagamento aprovado! ✅</h1>
        <p className="desc">
          Obrigado pela tua compra! O teu{" "}
          <strong>Pack Canva para Nutricionistas</strong> já está pronto para
          ti.
        </p>

        <div className="instruction">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#544D3F" strokeWidth="1.6" />
            <path
              d="M12 8v5"
              stroke="#544D3F"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="12" cy="16" r="0.9" fill="#544D3F" />
          </svg>
          <span>
            Clica no botão abaixo para aceder imediatamente aos templates
            diretamente no Canva.
          </span>
        </div>

        <a href="#" className="btn">
          Aceder aos meus templates →
        </a>

        <p className="footnote">
          Guarda este link ou o e-mail de confirmação. Dúvidas?{" "}
          <a href="#">Fala connosco</a>.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </BrowserRouter>
  );
}
