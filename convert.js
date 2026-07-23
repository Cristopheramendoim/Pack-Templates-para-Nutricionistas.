const fs = require('fs');
const content = `
<nav>
  <div class="wrap">
    <div class="logo" onClick={handleLogoClick}>NUTRI<span>TEMPLATES</span></div>
    <a href="#preco" class="btn btn-nav">Quero por R$ 9,99</a>
  </div>
</nav>

<header class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">Feito para nutricionistas</span>
      <h1 style={{marginTop:'18px'}}>Seu feed com cara de <em>consultório premium</em>, em 5 minutos.</h1>
      <p class="lead">Templates prontos no Canva pra você parar de improvisar post e passar a impressão de autoridade que atrai paciente novo — sem saber design.</p>
      <div class="hero-ctas">
        <a href="#preco" class="btn">Quero o meu pack agora →</a>
        <span class="hero-note">Pagamento seguro · Acesso imediato</span>
      </div>
      <div class="badges">
        <span class="badge">100% editável</span>
        <span class="badge">+50 imagens</span>
        <span class="badge">Posts prontos</span>
        <span class="badge">Feito no Canva</span>
      </div>
    </div>

    <div class="signature">
      <div class="card-stack">
        <div class="mock-card mc1"><div class="tape"></div>
          <div class="mc-img"></div>
          <div class="mc-body"><div class="mc-title">Dicas de Saúde</div><div class="mc-sub">5 hábitos pra hoje</div></div>
        </div>
        <div class="mock-card mc2"><div class="tape"></div>
          <div class="mc-img" style={{background:'linear-gradient(135deg,#F0E3C6,#DCC985)'}}></div>
          <div class="mc-body"><div class="mc-title">Receita Leve</div><div class="mc-sub">Bowl de quinoa</div></div>
        </div>
        <div class="mock-card mc3">
          <div class="mc-body">
            <div class="mc-title">Plano Semanal</div>
            <div class="mc-sub">Edite em minutos</div>
          </div>
        </div>
        <div class="price-pin"><small>por</small><strong>R$9,99</strong></div>
      </div>
    </div>
  </div>
</header>

<section>
  <div class="wrap">
    <div class="section-head">
      <span class="tag-label" style={{color:'var(--accent)'}}>Antes do pack</span>
      <h2>Isso já aconteceu com você?</h2>
      <p>Entre consultas e planos alimentares, o Instagram acaba sempre ficando pra depois.</p>
    </div>
    <div class="problem-grid">
      <div class="p-card">
        <span class="num">01</span>
        <h3>Não sobra tempo</h3>
        <p>Entre pacientes, planos alimentares e a rotina do consultório, criar post todo dia parece impossível.</p>
      </div>
      <div class="p-card">
        <span class="num">02</span>
        <h3>Design não é o seu forte</h3>
        <p>Horas tentando alinhar cor e fonte — e o resultado nunca fica com cara de profissional.</p>
      </div>
      <div class="p-card">
        <span class="num">03</span>
        <h3>Feed sem consistência afasta paciente</h3>
        <p>Uma marca desorganizada passa insegurança — e quem procura nutricionista quer confiar numa autoridade.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="solution">
      <div class="wrap">
        <div class="sol-grid">
          <div class="sol-photo">
            <div class="phone-mock">
              <div class="phone-notch"></div>
              <div class="phone-grid">
                <div style={{background:'#DCE6CE'}}></div>
                <div style={{background:'#C79A3D'}}></div>
                <div style={{background:'#3C6845'}}></div>
                <div style={{background:'#D6512F'}}></div>
                <div style={{background:'#F0E3C6'}}></div>
                <div style={{background:'#3C6845'}}></div>
                <div style={{background:'#28492F'}}></div>
                <div style={{background:'#DCC985'}}></div>
                <div style={{background:'#B9CDA6'}}></div>
              </div>
            </div>
            <div class="tag"><strong>5 min</strong>pra ter um post pronto e profissional</div>
          </div>
          <div>
            <span class="tag-label" style={{color:'var(--gold)'}}>Depois do pack</span>
            <h2 style={{marginTop:'14px'}}>Sua saída está aqui</h2>
            <p>O Pack Canva para Nutricionistas foi criado pra resolver isso de uma vez por todas. Em vez de começar do zero, você abre o template, troca o texto e a foto — e pronto: um post com aparência profissional em minutos.</p>
            <strong class="callout">Sem curso de design. Sem Photoshop. Sem estresse.</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="section-head">
      <h2>Tudo o que você precisa pro seu feed</h2>
    </div>
    <div class="feat-grid">
      <div class="feat-item"><div class="feat-check">✓</div><p><b>Templates editáveis no Canva</b>Prontos para feed e stories, em qualquer formato.</p></div>
      <div class="feat-item"><div class="feat-check">✓</div><p><b>Paleta de cores e tipografia</b>Pensadas especificamente pra nutrição.</p></div>
      <div class="feat-item"><div class="feat-check">✓</div><p><b>Modelos temáticos</b>Dicas, receitas, antes/depois e depoimentos.</p></div>
      <div class="feat-item"><div class="feat-check">✓</div><p><b>Layouts de captação</b>Pra promoções e novos pacientes.</p></div>
      <div class="feat-item"><div class="feat-check">✓</div><p><b>Acesso imediato</b>Uso ilimitado após a compra.</p></div>
      <div class="feat-item"><div class="feat-check">✓</div><p><b>100% editável</b>Cor, texto e foto à sua escolha.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="canva-strip">
      <div>
        <span class="tag-label" style={{color:'var(--brand)'}}>+50 imagens inclusas</span>
        <h3 style={{marginTop:'12px'}}>Templates prontos pra editar direto no Canva.</h3>
        <p>Substitua fotos e textos em segundos e tenha um feed irresistível pra atrair novos pacientes. E o melhor: novos templates são adicionados com o tempo, sem custo extra.</p>
      </div>
      <div class="canva-logo">Canva</div>
    </div>
  </div>
</section>

<section id="preco">
  <div class="wrap">
    <div class="pricing">
      <div class="wrap">
        <span class="eyebrow" style={{background:'rgba(255,255,255,0.12)',color:'#fff'}}>Oferta de lançamento</span>
        <h2>Menos que um lanche. Pra usar pra sempre.</h2>
        <div class="price-row">
          <span class="price-old">R$ 47</span>
          <span class="price-new"><span class="currency">R$</span>9<sup>,99</sup></span>
        </div>
        <a href="https://checkout.transacaoprotegida.com/439a285b-6def-4ab1-906b-e861b6f9690e" target="_blank" rel="noopener noreferrer" class="btn">Quero o meu pack por R$ 9,99</a>
        <p class="fineprint">Pagamento seguro · Acesso imediato · Garantia de 7 dias</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="section-head">
      <h2>Nutricionistas que já usam</h2>
    </div>
    <div class="test-grid">
      <div class="test-card">
        <div class="test-head">
          <div class="avatar">BA</div>
          <div><div class="name">Beatriz A.</div><div class="role">Nutricionista esportiva</div></div>
        </div>
        <div class="stars">★★★★★</div>
        <p class="quote">Meus seguidores passaram a interagir muito mais e recebi mais pedido de consulta. Passa uma imagem de autoridade.</p>
      </div>
      <div class="test-card">
        <div class="test-head">
          <div class="avatar">MC</div>
          <div><div class="name">Mariana C.</div><div class="role">Nutricionista clínica</div></div>
        </div>
        <div class="stars">★★★★★</div>
        <p class="quote">Em menos de 15 minutos deixo a semana toda organizada. O design é lindo e super profissional.</p>
      </div>
      <div class="test-card">
        <div class="test-head">
          <div class="avatar">JM</div>
          <div><div class="name">Joana M.</div><div class="role">Especialista em emagrecimento</div></div>
        </div>
        <div class="stars">★★★★★</div>
        <p class="quote">Não tenho jeito nenhum pra design e meu Instagram estava desorganizado. É só abrir no celular e trocar o texto.</p>
      </div>
      <div class="test-card">
        <div class="test-head">
          <div class="avatar">LF</div>
          <div><div class="name">Lucas F.</div><div class="role">Nutricionista esportivo</div></div>
        </div>
        <div class="stars">★★★★★</div>
        <p class="quote">O feed ficou com cara de consultório premium sem eu precisar quebrar a cabeça no Canva.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="guarantee">
      <div class="shield">✓</div>
      <h3 style={{fontSize:'19px'}}>Risco zero</h3>
      <p style={{color:'var(--ink-soft)',marginTop:'10px',fontSize:'14.5px'}}>Se em 7 dias você sentir que não é pra você, devolvemos seu dinheiro sem perguntas.</p>
    </div>
  </div>
</section>

<footer>© {new Date().getFullYear()} NutriTemplates. Todos os direitos reservados.</footer>
`;
console.log(content.replace(/class=/g, "className="));
