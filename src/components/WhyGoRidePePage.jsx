import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { Zap, Users, Shield, Truck, DollarSign, Heart, Leaf, Star, Target, Handshake, TrendingUp } from 'lucide-react';
export function WhyGoRidePePage({ onNavigate, user }) {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-green-600"/>,
            title: "Ride Green",
            description: "100% electric vehicles reducing carbon footprint and promoting sustainable transportation.",
            color: "bg-green-100"
        },
        {
            icon: <DollarSign className="w-8 h-8 text-blue-600"/>,
            title: "Earn More",
            description: "Maximize your earnings with our cost-effective rental plans and efficient delivery solutions.",
            color: "bg-blue-100"
        },
        {
            icon: <Heart className="w-8 h-8 text-red-600"/>,
            title: "Live Better",
            description: "Improve your quality of life with reliable, comfortable, and modern electric vehicles.",
            color: "bg-red-100"
        }
    ];
    const communityFeatures = [
        {
            icon: <Users className="w-6 h-6 text-purple-600"/>,
            title: "Strong Community",
            description: "Join thousands of delivery champions across Delhi NCR",
            stats: "5000+ Active Riders"
        },
        {
            icon: <Shield className="w-6 h-6 text-green-600"/>,
            title: "Safety First",
            description: "Comprehensive safety measures and insurance coverage",
            stats: "99.9% Safety Record"
        },
        {
            icon: <Truck className="w-6 h-6 text-blue-600"/>,
            title: "Delivery Excellence",
            description: "Optimized for food and package delivery services",
            stats: "1M+ Deliveries"
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-600"/>,
            title: "Growth Opportunities",
            description: "Scale your business with our flexible rental plans",
            stats: "300% Growth Rate"
        }
    ];
    const impactStats = [
        { number: "10,000+", label: "CO2 Tons Saved", icon: <Leaf className="w-6 h-6 text-green-600"/> },
        { number: "₹50 Crores", label: "Earnings Generated", icon: <DollarSign className="w-6 h-6 text-blue-600"/> },
        { number: "25+", label: "Cities Covered", icon: <Target className="w-6 h-6 text-purple-600"/> },
        { number: "4.8/5", label: "Customer Rating", icon: <Star className="w-6 h-6 text-yellow-600"/> }
    ];
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Delivery Partner",
            message: "GORidepe changed my life! Earning ₹1000+ daily with their electric scooters. Best decision ever!",
            rating: 5
        },
        {
            name: "Priya Singh",
            role: "Food Delivery",
            message: "Clean, efficient, and cost-effective. The monthly plan saves me thousands compared to fuel costs.",
            rating: 5
        },
        {
            name: "Amit Kumar",
            role: "E-commerce Delivery",
            message: "Professional service and excellent support. Their community is like a family that helps each other grow.",
            rating: 5
        }
    ];
    return (<div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1747135749111-dff4450a00fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBmdXR1cmUlMjBzdXN0YWluYWJsZSUyMGdyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgwMTU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Why GoRidePe?</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering Drivers. Building Dreams. Driving India Green.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-600 text-white px-4 py-2 text-lg">Launching Oct 10th, 2025</Badge>
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg">₹499 Deposit Only</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GORidepe isn't just about electric vehicle rentals - it's about creating a sustainable future while empowering delivery champions across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (<Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in India's delivery ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (<div key={index} className="text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>))}
          </div>
        </section>

        {/* Future Impact by 2026 */}
        <section className="mb-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Future Impact by 2026</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our vision with 5,000+ vehicles transforming urban mobility across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 w-8 text-white"/>
              </div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="opacity-90">Bikes in Market</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 w-8 text-white"/>
              </div>
              <div className="text-4xl font-bold mb-2">75,000 kg</div>
              <div className="opacity-90">CO₂ Saved Annually</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 w-8 text-white"/>
              </div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="opacity-90">Growing Family</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 w-8 text-white"/>
              </div>
              <div className="text-4xl font-bold mb-2">₹500Cr+</div>
              <div className="opacity-90">Revenue Estimated</div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">2026 Benefits Preview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 text-lime-200">Environmental Impact:</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• 75,000 kg CO₂ emissions reduced annually</li>
                  <li>• 10 million liters of fuel saved</li>
                  <li>• 50% reduction in air pollution in served areas</li>
                  <li>• Support for India's net-zero goals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lime-200">Economic & Social Impact:</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• 25,000+ jobs created for drivers</li>
                  <li>• ₹500Cr+ annual revenue generation</li>
                  <li>• Reduced transportation costs for users</li>
                  <li>• Enhanced urban mobility infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Safety */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community & Safety</h2>
            <p className="text-xl text-gray-600">Building a supportive ecosystem for delivery partners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (<Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                  <Badge variant="secondary" className="text-xs">{feature.stats}</Badge>
                </CardContent>
              </Card>))}
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Cover</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for modern delivery needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Handshake className="w-8 h-8 text-green-600"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowering Drivers</h3>
              <p className="text-gray-600">Providing tools and opportunities for financial independence and professional growth.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Target className="w-8 h-8 text-blue-600"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Building Dreams</h3>
              <p className="text-gray-600">Supporting entrepreneurs and delivery partners in achieving their business goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Leaf className="w-8 h-8 text-green-600"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Driving India Green</h3>
              <p className="text-gray-600">Leading the transition to sustainable transportation with 100% electric vehicles.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Champions Say</h2>
            <p className="text-xl text-gray-600">Real stories from our delivery partners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (<Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.message}"</p>
                </CardContent>
              </Card>))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Join the Green Revolution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Be among the first 50 riders to get our special launch offer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Badge className="bg-white text-primary px-6 py-2 text-lg">Only ₹499 Deposit</Badge>
            <Badge className="bg-green-600 text-white px-6 py-2 text-lg">Free T-shirt for First 100</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('pricing')} className="bg-white text-primary hover:bg-gray-100">
              View Pricing Plans
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')} className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
