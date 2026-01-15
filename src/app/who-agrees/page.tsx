import { ArrowRight, Quote } from "lucide-react";

const caseStudies = [
  {
    company: "Hewlett-Packard",
    subtitle: "The HP Way",
    description:
      "Dave Packard and Bill Hewlett, Co-founders of HP, the largest technology company in the world.",
    results:
      "The first 5 years of our relationship got the attention of Bill and Dave. The next 5 earned HP a 100:1 annual ROI on marketing funds for S.A.L.E.S. After 20 years we've taught solution sales to more certified HP channel reps than anyone outside of HP, as their sales grew from $13B to $115B.",
  },
  {
    company: "D&H Distributing",
    quote:
      "S.A.L.E.S. became a strategic tool for contributing to our growth. The ROI was nearly immediate. I like the fact that sales training was approached as a process rather than an event. 150 of our people went through workshops, 1-on-1 call coaching, and account planning sessions over many months...and now reinforced and elevated as we expand.",
    attribution: "Gary Brothers, President Emeritus, D&H Distributing, CRN Top 25 Winner",
    results:
      "Over our 7 year history with this employee-owned company, D&H has grown from $750MM to over $2B in IT and consumer electronics sales.",
  },
  {
    company: "SYNNEX Corporation",
    quotes: [
      {
        text: "I've worked with Richard Chambers and his company for over 20 years. The S.A.L.E.S. System is, by far, the most useful, high impact, results-generating sales training program I have encountered in my 38-year career.",
        attribution:
          "Larry Wainscott, Founder, Future Readiness, LLC, and leadership development consultant at SYNNEX Corporation",
      },
      {
        text: "S.A.L.E.S. differentiates us from our competition. This process, easily customizable, simple yet with depth, provides a powerful approach to building relationships and serving the needs of our customers.",
        attribution: "Mary Alice Rau, Sr. Training Manager",
      },
    ],
    results:
      "SYNNEX entered the Fortune 500 during our 3-year program with 300 sales reps, rising from $5.8B to over $8B in revenue. Sales Managers and the SYNNEX Knowledge Transfer Organization have been certified to provide the training for continued ROI.",
  },
  {
    company: "Avnet Technology Solutions",
    results:
      "We have helped Avnet build its channel partner base for 17 years, starting with the first enterprise computing products sales by HP through distribution. Avnet, a Fortune 500 company, has sponsored S.A.L.E.S. programs for over 75 VAR partner firms with combined sales in the billions.",
  },
  {
    company: "Arrow Enterprise Computing Solutions",
    quote:
      "Richard makes every class engaging and fun. Never before have I attended a class mixed with engineers, sales and marketing that was more productive. Richard has cracked the engagement and retention code: Simple to understand and learn, Always focused on results, Lots of ROI, Excellent engagement every time, Solution-oriented with focus on value creation.",
    attribution: "Dina Haase, Sales Manager, National Accounts",
    results:
      "Arrow has relied on America's Return for over 15 years to train 50 partner companies. As Arrow rose in the Fortune 500 rankings, America's Return helped several business units achieve a uniform, more profitable sales process.",
  },
  {
    company: "Mitel",
    quote:
      "Richard Chambers' S.A.L.E.S. process and training has given our team a common language and sales process to follow that makes us more efficient, more purposeful, and makes our clients happy because we are solving their business problems faster. The greater efficiency frees us to pursue more opportunities in less time.",
    attribution: "Rob Rezek, Sales Director, Mitel DataNet",
    results:
      "Mitel is a global leader in the convergence of voice and data on the corporate network. The Mitel DataNet Division recently adopted S.A.L.E.S. as a common process for Sales and Services teamwork.",
  },
  {
    company: "Ipswitch",
    quote:
      "Our project with America's Return allowed us to create more clearly defined and effective marketing programs. We pulled together the Sales, Marketing, and Technical leaders from our three product divisions, and facilitated a defined selling process for each division, including a training curriculum for direct sales and channels.",
    attribution: "Nicole Desmarais, Global Channel Programs Manager",
    results:
      "Over 100,000,000 world-wide users monitor their networks and transfer files over the internet with Ipswitch products and services. Key Ipswitch managers have worked successfully with America's Return for many years.",
  },
  {
    company: "Hackley Architectural Signage",
    quote:
      "S.A.L.E.S. is at the core of my company. Richard Chambers and his team have helped me over a 20-year span as HAS has grown from infancy through adolescence. We're now poised for major growth in revenue and company value. America's Return processes can be found in the way we hire, train, sell and plan for the future. Richard is more than a consultant; he is a part of our team.",
    attribution: "John Hackley, Founder and CEO",
    results:
      "Hackley Architectural Signage, a model of the new American manufacturer using skilled local labor, is getting ISO certification for manufacturing and S.A.L.E.S. certification for its solution sales.",
  },
  {
    company: "Travel Insurance Services",
    quote:
      "As founder and president of Travel Insurance Services, I engaged America's Return for strategic focus and for help with the key processes enabling growth: recruiting and sales. With Richard Chambers' guidance, I learned to lead my company of 24 employees to an average 17 percent annual growth for 12 years, at which time I sold the company and retired. I have no doubt that my present lifestyle would be unaffordable without the help of Richard's unique S.A.L.E.S. plan and personal expertise. Thank you for what you and your company have done for my employees and my family.",
    attribution: "Ralph Davis, Founder",
    results:
      "TIS, a pioneer in the trip cancellation insurance industry, is now a subsidiary of one of the largest insurance brokerage firms in North America.",
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

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy">Case Studies</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From Fortune 500 companies to growing businesses, see how the
              S.A.L.E.S.® System has driven measurable results.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="border-b border-gray-100 bg-navy px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    {study.company}
                  </h3>
                  {study.subtitle && (
                    <p className="text-sm text-gold">{study.subtitle}</p>
                  )}
                </div>
                <div className="p-6">
                  {study.description && (
                    <p className="mb-4 text-gray-600">{study.description}</p>
                  )}

                  {study.quote && (
                    <blockquote className="mb-4 border-l-4 border-gold pl-4 italic text-gray-700">
                      &ldquo;{study.quote}&rdquo;
                      {study.attribution && (
                        <footer className="mt-2 text-sm font-medium text-navy">
                          — {study.attribution}
                        </footer>
                      )}
                    </blockquote>
                  )}

                  {study.quotes &&
                    study.quotes.map((q, idx) => (
                      <blockquote
                        key={idx}
                        className="mb-4 border-l-4 border-gold pl-4 italic text-gray-700"
                      >
                        &ldquo;{q.text}&rdquo;
                        <footer className="mt-2 text-sm font-medium text-navy">
                          — {q.attribution}
                        </footer>
                      </blockquote>
                    ))}

                  {study.results && (
                    <div className="mt-4 rounded-lg bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-navy">Results</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {study.results}
                      </p>
                    </div>
                  )}
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
