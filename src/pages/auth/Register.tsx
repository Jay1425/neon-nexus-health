import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Mail, Lock, Shield, Stethoscope, Users, ArrowLeft, User, Phone, Calendar } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("user");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agree: false,
    
    // Doctor specific
    licenseNumber: "",
    specialty: "",
    experience: "",
    hospital: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
    } else {
      console.log("Registration attempt:", { ...formData, userType });
      // Handle registration logic here
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const userTypeOptions = [
    {
      value: "user",
      label: "Patient",
      icon: Users,
      description: "Access health records and book appointments",
      color: "text-neon-blue",
    },
    {
      value: "doctor",
      label: "Doctor",
      icon: Stethoscope,
      description: "Provide consultations and manage patients",
      color: "text-neon-pink",
    },
  ];

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Emergency Medicine",
    "Endocrinology",
    "Gastroenterology",
    "General Practice",
    "Neurology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
  ];

  const validateStep1 = () => {
    const required = ["firstName", "lastName", "email", "phone", "password", "confirmPassword"];
    const isValid = required.every(field => formData[field as keyof typeof formData]);
    const passwordMatch = formData.password === formData.confirmPassword;
    return isValid && passwordMatch && formData.agree;
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl floating" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-secondary/10 blur-xl floating" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="h-12 w-12 text-primary pulse-glow" />
            <span className="text-3xl font-bold gradient-text">MediCyber</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Join the Future</h2>
          <p className="text-muted-foreground mt-2">Create your cyberpunk healthcare account</p>
        </div>

        <Card className="glass-card glow-primary">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-foreground">
              Sign Up {step === 2 && "- Step 2"}
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              {step === 1 ? "Enter your basic information" : "Complete your profile"}
            </CardDescription>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  {/* User Type Selection */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Account Type</Label>
                    <Tabs value={userType} onValueChange={setUserType} className="w-full">
                      <TabsList className="grid w-full grid-cols-2 glass-panel">
                        {userTypeOptions.map((option) => (
                          <TabsTrigger 
                            key={option.value} 
                            value={option.value}
                            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                          >
                            <option.icon className="h-4 w-4 mr-1" />
                            {option.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="pl-10 neon-border bg-background/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="neon-border bg-background/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 neon-border bg-background/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 neon-border bg-background/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 neon-border bg-background/50 backdrop-blur-sm"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1 h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 neon-border bg-background/50 backdrop-blur-sm"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1 h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agree"
                      checked={formData.agree}
                      onCheckedChange={(checked) => handleInputChange("agree", checked as boolean)}
                    />
                    <Label htmlFor="agree" className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:text-primary/80">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary/80">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-sm font-medium text-foreground">
                        Date of Birth
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          className="pl-10 neon-border bg-background/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-sm font-medium text-foreground">
                        Gender
                      </Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger className="neon-border bg-background/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Doctor-specific fields */}
                  {userType === "doctor" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="licenseNumber" className="text-sm font-medium text-foreground">
                          Medical License Number
                        </Label>
                        <Input
                          id="licenseNumber"
                          placeholder="Enter your license number"
                          value={formData.licenseNumber}
                          onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                          className="neon-border bg-background/50 backdrop-blur-sm"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialty" className="text-sm font-medium text-foreground">
                          Specialty
                        </Label>
                        <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
                          <SelectTrigger className="neon-border bg-background/50 backdrop-blur-sm">
                            <SelectValue placeholder="Select your specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((specialty) => (
                              <SelectItem key={specialty} value={specialty.toLowerCase()}>
                                {specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="experience" className="text-sm font-medium text-foreground">
                            Years of Experience
                          </Label>
                          <Input
                            id="experience"
                            type="number"
                            placeholder="5"
                            value={formData.experience}
                            onChange={(e) => handleInputChange("experience", e.target.value)}
                            className="neon-border bg-background/50 backdrop-blur-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hospital" className="text-sm font-medium text-foreground">
                            Hospital/Clinic
                          </Label>
                          <Input
                            id="hospital"
                            placeholder="Medical Center"
                            value={formData.hospital}
                            onChange={(e) => handleInputChange("hospital", e.target.value)}
                            className="neon-border bg-background/50 backdrop-blur-sm"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Submit Button */}
              <div className="flex space-x-3">
                {step === 2 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button 
                  type="submit" 
                  variant="neon" 
                  size="lg" 
                  className="flex-1"
                  disabled={step === 1 && !validateStep1()}
                >
                  {step === 1 ? "Continue" : "Create Account"}
                </Button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Button variant="ghost" asChild>
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;