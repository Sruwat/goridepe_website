import React from 'react';
import { motion } from 'motion/react';
import { Search, Phone, Mail, MessageCircle, FileText, Shield, CreditCard, Users, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Footer } from './Footer';
const helpCategories = [
    {
        icon: FileText,
        title: "Getting Started",
        description: "Learn how to use Go Ride Pe",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: CreditCard,
        title: "Payments & Billing",
        description: "Payment methods and billing info",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: Shield,
        title: "Safety & Security",
        description: "Safety guidelines and security",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: Users,
        title: "Account & KYC",
        description: "Account management and verification",
        color: "bg-purple-100 text-purple-600"
    }
];
const faqs = [
    {
        question: "How do I sign up for Go Ride Pe?",
        answer: "To sign up, click on 'Sign Up' in the navigation, fill in your details, complete KYC verification, and choose a subscription plan."
    },
    {
        question: "What documents are required for KYC verification?",
        answer: "You need to upload Aadhar card (front & back), PAN card or Voter ID (front & back), and driving license (front & back) along with filling personal details."
    },
    {
        question: "How do I make payments?",
        answer: "After selecting a plan, scan the QR code on the payment page, make the payment via UPI, and upload the screenshot with UTR number for verification."
    },
    {
        question: "How long does KYC verification take?",
        answer: "KYC verification typically takes 24-48 hours. You'll receive an update in your dashboard once approved."
    },
    {
        question: "What types of vehicles are available?",
        answer: "We offer two types of light electric vehicles: Single seater and Double seater EVs for rent in Noida, Delhi & Gurgaon."
    },
    {
        question: "What are the subscription plans?",
        answer: "We offer daily (₹250), weekly, and monthly subscription plans. Choose the one that suits your needs best."
    },
    {
        question: "How do I get my vehicle after payment?",
        answer: "Once your payment is verified and approved by our admin team, you'll receive vehicle assignment details in your dashboard."
    },
    {
        question: "What if I face issues during the ride?",
        answer: "Contact our 24/7 support team through phone, email, or chat. Emergency support is always available."
    }
];
export function HelpCenterPage({ onNavigate, user }) {
    const [searchQuery, setSearchQuery] = React.useState("");
    const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=600&fit=crop')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white text-center max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl opacity-90 mb-8">
              Find answers to your questions and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
              <Input type="text" placeholder="Search for help..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 py-3 text-gray-900"/>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Help Categories */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How can we help you?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (<motion.div key={category.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-8 h-8"/>
                    </div>
                    <h3 className="font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                    <ChevronRight className="w-5 h-5 mx-auto mt-4 text-gray-400 group-hover:text-green-600 transition-colors"/>
                  </CardContent>
                </Card>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Need Immediate Assistance?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-600 text-sm mb-3">24/7 Support Available</p>
                  <Button variant="outline" size="sm">+91-XXXX-XXXXXX</Button>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-600 text-sm mb-3">Get detailed support</p>
                  <Button variant="outline" size="sm">support@gorideper.com</Button>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">Live Chat</h4>
                  <p className="text-gray-600 text-sm mb-3">Instant support</p>
                  <Button size="sm">Start Chat</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (<AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>))}
            </Accordion>
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quick Start Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                  <h4 className="font-semibold mb-2">Sign Up & KYC</h4>
                  <p className="text-gray-600 text-sm">Register and complete your verification</p>
                  <Button variant="outline" size="sm" className="mt-3" onClick={() => onNavigate('auth')}>
                    Sign Up Now
                  </Button>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                  <h4 className="font-semibold mb-2">Choose Plan</h4>
                  <p className="text-gray-600 text-sm">Select a subscription plan that fits your needs</p>
                  <Button variant="outline" size="sm" className="mt-3" onClick={() => onNavigate('pricing')}>
                    View Plans
                  </Button>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                  <h4 className="font-semibold mb-2">Start Riding</h4>
                  <p className="text-gray-600 text-sm">Get your vehicle and start your green journey</p>
                  <Button variant="outline" size="sm" className="mt-3" onClick={() => onNavigate('vehicles')}>
                    View Vehicles
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
