import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received",
      description: "Our team will contact you shortly to schedule a demo.",
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Trusted by Providers Across the US
          </h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="testimonial-card">
                  <p className="quote">
                    "Symmetric makes every session more productive. My patients feel more engaged, and I can see their progress in real time."
                  </p>
                  <p className="author">
                    — Dr. Michael JeanFavre, Stanford Medical Center
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="testimonial-card">
                  <p className="quote">
                    "It's like having a window into my patient's muscles. Incredibly valuable."
                  </p>
                  <p className="author">
                    — Dr. Jordan Smith, Robert Wood Johnson Health System
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            The Proof Is in the Progress
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stat-card">
              <div className="stat-number">51%</div>
              <div className="stat-label">Better Functional Outcomes</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Leading Institutions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">92%</div>
              <div className="stat-label">Patient Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bring Symmetric to Your Clinic Today
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            See how Symmetric can simplify your day and bring clarity to every rep.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={handleDemoRequest}
          >
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@symmetric.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-gray-900 flex-grow"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
