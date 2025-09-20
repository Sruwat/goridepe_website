import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { Users, Target, Heart, Globe, ArrowRight, Leaf, TrendingUp, Factory, Lightbulb, Lock, Rocket, UserCheck, Handshake, Building, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import CEOImg from '../assets/CEO.jpg';
import CFOImg from '../assets/CFO.jpg';
import CEO1Img from '../assets/ceo1.jpg';
export function AboutPage({ onNavigate, user }) {
    return (<div className="pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-cover bg-center overflow-hidden" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1737982561070-e349fad5674b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVsZWN0cmljJTIwdmVoaWNsZSUyMGZ1dHVyZSUyMGdyZWVufGVufDF8fHx8MTc1ODAxNTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge className="bg-lime-400 text-black border-lime-400 mb-6 text-lg px-6 py-2 rounded-full">
              About GoRidePe
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Driving India's
              <br />
              <span className="text-lime-400">Electric Future</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Empowering Drivers • Building Dreams • Driving India Green
              <br />
              Go green. Go smart. GoRidePe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                At GoRidePe, we are redefining the way people move by making electric mobility accessible, affordable, and sustainable for everyone. Founded by Saumya, our CEO, GoRidePe is built on a simple belief: the future of transportation lies in clean energy and shared convenience.
              </p>
              <p>
                We offer EV rentals for drivers, businesses, and individuals—whether it's a gig worker looking for a reliable two-wheeler for food delivery, a cab driver seeking a cost-efficient ride, or an individual exploring eco-friendly daily commutes. Our solutions are designed to empower users with zero-emission vehicles, lower running costs, and seamless access to electric mobility.
              </p>
              <p>
                At GoRidePe, we are not just renting vehicles — we are driving a movement towards cleaner cities, healthier communities, and empowered livelihoods.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-lime-600"/>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To accelerate India's shift towards sustainable transportation by providing innovative, affordable, and driver-friendly EV rental solutions that benefit both people and the planet.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-blue-600"/>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To become India's most trusted EV rental ecosystem, empowering millions of drivers and everyday users to ride green, earn more, and contribute to a cleaner tomorrow.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions cater to diverse mobility needs across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-orange-600"/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery & Gig Workers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Swiggy, Zomato, Blinkit, Ola, Uber drivers seeking cost-effective EVs for daily income generation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-8 w-8 text-blue-600"/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Businesses</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Companies requiring last-mile delivery fleets with predictable running costs and sustainable solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-green-600"/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Individuals & Families</h3>
                  <p className="text-gray-600 leading-relaxed">
                    People seeking eco-friendly rides for personal use without the burden of vehicle ownership.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Edge */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Edge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the electric mobility space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-lime-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible & Affordable Plans</h3>
              <p className="text-gray-600 leading-relaxed">
                Rental plans designed to suit diverse needs and budgets, from daily to monthly options.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-blue-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wide Network of EVs</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive fleet suited for delivery, personal commute, and professional driving needs.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-purple-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Commitment to reliability, sustainability, and driver empowerment across all operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

  {/* Founder's Note */}
  <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries building the future of mobility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Founder & CEO */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden mb-6 ring-4 ring-lime-100 shadow-md bg-white flex items-center justify-center">
                      <ImageWithFallback src={CEO1Img} alt="Saumya Singh - Founder & CEO" className="w-full h-full object-cover object-center"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Saumya Singh</h3>
                    <Badge className="bg-lime-100 text-lime-800 border-lime-200 mb-6">
                      Founder & CEO, GoRidePe
                    </Badge>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-4">Founder's Note</h4>
                      <p className="text-gray-700 leading-relaxed italic text-base">
                        "At GoRidePe, I started with a simple vision — to make electric mobility accessible for everyone, especially for the hardworking drivers who keep our cities moving. I believe that every driver deserves a reliable, cost-effective vehicle, and every individual deserves a cleaner way to commute.
                        <br /><br />
                        GoRidePe is more than just an EV rental company — it's a step towards a sustainable future where livelihoods improve and our environment thrives. Together, let's ride green, earn more, and create a better tomorrow."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Co-founder & CFO */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden mb-6 ring-4 ring-blue-100 shadow-md bg-white flex items-center justify-center">
                      <ImageWithFallback src={CFOImg} alt="Nikhil Kumar - Co-founder & CFO" className="w-full h-full object-cover object-center"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Nikhil Kumar</h3>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6">
                      Co-founder & CFO, GoRidePe
                    </Badge>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-4">CFO's Note</h4>
                      <p className="text-gray-700 leading-relaxed italic text-base">
                        "As CFO and Co-founder of GoRidePe, I believe that sustainable business growth and environmental responsibility go hand in hand. Our financial strategy is built on creating value for all stakeholders — drivers, customers, investors, and our planet.
                        <br /><br />
                        By making electric mobility financially accessible and profitable, we're proving that sustainable solutions can drive strong business outcomes. Every rupee invested in GoRidePe is an investment in India's clean energy future."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At GoRidePe, our values are the driving force behind everything we do. They guide our decisions, shape our culture, and ensure that we remain true to our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                icon: <Leaf className="h-8 w-8"/>,
                title: "🌱 Sustainability",
                description: "We are committed to building a cleaner, greener future by reducing carbon footprints and promoting eco-friendly transportation.",
                bgColor: "bg-green-100",
                iconColor: "text-green-600"
            },
            {
                icon: <Handshake className="h-8 w-8"/>,
                title: "🤝 Empowerment",
                description: "We believe in uplifting drivers, gig workers, and everyday users by giving them affordable access to EVs that increase earnings and reduce costs.",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600"
            },
            {
                icon: <Lightbulb className="h-8 w-8"/>,
                title: "💡 Innovation",
                description: "We continuously explore smarter ways to make EV rentals flexible, reliable, and user-friendly for diverse needs.",
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600"
            },
            {
                icon: <Lock className="h-8 w-8"/>,
                title: "🔒 Trust & Reliability",
                description: "From vehicle quality to service support, we ensure that every ride with GoRidePe is dependable and stress-free.",
                bgColor: "bg-orange-100",
                iconColor: "text-orange-600"
            },
            {
                icon: <Rocket className="h-8 w-8"/>,
                title: "🚀 Growth with Impact",
                description: "We don't just want to grow as a company — we aim to create real impact by improving livelihoods, transforming cities, and driving positive change.",
                bgColor: "bg-red-100",
                iconColor: "text-red-600"
            }
        ].map((value, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mb-6`}>
                      <div className={value.iconColor}>{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At GoRidePe, culture is more than words — it's how we work, grow, and support one another every day. We believe that when our team and driver-partners feel empowered, respected, and inspired, we create lasting impact for our customers and our planet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                icon: <UserCheck className="h-8 w-8"/>,
                title: "🔑 Respect & Inclusion",
                description: "We treat every team member, driver, and partner with dignity. Diversity is our strength, and inclusivity is at the heart of how we operate."
            },
            {
                icon: <Handshake className="h-8 w-8"/>,
                title: "🤝 Collaboration & Ownership",
                description: "We work as one team, encouraging open communication and shared responsibility. Every idea counts, and every role creates value."
            },
            {
                icon: <TrendingUp className="h-8 w-8"/>,
                title: "📈 Empowerment & Growth",
                description: "From our employees to our driver-partners, we ensure opportunities for learning, financial growth, and professional development."
            },
            {
                icon: <Heart className="h-8 w-8"/>,
                title: "❤️ Customer First Mindset",
                description: "We exist because of our customers and drivers. Every decision is made with their trust, convenience, and success in mind."
            },
            {
                icon: <Lightbulb className="h-8 w-8"/>,
                title: "🚀 Purpose-Driven Innovation",
                description: "We embrace new ideas, adapt quickly, and build solutions that not only serve today's needs but also shape the future of mobility."
            }
        ].map((culture, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                      <div className="text-lime-600">{culture.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{culture.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{culture.description}</p>
                  </CardContent>
                </Card>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-lime-400 to-green-500 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-black mb-8">Join the Electric Revolution</h2>
            <p className="text-xl mb-10 text-black/80">
              Be part of India's sustainable mobility future. Every ride makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-full" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                {user ? 'Book Your Ride' : 'Start Riding Today'}
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg rounded-full" onClick={() => onNavigate('careers')}>
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
