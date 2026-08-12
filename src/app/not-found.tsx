import Link from 'next/link';
import { PHONE_NUMBER } from '../config';

export default function NotFound() {
  return (
    <main className="d-flex align-items-center justify-content-center vh-100 bg-light text-center px-4">
      <div className="mx-auto" style={{ maxWidth: 640 }}>
        <span className="badge bg-primary-subtle text-primary mb-4">Under Maintenance</span>
        <h1 className="display-5 fw-bold mb-3">404 — Page Unavailable</h1>
        <p className="lead text-muted mb-4">
          This page is currently under maintenance. We’re working to bring it back online shortly.
          Please check again soon or return to the homepage for available travel information.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link href="/" className="btn btn-primary btn-lg px-4">
            Return Home
          </Link>
          <a href={`tel:${PHONE_NUMBER}`} className="btn btn-outline-secondary btn-lg px-4">
            Call Support
          </a>
        </div>
      </div>
    </main>
  );
}
