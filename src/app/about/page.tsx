import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-gold">America&apos;s Return</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A consulting and training firm specializing in sales development
              for organizations that sell through indirect channels.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Photo */}
            <div className="lg:col-span-1">
              <img
                src="https://i.imgur.com/LchjL48.jpeg"
                alt="Dr. Richard L. Chambers"
                className="mx-auto aspect-square max-w-xs rounded-2xl object-cover"
              />
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">
                Dr. Richard L. Chambers
              </h2>
              <p className="mt-2 text-lg font-medium text-gold">President</p>

              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Richard has consulted with over 1,500 senior management teams
                  and presented to thousands more across five continents.
                  He&apos;s especially known for his work with Value-Added
                  Resellers in two-tier distribution environments.
                </p>
                <p>
                  He studied linguistics and education at UC Berkeley, earning
                  his BA, MA, and PhD. His academic research on how people
                  understand new concepts shaped the S.A.L.E.S.® methodology—
                  though some credit his years as an elementary school class
                  clown for keeping his sessions lively.
                </p>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/richardchambers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-navy px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://www.linkedin.com/groups/sales-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-navy px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  The S.A.L.E.S.® Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy">Get in touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to transform your sales team? We&apos;d love to hear from
              you.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-lg">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-navy">
                America&apos;s Return Inc.
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/10">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      1600 Shattuck Avenue, Suite 214
                      <br />
                      Berkeley, CA 94709
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/10">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:800-472-5373"
                      className="text-gray-600 hover:text-navy"
                    >
                      800.472.5373
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/10">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:info@americasreturn.com"
                      className="text-gray-600 hover:text-navy"
                    >
                      info@americasreturn.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <a
                  href="mailto:rchambers@americasreturn.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-dark"
                >
                  Book a 20-Minute Call
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
