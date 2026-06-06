import { Scale } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-ink-gradient text-gold">
              <Scale className="h-4.5 w-4.5" strokeWidth={1.8} />
            </div>
            <div className="font-display text-lg font-semibold">Nyaya Setu</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A unified digital justice ecosystem connecting citizens, lawyers, law
            enforcement and the judiciary across India.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Platform</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>AI Legal Assistant</li>
            <li>Rights Awareness</li>
            <li>Complaint Builder</li>
            <li>Evidence Vault</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Institution</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>About</li>
            <li>Government Analytics</li>
            <li>Privacy & Security</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nyaya Setu · Built in the public interest.
      </div>
    </footer>
  );
}
