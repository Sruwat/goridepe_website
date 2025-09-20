import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { ArrowRight, Zap, Shield, Clock, MapPin, Smartphone, Star, Users, Leaf, Play, CreditCard, FileText, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import CEO1Img from '../assets/ceo1.jpg';
export function HomePage({ onNavigate, user }) {
    const stepInstructions = [
        {
            step: "1",
            title: "Sign Up & Verify",
            description: "Create your account and complete KYC verification with your documents.",
            icon: <Smartphone className="h-12 w-12 text-lime-600"/>,
            action: "Sign Up Now",
            onClick: () => onNavigate('auth')
        },
        {
            step: "2",
            title: "Complete KYC",
            description: "Upload your Aadhar, PAN/Voter ID, and Driving License for verification.",
            icon: <FileText className="h-12 w-12 text-lime-600"/>,
            action: "Start KYC",
            onClick: () => onNavigate('kyc')
        },
        {
            step: "3",
            title: "View Vehicles",
            description: "Explore our electric vehicle options and choose your preferred type.",
            icon: <Zap className="h-12 w-12 text-lime-600"/>,
            action: "See Vehicles",
            onClick: () => onNavigate('vehicles')
        },
        {
            step: "4",
            title: "Choose Plan",
            description: "Select from flexible daily, weekly, or monthly subscription plans.",
            icon: <CreditCard className="h-12 w-12 text-lime-600"/>,
            action: "View Plans",
            onClick: () => onNavigate('pricing')
        },
        {
            step: "5",
            title: "Make Payment",
            description: "Secure payment via UPI with instant verification process.",
            icon: <CheckCircle className="h-12 w-12 text-lime-600"/>,
            action: "Pay Now",
            onClick: () => onNavigate('payment')
        },
        {
            step: "6",
            title: "Get Vehicle",
            description: "Pick up your vehicle and enjoy the smooth, silent electric ride.",
            icon: <MapPin className="h-12 w-12 text-lime-600"/>,
            action: "Start Riding",
            onClick: () => user ? onNavigate('dashboard') : onNavigate('auth')
        }
    ];
    return (<div className="pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1641205502134-07b24a41227d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBjaXR5JTIwbW9kZXJuJTIwY2xlYW58ZW58MXx8fHwxNzU3OTM2ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Go Ride Pe - Clean electric scooter in modern city" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              <span className="text-lime-400">Go Ride Pe</span>
            </h1>
            
            <div className="mb-6">
              <Badge className="bg-lime-400 text-black px-6 py-2 text-lg font-bold rounded-full">
                🚀 Launching October 10th, 2025
              </Badge>
            </div>
            
            <p className="text-2xl md:text-3xl mb-12 font-light max-w-4xl mx-auto">
              Empowering Drivers • Building Dreams • Driving India Green
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black px-12 py-6 text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                {user ? 'Go to Dashboard' : 'Start Your Journey'}
                <ArrowRight className="ml-3 h-6 w-6"/>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl rounded-full" onClick={() => onNavigate('vehicles')}>
                <Play className="mr-3 h-6 w-6"/>
                See How It Works
              </Button>
            </div>

            {/* Take on Rent and Buy Vehicle Options */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" variant="outline" className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-10 py-4 text-lg rounded-full bg-black/20 backdrop-blur-sm" onClick={() => onNavigate('pricing')}>
                Take on Rent
              </Button>
              
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-10 py-4 text-lg rounded-full bg-black/20 backdrop-blur-sm" onClick={() => onNavigate('buy-vehicles')}>
                Buy Vehicle
              </Button>
            </motion.div>

            {/* Driver Earning Potential */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mb-16">
              <div className="bg-gradient-to-r from-lime-400/20 to-green-400/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Start Earning Today!</h3>
                    <p className="text-lg opacity-90 mb-4">
                      Join our driver community and earn up to ₹50,000+ per month
                      with Battery Swap facilities across Delhi NCR
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-lime-400"/>
                        <span>Flexible Hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-lime-400"/>
                        <span>Growing Community</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30">
                    <ImageWithFallback src={CEO1Img} alt="Happy rider earning with Go Ride Pe" className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 mb-2">5k+</div>
                <div className="text-lg opacity-90">Pre-Registered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 mb-2">3</div>
                <div className="text-lg opacity-90">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 mb-2">500+</div>
                <div className="text-lg opacity-90">Vehicles Ready</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 mb-2">24/7</div>
                <div className="text-lg opacity-90">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Your EV Journey in 6 Simple Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these easy steps to start your electric vehicle adventure with Go Ride Pe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stepInstructions.map((step, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full" onClick={step.onClick}>
                      {step.action}
                      <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Enhanced Vehicle Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Choose Your Electric Ride</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two perfectly designed electric vehicles for every journey. Clean, efficient, and always ready.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Single Light EV */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="overflow-hidden border-none shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-300">
                <div className="relative h-56">
                  <ImageWithFallback src={new URL('../assets/slight.jpg', import.meta.url).href} alt="Single Light EV Vehicle" className="w-full h-full object-contain"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <Badge className="bg-lime-400 text-black mb-3">POPULAR</Badge>
                    <h3 className="text-3xl font-bold mb-2">Single Light EV</h3>
                    <p className="text-lg opacity-90">Perfect for solo rides</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-lime-600 mb-2">85km</div>
                      <div className="text-gray-600">Max Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-lime-600 mb-2">45km/h</div>
                      <div className="text-gray-600">Top Speed</div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Zap className="h-5 w-5 text-lime-600 mr-3"/>
                      <span>Lightning fast charging</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 text-lime-600 mr-3"/>
                      <span>Advanced safety features</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Leaf className="h-5 w-5 text-lime-600 mr-3"/>
                      <span>Zero emissions</span>
                    </div>
                  </div>
                  <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white py-4 text-lg rounded-full" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                    Book Single Light EV
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Double Light EV */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="overflow-hidden border-none shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-300">
                <div className="relative h-56">
                  <ImageWithFallback src={new URL('../assets/dlight.jpg', import.meta.url).href} alt="Double Light EV Vehicle" className="w-full h-full object-contain"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <Badge className="bg-blue-400 text-white mb-3">PREMIUM</Badge>
                    <h3 className="text-3xl font-bold mb-2">Double Light EV</h3>
                    <p className="text-lg opacity-90">For two riders</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">120km</div>
                      <div className="text-gray-600">Max Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">55km/h</div>
                      <div className="text-gray-600">Top Speed</div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Users className="h-5 w-5 text-blue-600 mr-3"/>
                      <span>Comfortable for two riders</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 text-blue-600 mr-3"/>
                      <span>Enhanced safety systems</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Leaf className="h-5 w-5 text-blue-600 mr-3"/>
                      <span>Eco-friendly technology</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-full" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                    Book Double Light EV
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety First Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Safety First, Always</h2>
              <p className="text-xl text-gray-600 mb-8">
                Your safety is our top priority. Every ride is protected by comprehensive safety measures 
                and insurance coverage.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
            {
                icon: <Shield className="h-6 w-6 text-lime-600"/>,
                title: "KYC Verified Users",
                description: "All riders are verified through government ID documents"
            },
            {
                icon: <Star className="h-6 w-6 text-lime-600"/>,
                title: "Premium Helmets",
                description: "Complimentary ISI certified helmets with every ride"
            },
            {
                icon: <Clock className="h-6 w-6 text-lime-600"/>,
                title: "24/7 Support",
                description: "Round-the-clock customer support for emergencies"
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

              <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white px-8 py-4 rounded-full" onClick={() => onNavigate('safety')}>
                Learn More About Safety
              </Button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1721734381621-1adb7da480e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjByaWRlciUyMGNpdHklMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzc0ODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Safe electric scooter riding" className="w-full h-96 object-cover rounded-2xl shadow-2xl"/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-lime-400 to-green-500 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl font-bold text-black mb-8">Ready to Go Electric?</h2>
            <p className="text-2xl text-black/80 mb-12">
              Join the revolution of clean, convenient transportation. Start your journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                {user ? 'Go to Dashboard' : 'Start Your Journey'}
                <ArrowRight className="ml-3 h-6 w-6"/>
              </Button>
              
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-12 py-6 text-xl rounded-full" onClick={() => onNavigate('pricing')}>
                View Pricing Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
