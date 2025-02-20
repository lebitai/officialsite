import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Clock, Check } from "lucide-react";

export default function Consulting() {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/create-checkout-session", {
        email: "",  // Stripe will collect this
        name: "",   // Stripe will collect this
        company: "" // Stripe will collect this
      });
      const json = await response.json();
      return json;
    },
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to start checkout process. Please try again.",
      });
      setIsProcessing(false);
    },
  });

  const handleBooking = () => {
    setIsProcessing(true);
    mutation.mutate();
  };

  return (
    <section id="consulting" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <Card className="p-8">
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
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Book Consultation"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}