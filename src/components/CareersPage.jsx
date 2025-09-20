import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { Users, MapPin, Clock, Briefcase, TrendingUp, Heart, Zap, Globe, DollarSign, Laptop, Coffee, ArrowRight, Star, Bell } from 'lucide-react';
export function CareersPage({ onNavigate, user }) {
    return (<div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-purple-400 text-white border-purple-400 mb-6 text-lg px-4 py-2">
            Join Our Team
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Build the Future of
            <br />
            <span className="text-lime-400">Urban Mobility</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Join a passionate team that's revolutionizing transportation in India. 
            We're looking for talented individuals who share our vision of sustainable, 
            accessible urban mobility.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why GoRidePe?</h2>
            <p className="text-xl text-gray-600">
              More than just a job - it's an opportunity to shape the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                icon: <Zap className="h-8 w-8 text-yellow-600"/>,
                title: "Impact at Scale",
                description: "Your work directly impacts millions of daily commuters across India, making cities cleaner and more livable."
            },
            {
                icon: <TrendingUp className="h-8 w-8 text-green-600"/>,
                title: "Fast Growth",
                description: "Join a rapidly scaling startup with opportunities for career advancement and professional growth."
            },
            {
                icon: <Heart className="h-8 w-8 text-red-600"/>,
                title: "Mission Driven",
                description: "Work on meaningful projects that contribute to environmental sustainability and social good."
            },
            {
                icon: <Laptop className="h-8 w-8 text-blue-600"/>,
                title: "Cutting-edge Tech",
                description: "Work with the latest technologies in IoT, mobile development, and cloud computing."
            },
            {
                icon: <Users className="h-8 w-8 text-purple-600"/>,
                title: "Amazing Team",
                description: "Collaborate with talented, passionate individuals from diverse backgrounds and experiences."
            },
            {
                icon: <Coffee className="h-8 w-8 text-orange-600"/>,
                title: "Great Culture",
                description: "Flexible work arrangements, learning opportunities, and a supportive work environment."
            }
        ].map((benefit, index) => (<Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">
              We take care of our team so they can focus on building great products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
                icon: <DollarSign className="h-6 w-6 text-green-600"/>,
                title: "Competitive Salary",
                description: "Market-leading compensation with performance bonuses"
            },
            {
                icon: <Heart className="h-6 w-6 text-red-600"/>,
                title: "Health Insurance",
                description: "Comprehensive medical coverage for you and your family"
            },
            {
                icon: <Clock className="h-6 w-6 text-blue-600"/>,
                title: "Flexible Hours",
                description: "Work-life balance with flexible working hours"
            },
            {
                icon: <Laptop className="h-6 w-6 text-purple-600"/>,
                title: "Latest Equipment",
                description: "MacBook Pro, external monitors, and premium accessories"
            },
            {
                icon: <Star className="h-6 w-6 text-yellow-600"/>,
                title: "Learning Budget",
                description: "Annual budget for courses, conferences, and certifications"
            },
            {
                icon: <Coffee className="h-6 w-6 text-orange-600"/>,
                title: "Office Perks",
                description: "Free meals, snacks, and unlimited coffee"
            },
            {
                icon: <MapPin className="h-6 w-6 text-teal-600"/>,
                title: "Transport Allowance",
                description: "Monthly transport reimbursement or free rides"
            },
            {
                icon: <Globe className="h-6 w-6 text-indigo-600"/>,
                title: "Remote Work",
                description: "Hybrid work model with remote work flexibility"
            }
        ].map((perk, index) => (<div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {perk.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-gray-600 text-sm">{perk.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* No Jobs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-12">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Briefcase className="h-12 w-12 text-purple-600"/>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">No Open Positions Right Now</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're currently building our team for the October 10th, 2025 launch. 
              While we don't have open positions at the moment, we're always interested 
              in connecting with talented individuals who share our vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-4" onClick={() => onNavigate('contact')}>
                <Bell className="mr-2 h-5 w-5"/>
                Get Notified About Jobs
              </Button>
              
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4" onClick={() => onNavigate('contact')}>
                Send Us Your Resume
              </Button>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What we're looking for:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Engineering:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Full-stack developers</li>
                    <li>• Mobile app developers</li>
                    <li>• DevOps engineers</li>
                    <li>• IoT specialists</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Operations:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Fleet managers</li>
                    <li>• Customer success</li>
                    <li>• Business development</li>
                    <li>• Marketing specialists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Future Team Culture</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Building a workplace where innovation thrives and everyone can make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
                icon: <Heart className="h-8 w-8"/>,
                title: "🤝 Collaboration First",
                description: "We believe the best solutions come from diverse minds working together towards a common goal."
            },
            {
                icon: <Zap className="h-8 w-8"/>,
                title: "⚡ Move Fast, Learn Faster",
                description: "We embrace experimentation, learn from failures, and iterate quickly to build better products."
            },
            {
                icon: <Star className="h-8 w-8"/>,
                title: "🌱 Growth Mindset",
                description: "We invest in our people's growth through mentorship, learning opportunities, and challenging projects."
            }
        ].map((value, index) => (<Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="opacity-90">{value.description}</p>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Users className="h-16 w-16 mx-auto mb-8 text-purple-600"/>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Want to Be Part of Our Journey?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Even though we don't have open positions right now, we'd love to hear from passionate 
            individuals who want to help build the future of sustainable transportation in India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg" onClick={() => onNavigate('contact')}>
              Stay in Touch
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg" onClick={() => onNavigate('about')}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
