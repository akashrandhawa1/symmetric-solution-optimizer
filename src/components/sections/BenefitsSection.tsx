import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, ClipboardCheck, Smartphone, Wrench, Activity, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BenefitsSection() {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received",
      description: "Our team will contact you shortly to schedule a demo.",
    });
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Built for Real Clinics, Real Patients
        </h2>
        
        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Faster Progress, Happier Patients</h3>
            <p className="text-gray-600">
              See improvements sooner with clear, measurable feedback.
            </p>
          </Card>
          <Card className="p-6">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Save Time and Brainpower</h3>
            <p className="text-gray-600">
              No more fiddling with devices—Symmetric works seamlessly.
            </p>
          </Card>
          <Card className="p-6">
            <ClipboardCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">More Confidence in Your Treatment Plans</h3>
            <p className="text-gray-600">
              Know every session is effective.
            </p>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Simple. Fast. Effective.
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Pair Instantly</h4>
              <p className="text-gray-600">
                Open the app and connect the device.
              </p>
            </Card>
            <Card className="p-6">
              <Wrench className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Auto-Calibrate</h4>
              <p className="text-gray-600">
                No manual setup—it's ready in seconds.
              </p>
            </Card>
            <Card className="p-6">
              <Activity className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Track Muscle Activity</h4>
              <p className="text-gray-600">
                See live feedback on every rep.
              </p>
            </Card>
            <Card className="p-6">
              <BarChart className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Review Progress</h4>
              <p className="text-gray-600">
                Get clear, easy-to-understand reports.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={handleDemoRequest}
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}