import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Footer } from './Footer';
const plans = [
    {
        name: 'Daily Pass',
        price: '₹250',
        period: '/day',
        description: 'Perfect for occasional rides and trying out our service',
        features: [
            'Unlimited rides for 24 hours',
            'Access to all scooters',
            'Basic customer support',
            'Mobile app access',
            'Standard insurance coverage'
        ],
        popular: false,
        cta: 'Choose Daily'
    },
    {
        name: 'Weekly Pass',
        price: '₹1,500',
        period: '/week',
        description: 'Great for regular commuters and frequent riders',
        features: [
            'Unlimited rides for 7 days',
            'Priority scooter access',
            'Premium customer support',
            'Mobile app access',
            'Enhanced insurance coverage',
            'Ride history tracking'
        ],
        popular: true,
        cta: 'Choose Weekly'
    },
    {
        name: 'Monthly Pass',
        price: '₹5,000',
        period: '/month',
        description: 'Best value for daily commuters and regular users',
        features: [
            'Unlimited rides for 30 days',
            'VIP scooter access',
            '24/7 premium support',
            'Mobile app access',
            'Comprehensive insurance',
            'Detailed analytics',
            'Priority maintenance',
            'Special event access'
        ],
        popular: false,
        cta: 'Choose Monthly'
    }
];
export function PricingPage({ onNavigate, user }) {
    const handleSelectPlan = (planName) => {
        if (!user) {
            onNavigate('auth');
            return;
        }
        if (user.kycStatus !== 'approved') {
            onNavigate('dashboard');
            return;
        }
        // Navigate to payment process
        onNavigate('payment');
    };
    return (<div className="min-h-screen pt-8 bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1732056793564-b915bb47eedb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBjaXR5JTIwcm9hZHMlMjBiYW5uZXJ8ZW58MXx8fHwxNzU3NzUzMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl mb-6">Affordable. Transparent. No Hidden Fees.</p>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your lifestyle. No hidden fees, no surprises.
          </p>
          
          {/* Payment CTA */}
          <div className="mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4" onClick={() => onNavigate('payment')}>
              Make Payment
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('why-go-ride-pe')}>
              Why Choose Us?
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2"/>
              No activation fees
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2"/>
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2"/>
              24/7 support
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (<Card key={index} className={`relative ${plan.popular
                ? 'border-green-500 shadow-xl scale-105'
                : 'border-gray-200 shadow-lg'}`}>
                {plan.popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1"/>
                      Most Popular
                    </Badge>
                  </div>)}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700">{feature}</span>
                      </li>))}
                  </ul>
                  
                  <Button className={`w-full ${plan.popular
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`} onClick={() => handleSelectPlan(plan.name)}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4"/>
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in Every Plan
            </h2>
            <p className="text-lg text-gray-600">
              All plans come with these essential features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
                title: 'Safe & Secure',
                description: 'KYC verified users only, comprehensive insurance coverage, and regular safety checks.'
            },
            {
                title: 'Well-Maintained Fleet',
                description: 'Regular maintenance, battery checks, and sanitization for your safety and comfort.'
            },
            {
                title: 'Easy Booking',
                description: 'Simple web-based booking system with real-time availability updates.'
            },
            {
                title: 'Flexible Returns',
                description: 'Multiple drop-off points across NCR for your convenience.'
            },
            {
                title: 'Customer Support',
                description: 'Dedicated support team available to help with any issues or questions.'
            },
            {
                title: 'Environmental Impact',
                description: 'Zero emissions riding contributing to cleaner air and reduced carbon footprint.'
            }
        ].map((benefit, index) => (<div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600"/>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
            {
                question: 'How does the subscription work?',
                answer: 'Once you purchase a subscription, you can book and ride unlimited scooters during your subscription period. Simply log in, find an available scooter, and start riding!'
            },
            {
                question: 'What documents do I need for KYC?',
                answer: 'You need to upload a valid Aadhaar card and driving license. Our team will verify these documents within 24-48 hours.'
            },
            {
                question: 'Can I cancel my subscription?',
                answer: 'Yes, you can cancel your subscription at any time. However, refunds are processed according to our refund policy.'
            },
            {
                question: 'What happens if I damage the scooter?',
                answer: 'All plans include basic insurance coverage. For damages beyond normal wear and tear, additional charges may apply based on our damage assessment.'
            },
            {
                question: 'Is there a security deposit?',
                answer: 'No security deposit is required. Your KYC verification and subscription payment are sufficient to start riding.'
            }
        ].map((faq, index) => (<div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Riding?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who have made the switch to electric.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => user ? onNavigate('dashboard') : onNavigate('auth')}>
              {user ? 'Go to Dashboard' : 'Get Started Today'}
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" onClick={() => onNavigate('vehicles')}>
              View Our Fleet
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>);
}
