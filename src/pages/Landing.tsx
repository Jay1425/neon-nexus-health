import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Heart,
  Shield,
  Zap,
  Activity,
  Users,
  Star,
  ChevronRight,
  Play,
  CheckCircle,
} from "lucide-react";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze your symptoms and medical data to provide accurate preliminary diagnoses.",
      color: "text-neon-blue",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous health tracking through wearable device integration with instant emergency detection.",
      color: "text-neon-pink",
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Automated emergency alerts and rapid response system with GPS location tracking for critical situations.",
      color: "text-neon-purple",
    },
    {
      icon: Zap,
      title: "Instant Consultations",
      description: "Connect with certified doctors through secure video calls with real-time health data sharing.",
      color: "text-cyber-green",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Cardiologist",
      rating: 5,
      content: "MediCyber's AI diagnosis system has revolutionized my practice. The accuracy is incredible.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Marcus Rodriguez",
      role: "Patient",
      rating: 5,
      content: "The emergency detection saved my life. The system detected my heart irregularity before I felt anything.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Watson",
      role: "Emergency Physician",
      rating: 5,
      content: "The real-time patient data integration has made emergency response incredibly efficient.",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const stats = [
    { label: "Patients Served", value: "100K+", icon: Users },
    { label: "Diagnostic Accuracy", value: "98.7%", icon: Brain },
    { label: "Emergency Responses", value: "24/7", icon: Shield },
    { label: "Doctor Rating", value: "4.9/5", icon: Star },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl floating" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/20 blur-xl floating" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl floating" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="glass-panel px-4 py-2 text-sm">
              🚀 Welcome to the Future of Healthcare
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-foreground">Healthcare</span>
              <br />
              <span className="text-primary">Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of medical care with advanced AI diagnostics, 
              real-time health monitoring, and instant emergency response in a cyberpunk-inspired interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" variant="neon" className="group" asChild>
                <Link to="/register">
                  Get Started Now
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button size="xl" variant="glass" className="group" asChild>
                <Link to="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="glass-card hover:glow-primary transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Revolutionary Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology meets healthcare innovation to deliver unprecedented patient care and monitoring capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card hover:glow-primary transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className={`inline-flex p-3 rounded-xl bg-background/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Trusted by Professionals</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Healthcare providers and patients worldwide trust MediCyber for critical health decisions.
            </p>
          </div>

          <div className="relative">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-12">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-primary/30"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary glow-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card max-w-4xl mx-auto holographic">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Ready to Transform Healthcare?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare professionals and patients already experiencing the future of medical care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" variant="neon" className="group" asChild>
                  <Link to="/register">
                    Start Your Journey
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" asChild>
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyber-green" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyber-green" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyber-green" />
                  <span>24/7 support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Landing;