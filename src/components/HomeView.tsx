import React from 'react';
import { ArrowRight, Heart, Users, Compass, Sparkles } from 'lucide-react';
import { CommonsImage } from './CommonsImage';

interface HomeViewProps {
  onNavigateToExpeditions: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToExpeditions }) => {
  return (
    <div className="home-page">
      <section className="hero-home">
        <CommonsImage query="Salar de Uyuni Bolivia landscape" alt="Salar de Uyuni, Bolívia" className="hero-photo" eager />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="site-shell hero-content">
          <span className="eyebrow light">Expedições em pequenos grupos</span>
          <h1>Vá viver.</h1>
          <p className="hero-lead">
            A vida não precisa esperar a agenda dos outros. A Benviva organiza o caminho,
            cuida dos detalhes e aproxima pessoas que querem descobrir o mundo de um jeito mais leve, seguro e verdadeiro.
          </p>
          <button className="btn btn-cream" onClick={onNavigateToExpeditions}>Conheça nossas expedições <ArrowRight size={18} /></button>
          <p className="hero-note">Novos lugares. Novas pessoas. Novas histórias.</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="site-shell intro-grid">
          <div>
            <span className="eyebrow">A Benviva</span>
            <h2>Mais que destinos,<br /><em>histórias para viver.</em></h2>
          </div>
          <div className="intro-copy">
            <p>A <strong>BENVIVA</strong> nasceu de uma inquietação: a maioria das viagens oferecidas no mercado oscila entre a solidão de viajar por conta própria e a frieza impessoal de excursões comerciais lotadas.</p>
            <p>Escolhemos um caminho diferente. Nossas expedições acontecem sempre em <strong>grupos pequenos de até 15 pessoas</strong>, com curadoria humana, hospedagens que contam histórias e guias que cuidam de cada participante com zelo e sensibilidade.</p>
            <div className="quote-card"><em>«Você pode chegar desacompanhada. Mas nos primeiros dez minutos de conversa em torno de uma mesa redonda, você entenderá que encontrou a sua turma.»</em></div>
          </div>
        </div>
      </section>

      <section className="group-section">
        <div className="site-shell group-layout">
          <div className="group-image-wrap">
            <CommonsImage query="Fernando de Noronha Brazil" alt="Fernando de Noronha" className="group-image" />
            <div className="postcard-stamp">até<br /><strong>15</strong><br />viajantes</div>
          </div>
          <div className="group-copy">
            <span className="eyebrow">Poucas pessoas. Mais viagem.</span>
            <h2>Você pode chegar sem conhecer ninguém.</h2>
            <p>Nossos grupos têm no máximo 15 pessoas — e podem ser ainda menores, dependendo do destino. Isso cria mais proximidade, flexibilidade e cuidado durante toda a experiência.</p>
            <p>A comunidade Benviva nasceu majoritariamente entre mulheres. Muitas viajam sozinhas, com amigas ou em casal. Homens também fazem parte dessa história. Aqui, o mais importante não é com quem você chega, mas o jeito como você quer viajar.</p>
            <div className="quote-card">“Você não precisa esperar alguém para viver a viagem que deseja.”</div>
          </div>
        </div>
      </section>

      <section className="way-section" id="jeito-benviva">
        <div className="site-shell">
          <div className="section-heading center">
            <span className="eyebrow">O jeito Benviva de viajar</span>
            <h2>Organizado como precisa.<br /><em>Leve como deve ser.</em></h2>
          </div>

          <div className="principles-grid">
            <article className="principle-card">
              <div className="principle-icon"><Users size={22} /></div><span>01</span><h3>Grupos que fazem sentido</h3>
              <p>Não queremos formar uma excursão. Queremos formar um grupo em que as pessoas consigam se conhecer pelo caminho.</p>
            </article>
            <article className="principle-card accent-olive">
              <div className="principle-icon"><Heart size={22} /></div><span>02</span><h3>Acolhimento sem excessos</h3>
              <p>Suporte próximo, atenção aos detalhes e a tranquilidade de saber que existe alguém cuidando dos bastidores.</p>
            </article>
            <article className="principle-card accent-coral">
              <div className="principle-icon"><Compass size={22} /></div><span>03</span><h3>Curadoria de verdade</h3>
              <p>Roteiros, serviços e experiências selecionados para que o destino seja vivido — e não apenas percorrido.</p>
            </article>
            <article className="principle-card accent-yellow">
              <div className="principle-icon"><Sparkles size={22} /></div><span>04</span><h3>A viagem começa antes</h3>
              <p>Orientação de bagagem, documentos, passagens e preparação para você embarcar sabendo o que esperar.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="site-shell final-cta-inner">
          <span className="eyebrow light">A companhia a gente encontra pelo caminho.</span>
          <h2>Para onde<br />a gente vai?</h2>
          <button className="btn btn-sand" onClick={onNavigateToExpeditions}>Descobrir expedições <ArrowRight size={18} /></button>
        </div>
      </section>
    </div>
  );
};
