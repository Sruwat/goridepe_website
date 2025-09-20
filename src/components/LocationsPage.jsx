import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Users, Zap, ArrowRight, Navigation, Building, Car } from 'lucide-react';
const cities = [
    {
        name: 'Noida',
        description: 'Comprehensive coverage across all sectors with premium pickup points',
        scooters: 180,
        pickupPoints: 45,
        areas: [
            { name: 'Sector 18', scooters: 25, status: 'high' },
            { name: 'Sector 62', scooters: 20, status: 'medium' },
            { name: 'Sector 15', scooters: 18, status: 'medium' },
            { name: 'Sector 1', scooters: 15, status: 'low' },
            { name: 'Greater Noida', scooters: 22, status: 'high' },
            { name: 'Noida Extension', scooters: 18, status: 'medium' }
        ]
    },
    {
        name: 'Delhi',
        description: 'Strategic placement in business districts and popular destinations',
        scooters: 220,
        pickupPoints: 38,
        areas: [
            { name: 'Connaught Place', scooters: 35, status: 'high' },
            { name: 'Karol Bagh', scooters: 28, status: 'high' },
            { name: 'Lajpat Nagar', scooters: 25, status: 'medium' },
            { name: 'Rajouri Garden', scooters: 22, status: 'medium' },
            { name: 'Khan Market', scooters: 20, status: 'medium' },
            { name: 'Saket', scooters: 18, status: 'low' }
        ]
    },
    {
        name: 'Gurgaon',
        description: 'Complete coverage of corporate hubs and residential areas',
        scooters: 160,
        pickupPoints: 32,
        areas: [
            { name: 'Cyber City', scooters: 30, status: 'high' },
            { name: 'DLF Phase 1', scooters: 25, status: 'high' },
            { name: 'DLF Phase 2', scooters: 22, status: 'medium' },
            { name: 'DLF Phase 3', scooters: 20, status: 'medium' },
            { name: 'Sector 29', scooters: 18, status: 'low' },
            { name: 'Golf Course Road', scooters: 15, status: 'low' }
        ]
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'high':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'medium':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'low':
            return 'bg-red-100 text-red-800 border-red-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};
const getStatusText = (status) => {
    switch (status) {
        case 'high':
            return 'High Availability';
        case 'medium':
            return 'Medium Availability';
        case 'low':
            return 'Low Availability';
        default:
            return 'Not Available';
    }
};
export function LocationsPage({ onNavigate, user }) {
    return (<div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service Locations
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover where you can find Go Ride Pe scooters across NCR. We're expanding rapidly 
              to serve you better in more locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
                {user ? 'Find Nearby Scooters' : 'Start Riding'}
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('vehicles')}>
                View Our Fleet
              </Button>
            </div>
          </div>

          {/* Coverage Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">115+</div>
              <div className="text-gray-600">Pickup Points</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">560+</div>
              <div className="text-gray-600">Active Scooters</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600"/>
              </div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Service Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage across the National Capital Region
            </p>
          </div>

          <div className="space-y-12">
            {cities.map((city, index) => (<div key={index}>
                <Card className="overflow-hidden shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{city.name}</CardTitle>
                        <CardDescription className="text-green-100 text-base">
                          {city.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">{city.scooters}</div>
                        <div className="text-sm text-green-100">Active Scooters</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {city.areas.map((area, areaIndex) => (<div key={areaIndex} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900">{area.name}</h3>
                            <Badge className={getStatusColor(area.status)}>
                              {getStatusText(area.status)}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center">
                                <Zap className="h-4 w-4 mr-1"/>
                                Scooters Available
                              </span>
                              <span className="font-medium">{area.scooters}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1"/>
                                Pickup Points
                              </span>
                              <span className="font-medium">
                                {Math.ceil(area.scooters / 8)}
                              </span>
                            </div>
                          </div>
                        </div>))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-gray-500 mr-2"/>
                          <span>Total Pickup Points: <strong>{city.pickupPoints}</strong></span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-500 mr-2"/>
                          <span>Daily Riders: <strong>{Math.ceil(city.scooters * 2.5)}+</strong></span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>))}
          </div>
        </div>
      </section>

      {/* How to Find Scooters */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Find Scooters
            </h2>
            <p className="text-lg text-gray-600">
              Locating and booking your ride is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Open Your Dashboard</h3>
                  <p className="text-gray-600">
                    Log in to your Go Ride Pe account and navigate to the ride booking section.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">View Available Scooters</h3>
                  <p className="text-gray-600">
                    Browse scooters available in your area with real-time availability status.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit Ride Request</h3>
                  <p className="text-gray-600">
                    Select your preferred scooter and submit a ride request for admin approval.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Start Your Ride</h3>
                  <p className="text-gray-600">
                    Once approved, collect your scooter from the designated pickup point and enjoy your ride!
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-blue-600 mr-3"/>
                    <h3 className="font-semibold text-blue-900">Pickup Points</h3>
                  </div>
                  <p className="text-blue-700 text-sm mb-4">
                    Our scooters are strategically placed at convenient locations including:
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Metro stations and bus stops</li>
                    <li>• Shopping malls and markets</li>
                    <li>• Office complexes and co-working spaces</li>
                    <li>• Residential societies and PG accommodations</li>
                    <li>• Educational institutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Car className="h-6 w-6 text-green-600 mr-3"/>
                    <h3 className="font-semibold text-green-900">Service Areas</h3>
                  </div>
                  <p className="text-green-700 text-sm">
                    We're continuously expanding our service areas. Can't find a scooter in your location? 
                    Let us know and we'll prioritize expansion to your area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Expanding Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring Go Ride Pe to more cities across India
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {['Pune', 'Bangalore', 'Hyderabad'].map((city, index) => (<Card key={index} className="border-2 border-dashed border-gray-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-3"/>
                  <h3 className="font-semibold text-gray-700">{city}</h3>
                  <p className="text-sm text-gray-500 mt-2">Coming Q2 2024</p>
                </CardContent>
              </Card>))}
          </div>
          
          <p className="text-gray-600 mb-6">
            Want us to launch in your city? Let us know!
          </p>
          <Button variant="outline" size="lg">
            Request Your City
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Electric Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Find the nearest scooter and book your ride in just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
              {user ? 'Book Your Ride' : 'Get Started Today'}
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" onClick={() => onNavigate('pricing')}>
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </div>);
}
