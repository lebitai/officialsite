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
          <h2 className="text-3xl font-bold mb-4">Web3/GenAI Basic Setup Consulting</h2>
          <p className="text-muted-foreground">
            Get expert guidance to kickstart your journey into Web3 and Generative AI
          </p>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle>Consultation Package</CardTitle>
            <CardDescription>
              1.5 hour personalized consultation session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>90-minute deep-dive session</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Infrastructure assessment and recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Technology stack evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Security best practices review</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Actionable next steps plan</span>
            </div>

            <div className="mt-6 text-center">
              <span className="text-3xl font-bold">$29.90</span>
            </div>

            <Button
              onClick={handleBooking}
              className="w-full mt-6"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Book Consultation"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}