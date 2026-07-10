/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { motion } from "motion/react";

function Home() {
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 3) {
      navigate("/obrigado");
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div
            className="logo font-bold uppercase tracking-widest text-[#e8eee9] cursor-pointer"
            onClick={handleLogoClick}
          >
            NutriTemplates
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden sm:inline">Quero por R$ 9,99</span>
              <span className="sm:hidden">Pegar por R$ 9,99</span>
            </a>
          </div>
        </div>
      </nav>

      <header className="relative w-full bg-[#111a15] flex flex-col items-center pt-8 pb-14 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto relative flex flex-col items-center px-4">
          {/* Animated floating words for desktop */}
          <motion.div
            className="hidden md:flex absolute left-4 lg:left-12 top-1/4 -rotate-12 bg-[#8fae86]/20 text-[#8fae86] px-4 py-2 rounded-full font-bold text-lg backdrop-blur-sm border border-[#8fae86]/30 z-0 pointer-events-none"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            100% Editável
          </motion.div>
          <motion.div
            className="hidden md:flex absolute right-4 lg:right-12 top-1/3 rotate-12 bg-[#e7a23a]/20 text-[#e7a23a] px-4 py-2 rounded-full font-bold text-lg backdrop-blur-sm border border-[#e7a23a]/30 z-0 pointer-events-none"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            +50 Imagens
          </motion.div>
          <motion.div
            className="hidden md:flex absolute left-8 lg:left-24 bottom-[30%] rotate-6 bg-[#d9e4dd]/10 text-[#d9e4dd] px-4 py-2 rounded-full font-bold text-lg backdrop-blur-sm border border-[#d9e4dd]/20 z-0 pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Posts Prontos
          </motion.div>
          <motion.div
            className="hidden md:flex absolute right-8 lg:right-24 bottom-[20%] -rotate-6 bg-[#8fae86]/20 text-[#8fae86] px-4 py-2 rounded-full font-bold text-lg backdrop-blur-sm border border-[#8fae86]/30 z-0 pointer-events-none"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            Atraia Pacientes
          </motion.div>

          <img
            src="/assets/Folder_with_food_photos_graphic_202607101508.jpeg"
            alt="Pack Canva para Nutricionistas"
            className="w-full h-auto max-w-[85%] md:max-w-sm lg:max-w-md max-h-[50vh] object-contain block mx-auto rounded-3xl shadow-2xl mb-8 relative z-10"
          />
          <a
            href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
            className="inline-flex items-center justify-center gap-2 bg-[#e7a23a] text-[#132a20] font-bold text-lg md:text-2xl px-8 py-4 md:px-10 md:py-5 rounded-full shadow-2xl hover:scale-105 transition-transform relative z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden sm:inline">Quero o meu pack agora →</span>
            <span className="sm:hidden">Pegar por R$ 9,99 →</span>
          </a>
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
                    stroke="#e8eee9"
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
                    stroke="#e8eee9"
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
                    stroke="#e8eee9"
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
                    stroke="#e8eee9"
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
                    stroke="#e8eee9"
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
                    stroke="#e8eee9"
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
            <div className="mt-6 inline-flex items-center gap-3 bg-[#1e3a2e] text-[#e8eee9] px-5 py-4 rounded-xl shadow-lg border border-[#222b27]/50 text-left">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 text-[#e7a23a]"
              >
                <path
                  d="M12 4v16m-8-8h16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-medium text-[15px] leading-snug">
                <strong>E o melhor:</strong> vamos adicionar mais imagens e
                novos templates editáveis com o tempo, sem custo extra!
              </span>
            </div>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden sm:inline">
                Quero o meu pack por R$ 9,99
              </span>
              <span className="sm:hidden">Pegar por R$ 9,99</span>
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
                  stroke="#8fae86"
                  strokeWidth="1.6"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#8fae86"
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
  useEffect(() => {
    // Registra o evento de conversão/venda
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-16952977766/Q_I2CN_2qc4cEObS55M_",
        value: 1.0,
        currency: "BRL",
        transaction_id: "",
      });
    }
  }, []);

  return (
    <div className="obrigado-page">
      <div className="card">
        <div className="check-badge">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l6 6L20 6"
              stroke="#8fae86"
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
            <circle cx="12" cy="12" r="9" stroke="#8ba394" strokeWidth="1.6" />
            <path
              d="M12 8v5"
              stroke="#8ba394"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="12" cy="16" r="0.9" fill="#8ba394" />
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
