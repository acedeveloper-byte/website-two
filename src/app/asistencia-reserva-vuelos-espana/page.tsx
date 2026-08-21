'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../../config';
import CTASection from '../../components/CTASection';
import { reportPhoneConversion } from '../../utils/gtag';

export default function AsistenciaReservaVuelosEspanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const aeropuertos = [
    { name: 'Aeropuerto Adolfo Suárez Madrid–Barajas', code: 'MAD', ciudad: 'Madrid', region: 'Comunidad de Madrid', image: '/airportos/madrid.jpg' },
    { name: 'Aeropuerto Josep Tarradellas Barcelona–El Prat', code: 'BCN', ciudad: 'Barcelona', region: 'Cataluña', image: '/airportos/barcelona.jpg' },
    { name: 'Aeropuerto de Palma de Mallorca', code: 'PMI', ciudad: 'Palma de Mallorca', region: 'Islas Baleares', image: '/airportos/palma-de-mallorca.jpg' },
    { name: 'Aeropuerto de Málaga–Costa del Sol', code: 'AGP', ciudad: 'Málaga', region: 'Andalucía', image: '/airportos/malaga.jpg' },
    { name: 'Aeropuerto de Alicante–Elche Miguel Hernández', code: 'ALC', ciudad: 'Alicante', region: 'Comunidad Valenciana', image: '/airportos/alicante.jpg' },
    { name: 'Aeropuerto de Valencia', code: 'VLC', ciudad: 'Valencia', region: 'Comunidad Valenciana' , image: '/airportos/valencia.jpg' },
    { name: 'Aeropuerto de Sevilla', code: 'SVQ', ciudad: 'Sevilla', region: 'Andalucía' , image: '/airportos/sevilla.jpg' },
    { name: 'Aeropuerto de Bilbao', code: 'BIO', ciudad: 'Bilbao', region: 'País Vasco' , image: '/airportos/bilbao.jpg'},
   
  ];

  const bannerPhones = [
    { label: 'Asistencia en Estados Unidos', number: PHONE_NUMBER_DISPLAY, tel: `tel:${PHONE_NUMBER}`, flag: '🇺🇸' },
    { label: 'Asistencia para España', number: PHONE_NUMBER_DISPLAY, tel: `tel:${PHONE_NUMBER}`, flag: '🇪🇸' },
  ];

  const faqs = [
    {
      q: '¿Puedo buscar vuelos que salgan de España?',
      a: 'Sí. Puedes explorar opciones de vuelos disponibles desde aeropuertos y ciudades de toda España, incluyendo los principales centros de conexión internacionales y aeropuertos regionales.',
    },
    {
      q: '¿Puedo buscar vuelos internacionales?',
      a: 'Sí. Puedes explorar opciones de vuelos internacionales desde España hacia múltiples destinos en Europa, América, Oriente Medio y otras regiones del mundo.',
    },
    {
      q: '¿Están disponibles los vuelos de ida y vuelta?',
      a: 'Las opciones de ida y vuelta están disponibles según la ruta y las fechas de viaje seleccionadas. También puedes consultar opciones de solo ida y multidestino.',
    },
    {
      q: '¿Puedo comparar diferentes opciones de vuelo?',
      a: 'Sí. Puedes revisar diferentes rutas, horarios y opciones de tarifas disponibles antes de seleccionar la opción más conveniente para tu viaje.',
    },
    {
      q: '¿Los precios de los vuelos son fijos?',
      a: 'No. Los precios de los vuelos y la disponibilidad pueden variar en función de las fechas de viaje, la demanda, la disponibilidad de plazas, las rutas y las condiciones de cada tarifa.',
    },
    {
      q: '¿Es este un sitio web oficial de una aerolínea?',
      a: `No. ${SITE_NAME} opera como un sitio web de viajes independiente y no es un sitio web oficial de ninguna aerolínea, salvo que se indique específicamente.`,
    },
  ];

  return (
    <div>
      <section className="spain-hero" aria-labelledby="spain-hero-title">
        <img
          src="/spain-hero.jpg"
          alt="Vista aérea de la costa y destinos de España"
          className="spain-hero__image"
          fetchPriority="high"
        />
        <div className="spain-hero__overlay" aria-hidden="true"></div>
        <div className="container spain-hero__content">
          <div className="spain-hero__copy">
            <span className="spain-hero__eyebrow">
              <span className="material-symbols-outlined" aria-hidden="true">flight_takeoff</span>
              Asistencia de viajes en España
            </span>
            <h3 id="spain-hero-title">Tu próximo viaje empieza aquí</h3>
            <p>
              Encuentra rutas, compara opciones y recibe ayuda para organizar tu vuelo desde los principales destinos españoles.
            </p>
            <div className="spain-hero__actions">
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={reportPhoneConversion}
                className="spain-hero__primary-action"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hablar con un asesor
              </a>
              <a href="#aeropuertos-espana" className="spain-hero__secondary-action">
                Explorar destinos
                <span className="material-symbols-outlined" aria-hidden="true">arrow_downward</span>
              </a>
            </div>
            <div className="spain-hero__trust">
              <span><span className="material-symbols-outlined" aria-hidden="true">support_agent</span> Atención personalizada</span>
              <span><span className="material-symbols-outlined" aria-hidden="true">schedule</span> Disponible todos los días</span>
            </div>
          </div>
          <div className="spain-hero__plane-wrap" aria-hidden="true">
            <img src="/clear-plane.png" alt="" className="spain-hero__plane" />
          </div>
          <div className="spain-hero__destination-tag">
            <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
            <span><strong>España</strong><small>Mar, cultura y nuevas rutas</small></span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT — clean single-column flow
      ═══════════════════════════════════════════════════════════════ */}
      <div className="skybound-content">
        <div className="container py-5">

          {/* ── Intro + flight options ── */}
          <section className="skybound-intro mx-auto">
            <h1 className="display-6 fw-bold mb-3">
              Asistencia para la Reserva de Vuelos en España
            </h1>
            <p className="lead mb-0">
              ¿Planeas un viaje desde España? Explora opciones de vuelos para viajes nacionales e internacionales y encuentra rutas que coincidan con tu destino preferido, fechas de viaje y horarios.
            </p>
          </section>

          <section className="skybound-feature-grid mb-5" aria-label="Opciones de vuelo">
            {[
              { title: 'Vuelos internacionales', desc: 'Destinos en Europa, América y el resto del mundo.', icon: 'public', tone: 'primary' },
              { title: 'Solo ida', desc: 'Itinerarios flexibles con fecha de regreso abierta.', icon: 'arrow_right_alt', tone: 'secondary' },
              { title: 'Ida y vuelta', desc: 'Itinerarios completos para vacaciones o negocios.', icon: 'sync', tone: 'tertiary' },
              { title: 'Vuelos directos', desc: 'Sin escalas para el menor tiempo de trayecto.', icon: 'bolt', tone: 'sky' },
              { title: 'Con escalas', desc: 'Alternativas económicas con paradas convenientes.', icon: 'route', tone: 'secondary' },
              { title: 'Horarios flexibles', desc: 'Salidas matutinas, vespertinas o nocturnas.', icon: 'schedule', tone: 'blue' },
              { title: 'Tarifas variadas', desc: 'Turista, turista superior, ejecutiva y flexible.', icon: 'loyalty', tone: 'tertiary' },
            ].map((item, idx) => (
              <article className="skybound-glass-card" key={idx}>
                <div className={`skybound-icon skybound-icon--${item.tone}`}>
                  <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </article>
            ))}
          </section>

          {/* ── Aeropuertos populares ── */}
          <div className="mb-5" id="aeropuertos-espana">
            <div className="text-center mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-2">Aeropuertos</span>
              <h2 className="h3 fw-bold text-dark">Aeropuertos Populares en España</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                España cuenta con aeropuertos importantes que ofrecen rutas nacionales e internacionales. Explora opciones de vuelos desde los principales aeropuertos del país.
              </p>
            </div>

            <div className="row g-3">
              {aeropuertos.map((a, idx) => (
                <div className="col-6 col-md-4 col-lg-3" key={idx}>
                  <div className="card border-0 rounded-3 shadow-sm overflow-hidden bg-white h-100 spain-airport-card">
                    {a.image ? <img src={a.image} alt={a.name} className="spain-airport-image" loading="lazy" /> : null}
                    <div className="p-3">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="badge bg-primary text-white fw-bold" style={{ fontSize: '0.7rem' }}>{a.code}</span>
                        <small className="text-muted">{a.ciudad}</small>
                      </div>
                      <p className="small fw-semibold text-dark mb-0 lh-sm">{a.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Banner ── */}
          <div className="rounded-4 p-4 p-md-5 mb-5 text-white text-center spain-cta-banner" style={{ background: 'linear-gradient(135deg, #002b67 0%, #003d8f 100%)' }}>
            <h2 className="h4 fw-bold mb-2">¿Necesitas Ayuda con tu Reserva?</h2>
            <p className="mb-3 small text-white-75">
              Nuestro equipo de asistencia independiente puede ayudarte a encontrar opciones de vuelo y planificar tu itinerario desde España.
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={reportPhoneConversion}
              className="btn btn-warning text-dark fw-bold rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              <span>📞</span> {PHONE_NUMBER_DISPLAY}
            </a>
          </div>

          {/* ── Comparar precios ── */}
          <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
            <div className="row align-items-center gy-4">
              <div className="col-lg-5">
                <h2 className="h3 fw-bold text-dark mb-3">Comparar Opciones de Vuelo y Precios</h2>
                <p className="text-muted mb-0">
                  Los precios pueden variar según las fechas, la ruta, la disponibilidad y el tipo de tarifa. Antes de completar una reserva, revisa todos los detalles disponibles.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="row g-2">
                  {[
                    'Horarios de salida y llegada',
                    'Fechas de viaje y horarios',
                    'Número de escalas y conexiones',
                    'Franquicia de equipaje',
                    'Condiciones de la tarifa',
                    'Datos de los pasajeros',
                    'Precio total e impuestos',
                  ].map((item, idx) => (
                    <div className="col-sm-6" key={idx}>
                      <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-light">
                        <span className="text-success fw-bold">✓</span>
                        <span className="small text-dark">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Asistencia con reservas ── */}
          <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
            <h2 className="h3 fw-bold text-dark mb-3">Asistencia con la Reserva de Vuelos</h2>
            <p className="text-muted mb-4">
              Nuestra plataforma brinda asistencia de viaje independiente para personas que buscan opciones de vuelos y planifican viajes desde España.
            </p>

            <div className="row g-3 mb-4">
              {[
                'Encontrar opciones de vuelo adecuadas a tus fechas',
                'Revisar rutas directas y con escalas disponibles',
                'Comparar tarifas disponibles entre distintas opciones',
                'Comprender horarios de vuelos y tiempos de escala',
                'Revisar la información de la reserva y del itinerario',
                'Planificar viajes nacionales e internacionales',
              ].map((point, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="d-flex align-items-start gap-2">
                    <span className="text-primary mt-1">✈️</span>
                    <span className="text-muted small">{point}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-4 p-3 p-md-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 spain-assist-panel" style={{ background: 'rgba(0,43,103,0.06)', border: '1px solid rgba(0,43,103,0.12)' }}>
              <div>
                <h5 className="fw-bold text-dark mb-1">Habla con un Asistente de Viajes</h5>
                <p className="small text-muted mb-0">Obtén asesoramiento para planificar y cotizar tu itinerario desde España.</p>
              </div>
              <CTASection />
            </div>
          </div>

      

          {/* ── FAQ ── */}
          <div className="mx-auto mb-5 spain-faq-shell" style={{ maxWidth: '820px' }}>
            <div className="text-center mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-2">FAQ</span>
              <h2 className="h3 fw-bold text-dark">Preguntas Frecuentes</h2>
            </div>

            <div className="accordion" id="spainFaqAccordion">
              {faqs.map((faq, idx) => (
                <div className="accordion-item border-0 rounded-3 mb-3 shadow-sm overflow-hidden" key={idx}>
                  <h2 className="accordion-header" id={`heading-${idx}`}>
                    <button
                      className={`accordion-button fw-semibold ${openFaq === idx ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                      aria-controls={`collapse-${idx}`}
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${idx}`}
                    className={`accordion-collapse collapse ${openFaq === idx ? 'show' : ''}`}
                    aria-labelledby={`heading-${idx}`}
                  >
                    <div className="accordion-body text-muted">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Independent service disclosure ── */}
          <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
            <div className="row gy-4">
              <div className="col-md-7">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="fs-5">ℹ️</span>
                  <h3 className="h5 fw-bold text-dark mb-0">Servicio de Viajes Independiente</h3>
                </div>
                <p className="text-muted mb-2">
                  <strong>{SITE_NAME}</strong> es un sitio web de viajes independiente que proporciona búsqueda de vuelos e información relacionada con viajes.
                </p>
                <p className="text-muted mb-2">
                  No somos <strong>una aerolínea ni estamos afiliados a ninguna aerolínea específica, a menos que se indique explícitamente</strong>. Los nombres, logotipos y marcas comerciales de aerolíneas que se muestran en el sitio web pertenecen a sus respectivos propietarios.
                </p>
                <p className="text-muted mb-0">
                  Nuestro sitio web no debe interpretarse como el sitio web oficial, centro de atención al cliente ni representante directo de ninguna aerolínea.
                </p>
              </div>
              <div className="col-md-5">
                <div className="rounded-4 p-3 bg-warning bg-opacity-10 border border-warning border-opacity-25 h-100">
                  <h5 className="fw-bold text-dark mb-2">Información sobre Tarifas</h5>
                  <p className="small text-muted mb-2">
                    Las tarifas de los vuelos y la disponibilidad están sujetas a cambios.
                  </p>
                  <p className="small text-muted mb-0">
                    El precio final y las condiciones aplicables siempre deben revisarse antes de completar una reserva. Pueden aplicarse términos adicionales según el vuelo, la tarifa, el destino y el proveedor de viajes seleccionado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Planifica tu viaje (bottom CTA) ── */}
          <div className="text-center py-4">
            <h2 className="h3 fw-bold text-dark mb-2">Planifica tu Viaje desde España</h2>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
              Explora opciones de vuelo, revisa rutas y tarifas, y elige la opción que mejor se adapte a tus necesidades. Comienza a planificar tu próximo viaje.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 spain-bottom-actions">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Buscar Vuelos desde España
              </a>
              <CTASection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
