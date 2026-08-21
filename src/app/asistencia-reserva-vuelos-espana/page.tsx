'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../../config';
import FlightSearch from '../../components/FlightSearch';
import CTASection from '../../components/CTASection';
import { reportPhoneConversion } from '../../utils/gtag';

import Image from 'next/image';

export default function AsistenciaReservaVuelosEspanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const aeropuertos = [
    { name: 'Aeropuerto Adolfo Suárez Madrid–Barajas', code: 'MAD', ciudad: 'Madrid', region: 'Comunidad de Madrid' },
    { name: 'Aeropuerto Josep Tarradellas Barcelona–El Prat', code: 'BCN', ciudad: 'Barcelona', region: 'Cataluña' },
    { name: 'Aeropuerto de Palma de Mallorca', code: 'PMI', ciudad: 'Palma de Mallorca', region: 'Islas Baleares' },
    { name: 'Aeropuerto de Málaga–Costa del Sol', code: 'AGP', ciudad: 'Málaga', region: 'Andalucía' },
    { name: 'Aeropuerto de Alicante–Elche Miguel Hernández', code: 'ALC', ciudad: 'Alicante', region: 'Comunidad Valenciana' },
    { name: 'Aeropuerto de Valencia', code: 'VLC', ciudad: 'Valencia', region: 'Comunidad Valenciana' },
    { name: 'Aeropuerto de Sevilla', code: 'SVQ', ciudad: 'Sevilla', region: 'Andalucía' },
    { name: 'Aeropuerto de Bilbao', code: 'BIO', ciudad: 'Bilbao', region: 'País Vasco' },
    { name: 'Aeropuerto de Tenerife Sur', code: 'TFS', ciudad: 'Tenerife', region: 'Islas Canarias' },
    { name: 'Aeropuerto de Gran Canaria', code: 'LPA', ciudad: 'Gran Canaria', region: 'Islas Canarias' },
    { name: 'Aeropuerto de Ibiza', code: 'IBZ', ciudad: 'Ibiza', region: 'Islas Baleares' },
    { name: 'Aeropuerto César Manrique-Lanzarote', code: 'ACE', ciudad: 'Lanzarote', region: 'Islas Canarias' },
    { name: 'Aeropuerto de Santiago de Compostela', code: 'SCQ', ciudad: 'Santiago', region: 'Galicia' },
    { name: 'Aeropuerto de Fuerteventura', code: 'FUE', ciudad: 'Fuerteventura', region: 'Islas Canarias' },
  ];

  const destinosInternacionales = [
    { pais: 'Francia', bandera: '🇫🇷', ciudades: 'París, Niza, Lyon' },
    { pais: 'Italia', bandera: '🇮🇹', ciudades: 'Roma, Milán, Venecia' },
    { pais: 'Portugal', bandera: '🇵🇹', ciudades: 'Lisboa, Oporto, Faro' },
    { pais: 'Reino Unido', bandera: '🇬🇧', ciudades: 'Londres, Mánchester, Edimburgo' },
    { pais: 'Alemania', bandera: '🇩🇪', ciudades: 'Fráncfort, Múnich, Berlín' },
    { pais: 'Estados Unidos', bandera: '🇺🇸', ciudades: 'Nueva York, Miami, Los Ángeles' },
    { pais: 'México', bandera: '🇲🇽', ciudades: 'Ciudad de México, Cancún' },
    { pais: 'Canadá', bandera: '🇨🇦', ciudades: 'Toronto, Montreal' },
    { pais: 'Emiratos Árabes Unidos', bandera: '🇦🇪', ciudades: 'Dubái, Abu Dabi' },
    { pais: 'Otros Destinos', bandera: '🌍', ciudades: 'Rutas internacionales en todo el mundo' },
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
    <div className="bg-light">
      {/* Top Banner / Hero Section con Imagen de Fondo y Capa Oscura */}
      <section className="hero-bg-section pt-5 pb-4 pb-lg-5">
        <div className="hero-bg-image-wrapper">
          <Image src="/spain-hero.jpg" alt="Vuelos y destinos en España" fill className="hero-bg-image" priority />
        </div>
        <div className="hero-bg-overlay"></div>
        <div className="container hero-bg-content">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item"><Link href="/" className="text-white-50 text-decoration-none">Inicio</Link></li>
              <li className="breadcrumb-item"><Link href="/flights" className="text-white-50 text-decoration-none">Vuelos</Link></li>
              <li className="breadcrumb-item active text-white" aria-current="page">Asistencia para la Reserva de Vuelos en España</li>
            </ol>
          </nav>


          {/* Buscador de Vuelos */}
          <div className="mt-4">
            <FlightSearch />
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Columna Principal */}
          <div className="col-lg-8">
            {/* Encuentra Opciones de Vuelos desde España */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-3">Encuentra Opciones de Vuelos desde España</h2>
              <p className="text-muted">
                Nuestra plataforma de viajes ofrece información y asistencia para viajeros que buscan opciones de vuelos desde aeropuertos de toda España. Ya sea que viajes por negocios, vacaciones o visitas familiares, te ayudamos a comparar rutas y encontrar la mejor alternativa.
              </p>

              <h3 className="h5 fw-bold text-dark mt-4 mb-3">Explorar Opciones de Vuelos:</h3>
              <div className="row g-3">
                {[
                  { title: 'Vuelos nacionales desde España', desc: 'Conexiones entre la península, las Islas Baleares y las Islas Canarias.', icon: '🛫' },
                  { title: 'Vuelos internacionales desde España', desc: 'Conecta con destinos en Europa, América, Oriente Medio y el resto del mundo.', icon: '🌐' },
                  { title: 'Opciones de vuelos de solo ida', desc: 'Itinerarios flexibles para viajes con fechas de regreso abiertas.', icon: '➡️' },
                  { title: 'Opciones de vuelos de ida y vuelta', desc: 'Itinerarios completos adaptados a tus días de vacaciones o negocios.', icon: '🔄' },
                  { title: 'Opciones de vuelos directos', desc: 'Vuelos sin escalas para disfrutar del menor tiempo de trayecto.', icon: '⚡' },
                  { title: 'Opciones de vuelos con escalas', desc: 'Alternativas con escalas convenientes para optimizar tu presupuesto.', icon: '🔀' },
                  { title: 'Diferentes horarios de viaje', desc: 'Salidas matutinas, vespertinas o nocturnas según tu disponibilidad.', icon: '🕒' },
                  { title: 'Opciones de tarifas disponibles', desc: 'Compara clases turista, turista superior, ejecutiva y tarifas flexibles.', icon: '🏷️' },
                ].map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="p-3 rounded-3 bg-light border h-100">
                      <div className="d-flex align-items-start gap-2">
                        <span className="fs-4">{item.icon}</span>
                        <div>
                          <h4 className="h6 fw-bold mb-1 text-dark">{item.title}</h4>
                          <p className="small text-muted mb-0">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aeropuertos Populares en España */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-3">Aeropuertos Populares en España</h2>
              <p className="text-muted mb-4">
                España cuenta con varios aeropuertos importantes que ofrecen rutas nacionales e internacionales. Según tu ciudad de salida y destino, puedes explorar opciones de vuelos desde aeropuertos como:
              </p>

              <div className="row g-3">
                {aeropuertos.map((aeropuerto, idx) => (
                  <div className="col-sm-6" key={idx}>
                    <div className="d-flex align-items-center justify-content-between p-3 rounded-3 border bg-light h-100">
                      <div>
                        <span className="badge bg-primary text-white fw-bold me-2">{aeropuerto.code}</span>
                        <strong className="text-dark d-block mt-1 small">{aeropuerto.name}</strong>
                        <small className="text-muted">{aeropuerto.ciudad}, {aeropuerto.region}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small text-muted mt-3 mb-0">
                * La disponibilidad y los horarios de los vuelos varían según la ruta seleccionada y las fechas de viaje.
              </p>
            </div>

            {/* Buscar Vuelos desde España */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-3">Buscar Vuelos desde España</h2>
              <p className="text-muted mb-4">
                Utiliza nuestra plataforma de viajes para explorar las opciones de vuelo disponibles según los requisitos de tu viaje. Puedes realizar tu búsqueda mediante los siguientes criterios:
              </p>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="p-3 border rounded-3 bg-light h-100">
                    <h4 className="h6 fw-bold text-primary mb-1">📍 Ciudad de Salida</h4>
                    <p className="small text-muted mb-0">Selecciona cualquier aeropuerto o ciudad de España para iniciar tu itinerario.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded-3 bg-light h-100">
                    <h4 className="h6 fw-bold text-primary mb-1">🎯 Destino</h4>
                    <p className="small text-muted mb-0">Elige tu destino nacional o internacional preferido en cualquier parte del mundo.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded-3 bg-light h-100">
                    <h4 className="h6 fw-bold text-primary mb-1">📅 Fechas de Viaje</h4>
                    <p className="small text-muted mb-0">Selecciona tus fechas exactas de salida y regreso, o consulta fechas flexibles.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded-3 bg-light h-100">
                    <h4 className="h6 fw-bold text-primary mb-1">🧳 Tipo de Viaje</h4>
                    <p className="small text-muted mb-0">Revisa opciones de solo ida y de ida y vuelta con el número de pasajeros deseado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vuelos Internacionales desde España */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-3">Vuelos Internacionales desde España</h2>
              <p className="text-muted mb-4">
                Los viajeros que parten de España pueden explorar opciones de vuelos a destinos en toda Europa y otras regiones internacionales. Los destinos populares incluyen:
              </p>

              <div className="row g-3">
                {destinosInternacionales.map((dest, idx) => (
                  <div className="col-sm-6 col-md-4" key={idx}>
                    <div className="p-3 rounded-3 border bg-light text-center h-100">
                      <span className="fs-2 mb-1 d-block">{dest.bandera}</span>
                      <strong className="text-dark d-block">{dest.pais}</strong>
                      <small className="text-muted d-block">{dest.ciudades}</small>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small text-muted mt-3 mb-0">
                Las rutas, horarios y tarifas disponibles dependen de las fechas de viaje seleccionadas y del destino.
              </p>
            </div>

            {/* Comparar Opciones de Vuelo y Precios */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-3">Comparar Opciones de Vuelo y Precios</h2>
              <p className="text-muted mb-4">
                Los precios de los vuelos pueden variar según las fechas de viaje, la ruta, la disponibilidad, el tipo de tarifa y otras condiciones. Antes de completar una reserva, revisa los detalles disponibles del vuelo, incluyendo:
              </p>

              <div className="row g-3 mb-4">
                {[
                  'Horarios de salida y llegada',
                  'Fechas de viaje y horarios',
                  'Número de escalas y tiempos de conexión',
                  'Condiciones y franquicia de equipaje',
                  'Condiciones de la tarifa y políticas de cambio',
                  'Información y datos de los pasajeros',
                  'Precio total e impuestos aplicables',
                ].map((item, idx) => (
                  <div className="col-sm-6" key={idx}>
                    <div className="d-flex align-items-center gap-2 p-2 rounded bg-light border">
                      <span className="text-success fw-bold">✓</span>
                      <span className="small text-dark fw-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="alert alert-info border-0 rounded-3 mb-0 small">
                ℹ️ <strong>Aviso importante:</strong> Los precios y la disponibilidad pueden cambiar hasta que la reserva se haya completado satisfactoriamente.
              </div>
            </div>

            {/* Asistencia con la Reserva de Vuelos */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-3">Asistencia con la Reserva de Vuelos</h2>
              <p className="text-muted mb-4">
                Nuestra plataforma brinda asistencia de viaje independiente para personas que buscan opciones de vuelos y planifican viajes desde España. Si necesitas ayuda para entender las opciones de vuelo disponibles, puedes revisar la información proporcionada durante el proceso de búsqueda y reserva.
              </p>

              <h4 className="h6 fw-bold text-dark mb-3">Nuestro servicio puede ayudar a los viajeros con:</h4>
              <ul className="list-group list-group-flush mb-4">
                {[
                  'Encontrar opciones de vuelo adecuadas a tus fechas',
                  'Revisar rutas directas y con escalas disponibles',
                  'Comparar tarifas disponibles entre distintas opciones',
                  'Comprender horarios de vuelos y tiempos de escala',
                  'Revisar la información de la reserva y del itinerario',
                  'Planificar viajes nacionales e internacionales sin complicaciones',
                ].map((point, idx) => (
                  <li className="list-group-item px-0 bg-transparent text-muted small" key={idx}>
                    ✈️ {point}
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                <div>
                  <h5 className="fw-bold text-dark mb-1">Habla con un Asistente de Viajes</h5>
                  <p className="small text-muted mb-0">Obtén asesoramiento para planificar y cotizar tu itinerario desde España.</p>
                </div>
                <CTASection />
              </div>
            </div>

            {/* Preguntas Frecuentes */}
            <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mb-5 bg-white">
              <h2 className="h3 fw-bold text-dark mb-4">Preguntas Frecuentes</h2>
              <div className="accordion" id="spainFaqAccordion">
                {faqs.map((faq, idx) => (
                  <div className="accordion-item border rounded-3 mb-3 overflow-hidden" key={idx}>
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
                      <div className="accordion-body text-muted small">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra Lateral (Sidebar) */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
              {/* Tarjeta de Contacto Rápido */}
              <div className="card border-0 rounded-4 shadow-sm p-4 mb-4 text-white" style={{ background: '#002b67' }}>
                <h5 className="fw-bold mb-2">Centro de Asistencia de Vuelos</h5>
                <p className="small text-white-75 mb-3">
                  ¿Tienes dudas sobre tu ruta o necesitas ayuda para comparar vuelos desde España?
                </p>
                <div className="mb-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    onClick={reportPhoneConversion}
                    className="btn btn-warning text-dark fw-bold rounded-pill w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                  >
                    <span>📞</span> {PHONE_NUMBER_DISPLAY}
                  </a>
                </div>
                <small className="text-white-50 d-block text-center">
                  Asistencia independiente para la planificación de viajes
                </small>
              </div>

              {/* Servicio de Viajes Independiente */}
              <div className="card border-0 rounded-4 shadow-sm p-4 mb-4 bg-white">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="fs-5">ℹ️</span>
                  <h5 className="fw-bold text-dark mb-0">Servicio de Viajes Independiente</h5>
                </div>
                <p className="small text-muted mb-3">
                  <strong>{SITE_NAME}</strong> es un sitio web de viajes independiente que proporciona búsqueda de vuelos e información relacionada con viajes.
                </p>
                <p className="small text-muted mb-3">
                  No somos <strong>una aerolínea ni estamos afiliados a ninguna aerolínea específica, a menos que se indique explícitamente</strong>. Los nombres de aerolíneas, logotipos, marcas comerciales y demás información de marca que se muestran en el sitio web pertenecen a sus respectivos propietarios y se utilizan con fines de identificación o informativos.
                </p>
                <p className="small text-muted mb-0">
                  Nuestro sitio web no debe interpretarse como el sitio web oficial, centro de atención al cliente ni representante directo de ninguna aerolínea.
                </p>
              </div>

              {/* Información Importante sobre Tarifas */}
              <div className="card border-0 rounded-4 shadow-sm p-4 mb-4 bg-white border-start border-warning border-4">
                <h5 className="fw-bold text-dark mb-2">Información Importante sobre Tarifas</h5>
                <p className="small text-muted mb-2">
                  Las tarifas de los vuelos y la disponibilidad están sujetas a cambios.
                </p>
                <p className="small text-muted mb-0">
                  El precio final y las condiciones aplicables siempre deben revisarse antes de completar una reserva. Pueden aplicarse términos adicionales según el vuelo, la tarifa, el destino y el proveedor de viajes seleccionado.
                </p>
              </div>

              {/* Rutas Nacionales Populares */}
              <div className="card border-0 rounded-4 shadow-sm p-4 bg-white">
                <h5 className="fw-bold text-dark mb-3">Rutas Populares en España</h5>
                <ul className="list-unstyled mb-0 small">
                  <li className="py-2 border-bottom d-flex justify-content-between">
                    <span>Madrid (MAD) → Barcelona (BCN)</span>
                    <span className="text-primary fw-semibold">Popular</span>
                  </li>
                  <li className="py-2 border-bottom d-flex justify-content-between">
                    <span>Madrid (MAD) → Palma (PMI)</span>
                    <span className="text-primary fw-semibold">Popular</span>
                  </li>
                  <li className="py-2 border-bottom d-flex justify-content-between">
                    <span>Barcelona (BCN) → Málaga (AGP)</span>
                    <span className="text-primary fw-semibold">Popular</span>
                  </li>
                  <li className="py-2 d-flex justify-content-between">
                    <span>Madrid (MAD) → Tenerife (TFS)</span>
                    <span className="text-primary fw-semibold">Popular</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Planifica tu Viaje desde España Footer Block */}
        <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 mt-4 text-center bg-white">
          <h2 className="h3 fw-bold text-dark mb-2">Planifica tu Viaje desde España</h2>
          <p className="text-muted mx-auto mb-4" style={{ maxWidth: '640px' }}>
            Explora opciones de vuelo, revisa rutas y tarifas disponibles, y elige la opción que mejor se adapte a tus necesidades de viaje. Busca vuelos desde España y comienza a planificar tu próximo viaje.
          </p>

        </div>
      </div>
    </div>
  );
}
