import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,12,9,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(11,94,215,0.18),transparent_35%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#0B5ED7]">
          Error 404
        </p>

        <h1 className="max-w-3xl text-5xl font-extrabold uppercase leading-tight md:text-7xl">
          Page Not Found
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          The page you are looking for may have been moved, removed, or the link
          may be incorrect. Head back to N&J MOT Centre and continue browsing our
          services.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-md px-8 font-semibold text-white transition hover:brightness-110"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Back To Home
          </Link>

          <Link
            to="/service"
            className="inline-flex h-12 items-center justify-center rounded-md border px-8 font-semibold text-white transition hover:bg-white/10"
            style={{ borderColor: "var(--accent)" }}
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
