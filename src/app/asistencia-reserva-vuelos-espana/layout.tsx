import type { Metadata } from 'next';
import { SITE_NAME } from '../../config';

export const metadata: Metadata = {
  title: `Asistencia y Reserva de Vuelos | ${SITE_NAME}`,
  description: 'Información y asistencia independiente sobre vuelos, rutas, horarios, tarifas, aeropuertos y condiciones de viaje desde España.',
};

export default function AsistenciaReservaVuelosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
