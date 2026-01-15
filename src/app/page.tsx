import Link from "next/link";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Award,
  Download,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-dark py-20 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Teach your team to sell solutions.{" "}
              <span className="text-gold">Higher margins. Less time.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
              The S.A.L.E.S.® System is a proven methodology refined over 25
              years with 10,000 professionals. We turn salespeople into trusted
              advisors who guide customers to solve real business problems.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:rchambers@americasreturn.com"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-dark"
              >
                Book a 20-Minute Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-gold"
              >
                Learn how it works
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Introduction Sections */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              A Complete System for Solution Selling
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From planning calls to managing teams, we provide the tools and
              training your organization needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                <Target className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">
                Plan Smarter Calls
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Structured agendas and frameworks that keep complex meetings on
                track.
              </p>
              <Link
                href="/what-we-do"
                className="mt-4 inline-flex items-center text-sm font-medium text-gold hover:text-gold-dark"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                <TrendingUp className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">
                Hit Quota Consistently
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Connect pipeline numbers to a repeatable process that drives
                results.
              </p>
              <Link
                href="/what-we-do"
                className="mt-4 inline-flex items-center text-sm font-medium text-gold hover:text-gold-dark"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                <Award className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">
                Win Major Accounts
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Map buying stages and decision-makers to lead buyers to action.
              </p>
              <Link
                href="/what-we-do"
                className="mt-4 inline-flex items-center text-sm font-medium text-gold hover:text-gold-dark"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                <Users className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">
                Manage Sales Teams
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Coordinate efforts and adopt a common language across your
                organization.
              </p>
              <Link
                href="/what-we-do"
                className="mt-4 inline-flex items-center text-sm font-medium text-gold hover:text-gold-dark"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S.A.L.E.S. Method Visual */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The S.A.L.E.S.® Method
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              A proven framework for solution selling that transforms how your
              team engages with customers.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow-lg">
              <img
                src="https://i.imgur.com/6V0TQ6i.png"
                alt="The S.A.L.E.S. Method - A visual guide to solution selling"
                className="max-w-full md:max-w-2xl lg:max-w-3xl"
              />
            </div>
            <a
              href="https://i.imgur.com/6V0TQ6i.png"
              download="SALES-Method.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              <Download className="h-5 w-5" />
              Download the S.A.L.E.S.® Method
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy">For Your Business</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-gray-600">
                    Higher-margin revenue with lower selling expense
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-gray-600">
                    A documented, quantified sales process that increases company
                    value
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-gray-600">
                    Training with measurable ROI and minimal time out of the
                    field
                  </span>
                </li>
              </ul>
              <Link
                href="/how-you-gain"
                className="mt-6 inline-flex items-center text-base font-medium text-navy hover:text-navy-light"
              >
                See all benefits <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy">
                For Sales Professionals
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-gray-600">Exceed personal quota</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-gray-600">
                    Focus on actions that actually move deals forward
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-gray-600">
                    Create more value—and capture your share
                  </span>
                </li>
              </ul>
              <Link
                href="/how-you-gain"
                className="mt-6 inline-flex items-center text-base font-medium text-navy hover:text-navy-light"
              >
                See all benefits <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-2xl font-medium italic text-navy sm:text-3xl">
              &ldquo;This is the most effective, results-driven sales training in
              the industry.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600">
              — Larry Wainscott, Founder, Future Readiness LLC
              <br />
              <span className="text-sm">
                (Leadership Development for SYNNEX Corporation)
              </span>
            </p>
            <Link
              href="/who-agrees"
              className="mt-8 inline-flex items-center text-base font-medium text-gold hover:text-gold-dark"
            >
              See who trusts our approach <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to transform your sales team?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              Let&apos;s discuss how the S.A.L.E.S.® System can help your
              organization close bigger deals faster.
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
