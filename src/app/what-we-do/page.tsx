import { Target, TrendingUp, Award, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Plan smarter calls",
    description: "Structured preparation that transforms every conversation",
    bullets: [
      "Get 5-bullet agendas tailored to your business in 17 seconds",
      "Keep complex meetings on track with a simple mental framework",
      "Align your whole team before every conversation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Hit quota consistently",
    description: "Connect activity to results with a repeatable process",
    bullets: [
      "Connect pipeline numbers to a repeatable sales process",
      "Turn your CRM from a chore into a competitive advantage",
      "Know what to prioritize, delegate, or drop",
    ],
  },
  {
    icon: Award,
    title: "Win major accounts",
    description: "Navigate complex deals with confidence",
    bullets: [
      "Map your customer's buying stages",
      "Identify every decision-maker's role",
      "Lead buyers to action",
    ],
  },
  {
    icon: Users,
    title: "Manage solution sales teams",
    description: "Coordinate your entire selling organization",
    bullets: [
      "Coordinate Marketing, Sales, Technical, and Executive efforts",
      "Adopt a common language to reduce errors and selling costs",
      "Build on what already works—or let us tailor S.A.L.E.S.® for you",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Consulting, training, and support for solution selling.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We help your team close bigger deals faster—and document the
              process so everyone follows it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10 transition-colors group-hover:bg-navy">
                  <service.icon className="h-7 w-7 text-navy transition-colors group-hover:text-white" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-navy">
                  {service.title}
                </h2>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy">
              Ready to transform your sales process?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let&apos;s discuss how the S.A.L.E.S.® System can work for your
              organization.
            </p>
            <a
              href="mailto:rchambers@americasreturn.com"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              Book a 20-Minute Call
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
