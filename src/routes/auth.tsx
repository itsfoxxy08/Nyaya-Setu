import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Scale, Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, Gavel, ShieldCheck, Building2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const searchSchema = z.object({
  mode: z.enum(["login", "register"]).catch("login"),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in · Nyaya Setu" },
      { name: "description", content: "Sign in or create your Nyaya Setu account — your bridge to justice." },
    ],
  }),
  component: AuthPage,
});

const roles = [
  { id: "citizen", label: "Citizen", icon: UserRound, desc: "Get legal help" },
  { id: "lawyer", label: "Lawyer", icon: Gavel, desc: "Practice & serve" },
  { id: "police", label: "Police", icon: ShieldCheck, desc: "Handle cases" },
  { id: "gov", label: "Government", icon: Building2, desc: "Analytics access" },
] as const;

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"login" | "register">(mode);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden bg-ink-gradient p-12 text-parchment lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />

        <Link to="/" className="relative flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-gold/15 text-gold shadow-seal">
            <Scale className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <div>
            <div className="font-display text-xl">Nyaya Setu</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">Justice · Bridged</div>
          </div>
        </Link>

        <div className="relative">
          <p className="font-display text-4xl leading-tight md:text-5xl">
            “Where law{" "}
            <span className="italic text-gold">meets language,</span>{" "}
            justice reaches everyone.”
          </p>
          <p className="mt-6 max-w-md text-parchment/70">
            One account opens the door to AI legal help, verified advocates,
            secure evidence storage and real-time case tracking.
          </p>
        </div>

        <div className="relative grid grid-cols-3 gap-6 border-t border-parchment/15 pt-8 text-sm">
          <div>
            <div className="font-display text-2xl text-gold">22+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60">Languages</div>
          </div>
          <div>
            <div className="font-display text-2xl text-gold">E2E</div>
            <div className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60">Encrypted</div>
          </div>
          <div>
            <div className="font-display text-2xl text-gold">24×7</div>
            <div className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60">AI Assist</div>
          </div>
        </div>
      </aside>

      {/* Form panel */}
      <main className="flex flex-col bg-background">
        <div className="flex items-center justify-between px-6 py-5 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-ink-gradient text-gold">
              <Scale className="h-4.5 w-4.5" strokeWidth={1.8} />
            </div>
            <span className="font-display text-lg">Nyaya Setu</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-10">
          <Card className="w-full max-w-md border-border bg-card p-8 shadow-elegant">
            <div className="mb-7">
              <h1 className="font-display text-3xl">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {tab === "login"
                  ? "Sign in to continue your journey with Nyaya Setu."
                  : "Begin in under a minute — choose who you are and we'll set up the right workspace."}
              </p>
            </div>

            <Tabs value={tab} onValueChange={(v) => {
              const next = v as "login" | "register";
              setTab(next);
              navigate({ to: "/auth", search: { mode: next }, replace: true });
            }}>
              <TabsList className="grid w-full grid-cols-2 bg-secondary">
                <TabsTrigger value="login">Sign in</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-6">
                <LoginForm />
              </TabsContent>
              <TabsContent value="register" className="mt-6">
                <RegisterForm />
              </TabsContent>
            </Tabs>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              By continuing you agree to our{" "}
              <span className="underline-offset-4 hover:underline">Terms</span> &{" "}
              <span className="underline-offset-4 hover:underline">Privacy Notice</span>.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(6, "At least 6 characters").max(128),
});

function LoginForm() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const parsed = loginSchema.safeParse(Object.fromEntries(fd));
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Signed in — welcome back to Nyaya Setu.");
        }, 700);
      }}
    >
      <Field label="Email" icon={Mail}>
        <Input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
      </Field>
      <Field label="Password" icon={Lock} right={
        <button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-foreground">
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      }>
        <Input name="password" type={show ? "text" : "password"} placeholder="••••••••" autoComplete="current-password" required />
      </Field>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input type="checkbox" className="h-3.5 w-3.5 rounded border-border" />
          Remember me
        </label>
        <button type="button" className="text-foreground hover:text-gold">Forgot password?</button>
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-ink-gradient text-primary-foreground hover:opacity-95">
        {loading ? "Signing in…" : <>Sign in <ArrowRight className="ml-1 h-4 w-4" /></>}
      </Button>

      <Divider>or</Divider>

      <Button type="button" variant="outline" className="w-full">
        Continue with DigiLocker
      </Button>
    </form>
  );
}

const registerSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone"),
  password: z.string().min(8, "Use at least 8 characters").max(128),
});

function RegisterForm() {
  const [role, setRole] = useState<(typeof roles)[number]["id"]>("citizen");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const parsed = registerSchema.safeParse(Object.fromEntries(fd));
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success(`Account created as ${role}. Welcome to Nyaya Setu.`);
        }, 800);
      }}
    >
      <div>
        <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">I am a</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {roles.map((r) => {
            const active = role === r.id;
            const Icon = r.icon;
            return (
              <button
                type="button"
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`flex items-center gap-3 rounded-md border p-3 text-left transition ${
                  active
                    ? "border-foreground bg-ink-gradient text-parchment shadow-seal"
                    : "border-border bg-secondary/40 hover:border-foreground/30"
                }`}
              >
                <Icon className={`h-4.5 w-4.5 ${active ? "text-gold" : "text-emerald"}`} strokeWidth={1.8} />
                <div className="leading-tight">
                  <div className="text-sm font-medium">{r.label}</div>
                  <div className={`text-[11px] ${active ? "text-parchment/70" : "text-muted-foreground"}`}>{r.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Field label="Full name" icon={User}>
        <Input name="name" placeholder="Aarav Sharma" autoComplete="name" required />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Email" icon={Mail}>
          <Input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        </Field>
        <Field label="Phone" icon={Phone}>
          <Input name="phone" type="tel" placeholder="+91 98xxx xxxxx" autoComplete="tel" required />
        </Field>
      </div>
      <Field label="Password" icon={Lock} right={
        <button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-foreground">
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      }>
        <Input name="password" type={show ? "text" : "password"} placeholder="Minimum 8 characters" autoComplete="new-password" required />
      </Field>

      <Button type="submit" disabled={loading} className="w-full bg-ink-gradient text-primary-foreground hover:opacity-95">
        {loading ? "Creating account…" : <>Create account <ArrowRight className="ml-1 h-4 w-4" /></>}
      </Button>

      <Divider>or register with</Divider>

      <div className="grid grid-cols-2 gap-2">
        <Button type="button" variant="outline">DigiLocker</Button>
        <Button type="button" variant="outline">Aadhaar OTP</Button>
      </div>
    </form>
  );
}

function Field({
  label, icon: Icon, right, children,
}: {
  label: string;
  icon: React.ElementType;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</Label>
      <div className="relative mt-1.5">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" strokeWidth={1.8} />
        <div className="[&_input]:pl-9 [&_input]:pr-9 [&_input]:h-11">{children}</div>
        {right && <div className="absolute right-3 top-1/2 -translate-y-1/2">{right}</div>}
      </div>
    </div>
  );
}

function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-px flex-1 bg-border" />
      {children}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
