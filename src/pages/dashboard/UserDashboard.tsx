import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Heart,
  Activity,
  AlertTriangle,
  Clock,
  Stethoscope,
  TrendingUp,
  Battery,
  Thermometer,
  Droplet,
  Wind,
  Brain,
  Shield,
  Video,
  MessageSquare,
} from "lucide-react";

const UserDashboard = () => {
  const [vitals] = useState({
    heartRate: 72,
    bloodPressure: "120/80",
    temperature: 98.6,
    oxygenSaturation: 98,
    steps: 8420,
    calories: 2100,
  });

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Chen",
      specialty: "Cardiology",
      date: "2024-01-25",
      time: "10:30 AM",
      type: "Video Consultation",
      status: "confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Marcus Rodriguez",
      specialty: "General Practice",
      date: "2024-01-28",
      time: "2:15 PM",
      type: "In-Person",
      status: "pending",
    },
  ];

  const healthAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Heart Rate Spike Detected",
      message: "Your heart rate reached 145 BPM during your run. Monitor closely.",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "info",
      title: "Medication Reminder",
      message: "Don't forget to take your evening medication.",
      time: "4 hours ago",
    },
  ];

  const recentReports = [
    {
      id: 1,
      type: "Blood Test",
      date: "2024-01-20",
      aiAnalysis: "Normal results with slight vitamin D deficiency",
      confidence: 94,
      status: "completed",
    },
    {
      id: 2,
      type: "Chest X-Ray",
      date: "2024-01-18",
      aiAnalysis: "Clear lungs, no abnormalities detected",
      confidence: 98,
      status: "completed",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Health Dashboard</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive health overview powered by AI insights
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card hover:glow-primary transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Heart Rate</p>
                <p className="text-2xl font-bold text-neon-pink">{vitals.heartRate}</p>
                <p className="text-xs text-muted-foreground">BPM</p>
              </div>
              <Heart className="h-8 w-8 text-neon-pink" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:glow-secondary transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Blood Pressure</p>
                <p className="text-2xl font-bold text-neon-blue">{vitals.bloodPressure}</p>
                <p className="text-xs text-muted-foreground">mmHg</p>
              </div>
              <Activity className="h-8 w-8 text-neon-blue" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:glow-accent transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="text-2xl font-bold text-warning-orange">{vitals.temperature}°F</p>
                <p className="text-xs text-muted-foreground">Normal</p>
              </div>
              <Thermometer className="h-8 w-8 text-warning-orange" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:glow-primary transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Oxygen Sat</p>
                <p className="text-2xl font-bold text-cyber-green">{vitals.oxygenSaturation}%</p>
                <p className="text-xs text-muted-foreground">Excellent</p>
              </div>
              <Wind className="h-8 w-8 text-cyber-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Upcoming Appointments</span>
              </CardTitle>
              <CardDescription>Your scheduled consultations and checkups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-4 glass-panel rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Stethoscope className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{appointment.doctor}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {appointment.date}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {appointment.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                        {appointment.status}
                      </Badge>
                      <br />
                      <Button size="sm" variant="outline">
                        {appointment.type === 'Video Consultation' ? (
                          <><Video className="h-3 w-3 mr-1" /> Join Call</>
                        ) : (
                          <><MessageSquare className="h-3 w-3 mr-1" /> Details</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="cyber" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Book New Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Recent AI Reports */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-neon-blue" />
                <span>Recent AI Analyses</span>
              </CardTitle>
              <CardDescription>AI-powered insights from your recent tests and scans</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="p-4 glass-panel rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{report.type}</h4>
                    <Badge variant="secondary" className="bg-cyber-green/20 text-cyber-green">
                      {report.confidence}% Confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{report.aiAnalysis}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{report.date}</span>
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Brain className="mr-2 h-4 w-4" />
                Upload New Report for Analysis
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Health Alerts */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-warning-orange" />
                <span>Health Alerts</span>
              </CardTitle>
              <CardDescription>Important notifications about your health</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {healthAlerts.map((alert) => (
                <div key={alert.id} className="p-4 glass-panel rounded-lg border-l-4 border-warning-orange/50">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      alert.type === 'warning' ? 'text-warning-orange' : 'text-neon-blue'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{alert.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                      <span className="text-xs text-muted-foreground mt-2 block">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Wearable Status */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Battery className="h-5 w-5 text-cyber-green" />
                <span>Wearable Devices</span>
              </CardTitle>
              <CardDescription>Connected device status and sync</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 glass-panel rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-foreground">SmartWatch Pro</h4>
                  <Badge variant="secondary" className="bg-cyber-green/20 text-cyber-green">
                    Connected
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Battery</span>
                    <span className="text-cyber-green">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Sync</span>
                    <span className="text-foreground">2 min ago</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 glass-panel rounded-lg text-center">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-lg font-semibold text-foreground">{vitals.steps.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Steps Today</p>
                </div>
                <div className="p-3 glass-panel rounded-lg text-center">
                  <Droplet className="h-6 w-6 text-neon-pink mx-auto mb-1" />
                  <p className="text-lg font-semibold text-foreground">{vitals.calories}</p>
                  <p className="text-xs text-muted-foreground">Calories</p>
                </div>
              </div>

              <Button variant="cyber" size="sm" className="w-full">
                Manage Devices
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="neon" size="sm" className="w-full justify-start">
                <Brain className="mr-2 h-4 w-4" />
                AI Health Check
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Appointment
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Doctor
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Emergency Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;