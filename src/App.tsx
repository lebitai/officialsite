import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { LanguageProvider } from "@/hooks/use-language";
import Home from "@/pages/home";
import Navigation from "@/components/layout/navigation";

const Footer = lazy(() => import("@/components/layout/footer"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Toaster = lazy(() => import("@/components/ui/toaster").then((module) => ({ default: module.Toaster })));

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router />
      <Suspense fallback={null}>
        <Toaster />
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
