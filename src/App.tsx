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
import confetti from "canvas-confetti";

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
      <nav>
        <div className="wrap">
          <div className="logo" onClick={handleLogoClick}>
            NUTRI<span>TEMPLATES</span>
          </div>
          <a
            href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-nav"
          >
            Quero agora
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Feito para nutricionistas</span>
            <h1 style={{ marginTop: "18px" }}>
              Seu feed com cara de <em>consultório premium</em>, em 5 minutos.
            </h1>
            <p className="lead">
              Templates prontos no Canva pra você parar de improvisar post e
              passar a impressão de autoridade que atrai paciente novo — sem
              saber design.
            </p>
            <div className="hero-ctas">
              <a
                href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Quero o meu pack agora →
              </a>
              <span className="hero-note">
                Pagamento seguro · Acesso imediato
              </span>
            </div>
            <div className="badges">
              <span className="badge">100% editável</span>
              <span className="badge">+50 imagens</span>
              <span className="badge">Posts prontos</span>
              <span className="badge">Feito no Canva</span>
            </div>
          </div>

          <div className="signature">
            <div className="card-stack">
              <div className="mock-card mc1">
                <div className="tape"></div>
                <div className="mc-img"></div>
                <div className="mc-body">
                  <div className="mc-title">Dicas de Saúde</div>
                  <div className="mc-sub">5 hábitos pra hoje</div>
                </div>
              </div>
              <div className="mock-card mc2">
                <div className="tape"></div>
                <div
                  className="mc-img"
                  style={{
                    background: "linear-gradient(135deg,#F0E3C6,#DCC985)",
                  }}
                ></div>
                <div className="mc-body">
                  <div className="mc-title">Receita Leve</div>
                  <div className="mc-sub">Bowl de quinoa</div>
                </div>
              </div>
              <div className="mock-card mc3">
                <div className="mc-body">
                  <div className="mc-title">Plano Semanal</div>
                  <div className="mc-sub">Edite em minutos</div>
                </div>
              </div>
              <div className="price-pin">
                <small>por</small>
                <strong>R$9,99</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="tag-label" style={{ color: "var(--accent)" }}>
              Antes do pack
            </span>
            <h2>Isso já aconteceu com você?</h2>
            <p>
              Entre consultas e planos alimentares, o Instagram acaba sempre
              ficando pra depois.
            </p>
          </div>
          <div className="problem-grid">
            <div className="p-card">
              <span className="num">01</span>
              <h3>Não sobra tempo</h3>
              <p>
                Entre pacientes, planos alimentares e a rotina do consultório,
                criar post todo dia parece impossível.
              </p>
            </div>
            <div className="p-card">
              <span className="num">02</span>
              <h3>Design não é o seu forte</h3>
              <p>
                Horas tentando alinhar cor e fonte — e o resultado nunca fica
                com cara de profissional.
              </p>
            </div>
            <div className="p-card">
              <span className="num">03</span>
              <h3>Feed sem consistência afasta paciente</h3>
              <p>
                Uma marca desorganizada passa insegurança — e quem procura
                nutricionista quer confiar numa autoridade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="solution">
            <div className="wrap">
              <div className="sol-grid">
                <div className="sol-photo">
                  <div className="phone-mock">
                    <div className="phone-notch"></div>
                    <div className="phone-grid">
                      <div style={{ background: "#DCE6CE" }}></div>
                      <div style={{ background: "#C79A3D" }}></div>
                      <div style={{ background: "#3C6845" }}></div>
                      <div style={{ background: "#D6512F" }}></div>
                      <div style={{ background: "#F0E3C6" }}></div>
                      <div style={{ background: "#3C6845" }}></div>
                      <div style={{ background: "#28492F" }}></div>
                      <div style={{ background: "#DCC985" }}></div>
                      <div style={{ background: "#B9CDA6" }}></div>
                    </div>
                  </div>
                  <div className="tag">
                    <strong>5 min</strong>pra ter um post pronto e profissional
                  </div>
                </div>
                <div>
                  <span className="tag-label" style={{ color: "var(--gold)" }}>
                    Depois do pack
                  </span>
                  <h2 style={{ marginTop: "14px" }}>Sua saída está aqui</h2>
                  <p>
                    O Pack Canva para Nutricionistas foi criado pra resolver
                    isso de uma vez por todas. Em vez de começar do zero, você
                    abre o template, troca o texto e a foto — e pronto: um post
                    com aparência profissional em minutos.
                  </p>
                  <strong className="callout">
                    Sem curso de design. Sem Photoshop. Sem estresse.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Tudo o que você precisa pro seu feed</h2>
          </div>
          <div className="feat-grid">
            <div className="feat-item">
              <div className="feat-check">✓</div>
              <p>
                <b>Templates editáveis no Canva</b>Prontos para feed e stories,
                em qualquer formato.
              </p>
            </div>
            <div className="feat-item">
              <div className="feat-check">✓</div>
              <p>
                <b>Paleta de cores e tipografia</b>Pensadas especificamente pra
                nutrição.
              </p>
            </div>
            <div className="feat-item">
              <div className="feat-check">✓</div>
              <p>
                <b>Modelos temáticos</b>Dicas, receitas, antes/depois e
                depoimentos.
              </p>
            </div>
            <div className="feat-item">
              <div className="feat-check">✓</div>
              <p>
                <b>Layouts de captação</b>Pra promoções e novos pacientes.
              </p>
            </div>
            <div className="feat-item">
              <div className="feat-check">✓</div>
              <p>
                <b>Acesso imediato</b>Uso ilimitado após a compra.
              </p>
            </div>
            <div className="feat-item">
              <div className="feat-check">✓</div>
              <p>
                <b>100% editável</b>Cor, texto e foto à sua escolha.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="canva-strip">
            <div>
              <span className="tag-label" style={{ color: "var(--brand)" }}>
                +50 imagens inclusas
              </span>
              <h3 style={{ marginTop: "12px" }}>
                Templates prontos pra editar direto no Canva.
              </h3>
              <p>
                Substitua fotos e textos em segundos e tenha um feed
                irresistível pra atrair novos pacientes. E o melhor: novos
                templates são adicionados com o tempo, sem custo extra.
              </p>
            </div>
            <div className="canva-logo">Canva</div>
          </div>
        </div>
      </section>

      <section id="preco">
        <div className="wrap">
          <div className="pricing">
            <div className="wrap">
              <span
                className="eyebrow"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
              >
                Oferta de lançamento
              </span>
              <h2>Menos que um lanche. Pra usar pra sempre.</h2>
              <div className="price-row">
                <span className="price-old">R$ 47</span>
                <span className="price-new">
                  <span className="currency">R$</span>9<sup>,99</sup>
                </span>
              </div>
              <a
                href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Quero agora
              </a>
              <p className="fineprint">
                Pagamento seguro · Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Nutricionistas que já usam</h2>
          </div>
          <div className="test-grid">
            <div className="test-card">
              <div className="test-head">
                <div className="avatar">BA</div>
                <div>
                  <div className="name">Beatriz A.</div>
                  <div className="role">Nutricionista esportiva</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p className="quote">
                Meus seguidores passaram a interagir muito mais e recebi mais
                pedido de consulta. Passa uma imagem de autoridade.
              </p>
            </div>
            <div className="test-card">
              <div className="test-head">
                <div className="avatar">MC</div>
                <div>
                  <div className="name">Mariana C.</div>
                  <div className="role">Nutricionista clínica</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p className="quote">
                Em menos de 15 minutos deixo a semana toda organizada. O design
                é lindo e super profissional.
              </p>
            </div>
            <div className="test-card">
              <div className="test-head">
                <div className="avatar">JM</div>
                <div>
                  <div className="name">Joana M.</div>
                  <div className="role">Especialista em emagrecimento</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p className="quote">
                Não tenho jeito nenhum pra design e meu Instagram estava
                desorganizado. É só abrir no celular e trocar o texto.
              </p>
            </div>
            <div className="test-card">
              <div className="test-head">
                <div className="avatar">LF</div>
                <div>
                  <div className="name">Lucas F.</div>
                  <div className="role">Nutricionista esportivo</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p className="quote">
                O feed ficou com cara de consultório premium sem eu precisar
                quebrar a cabeça no Canva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="guarantee">
            <div className="shield">✓</div>
            <h3 style={{ fontSize: "19px" }}>Risco zero</h3>
            <p
              style={{
                color: "var(--ink-soft)",
                marginTop: "10px",
                fontSize: "14.5px",
              }}
            >
              Se em 7 dias você sentir que não é pra você, devolvemos seu
              dinheiro sem perguntas.
            </p>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} NutriTemplates. Todos os direitos
        reservados.
      </footer>
    </>
  );
}

