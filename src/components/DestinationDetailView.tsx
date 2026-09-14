import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronDown, ChevronUp, Clock3, MapPin, Mountain, Users, X } from 'lucide-react';
import { Destination } from '../types';
import { CommonsImage } from './CommonsImage';
import { DestinationGallery } from './DestinationGallery';
import { getDestinationPhotoQueries } from '../data/photoQueries';

interface DestinationDetailViewProps {
  destination: Destination;
  onBack: () => void;
  onReserve: (destination: Destination) => void;
}

const formatBRL = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({ destination, onBack, onReserve }) => {
  const [openDay, setOpenDay] = useState<number>(1);
  const roteiro = destination.roteiro?.length ? destination.roteiro : destination.itinerary;
  const heroQuery = getDestinationPhotoQueries(destination.slug, destination.name, destination.pais)[0];

  return (
    <div className="detail-page">
      <section className="detail-hero">
        <CommonsImage query={heroQuery} alt={destination.name} className="detail-hero-image" eager />
        <div className="detail-hero-shade" />
        <div className="site-shell detail-hero-content">
          <button className="back-button" onClick={onBack}><ArrowLeft size={17} /> Todas as expedições</button>
          <div className="detail-title-block">
            <span className="eyebrow light">Expedição {String(destination.orderNumber).padStart(2, '0')}</span>
            <h1>{destination.name}</h1>
            <p>{destination.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="detail-summary">
        <div className="site-shell detail-summary-grid">
          <div><MapPin size={18} /><span>Destino</span><strong>{destination.pais}</strong></div>
          <div><Clock3 size={18} /><span>Duração</span><strong>{destination.duracao}</strong></div>
          <div><Users size={18} /><span>Grupo</span><strong>Até {destination.grupoMaximo} viajantes</strong></div>
          <div><Mountain size={18} /><span>Nível</span><strong>{destination.difficulty}</strong></div>
        </div>
      </section>

      <main className="detail-main site-shell">
        <section className="detail-section detail-intro">
          <div><span className="eyebrow">Sobre essa viagem</span><h2>O que você vai viver.</h2></div>
          <div className="prose-large">
            {(destination.sobreViagem?.length ? destination.sobreViagem : [destination.description]).slice(0, 3).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
        </section>

        <section className="detail-section experiences-section">
          <div className="section-heading"><span className="eyebrow">Experiências</span><h2>Momentos que fazem a viagem.</h2></div>
          <div className="experience-grid">
            {destination.experiencias.map((item, index) => (
              <article className="experience-card" key={`${item.titulo}-${index}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p className="experience-tag">{item.tag}</p>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <DestinationGallery destination={destination} />

        <section className="detail-section itinerary-section">
          <div className="section-heading"><span className="eyebrow">Seu roteiro</span><h2>Dia a dia, sem pressa.</h2></div>
          <div className="itinerary-list">
            {roteiro.map((day) => {
              const open = openDay === day.day;
              return (
                <article className={open ? 'itinerary-item open' : 'itinerary-item'} key={day.day}>
                  <button className="itinerary-trigger" onClick={() => setOpenDay(open ? 0 : day.day)}>
                    <span className="day-number">Dia {String(day.day).padStart(2, '0')}</span>
                    <span className="day-title">{day.title}</span>
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {open && (
                    <div className="itinerary-body">
                      <p>{day.shortSummary}</p>
                      {day.schedule?.length > 0 && <div className="schedule-list">{day.schedule.map((item, index) => <div key={index}><strong>{item.time}</strong><span>{item.activity}</span></div>)}</div>}
                      <div className="day-footer">
                        {day.stay && <span>Hospedagem: {day.stay}</span>}
                        {day.mealsIncluded?.length > 0 && <span>Refeições: {day.mealsIncluded.join(', ')}</span>}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="detail-section inclusion-section">
          <div className="inclusion-card include">
            <span className="eyebrow">Incluído</span><h3>O que a Benviva cuida para você.</h3>
            <ul>{destination.inclui.map((item, i) => <li key={i}><Check size={16} />{item}</li>)}</ul>
          </div>
          <div className="inclusion-card exclude">
            <span className="eyebrow">Não incluído</span><h3>O que fica por sua conta.</h3>
            <ul>{destination.naoInclui.map((item, i) => <li key={i}><X size={16} />{item}</li>)}</ul>
          </div>
        </section>

        <section className="detail-section info-section">
          <div className="section-heading"><span className="eyebrow">Antes de ir</span><h2>Informações importantes.</h2></div>
          <div className="info-grid">
            <div><span>Clima</span><strong>{destination.clima || destination.climate}</strong></div>
            <div><span>Temperatura</span><strong>{destination.temperatura}</strong></div>
            <div><span>Altitude</span><strong>{destination.altitude}</strong></div>
            <div><span>Moeda</span><strong>{destination.moeda}</strong></div>
            <div><span>Idioma</span><strong>{destination.idioma}</strong></div>
            <div><span>Perfil</span><strong>{destination.perfilExperiencia}</strong></div>
          </div>
        </section>

        <section className="detail-section group-detail-section">
          <div><span className="eyebrow">Com quem você vai?</span><h2>Um grupo pequeno muda tudo.</h2></div>
          <div>
            <p>Esta expedição acontece com até {destination.grupoMaximo} viajantes. A comunidade Benviva é naturalmente majoritariamente feminina e recebe também casais, amigos e outros viajantes que se identificam com nosso jeito de conhecer o mundo.</p>
            <p className="group-emphasis">Não conhece ninguém? Tudo bem. Muita gente começa exatamente assim.</p>
          </div>
        </section>

        <section className="detail-section departures-section">
          <div className="section-heading"><span className="eyebrow">Próximas saídas</span><h2>Escolha quando viver essa história.</h2></div>
          <div className="departure-list">
            {destination.saidas.map((saida, index) => (
              <div className="departure-row" key={index}>
                <CalendarDays size={18} />
                <div><strong>{saida.dateRange}</strong><span>{saida.duracao}</span></div>
                <div className="departure-spacer" />
                <span>{saida.vagasDisponiveis} vagas</span><span>até {saida.grupoMaximo} pessoas</span><span className="departure-status">{saida.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="investment-section">
          <div className="investment-copy">
            <span className="eyebrow light">Sua próxima história começa aqui</span>
            <h2>Viva essa<br />experiência.</h2>
            <p>Você chegou até aqui conhecendo a viagem inteira. Agora, o investimento.</p>
          </div>
          <div className="investment-card">
            <p className="investment-label">Investimento por pessoa</p>
            <strong className="investment-price">{formatBRL(destination.valor)}</strong>
            <p className="investment-installments">{destination.parcelamento}</p>
            <div className="investment-meta"><span>{destination.duracao}</span><span>Grupo de até {destination.grupoMaximo}</span><span>{destination.vagas} vagas disponíveis</span></div>
            <button className="btn btn-sand full" onClick={() => onReserve(destination)}>Quero viver essa viagem <ArrowRight size={18} /></button>
            <p className="investment-footnote">A confirmação da reserva e condições finais são apresentadas antes do pagamento.</p>
          </div>
        </section>
      </main>
    </div>
  );
};
