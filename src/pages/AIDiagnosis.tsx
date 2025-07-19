import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Upload,
  Camera,
  Stethoscope,
  Activity,
  AlertTriangle,
  CheckCircle,
  FileText,
  Zap,
  Heart,
  Eye,
  Thermometer,
} from "lucide-react";

const AIDiagnosis = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const commonSymptoms = [
    "Headache", "Fever", "Cough", "Fatigue", "Nausea", 
    "Chest Pain", "Shortness of Breath", "Dizziness", 
    "Joint Pain", "Skin Rash", "Abdominal Pain", "Back Pain"
  ];

  const mockAnalysis = {
    primaryDiagnosis: "Upper Respiratory Infection",
    confidence: 85,
    alternativeDiagnoses: [
      { condition: "Common Cold", confidence: 70 },
      { condition: "Allergic Rhinitis", confidence: 45 },
      { condition: "Sinusitis", confidence: 30 },
    ],
    recommendations: [
      "Rest and stay hydrated",
      "Consider over-the-counter pain relievers",
      "Monitor symptoms for 3-5 days",
      "Consult a doctor if symptoms worsen",
    ],
    urgency: "Low",
    followUp: "Schedule appointment if symptoms persist beyond 7 days",
  };

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Brain className="h-12 w-12 text-primary pulse-glow" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">AI Diagnosis</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Advanced artificial intelligence analyzes your symptoms and medical images to provide 
          preliminary health assessments with high accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="symptoms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-panel">
              <TabsTrigger value="symptoms" className="data-[state=active]:bg-primary/20">
                <Stethoscope className="mr-2 h-4 w-4" />
                Symptoms
              </TabsTrigger>
              <TabsTrigger value="image" className="data-[state=active]:bg-primary/20">
                <Camera className="mr-2 h-4 w-4" />
                Image Analysis
              </TabsTrigger>
              <TabsTrigger value="text" className="data-[state=active]:bg-primary/20">
                <FileText className="mr-2 h-4 w-4" />
                Description
              </TabsTrigger>
            </TabsList>

            <TabsContent value="symptoms" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-neon-blue" />
                    <span>Select Your Symptoms</span>
                  </CardTitle>
                  <CardDescription>
                    Click on symptoms you're experiencing. Our AI will analyze patterns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {commonSymptoms.map((symptom) => (
                      <Button
                        key={symptom}
                        variant={selectedSymptoms.includes(symptom) ? "neon" : "outline"}
                        size="sm"
                        onClick={() => handleSymptomToggle(symptom)}
                        className="justify-start"
                      >
                        {symptom}
                      </Button>
                    ))}
                  </div>
                  
                  {selectedSymptoms.length > 0 && (
                    <div className="mt-6 p-4 glass-panel rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Selected Symptoms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSymptoms.map((symptom) => (
                          <Badge key={symptom} variant="secondary" className="bg-primary/20 text-primary">
                            {symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="image" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-neon-pink" />
                    <span>Medical Image Analysis</span>
                  </CardTitle>
                  <CardDescription>
                    Upload medical images like X-rays, skin conditions, or lab results for AI analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/60 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </label>
                    </div>

                    {uploadedImage && (
                      <div className="relative">
                        <img
                          src={uploadedImage}
                          alt="Uploaded medical image"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
                        <Badge className="absolute bottom-4 left-4 bg-primary/20 text-primary">
                          Image Ready for Analysis
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="text" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-neon-purple" />
                    <span>Describe Your Condition</span>
                  </CardTitle>
                  <CardDescription>
                    Provide a detailed description of your symptoms, when they started, and any relevant context.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Symptom Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your symptoms in detail..."
                      className="min-h-[120px] neon-border bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        placeholder="e.g., 3 days"
                        className="neon-border bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="severity">Severity (1-10)</Label>
                      <Input
                        id="severity"
                        type="number"
                        min="1"
                        max="10"
                        placeholder="5"
                        className="neon-border bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Analyze Button */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <Button
                onClick={handleAnalyze}
                size="lg"
                variant="neon"
                className="w-full"
                disabled={isAnalyzing || (selectedSymptoms.length === 0 && !uploadedImage)}
              >
                {isAnalyzing ? (
                  <>
                    <Zap className="mr-2 h-5 w-5 animate-pulse" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-5 w-5" />
                    Analyze with AI
                  </>
                )}
              </Button>
              
              {isAnalyzing && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Processing symptoms...</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {analysisResults ? (
            <>
              {/* Primary Diagnosis */}
              <Card className="glass-card glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                    <span>Primary Diagnosis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {analysisResults.primaryDiagnosis}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Confidence:</span>
                      <Badge variant="secondary" className="bg-cyber-green/20 text-cyber-green">
                        {analysisResults.confidence}%
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-foreground">Confidence Level</span>
                    <Progress value={analysisResults.confidence} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Diagnoses */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-neon-blue" />
                    <span>Alternative Conditions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {analysisResults.alternativeDiagnoses.map((alt: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 glass-panel rounded-lg">
                      <span className="text-sm text-foreground">{alt.condition}</span>
                      <Badge variant="outline" className="text-xs">
                        {alt.confidence}%
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-neon-pink" />
                    <span>Recommendations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {analysisResults.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{rec}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Urgency & Follow-up */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-warning-orange" />
                    <span>Urgency Level</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge 
                    variant="secondary" 
                    className={`
                      ${analysisResults.urgency === 'High' ? 'bg-red-500/20 text-red-400' : ''}
                      ${analysisResults.urgency === 'Medium' ? 'bg-warning-orange/20 text-warning-orange' : ''}
                      ${analysisResults.urgency === 'Low' ? 'bg-cyber-green/20 text-cyber-green' : ''}
                    `}
                  >
                    {analysisResults.urgency} Priority
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground">
                    {analysisResults.followUp}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="glass-card">
              <CardContent className="p-8 text-center">
                <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium text-foreground mb-2">AI Analysis Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Select symptoms or upload medical images to begin AI-powered diagnosis.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <Card className="glass-panel border-warning-orange/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-warning-orange flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                This AI analysis is for informational purposes only and should not replace professional medical advice. 
                Always consult with a qualified healthcare provider for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIDiagnosis;