import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, AlertTriangle, CheckCircle, Phone, MapPin, Clock, Users, Award, Heart, Zap, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
export function SafetyPage({ onNavigate, user }) {
    return (<div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-blue-600"/>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Safety First, Always</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety is our top priority. We've implemented comprehensive safety measures 
              to ensure every ride is secure, protected, and worry-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Safety Record</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-gray-600">Verified Riders</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Safety Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Safety Measures</h2>
            <p className="text-xl text-gray-600">
              Comprehensive protection at every step of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                icon: <Shield className="h-8 w-8 text-blue-600"/>,
                title: "KYC Verification",
                description: "All riders undergo thorough identity verification with government-issued documents.",
                features: ["Aadhaar verification", "Address proof validation", "Photo ID confirmation", "Background screening"]
            },
            {
                icon: <Heart className="h-8 w-8 text-red-600"/>,
                title: "Premium Safety Gear",
                description: "Complimentary ISI certified helmets and safety equipment with every ride.",
                features: ["ISI certified helmets", "Reflective safety vests", "First aid kits", "Emergency whistles"]
            },
            {
                icon: <Zap className="h-8 w-8 text-yellow-600"/>,
                title: "Vehicle Safety",
                description: "Regular maintenance and safety inspections ensure optimal vehicle performance.",
                features: ["Daily safety checks", "Brake system monitoring", "Battery health tracking", "GPS tracking enabled"]
            },
            {
                icon: <Phone className="h-8 w-8 text-green-600"/>,
                title: "24/7 Emergency Support",
                description: "Round-the-clock emergency helpline for immediate assistance during rides.",
                features: ["Emergency hotline", "GPS location sharing", "Real-time monitoring", "Quick response team"]
            },
            {
                icon: <MapPin className="h-8 w-8 text-purple-600"/>,
                title: "Smart Route Monitoring",
                description: "Advanced GPS tracking and geofencing for enhanced security and route optimization.",
                features: ["Live location tracking", "Safe route suggestions", "Geofenced parking", "Speed monitoring"]
            },
            {
                icon: <Users className="h-8 w-8 text-indigo-600"/>,
                title: "Community Safety",
                description: "Building a trusted community through feedback systems and safety reporting.",
                features: ["Rider rating system", "Safety incident reporting", "Community guidelines", "Regular safety training"]
            }
        ].map((measure, index) => (<Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                    {measure.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{measure.title}</h3>
                  <p className="text-gray-600 mb-6">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600"/>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Emergency Procedures</h2>
            <p className="text-xl text-gray-600">
              Know what to do in case of an emergency during your ride
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Calm & Safe</h3>
                  <p className="text-gray-600">
                    Move to a safe location away from traffic. Turn on hazard lights if available and wear your safety vest.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Emergency Helpline</h3>
                  <p className="text-gray-600">
                    Immediately contact our 24/7 emergency helpline at <strong>+91 9876543211</strong> for assistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Location</h3>
                  <p className="text-gray-600">
                    Share your exact location with our support team. GPS coordinates are automatically tracked.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wait for Assistance</h3>
                  <p className="text-gray-600">
                    Our emergency response team will reach you within 15-30 minutes depending on your location.
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-6"/>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-red-600 text-xl">+91 9876543211</p>
                    <p className="text-gray-600">24/7 Emergency Helpline</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-blue-600 text-xl">emergency@goridpe.com</p>
                    <p className="text-gray-600">Emergency Email Support</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-green-600 text-xl">WhatsApp: +91 9876543212</p>
                    <p className="text-gray-600">Emergency WhatsApp</p>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-4 w-4"/>
                  Call Emergency Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety Guidelines</h2>
            <p className="text-xl text-gray-600">
              Follow these guidelines to ensure a safe and enjoyable ride
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3"/>
                Do's
              </h3>
              <div className="space-y-4">
                {[
            "Always wear the provided helmet and safety gear",
            "Check vehicle condition before starting your ride",
            "Follow traffic rules and speed limits",
            "Park only in designated areas",
            "Keep emergency contacts readily available",
            "Report any safety concerns immediately",
            "Ensure proper lighting when riding at night",
            "Take breaks during long rides"
        ].map((item, index) => (<div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0"/>
                    <p className="text-gray-700">{item}</p>
                  </div>))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3"/>
                Don'ts
              </h3>
              <div className="space-y-4">
                {[
            "Never ride under the influence of alcohol or drugs",
            "Don't exceed the maximum speed limit",
            "Avoid riding in severe weather conditions",
            "Don't carry passengers beyond vehicle capacity",
            "Never ignore vehicle warning signals",
            "Don't use mobile phones while riding",
            "Avoid riding without proper safety gear",
            "Don't park in restricted or unsafe areas"
        ].map((item, index) => (<div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"/>
                    <p className="text-gray-700">{item}</p>
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Training */}
      <section className="py-24 bg-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-lime-100 text-lime-800 border-lime-200 mb-6">
                Free Safety Training
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Learn to Ride Safely</h2>
              <p className="text-xl text-gray-600 mb-8">
                New to electric vehicles? Join our free safety training sessions to learn 
                proper riding techniques, traffic rules, and emergency procedures.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
            {
                icon: <Clock className="h-6 w-6 text-lime-600"/>,
                title: "2-Hour Training Sessions",
                description: "Comprehensive training covering all aspects of safe riding"
            },
            {
                icon: <Users className="h-6 w-6 text-lime-600"/>,
                title: "Expert Instructors",
                description: "Learn from certified safety instructors with years of experience"
            },
            {
                icon: <Award className="h-6 w-6 text-lime-600"/>,
                title: "Safety Certification",
                description: "Receive a safety certificate upon successful completion"
            }
        ].map((item, index) => (<div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>))}
              </div>

              <Button size="lg" className="bg-lime-600 hover:bg-lime-700" onClick={() => onNavigate('contact')}>
                Book Free Training
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
            </div>
            
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1721734381621-1adb7da480e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjByaWRlciUyMGNpdHklMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzc0ODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Safety training session" className="w-full h-96 object-cover rounded-2xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Shield className="h-16 w-16 mx-auto mb-8 text-lime-400"/>
          <h2 className="text-4xl font-bold mb-8">Your Safety is Our Priority</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of riders who trust Go Ride Pe for safe, secure, and reliable electric mobility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-4 text-lg" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
              {user ? 'Book Safe Ride' : 'Start Riding Safely'}
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg" onClick={() => onNavigate('contact')}>
              Report Safety Concern
            </Button>
          </div>
        </div>
      </section>
    </div>);
}
