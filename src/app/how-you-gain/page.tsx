import {
  ArrowRight,
  Building2,
  User,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  Briefcase,
  Award,
} from "lucide-react";

const businessBenefits = [
  {
    icon: TrendingUp,
    title: "Higher-margin revenue",
    description: "Increase profitability with lower selling expense",
  },
  {
    icon: Building2,
    title: "Documented sales process",
    description: "A quantified process that increases company value",
  },
  {
    icon: Clock,
    title: "Measurable ROI",
    description: "Training with minimal time out of the field",
  },
];

const professionalBenefits = [
  {
    icon: Target,
    title: "Exceed personal quota",
    description: "Consistently hit and surpass your targets",
  },
  {
    icon: Briefcase,
    title: "Focus on what matters",
    description: "Actions that actually move deals forward",
  },
  {
    icon: DollarSign,
    title: "Capture your value",
    description: "Create more value—and capture your share",
  },
];

export default function HowYouGain() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              More profit. Stronger assets.{" "}
              <span className="text-gold">Better use of your time.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The S.A.L.E.S.® System delivers measurable results for both your
              organization and your sales professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* For the Business */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-navy">
                  For the business
                </h2>
              </div>
              <div className="mt-8 space-y-6">
                {businessBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20">
                      <benefit.icon className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed bullets */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="font-semibold text-navy">Key outcomes:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">
                      Higher-margin revenue with lower selling expense
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">
                      A documented, quantified sales process that increases
                      company value
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">
                      Training with measurable ROI and minimal time out of the
                      field
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For Sales Professionals */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-navy">
                  For sales professionals
                </h2>
              </div>
              <div className="mt-8 space-y-6">
                {professionalBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20">
                      <benefit.icon className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed bullets */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="font-semibold text-navy">Personal results:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">Exceed personal quota</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">
                      Focus on actions that actually move deals forward
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">
                      Create more value—and capture your share
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              See these results in your organization
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let&apos;s discuss how the S.A.L.E.S.® System can deliver
              measurable ROI for your team.
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
