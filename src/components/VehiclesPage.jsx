import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { Battery, Gauge, Shield, Zap, MapPin, Clock, Users, ArrowRight, CheckCircle, User, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
export function VehiclesPage({ onNavigate, user }) {
    const scooterTypes = [
    {
      id: 'single-light',
      type: 'Single Light EV',
      model: 'GORidepe Single',
      description: 'Perfect for individual riders and light delivery tasks',
      battery: '2.5 kWh',
      range: '60-80 km',
      maxSpeed: '70 km/h',
      weight: '85 kg',
      features: ['Single Rider', 'Compact Design', 'Easy Parking', 'Light Delivery'],
      dailyRate: '₹250',
  image: new URL('../assets/slight.jpg', import.meta.url).href
    },
    {
      id: 'double-light',
      type: 'Double Light EV',
      model: 'GORidepe Double',
      description: 'Ideal for two riders or heavier delivery requirements',
      battery: '3.5 kWh',
      range: '80-100 km',
      maxSpeed: '75 km/h',
      weight: '105 kg',
      features: ['Two Riders', 'Extended Range', 'Heavy Delivery', 'Storage Space'],
      dailyRate: '₹350',
  image: new URL('../assets/dlight.jpg', import.meta.url).href
    }
    ];
    const availableScooters = [
        {
            id: 'GRP-S001',
            type: 'single-light',
            model: 'GORidepe Single',
            battery: 85,
            location: 'Sector 18, Noida',
            status: 'available'
        },
        {
            id: 'GRP-S002',
            type: 'single-light',
            model: 'GORidepe Single',
            battery: 92,
            location: 'Connaught Place, Delhi',
            status: 'available'
        },
        {
            id: 'GRP-D001',
            type: 'double-light',
            model: 'GORidepe Double',
            battery: 78,
            location: 'Cyber City, Gurgaon',
            status: 'in-use'
        },
        {
            id: 'GRP-D002',
            type: 'double-light',
            model: 'GORidepe Double',
            battery: 96,
            location: 'Sector 62, Noida',
            status: 'available'
        },
        {
            id: 'GRP-S003',
            type: 'single-light',
            model: 'GORidepe Single',
            battery: 88,
            location: 'Karol Bagh, Delhi',
            status: 'charging'
        }
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case 'available':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'in-use':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'charging':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'maintenance':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const handleBookRide = (scooterId) => {
        if (!user) {
            onNavigate('auth');
            return;
        }
        if (user.kycStatus !== 'approved' || user.subscriptionStatus !== 'active') {
            onNavigate('dashboard');
            return;
        }
        // Simulate booking
        alert(`Ride request submitted for scooter ${scooterId}. You will be notified once approved.`);
    };
    return (<div className="min-h-screen pt-8 bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden rounded-b-xl">
        <ImageWithFallback src={new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href} alt="Fleet background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Electric Fleet</h1>
          <p className="text-xl mb-6">Choose Your Perfect EV Companion</p>
        </div>
      </div>

      {/* Vehicle Types Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Two Perfect Options
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose from our two specialized electric vehicle types, designed for different needs and preferences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                {user ? 'Go to Dashboard' : 'Start Riding Today'}
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('pricing')}>
                View Pricing
              </Button>
            </div>
          </div>

          {/* Vehicle Types Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {scooterTypes.map((scooter) => (<Card key={scooter.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                    {/* make type images smaller and ensure they fit */}
                    <ImageWithFallback src={scooter.image} alt={scooter.model} className="w-full h-20 md:h-24 lg:h-28 object-contain bg-gray-50"/>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      {scooter.dailyRate}/day
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white">
                      {scooter.id === 'single-light' ? (<User className="w-4 h-4 mr-1"/>) : (<Users className="w-4 h-4 mr-1"/>)}
                      {scooter.type}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{scooter.model}</CardTitle>
                  <CardDescription className="text-lg">{scooter.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Battery className="h-5 w-5 text-green-600 mr-2"/>
                      <span>{scooter.battery}</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-blue-600 mr-2"/>
                      <span>{scooter.range}</span>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-5 w-5 text-purple-600 mr-2"/>
                      <span>{scooter.maxSpeed}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-orange-600 mr-2"/>
                      <span>{scooter.weight}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {scooter.features.map((feature, index) => (<div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2"/>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => onNavigate('pricing')}>
                    Choose This Type
                  </Button>
                </CardContent>
              </Card>))}
          </div>

          {/* Fleet Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">250+</div>
              <div className="text-gray-600">Active Scooters</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-blue-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Average Battery</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">25k+</div>
              <div className="text-gray-600">Happy Riders</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Pickup Points</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Scooters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Scooters</h2>
              <p className="text-gray-600 mt-2">Find and book your perfect ride</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                {availableScooters.filter(s => s.status === 'available').length} Available
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                {availableScooters.filter(s => s.status === 'in-use').length} In Use
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                {availableScooters.filter(s => s.status === 'charging').length} Charging
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableScooters.map((scooter) => {
            const scooterType = scooterTypes.find(type => type.id === scooter.type);
            return (<Card key={scooter.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback src={scooterType?.image || ''} alt={scooter.model} className="w-full h-48 object-contain bg-gray-50"/>
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(scooter.status)}>
                        {scooter.status.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white">
                        {scooter.id}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{scooter.model}</span>
                      <div className="flex items-center text-sm text-green-600">
                        <Battery className="h-4 w-4 mr-1"/>
                        {scooter.battery}%
                      </div>
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1"/>
                      {scooter.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 text-gray-400 mr-2"/>
                        <span>Max: {scooterType?.maxSpeed}</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-gray-400 mr-2"/>
                        <span>Range: {scooterType?.range}</span>
                      </div>
                    </div>
                    
                    {scooter.status === 'available' ? (<Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleBookRide(scooter.id)}>
                        Book This Ride
                      </Button>) : (<Button className="w-full" variant="outline" disabled>
                        {scooter.status === 'in-use' ? 'Currently In Use' :
                        scooter.status === 'charging' ? 'Charging' : 'Not Available'}
                      </Button>)}
                  </CardContent>
                </Card>);
        })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose GORidepe?
            </h2>
            <p className="text-lg text-gray-600">
              Premium features that make every ride exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
                icon: <Battery className="h-8 w-8 text-green-600"/>,
                title: 'Long-lasting Battery',
                description: 'Advanced lithium-ion batteries with up to 100km range on a single charge.'
            },
            {
                icon: <Shield className="h-8 w-8 text-blue-600"/>,
                title: 'Safety First',
                description: 'Regular safety inspections, quality helmets, and comprehensive insurance coverage.'
            },
            {
                icon: <Zap className="h-8 w-8 text-yellow-600"/>,
                title: 'Fast & Silent',
                description: 'Instant acceleration with zero noise pollution for a smooth riding experience.'
            },
            {
                icon: <Clock className="h-8 w-8 text-purple-600"/>,
                title: '24/7 Availability',
                description: 'Round-the-clock service with scooters available whenever you need them.'
            },
            {
                icon: <MapPin className="h-8 w-8 text-red-600"/>,
                title: 'Wide Coverage',
                description: 'Extensive network across Noida, Delhi, and Gurgaon with convenient pickup points.'
            },
            {
                icon: <Users className="h-8 w-8 text-indigo-600"/>,
                title: 'Community Driven',
                description: 'Join a community of eco-conscious riders making a positive environmental impact.'
            }
        ].map((feature, index) => (<div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Electric Mobility?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of riders who have discovered the joy of clean, convenient transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
              {user ? 'Book Your Ride' : 'Get Started Now'}
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" onClick={() => onNavigate('pricing')}>
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>);
}
