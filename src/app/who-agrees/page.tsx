import {
  ArrowRight,
  Quote,
  Building,
  Home,
  Store,
  TrendingUp,
  Users,
  Landmark,
} from "lucide-react";

const clientTypes = [
  {
    icon: Building,
    title: "Channel partners",
    description: "Improving sales through HP",
  },
  {
    icon: Home,
    title: "Real estate developers",
    description: "Strengthening tenant performance",
  },
  {
    icon: Store,
    title: "Franchisors",
    description: "Raising franchisee revenue",
  },
  {
    icon: TrendingUp,
    title: "Venture capital firms",
    description: "Accelerating portfolio company growth",
  },
  {
    icon: Users,
    title: "Business associations",
    description: "Developing member practices",
  },
  {
    icon: Landmark,
    title: "Public agencies",
    description: "Supporting emerging enterprises",
  },
];

export default function WhoAgrees() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fortune 500 companies, global firms, and growing businesses{" "}
              <span className="text-gold">trust this approach.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Organizations across industries rely on the S.A.L.E.S.® System to
              transform their sales teams.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-gray-50 p-8 lg:p-12">
              <Quote className="absolute left-6 top-6 h-12 w-12 text-navy/10 lg:left-10 lg:top-10 lg:h-16 lg:w-16" />
              <div className="relative">
                <blockquote className="text-2xl font-medium italic leading-relaxed text-navy lg:text-3xl">
                  &ldquo;This is the most effective, results-driven sales
                  training in the industry.&rdquo;
                </blockquote>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="text-lg font-semibold text-navy">
                    Larry Wainscott
                  </p>
                  <p className="text-gray-600">
                    Founder, Future Readiness LLC
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Leadership Development for SYNNEX Corporation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy">
              Organizations we work with
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From Fortune 500 companies to growing businesses, our methodology
              works across diverse industries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((client) => (
              <div
                key={client.title}
                className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy">
                  <client.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{client.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy">
              Join organizations that trust our approach
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let&apos;s discuss how the S.A.L.E.S.® System can work for your
              specific industry and challenges.
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
