import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Brain, Clock, Heart } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Make Every Rep Count
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <Activity className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Data</h3>
            <p className="text-gray-600">
              See what's happening under the skin with instant muscle feedback.
            </p>
          </Card>
          <Card className="p-6">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
            <p className="text-gray-600">
              Know when to push harder or ease off—no more guesswork.
            </p>
          </Card>
          <Card className="p-6">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
            <p className="text-gray-600">
              Pairs instantly and calibrates automatically in seconds.
            </p>
          </Card>
          <Card className="p-6">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patient Engagement</h3>
            <p className="text-gray-600">
              Live feedback keeps patients motivated and on track.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}