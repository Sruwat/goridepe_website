import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Search, HelpCircle, Phone, MessageCircle, Mail, Book, Users, Shield, CreditCard, Car, FileText, ChevronDown, ChevronRight, Clock, CheckCircle } from 'lucide-react';
export function HelpPage({ onNavigate, user }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const faqCategories = [
        {
            title: "Getting Started",
            icon: <Book className="h-5 w-5"/>,
            faqs: [
                {
                    question: "How do I create an account?",
                    answer: "Click on 'Sign Up' in the top right corner of our website. Enter your email, create a password, and verify your account through the confirmation email sent to you."
                },
                {
                    question: "What documents do I need for KYC verification?",
                    answer: "You need: 1) Aadhaar card (front and back), 2) Address proof (Voter ID/PAN/Passport), 3) A recent photograph. All documents should be clear and readable."
                },
                {
                    question: "How long does KYC approval take?",
                    answer: "KYC verification typically takes 24-48 hours. You'll receive email and SMS notifications once your documents are reviewed and approved."
                },
                {
                    question: "Can I start riding immediately after registration?",
                    answer: "No, you need to complete KYC verification and purchase a subscription plan before you can book rides."
                }
            ]
        },
        {
            title: "Subscriptions & Payments",
            icon: <CreditCard className="h-5 w-5"/>,
            faqs: [
                {
                    question: "What subscription plans are available?",
                    answer: "We offer three plans: Daily Pass (₹250), Weekly Pass (₹1,500), and Monthly Pass (₹5,000). All plans include unlimited rides during the subscription period."
                },
                {
                    question: "How do I make a payment?",
                    answer: "Scan the UPI QR code displayed on the payment page using any UPI app. After payment, upload the screenshot and UTR number for verification."
                },
                {
                    question: "How long does payment verification take?",
                    answer: "Payment verification is usually completed within 2-4 hours during business hours. You'll receive a confirmation once verified."
                },
                {
                    question: "Can I get a refund if I cancel my subscription?",
                    answer: "Refunds are processed according to our refund policy. Unused subscription days may be eligible for partial refunds."
                }
            ]
        },
        {
            title: "Booking & Rides",
            icon: <Car className="h-5 w-5"/>,
            faqs: [
                {
                    question: "How do I book a ride?",
                    answer: "Log in to your dashboard, view available scooters, select one, and submit a ride request. Our team will approve and assign a specific vehicle to you."
                },
                {
                    question: "Can I choose a specific scooter model?",
                    answer: "You can view available scooters and their models, but final assignment depends on availability and location proximity."
                },
                {
                    question: "What if no scooters are available in my area?",
                    answer: "Check back later as availability changes throughout the day. You can also contact support to get updates on nearby availability."
                },
                {
                    question: "How do I end my ride?",
                    answer: "Park the scooter at a designated location and notify our support team. They will confirm the return and end your ride session."
                }
            ]
        },
        {
            title: "Safety & Support",
            icon: <Shield className="h-5 w-5"/>,
            faqs: [
                {
                    question: "What should I do in case of an emergency?",
                    answer: "Call our 24/7 emergency helpline: +91 9876543211. Move to a safe location and share your GPS coordinates with our support team."
                },
                {
                    question: "Are helmets provided?",
                    answer: "Yes, complimentary ISI certified helmets are provided with every ride. They are sanitized after each use for your safety."
                },
                {
                    question: "What if the scooter breaks down during my ride?",
                    answer: "Contact our support immediately. We'll dispatch a replacement vehicle or assistance team to your location within 30 minutes."
                },
                {
                    question: "Is insurance coverage included?",
                    answer: "Yes, basic insurance coverage is included with all subscription plans. This covers accidents and damages during your ride period."
                }
            ]
        }
    ];
    const supportChannels = [
        {
            title: "24/7 Phone Support",
            description: "Talk to our support team anytime",
            contact: "+91 9876543210",
            icon: <Phone className="h-6 w-6 text-green-600"/>,
            availability: "Available 24/7"
        },
        {
            title: "Live Chat",
            description: "Get instant help through chat",
            contact: "Start Chat",
            icon: <MessageCircle className="h-6 w-6 text-blue-600"/>,
            availability: "9 AM - 9 PM"
        },
        {
            title: "Email Support",
            description: "Send us your questions via email",
            contact: "support@goridpe.com",
            icon: <Mail className="h-6 w-6 text-purple-600"/>,
            availability: "Response within 4 hours"
        },
        {
            title: "Emergency Helpline",
            description: "For ride emergencies only",
            contact: "+91 9876543211",
            icon: <Phone className="h-6 w-6 text-red-600"/>,
            availability: "Available 24/7"
        }
    ];
    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };
    return (<div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-10 w-10 text-blue-600"/>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions, get support, and learn how to make the most of Go Ride Pe.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"/>
            <Input placeholder="Search for help articles, FAQs, or topics..." className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Help Quickly</h2>
            <p className="text-lg text-gray-600">Choose the support channel that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (<Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                  <div className="text-sm font-medium text-blue-600 mb-2">{channel.contact}</div>
                  <Badge variant="outline" className="text-xs">
                    {channel.availability}
                  </Badge>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find quick answers to common questions</p>
          </div>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="getting-started" className="flex items-center">
                <Book className="h-4 w-4 mr-2"/>
                Getting Started
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2"/>
                Payments
              </TabsTrigger>
              <TabsTrigger value="rides" className="flex items-center">
                <Car className="h-4 w-4 mr-2"/>
                Rides
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center">
                <Shield className="h-4 w-4 mr-2"/>
                Safety
              </TabsTrigger>
            </TabsList>

            {faqCategories.map((category, categoryIndex) => (<TabsContent key={categoryIndex} value={category.title.toLowerCase().replace(' & ', '-').replace(' ', '-')} className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 100 + faqIndex;
                return (<Card key={faqIndex} className="overflow-hidden">
                      <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleFaq(globalIndex)}>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{faq.question}</CardTitle>
                          {expandedFaq === globalIndex ? (<ChevronDown className="h-5 w-5 text-gray-400"/>) : (<ChevronRight className="h-5 w-5 text-gray-400"/>)}
                        </div>
                      </CardHeader>
                      {expandedFaq === globalIndex && (<CardContent className="pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </CardContent>)}
                    </Card>);
            })}
              </TabsContent>))}
          </Tabs>
        </div>
      </section>

      {/* User Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Guides</h2>
            <p className="text-lg text-gray-600">Detailed guides to help you get the most out of Go Ride Pe</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                title: "Complete KYC Verification",
                description: "Learn how to upload documents and complete your identity verification process.",
                steps: 5,
                duration: "10 min",
                icon: <FileText className="h-6 w-6 text-blue-600"/>
            },
            {
                title: "Make Your First Payment",
                description: "Step-by-step guide to purchasing your first subscription plan.",
                steps: 4,
                duration: "5 min",
                icon: <CreditCard className="h-6 w-6 text-green-600"/>
            },
            {
                title: "Book Your First Ride",
                description: "Complete walkthrough of the booking process from start to finish.",
                steps: 6,
                duration: "8 min",
                icon: <Car className="h-6 w-6 text-purple-600"/>
            },
            {
                title: "Safety Guidelines",
                description: "Essential safety tips and emergency procedures for new riders.",
                steps: 8,
                duration: "12 min",
                icon: <Shield className="h-6 w-6 text-red-600"/>
            },
            {
                title: "Manage Your Account",
                description: "Learn how to update profile, view history, and manage subscriptions.",
                steps: 7,
                duration: "15 min",
                icon: <Users className="h-6 w-6 text-yellow-600"/>
            },
            {
                title: "Troubleshooting",
                description: "Common issues and how to resolve them quickly.",
                steps: 10,
                duration: "20 min",
                icon: <HelpCircle className="h-6 w-6 text-indigo-600"/>
            }
        ].map((guide, index) => (<Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    {guide.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1"/>
                      {guide.steps} steps
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1"/>
                      {guide.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl mb-8 opacity-90">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => onNavigate('contact')}>
              <MessageCircle className="mr-2 h-5 w-5"/>
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5"/>
              Call +91 9876543210
            </Button>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-lg">
            <h3 className="font-bold mb-2">Emergency Support</h3>
            <p className="opacity-90">
              For ride emergencies, call our 24/7 helpline: <strong>+91 9876543211</strong>
            </p>
          </div>
        </div>
      </section>
    </div>);
}
