import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Footer } from './Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Users, HelpCircle, Shield } from 'lucide-react';
export function ContactPage({ onNavigate, user }) {
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 2000);
    };
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    if (submitted) {
        return (<div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6"/>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
              <Button onClick={() => onNavigate('home')}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>);
    }
    return (<div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1707960190026-13ae2fc72106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBjb250YWN0JTIwZ3JlZW4lMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzU4MDE2MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl mb-8 opacity-90">
            Have questions? Need help? Want to partner with us? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-lime-400 mr-2"/>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 text-lime-400 mr-2"/>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-lime-400 mr-2"/>
              <span>Dedicated Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 text-lime-600 mr-2"/>
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Customer Support</p>
                      <p className="text-gray-600">+91 7276872285</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Emergency Helpline</p>
                      <p className="text-gray-600">+91 7276872285</p>
                      <p className="text-sm text-gray-500">For ride emergencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 text-lime-600 mr-2"/>
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">General Inquiries</p>
                      <p className="text-gray-600">hello@goridpe.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Technical Support</p>
                      <p className="text-gray-600">support@goridpe.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Partnerships</p>
                      <p className="text-gray-600">partners@goridpe.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-lime-600 mr-2"/>
                    Office Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Headquarters</p>
                      <p className="text-gray-600">
                        SK - 67, Sector 112<br />
                        Noida, Uttar Pradesh 201301
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required/>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)}/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <select id="category" value={formData.category} onChange={(e) => handleInputChange('category', e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" required>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing & Payments</option>
                          <option value="safety">Safety Concerns</option>
                          <option value="partnership">Business Partnership</option>
                          <option value="feedback">Feedback & Suggestions</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief description of your inquiry" value={formData.subject} onChange={(e) => handleInputChange('subject', e.target.value)} required/>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={6} value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} required/>
                    </div>

                    <Alert>
                      <Shield className="h-4 w-4"/>
                      <AlertDescription>
                        Your privacy is important to us. All information submitted through this form 
                        is encrypted and handled according to our privacy policy.
                      </AlertDescription>
                    </Alert>

                    <Button type="submit" className="w-full bg-lime-600 hover:bg-lime-700 py-3" disabled={isSubmitting}>
                      {isSubmitting ? (<>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>) : (<>
                          Send Message
                          <Send className="ml-2 h-4 w-4"/>
                        </>)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
            <Button variant="outline" className="mt-4" onClick={() => onNavigate('help')}>
              <HelpCircle className="mr-2 h-4 w-4"/>
              Visit Help Center
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
                question: "How do I book a ride?",
                answer: "After completing KYC and purchasing a subscription, you can book rides through your dashboard by selecting available vehicles."
            },
            {
                question: "What documents do I need for KYC?",
                answer: "You need Aadhaar card (front & back), address proof (Voter ID/PAN), and a recent photograph."
            },
            {
                question: "How long does KYC verification take?",
                answer: "KYC verification typically takes 24-48 hours. You'll receive email and SMS notifications once approved."
            },
            {
                question: "What if I face issues during a ride?",
                answer: "Contact our 24/7 emergency helpline at +91 9876543211 for immediate assistance during rides."
            },
            {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel your subscription at any time. Refunds are processed according to our refund policy."
            },
            {
                question: "Are the vehicles safe to ride?",
                answer: "All our vehicles undergo regular maintenance and safety checks. We also provide ISI certified helmets with every ride."
            }
        ].map((faq, index) => (<Card key={index} className="border-l-4 border-l-lime-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-y-2 border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Phone className="h-8 w-8 text-red-600"/>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contact</h2>
          <p className="text-lg text-gray-600 mb-6">
            For ride emergencies or urgent safety concerns, contact our 24/7 helpline immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-5 w-5"/>
              Emergency: +91 7276872285
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <MessageCircle className="mr-2 h-5 w-5"/>
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
