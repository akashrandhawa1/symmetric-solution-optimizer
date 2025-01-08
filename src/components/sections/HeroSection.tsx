import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received",
      description: "Our team will contact you shortly to schedule a demo.",
    });
  };

  return (
    <section className="gradient-bg py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Less Guesswork. More Results.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Symmetric gives you real-time insights into muscle activity, so you know your patients are on track—every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = "#demo"}
              >
                <Play className="mr-2 h-4 w-4" /> See It in Action
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={handleDemoRequest}
              >
                <Calendar className="mr-2 h-4 w-4" /> Request a Demo
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg"
              alt="Physical therapist guiding a patient through an exercise while monitoring muscle activity on a tablet"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded text-sm">
              Real-time EMG feedback during therapy session
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}