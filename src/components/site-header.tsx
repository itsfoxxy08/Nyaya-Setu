import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-ink-gradient text-gold shadow-seal">
            <Scale className="h-4.5 w-4.5" strokeWidth={1.8} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-foreground">Nyaya Setu</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Justice · Bridged
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#citizens" className="hover:text-foreground transition">Citizens</a>
          <a href="#lawyers" className="hover:text-foreground transition">Lawyers</a>
          <a href="#authorities" className="hover:text-foreground transition">Authorities</a>
          <a href="#ai" className="hover:text-foreground transition">AI Tools</a>
          <a href="#rights" className="hover:text-foreground transition">Rights</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/auth" search={{ mode: "login" }}>Sign in</Link>
          </Button>
          <Button asChild size="sm" className="bg-ink-gradient text-primary-foreground hover:opacity-95">
            <Link to="/auth" search={{ mode: "register" }}>Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
