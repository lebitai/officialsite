import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Web3 & GenAI Consulting</h2>
          <p className="text-muted-foreground">
            Get expert guidance to kickstart your journey into Web3 and Generative AI
          </p>
        </motion.div>

        <Card>
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl mb-2">Consultation Package</CardTitle>
            <CardDescription className="text-base">
              1.5 hour personalized consultation session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
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

            <div className="mt-8 pt-6 border-t">
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