import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Card, c as cn, I as Input, B as Button, L as Label } from "./card-BvOm9BoC.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Route$1 } from "./router-ClCwDQcs.mjs";
import { S as Scale, M as Mail, L as Lock, E as EyeOff, a as Eye, A as ArrowRight, U as UserRound, G as Gavel, b as ShieldCheck, B as Building2, c as User, P as Phone } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const roles = [{
  id: "citizen",
  label: "Citizen",
  icon: UserRound,
  desc: "Get legal help"
}, {
  id: "lawyer",
  label: "Lawyer",
  icon: Gavel,
  desc: "Practice & serve"
}, {
  id: "police",
  label: "Police",
  icon: ShieldCheck,
  desc: "Handle cases"
}, {
  id: "gov",
  label: "Government",
  icon: Building2,
  desc: "Analytics access"
}];
function AuthPage() {
  const {
    mode
  } = Route$1.useSearch();
  const navigate = useNavigate();
  const [tab, setTab] = reactExports.useState(mode);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-screen lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "relative hidden overflow-hidden bg-ink-gradient p-12 text-parchment lg:flex lg:flex-col lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md bg-gold/15 text-gold shadow-seal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "h-5 w-5", strokeWidth: 1.8 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl", children: "Nyaya Setu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-parchment/60", children: "Justice · Bridged" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl leading-tight md:text-5xl", children: [
          "“Where law",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "meets language," }),
          " ",
          "justice reaches everyone.”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-parchment/70", children: "One account opens the door to AI legal help, verified advocates, secure evidence storage and real-time case tracking." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-3 gap-6 border-t border-parchment/15 pt-8 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gold", children: "22+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60", children: "Languages" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gold", children: "E2E" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60", children: "Encrypted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gold", children: "24×7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.14em] text-parchment/60", children: "AI Assist" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex flex-col bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-5 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-md bg-ink-gradient text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "h-4.5 w-4.5", strokeWidth: 1.8 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: "Nyaya Setu" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground", children: "← Home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md border-border bg-card p-8 shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: tab === "login" ? "Welcome back" : "Create your account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: tab === "login" ? "Sign in to continue your journey with Nyaya Setu." : "Begin in under a minute — choose who you are and we'll set up the right workspace." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => {
          const next = v;
          setTab(next);
          navigate({
            to: "/auth",
            search: {
              mode: next
            },
            replace: true
          });
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "login", children: "Sign in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "register", children: "Register" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "login", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "register", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterForm, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
          "By continuing you agree to our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline-offset-4 hover:underline", children: "Terms" }),
          " &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline-offset-4 hover:underline", children: "Privacy Notice" }),
          "."
        ] })
      ] }) })
    ] })
  ] });
}
const loginSchema = objectType({
  email: stringType().trim().email("Enter a valid email").max(255),
  password: stringType().min(6, "At least 6 characters").max(128)
});
function LoginForm() {
  const [show, setShow] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: (e) => {
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
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", placeholder: "you@example.com", autoComplete: "email", required: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", icon: Lock, right: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "text-muted-foreground hover:text-foreground", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "password", type: show ? "text" : "password", placeholder: "••••••••", autoComplete: "current-password", required: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-3.5 w-3.5 rounded border-border" }),
        "Remember me"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-foreground hover:text-gold", children: "Forgot password?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full bg-ink-gradient text-primary-foreground hover:opacity-95", children: loading ? "Signing in…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Sign in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: "or" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", className: "w-full", children: "Continue with DigiLocker" })
  ] });
}
const registerSchema = objectType({
  name: stringType().trim().min(2, "Tell us your name").max(80),
  email: stringType().trim().email("Enter a valid email").max(255),
  phone: stringType().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone"),
  password: stringType().min(8, "Use at least 8 characters").max(128)
});
function RegisterForm() {
  const [role, setRole] = reactExports.useState("citizen");
  const [show, setShow] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: (e) => {
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
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-[0.14em] text-muted-foreground", children: "I am a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-2 gap-2", children: roles.map((r) => {
        const active = role === r.id;
        const Icon = r.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setRole(r.id), className: `flex items-center gap-3 rounded-md border p-3 text-left transition ${active ? "border-foreground bg-ink-gradient text-parchment shadow-seal" : "border-border bg-secondary/40 hover:border-foreground/30"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4.5 w-4.5 ${active ? "text-gold" : "text-emerald"}`, strokeWidth: 1.8 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: r.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[11px] ${active ? "text-parchment/70" : "text-muted-foreground"}`, children: r.desc })
          ] })
        ] }, r.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", icon: User, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", placeholder: "Aarav Sharma", autoComplete: "name", required: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", placeholder: "you@example.com", autoComplete: "email", required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", icon: Phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "phone", type: "tel", placeholder: "+91 98xxx xxxxx", autoComplete: "tel", required: true }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", icon: Lock, right: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "text-muted-foreground hover:text-foreground", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "password", type: show ? "text" : "password", placeholder: "Minimum 8 characters", autoComplete: "new-password", required: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full bg-ink-gradient text-primary-foreground hover:opacity-95", children: loading ? "Creating account…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Create account ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: "or register with" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", children: "DigiLocker" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", children: "Aadhaar OTP" })
    ] })
  ] });
}
function Field({
  label,
  icon: Icon,
  right,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-[0.14em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground", strokeWidth: 1.8 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "[&_input]:pl-9 [&_input]:pr-9 [&_input]:h-11", children }),
      right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: right })
    ] })
  ] });
}
function Divider({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" })
  ] });
}
export {
  AuthPage as component
};
