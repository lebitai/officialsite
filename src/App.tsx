import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/hooks/use-language";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router />
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
