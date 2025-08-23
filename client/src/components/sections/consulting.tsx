import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Clock, Check } from "lucide-react";

export default function Consulting() {
  const handleBooking = () => {
    window.location.href = "https://buy.stripe.com/5kAeXXgtE8K2eBO7ss";
  };

  return (
    <section id="consulting" className="py-20">
      <div className="container max-w-2xl mx-auto px-4">
        <Card className="p-6 sm:p-8">
          <CardContent className="p-0 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Web3 & GenAI Consulting</h2>
              <p className="text-muted-foreground">
                Get expert guidance to kickstart your journey into Web3 and Generative AI
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Consultation Package</h3>
              <p className="text-base text-muted-foreground mb-8">
                1.5 hour personalized consultation session
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">90-minute deep-dive session</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">Infrastructure assessment and recommendations</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">Technology stack evaluation</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">Security best practices review</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">Actionable next steps plan</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <div className="flex flex-col items-center gap-6">
                <span className="text-3xl font-bold">$29.90</span>
                <Button
                  onClick={handleBooking}
                  className="w-full h-12 text-base"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}