function Obrigado() {
  const [isShaking, setIsShaking] = useState(true);

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

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#e7a23a", "#8fae86", "#ffffff"],
    });

    // Stop shaking after animation
    const timer = setTimeout(() => {
      setIsShaking(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="obrigado-page">
      <motion.div
        className="card"
        animate={
          isShaking
            ? {
                x: [0, -10, 10, -10, 10, -5, 5, 0],
                y: [0, 5, -5, 5, -5, 2, -2, 0],
                rotate: [0, -2, 2, -2, 2, 0],
                boxShadow: [
                  "0 40px 80px -20px rgba(0, 0, 0, 0.5)",
                  "0 0 40px #ff0000",
                  "0 0 40px #00ff00",
                  "0 0 40px #0000ff",
                  "0 40px 80px -20px rgba(0, 0, 0, 0.5)",
                ],
              }
            : {
                x: 0,
                y: 0,
                rotate: 0,
                boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.5)",
              }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
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
            Verifica o teu e-mail para acederes aos teus templates
            imediatamente.
          </span>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=renanpereira.info@gmail.com&su=N%C3%A3o%20recebi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          Não recebi
        </a>
        <p className="footnote">
          Guarda o e-mail de confirmação. Dúvidas? <a href="#">Fala connosco</a>
          .
        </p>
      </motion.div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Animate title
    let blink = false;
    const originalTitle =
      "Pack Canva para Nutricionistas — Posts profissionais em 5 minutos";

    // Animate favicon
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    let frame = 0;
    const interval = setInterval(() => {
      // Toggle title every 10 frames (500ms)
      if (frame % 10 === 0) {
        document.title = blink ? `🔴 ${originalTitle}` : originalTitle;
        blink = !blink;
      }

      // Draw pulsing favicon
      if (ctx) {
        ctx.clearRect(0, 0, 32, 32);

        const cx = 16;
        const cy = 16;

        // Draw the expanding outer circle (pulse)
        const maxRadius = 14;
        const pulseSpeed = 0.5;
        const radius = (frame * pulseSpeed) % maxRadius;
        const opacity = Math.max(0, 1 - radius / maxRadius);

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(220, 38, 38, ${opacity})`;
        ctx.fill();

        // Draw the solid inner dot
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(220, 38, 38, 1)";
        ctx.fill();

        link.href = canvas.toDataURL("image/png");
      }

      frame++;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </BrowserRouter>
  );
}
