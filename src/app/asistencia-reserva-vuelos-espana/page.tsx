'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY, SPAIN_PHONE_NUMBER, SPAIN_PHONE_NUMBER_DISPLAY } from '../../config';
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
    { label: 'Asistencia para España', number: SPAIN_PHONE_NUMBER_DISPLAY, tel: `tel:${SPAIN_PHONE_NUMBER}`, flag: '🇪🇸' },
  ];

  const faqs = [
    {
      q: '¿FlightAgencyHub es una aerolínea?',
      a: `No. ${SITE_NAME} es una plataforma independiente de información y asistencia para viajes. No opera vuelos ni representa oficialmente a ninguna aerolínea.`,
    },
    {
      q: '¿FlightAgencyHub está afiliado a alguna aerolínea?',
      a: `${SITE_NAME} es un servicio independiente y no afirma tener afiliación, patrocinio o respaldo oficial de ninguna aerolínea, salvo que se indique expresamente.`,
    },
    {
      q: '¿Las tarifas de vuelos están garantizadas?',
      a: 'No. Los precios y la disponibilidad pueden cambiar según la fecha, demanda, ruta, aerolínea, tarifa y condiciones aplicables.',
    },
    {
      q: '¿Puedo cambiar o cancelar mi vuelo?',
      a: 'Las condiciones de cambio, cancelación y reembolso dependen de la aerolínea, tarifa, billete y proveedor correspondiente.',
    },
    {
      q: '¿Qué información puedo consultar?',
      a: 'Puedes consultar información general sobre rutas, horarios, aeropuertos, equipaje, tarifas y condiciones de viaje.',
    },
    {
      q: '¿Cómo puedo contactar con FlightAgencyHub?',
      a: `Puedes contactar con nuestro equipo mediante ${PHONE_NUMBER_DISPLAY} o ${SPAIN_PHONE_NUMBER_DISPLAY} para solicitar información y orientación general sobre tus opciones de viaje. Esta atención no es un servicio oficial de ninguna aerolínea.`,
    },
  ];

  const flightOptions = [
    { title: 'Vuelos internacionales', desc: 'Destinos en Europa, América y el resto del mundo.', icon: 'public', tone: 'primary' },
    { title: 'Solo ida', desc: 'Itinerarios flexibles con fecha de regreso abierta.', icon: 'arrow_right_alt', tone: 'secondary' },
    { title: 'Ida y vuelta', desc: 'Itinerarios completos para vacaciones o negocios.', icon: 'sync', tone: 'tertiary' },
    { title: 'Vuelos directos', desc: 'Sin escalas para el menor tiempo de trayecto.', icon: 'bolt', tone: 'sky' },
    { title: 'Con escalas', desc: 'Alternativas económicas con paradas convenientes.', icon: 'route', tone: 'secondary' },
    { title: 'Horarios flexibles', desc: 'Salidas matutinas, vespertinas o nocturnas.', icon: 'schedule', tone: 'blue' },
    { title: 'Tarifas variadas', desc: 'Turista, turista superior, ejecutiva y flexible.', icon: 'loyalty', tone: 'tertiary' },
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
              Asistencia independiente para viajeros
            </span>
            <h1 id="spain-hero-title">Asistencia para Reservas de Vuelos</h1>
            <p>
              Explora información sobre vuelos y destinos internacionales, y consulta rutas, horarios, tarifas y condiciones de viaje antes de planificar tu reserva.
            </p>
            <div className="spain-hero__actions">
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={reportPhoneConversion}
                className="spain-hero__primary-action"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Obtén asistencia para tu viaje
              </a>
              <a href="#aeropuertos-espana" className="spain-hero__secondary-action">
                Explorar destinos
                <span className="material-symbols-outlined" aria-hidden="true">arrow_downward</span>
              </a>
            </div>
            <div className="spain-hero__trust">
              <span><span className="material-symbols-outlined" aria-hidden="true">support_agent</span> Información general de viaje</span>
              <span><span className="material-symbols-outlined" aria-hidden="true">verified_user</span> Servicio independiente</span>
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
            <h2 className="display-6 fw-bold mb-3">
              Información y asistencia para vuelos desde España
            </h2>
            <p className="lead mb-0">
              Si estás planificando un viaje, puedes consultar información general sobre vuelos, destinos, aeropuertos, rutas, horarios y condiciones para valorar distintas alternativas.
            </p>
          </section>

          <section className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white" aria-labelledby="que-es-title">
            <div className="row align-items-center gy-4">
              <div className="col-lg-5">
                <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-3">Quiénes somos</span>
                <h2 id="que-es-title" className="h3 fw-bold text-dark mb-0">¿Qué es FlightAgencyHub?</h2>
              </div>
              <div className="col-lg-7">
                <p className="text-muted mb-3"><strong>{SITE_NAME}</strong> es una plataforma independiente de información y asistencia para viajeros. Ofrecemos orientación general sobre vuelos, rutas, horarios, tarifas, aeropuertos y planificación de viajes.</p>
                <p className="text-muted mb-0"><strong>No somos una aerolínea y no representamos oficialmente a ninguna compañía aérea.</strong> Las tarifas, la disponibilidad, el equipaje, los cambios y las cancelaciones dependen de la aerolínea o del proveedor correspondiente.</p>
              </div>
            </div>
          </section>

          <section className="mb-5" aria-labelledby="ayuda-title">
            <div className="text-center mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-2">Orientación de viaje</span>
              <h2 id="ayuda-title" className="h3 fw-bold text-dark">¿En qué podemos ayudarte?</h2>
              <p className="text-muted mx-auto mb-0" style={{ maxWidth: '720px' }}>Nuestro equipo puede ofrecer información general para ayudarte a entender tus opciones. Las condiciones finales siempre dependen del billete y del proveedor.</p>
            </div>
            <div className="row g-3">
              {[
                ['Reserva de vuelos', 'Te orientamos sobre los datos que conviene revisar antes de solicitar o completar una reserva.'],
                ['Opciones de vuelos', 'Puedes consultar alternativas de rutas, fechas y horarios según la información disponible.'],
                ['Cambios de vuelo', 'Te ayudamos a identificar qué información debes comprobar; cualquier cambio depende de la tarifa y la aerolínea.'],
                ['Cancelaciones', 'Podemos explicar qué aspectos revisar, aunque la cancelación y el reembolso están sujetos a las condiciones aplicables.'],
                ['Información sobre equipaje', 'Te orientamos sobre dónde consultar la franquicia, los límites y los posibles cargos del proveedor.'],
                ['Itinerarios y horarios', 'Puedes recibir ayuda general para entender conexiones, tiempos de viaje y horarios publicados.'],
                ['Información general de viaje', 'Ofrecemos orientación sobre aeropuertos, rutas y planificación sin sustituir los términos del proveedor.'],
              ].map(([title, description], index) => (
                <div className="col-12 col-md-6 col-lg-4" key={title}>
                  <article className="card border-0 rounded-3 shadow-sm h-100 p-4 bg-white">
                    <span className="skybound-service-number">0{index + 1}</span>
                    <h3 className="h6 fw-bold text-dark">{title}</h3>
                    <p className="small text-muted mb-0">{description}</p>
                  </article>
                </div>
              ))}
            </div>
          </section>

          <section className="skybound-feature-marquee mb-5" aria-label="Opciones de vuelo">
            <div className="skybound-feature-marquee__viewport">
              <div className="skybound-feature-marquee__track">
                {[...flightOptions, ...flightOptions].map((item, idx) => (
                  <article className="skybound-glass-card" key={`${item.title}-${idx}`} aria-hidden={idx >= flightOptions.length}>
                    <div className={`skybound-icon skybound-icon--${item.tone}`}>
                      <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="skybound-feature-marquee__hint" aria-hidden="true">
              <span className="material-symbols-outlined"></span> Opciones destacadas
            </div>
          </section>

          {/* ── Aeropuertos populares ── */}
          <div className="mb-5" id="aeropuertos-espana">
            <div className="text-center mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-2">Aeropuertos</span>
              <h2 className="h3 fw-bold text-dark">Aeropuertos Populares en España</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Madrid, Barcelona, Palma de Mallorca, Málaga, Alicante, Valencia, Sevilla y Bilbao son algunos de los principales aeropuertos del país. Las rutas, horarios, disponibilidad y tarifas pueden variar según la fecha, la temporada, el aeropuerto, la aerolínea y las condiciones del proveedor; no todas las compañías operan desde cada aeropuerto.
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
            <h2 className="h4 fw-bold mb-2">¿Necesitas orientación para tu viaje?</h2>
            <p className="mb-3 small text-white-75">
              Puedes contactar con nuestro equipo para obtener información y asistencia general relacionada con tus opciones de viaje. No somos el centro oficial de ninguna aerolínea.
            </p>
            <div className="spain-contact-options">
              <a href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion} className="spain-contact-option">
                <span className="spain-contact-option__flag">🇺🇸</span>
                <span><small>Estados Unidos</small><strong>{PHONE_NUMBER_DISPLAY}</strong></span>
              </a>
              <a href={`tel:${SPAIN_PHONE_NUMBER}`} onClick={reportPhoneConversion} className="spain-contact-option">
                <span className="spain-contact-option__flag">🇪🇸</span>
                <span><small>España</small><strong>{SPAIN_PHONE_NUMBER_DISPLAY}</strong></span>
              </a>
            </div>
          </div>

          {/* ── Información para comparar opciones ── */}
          <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
            <div className="row align-items-center gy-4">
              <div className="col-lg-5">
                <h2 className="h3 fw-bold text-dark mb-3">Información para Comparar Opciones de Vuelo</h2>
                <p className="text-muted mb-0">
                  Antes de elegir un vuelo, revisa las fechas, horarios, aeropuertos, escalas, equipaje, condiciones de la tarifa y precio final aplicable.
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
              {SITE_NAME} ofrece información y orientación independiente para personas que desean investigar opciones de vuelos y planificar sus viajes desde España. La información disponible puede variar y las condiciones finales dependen de la aerolínea o proveedor correspondiente. No emitimos billetes ni sustituimos las condiciones del proveedor correspondiente.
            </p>

            <div className="row g-3 mb-4">
              {[
                'Consultar información sobre opciones de vuelo según tus fechas y destino',
                'Revisar rutas directas y con escalas disponibles',
                'Revisar las condiciones y los precios disponibles antes de realizar una reserva.',
                'Comprender horarios de vuelos y tiempos de escala',
                'Revisar la información de la reserva y del itinerario',
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
                <p className="small text-muted mb-0">Contacta con nuestro equipo para consultar información general sobre tus opciones de viaje.</p>
                <p className="small text-muted mb-0">Esta atención es independiente y no representa el servicio oficial de ninguna aerolínea.</p>
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
                  <h3 className="h5 fw-bold text-dark mb-0">Importante: servicio independiente</h3>
                </div>
                <p className="text-muted mb-2">
                  <strong>{SITE_NAME}</strong> es un servicio independiente de información y asistencia para viajes. No somos una aerolínea ni afirmamos estar afiliados, patrocinados o respaldados por ninguna aerolínea, salvo que se indique expresamente.
                </p>
                <p className="text-muted mb-2">
                  Las tarifas, horarios, disponibilidad, políticas de equipaje, cambios y cancelaciones están sujetas a las condiciones de la aerolínea o proveedor correspondiente. Revisa los términos aplicables antes de realizar una compra.
                </p>
                <p className="text-muted mb-0">
                  Nuestro sitio web no debe interpretarse como el sitio oficial, centro de reservas o servicio de atención al cliente de ninguna aerolínea.
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

          <section className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white" aria-labelledby="sobre-nosotros-title">
            <div className="row gy-4 align-items-center">
              <div className="col-md-5">
                <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-3">Sobre nosotros</span>
                <h2 id="sobre-nosotros-title" className="h3 fw-bold text-dark mb-0">Sobre FlightAgencyHub</h2>
              </div>
              <div className="col-md-7">
                <p className="text-muted mb-3">FlightAgencyHub es un sitio web independiente dedicado a reunir información útil para la planificación de viajes. Su objetivo es ayudarte a comprender opciones de vuelos, rutas, aeropuertos, horarios y condiciones antes de tomar una decisión.</p>
                <p className="text-muted mb-0">Para solicitar orientación general, puedes contactar con nuestro equipo en <a href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion}>{PHONE_NUMBER_DISPLAY}</a> o <a href={`tel:${SPAIN_PHONE_NUMBER}`} onClick={reportPhoneConversion}>{SPAIN_PHONE_NUMBER_DISPLAY}</a>. La información y la asistencia no sustituyen los términos de la aerolínea o del proveedor con el que finalmente contrates.</p>
              </div>
            </div>
          </section>

          {/* ── Planifica tu viaje (bottom CTA) ── */}
          <div className="text-center py-4">
            <h2 className="h3 fw-bold text-dark mb-2">Planifica tu Viaje desde España</h2>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
              Explora información sobre vuelos, revisa rutas y condiciones, y contacta con nuestro equipo si necesitas orientación general para planificar tu viaje.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 spain-bottom-actions">
              <a href="#aeropuertos-espana" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">Ver aeropuertos de España</a>
              <CTASection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
