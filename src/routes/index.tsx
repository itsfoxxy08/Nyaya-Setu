import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, BookOpen, FileText, ShieldCheck, Activity, BadgeCheck,
  Search, Briefcase, Brain, AlertTriangle, Archive, BarChart3, Map,
  Lightbulb, Languages, ScrollText, EyeOff, Gamepad2, MessagesSquare,
  ArrowRight, Scale, Gavel, Building2, UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-justice.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nyaya Setu — India's Unified Legal Assistance & Justice Ecosystem" },
      {
        name: "description",
        content:
          "A unified digital platform bridging citizens, lawyers, police and the judiciary. AI legal help, rights awareness, complaint drafting, evidence vault and case tracking — in one place.",
      },
      { property: "og:title", content: "Nyaya Setu — Justice, Bridged." },
      {
        property: "og:description",
        content:
          "Accessible, affordable, transparent legal assistance for every Indian citizen.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <Problem />
      <Stakeholders />
      <CitizenModule />
      <LawyerModule />
      <PoliceModule />
      <GovAnalytics />
      <AIFeatures />
      <Innovations />
      <Impact />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-ink-gradient opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_oklch(0.1_0.04_260/0.6)_70%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          <Badge className="border-gold/40 bg-gold/10 text-gold hover:bg-gold/10 backdrop-blur">
            <Sparkles className="mr-1.5 h-3 w-3" /> A public-interest initiative
          </Badge>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-parchment md:text-7xl">
            Justice,{" "}
            <span className="italic text-gold">bridged.</span>
            <br />
            For every citizen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/75">
            Nyaya Setu unites citizens, lawyers, law enforcement and the
            judiciary on a single intelligent platform — so understanding your
            rights, filing a complaint, or tracking a case is no longer a
            privilege, but a right.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-gold-gradient text-ink hover:opacity-95 shadow-seal">
              <Link to="/auth" search={{ mode: "register" }}>
                Begin your journey <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-parchment/30 bg-transparent text-parchment hover:bg-parchment/10 hover:text-parchment">
              <a href="#citizens">Explore the platform</a>
            </Button>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-parchment/15 pt-8">
            {[
              { k: "22+", v: "Indian languages" },
              { k: "1 ecosystem", v: "for 4 stakeholders" },
              { k: "End-to-end", v: "from rights to ruling" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-gold">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Citizen-first",
    "Verified Advocates",
    "Encrypted Evidence",
    "Multilingual",
    "Government-grade",
    "Open Justice",
  ];
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-3">
            {i}
            {idx < items.length - 1 && <span className="text-gold">◆</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  const points = [
    "Don't know which laws apply to their situation.",
    "Can't access affordable legal consultation.",
    "Don't understand court procedure or timelines.",
    "Have no visibility into the progress of their case.",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Millions face legal issues each year — most face them{" "}
            <span className="italic text-emerald">alone.</span>
          </h2>
        </div>
        <ul className="space-y-5">
          {points.map((p) => (
            <li key={p} className="flex gap-4 border-b border-border pb-5 last:border-0">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-lg text-ink-soft">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stakeholders() {
  const list = [
    { icon: UserRound, t: "Citizens", d: "Understand rights, file complaints, find lawyers, track cases." },
    { icon: Gavel, t: "Lawyers", d: "Discover clients, manage cases and conduct AI-assisted research." },
    { icon: ShieldCheck, t: "Police", d: "Smart complaint routing, evidence handling and citizen comms." },
    { icon: Building2, t: "Government", d: "Legal trend analytics, heatmaps and policy intelligence." },
  ];
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionEyebrow>Built for four stakeholders</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">One ecosystem. Four powerful surfaces.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {list.map(({ icon: Icon, t, d }) => (
            <Card key={t} className="group relative overflow-hidden border-border bg-card p-7 transition hover:shadow-elegant">
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-md bg-ink-gradient text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="font-display text-2xl">{t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleSection({
  id, eyebrow, title, lede, items, reverse,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  items: { icon: React.ElementType; t: string; d: string }[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-24">
      <div className={`grid gap-12 lg:grid-cols-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-4">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lede}</p>
        </div>
        <div className="lg:col-span-8">
          <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
            {items.map(({ icon: Icon, t, d }) => (
              <div key={t} className="group bg-card p-7 transition hover:bg-accent/40">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-secondary text-emerald">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl">{t}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CitizenModule() {
  return (
    <ModuleSection
      id="citizens"
      eyebrow="Citizen Module"
      title={<>For the <span className="italic text-emerald">people.</span></>}
      lede="From understanding your rights to filing a complaint and tracking it to closure — everything a citizen needs, in plain language."
      items={[
        { icon: Sparkles, t: "AI Legal Assistant", d: "Describe your problem in your own words. Get the laws, your rights and your next step." },
        { icon: BookOpen, t: "Rights Awareness Center", d: "Consumer, women, cyber, labour, property, senior citizen and RTI — explained visually." },
        { icon: FileText, t: "Legal Complaint Builder", d: "Guided questions generate police complaints, legal notices, RTIs and cybercrime reports." },
        { icon: Archive, t: "Evidence Vault", d: "Encrypted, timestamped storage for photos, videos, audio and documents — organised by case." },
        { icon: Activity, t: "Case Tracking Dashboard", d: "Complaint status, hearings, lawyer messages and submissions — all in one view." },
        { icon: BadgeCheck, t: "Legal Eligibility Checker", d: "Discover free legal aid, victim compensation and government legal schemes you qualify for." },
      ]}
    />
  );
}

function LawyerModule() {
  return (
    <section id="lawyers" className="bg-secondary/50">
      <ModuleSection
        id="lawyers-inner"
        eyebrow="Lawyer Module"
        title={<>For the <span className="italic text-emerald">advocates.</span></>}
        lede="A modern practice surface — discover clients, run consultations, and let AI handle the heavy reading."
        reverse
        items={[
          { icon: Search, t: "Lawyer Discovery Platform", d: "Citizens find you by specialization, location, language and experience." },
          { icon: Briefcase, t: "Lawyer Dashboard", d: "Manage clients, schedule consultations, upload documents and chat securely." },
          { icon: Brain, t: "AI Case Research", d: "Find similar judgments, summarise precedents and surface relevant references in seconds." },
          { icon: ScrollText, t: "Document Workspace", d: "Draft, annotate and version notices, petitions and filings collaboratively." },
        ]}
      />
    </section>
  );
}

function PoliceModule() {
  return (
    <ModuleSection
      id="authorities"
      eyebrow="Police & Enforcement"
      title={<>For the <span className="italic text-emerald">first responders.</span></>}
      lede="Smart classification, priority detection and a clean evidence pipeline — so attention reaches the cases that need it most."
      items={[
        { icon: Languages, t: "Smart Complaint Classification", d: "AI sorts complaints into cyber, property, fraud, labour, domestic and consumer." },
        { icon: AlertTriangle, t: "Priority Risk Detection", d: "Threats to life, abuse, child safety and fraud emergencies are flagged for urgent action." },
        { icon: Archive, t: "Evidence Management", d: "Access submitted evidence with audit logs, chain of custody and structured case files." },
        { icon: MessagesSquare, t: "Citizen Communication", d: "Status updates, requests and follow-ups stay in a single, accountable thread." },
      ]}
    />
  );
}

function GovAnalytics() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink-gradient" />
      <div className="mx-auto max-w-7xl px-6 py-28 text-parchment">
        <div className="max-w-3xl">
          <Badge className="border-gold/40 bg-gold/10 text-gold hover:bg-gold/10">Government & Judiciary</Badge>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Policy intelligence, drawn from the{" "}
            <span className="italic text-gold">pulse of the nation.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-parchment/75">
            Anonymised, aggregated signals from across the ecosystem — turned into
            decisions that move justice forward.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-parchment/10 md:grid-cols-3">
          {[
            { icon: BarChart3, t: "Legal Trend Intelligence", d: "Most common disputes, crime trends and regional legal issues at a glance." },
            { icon: Map, t: "Geographic Heatmaps", d: "Interactive maps of cyber fraud, consumer disputes and legal-aid demand zones." },
            { icon: Lightbulb, t: "Policy Recommendation Engine", d: "AI surfaces emerging issues, bottlenecks and regions needing intervention." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-[oklch(0.15_0.04_260)] p-8">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-gold/15 text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-parchment/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIFeatures() {
  const list = [
    { icon: ScrollText, t: "Judgment Summarization", d: "Long judgments converted to plain-language summaries, key points and implications." },
    { icon: Search, t: "Similar Case Finder", d: "Match issues to precedents and related case histories instantly." },
    { icon: Languages, t: "Multilingual Assistant", d: "English, Hindi and 20+ regional Indian languages for true accessibility." },
    { icon: Brain, t: "Predictive Legal Guidance", d: "Typical process flow, timelines, required documents and likely outcomes per case type." },
  ];
  return (
    <section id="ai" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <SectionEyebrow>AI at the core</SectionEyebrow>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-5xl">
          Intelligence trained on the language of <span className="italic text-emerald">Indian law.</span>
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {list.map(({ icon: Icon, t, d }) => (
          <Card key={t} className="border-border bg-card p-7 transition hover:shadow-elegant">
            <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
            <h3 className="mt-5 font-display text-xl">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Innovations() {
  return (
    <section id="rights" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionEyebrow>Beyond the basics</SectionEyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">Innovations that change the culture of justice.</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: EyeOff, t: "Anonymous Whistleblower Portal", d: "Securely report corruption and misconduct while your identity stays protected." },
            { icon: Gamepad2, t: "Legal Awareness Gamification", d: "Quizzes, scenarios and rewards that teach youth about their rights." },
            { icon: MessagesSquare, t: "Community Discussion Forum", d: "A moderated space to share experiences and learn from legal experts." },
          ].map(({ icon: Icon, t, d }) => (
            <Card key={t} className="border-border bg-card p-7">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-ink-gradient text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const list = [
    "Increased legal awareness among citizens",
    "Easier and faster access to justice",
    "Quicker, structured complaint preparation",
    "Stronger lawyer–client connectivity",
    "Tamper-evident evidence management",
    "Data-driven governance and reform",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionEyebrow>Expected impact</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            From fragmented services to a{" "}
            <span className="italic text-emerald">unified justice ecosystem.</span>
          </h2>
        </div>
        <ul className="grid gap-4 self-center">
          {list.map((l) => (
            <li key={l} className="flex items-start gap-3 text-lg">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.8} />
              <span className="text-ink-soft">{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink-gradient p-12 text-parchment shadow-elegant md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <Scale className="h-8 w-8 text-gold" strokeWidth={1.6} />
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Justice should never depend on who you know.
        </h2>
        <p className="mt-4 max-w-xl text-parchment/75">
          Join Nyaya Setu today — whether you're a citizen seeking clarity, an
          advocate building a practice, or an authority serving the public.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gold-gradient text-ink hover:opacity-95 shadow-seal">
            <Link to="/auth" search={{ mode: "register" }}>Create your account</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-parchment/30 bg-transparent text-parchment hover:bg-parchment/10 hover:text-parchment">
            <Link to="/auth" search={{ mode: "login" }}>I already have one</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}
