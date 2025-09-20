import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { Footer } from './Footer';
import { CreditCard, Receipt, Upload, CheckCircle, Clock, XCircle, Shield, Users, Zap, QrCode, Lock, Star, TrendingUp, Camera, AlertCircle } from 'lucide-react';
export function PaymentPage({ onNavigate, user, onUpdateUser }) {
    const [selectedPlan, setSelectedPlan] = useState('');
    const [paymentProof, setPaymentProof] = useState(null);
    const [utrNumber, setUtrNumber] = useState('');
    const [remarks, setRemarks] = useState('');
    const [showKYC, setShowKYC] = useState(false);
    const [paymentSubmitted, setPaymentSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const plans = [
        {
            id: 'daily',
            name: 'Daily Plan',
            price: '₹250',
            duration: '1 Day',
            description: 'Perfect for short-term needs',
            popular: false
        },
        {
            id: 'weekly',
            name: 'Weekly Plan',
            price: '₹1,500',
            duration: '7 Days',
            description: 'Great for weekly delivery jobs',
            popular: false
        },
        {
            id: 'monthly',
            name: 'Monthly Plan',
            price: '₹5,000',
            duration: '30 Days',
            description: 'Best value for regular riders',
            popular: true
        }
    ];
    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setPaymentProof(file);
        }
    };
    const handlePaymentSubmit = async () => {
        if (!selectedPlan || !paymentProof || !utrNumber) {
            alert('Please fill all payment details');
            return;
        }
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setPaymentSubmitted(true);
            // Update user subscription status
            if (user) {
                const updatedUser = {
                    ...user,
                    subscriptionStatus: 'active',
                    subscriptionPlan: selectedPlan,
                    subscriptionExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
                };
                onUpdateUser(updatedUser);
            }
        }, 2000);
    };
    const trustFeatures = [
        {
            icon: Shield,
            title: "Secure Payments",
            description: "Bank-grade security with encrypted transactions"
        },
        {
            icon: Users,
            title: "5000+ Riders",
            description: "Trusted by thousands of delivery partners"
        },
        {
            icon: Star,
            title: "4.8 Rating",
            description: "Highly rated by our community"
        },
        {
            icon: Lock,
            title: "Data Protected",
            description: "Your personal information is always safe"
        }
    ];
    const paymentSteps = [
        {
            step: 1,
            title: "Choose Plan",
            description: "Select a subscription plan",
            icon: CreditCard
        },
        {
            step: 2,
            title: "Scan QR Code",
            description: "Use any UPI app to scan and pay",
            icon: QrCode
        },
        {
            step: 3,
            title: "Upload Proof",
            description: "Submit screenshot and UTR number",
            icon: Upload
        },
        {
            step: 4,
            title: "Get Approved",
            description: "Admin verifies and approves payment",
            icon: CheckCircle
        }
    ];
    const renderPaymentStatus = () => {
        if (!user)
            return null;
        const getStatusIcon = (status) => {
            switch (status) {
                case 'approved':
                    return <CheckCircle className="w-5 h-5 text-green-500"/>;
                case 'pending':
                    return <Clock className="w-5 h-5 text-yellow-500"/>;
                case 'rejected':
                    return <XCircle className="w-5 h-5 text-red-500"/>;
                default:
                    return <Clock className="w-5 h-5 text-gray-500"/>;
            }
        };
        const getStatusColor = (status) => {
            switch (status) {
                case 'approved':
                    return 'bg-green-100 text-green-800';
                case 'pending':
                    return 'bg-yellow-100 text-yellow-800';
                case 'rejected':
                    return 'bg-red-100 text-red-800';
                default:
                    return 'bg-gray-100 text-gray-800';
            }
        };
        return (<Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="w-5 h-5"/>
            Current Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <span>KYC Status:</span>
              <div className="flex items-center gap-2">
                {getStatusIcon(user.kycStatus)}
                <Badge className={getStatusColor(user.kycStatus)}>
                  {user.kycStatus.charAt(0).toUpperCase() + user.kycStatus.slice(1)}
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Subscription:</span>
              <div className="flex items-center gap-2">
                {getStatusIcon(user.subscriptionStatus === 'active' ? 'approved' : 'pending')}
                <Badge className={getStatusColor(user.subscriptionStatus === 'active' ? 'approved' : 'pending')}>
                  {user.subscriptionStatus.charAt(0).toUpperCase() + user.subscriptionStatus.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>);
    };
    return (<div className="min-h-screen">
      {/* Enhanced Hero Banner */}
      <div className="relative h-96 bg-cover bg-center pt-16" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Secure Payment Portal</h1>
            <p className="text-xl opacity-90 mb-6">
              Simple, fast, and secure subscription payments for your EV rental journey
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5"/>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5"/>
                <span>Instant Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5"/>
                <span>5000+ Happy Riders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Trust Indicators */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (<div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6"/>
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>))}
          </div>
        </motion.div>

        {user && renderPaymentStatus()}

        {/* KYC Requirement Notice */}
        {user && user.kycStatus !== 'approved' && (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Alert className="mb-6 border-yellow-200 bg-yellow-50">
              <Shield className="h-4 w-4 text-yellow-600"/>
              <AlertDescription className="text-yellow-800">
                <strong>KYC Recommended:</strong> While you can make payments without KYC, we recommend completing verification for full access to all features.
                <Button onClick={() => onNavigate('kyc')} className="ml-4 bg-yellow-600 hover:bg-yellow-700" size="sm">
                  Complete KYC (Optional)
                </Button>
              </AlertDescription>
            </Alert>
          </motion.div>)}

        {/* Payment Instructions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">How to Make Payment</CardTitle>
              <CardDescription className="text-center">
                Follow these simple steps to complete your subscription payment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {paymentSteps.map((step, index) => (<div key={index} className="text-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-6 h-6"/>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Subscription Plans */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5"/>
                Choose Your Subscription Plan
              </CardTitle>
              <CardDescription>
                Select a plan that fits your riding needs and budget
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (<motion.div key={plan.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`relative border rounded-lg p-6 cursor-pointer transition-all ${selectedPlan === plan.id
                ? 'border-green-500 bg-green-50 shadow-lg'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'} ${plan.popular ? 'ring-2 ring-green-500 ring-opacity-50' : ''}`} onClick={() => setSelectedPlan(plan.id)}>
                    {plan.popular && (<Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                        Most Popular
                      </Badge>)}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-green-600 mb-2">{plan.price}</div>
                      <div className="text-sm text-gray-600 mb-4">{plan.duration}</div>
                      <p className="text-sm text-gray-700">{plan.description}</p>
                    </div>
                    {selectedPlan === plan.id && (<div className="absolute top-2 right-2">
                        <CheckCircle className="w-5 h-5 text-green-600"/>
                      </div>)}
                  </motion.div>))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Method - Updated to allow non-KYC users */}
        {selectedPlan && (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-5 h-5"/>
                  Complete Your Payment
                </CardTitle>
                <CardDescription>
                  Scan QR code with any UPI app and upload payment verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Company QR Scanner */}
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg border-2 border-dashed border-green-300 inline-block shadow-lg">
                      <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 border-2 border-green-200">
                        <div className="text-center">
                          <QrCode className="w-16 h-16 text-green-600 mx-auto mb-2"/>
                          <p className="text-sm font-medium text-green-800">Go Ride Pe Official</p>
                          <p className="text-xs text-green-600">Company QR Scanner</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="font-bold text-green-800 text-lg">
                        UPI ID: goridepe@paytm
                      </p>
                      <p className="text-sm text-gray-600">
                        Amount: {plans.find(p => p.id === selectedPlan)?.price}
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-green-800 mb-2">Payment Instructions:</h4>
                        <div className="text-xs text-green-700 space-y-1 text-left">
                          <p>✓ Open any UPI app (Paytm, PhonePe, GPay, BHIM)</p>
                          <p>✓ Scan the QR code above</p>
                          <p>✓ Enter the exact amount shown</p>
                          <p>✓ Complete the payment securely</p>
                          <p>✓ Take screenshot of confirmation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Verification Form */}
                  <div className="space-y-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Upload className="w-5 h-5"/>
                      Payment Verification Details
                    </h3>
                    
                    <div>
                      <Label htmlFor="utr">UTR/Transaction ID *</Label>
                      <Input id="utr" placeholder="e.g., 123456789012" value={utrNumber} onChange={(e) => setUtrNumber(e.target.value)} className="mt-1"/>
                      <p className="text-xs text-gray-500 mt-1">
                        12-digit transaction ID from your UPI app
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="proof">Payment Screenshot *</Label>
                      <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-300 transition-colors">
                        <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                        <input id="proof" type="file" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden"/>
                        <label htmlFor="proof" className="cursor-pointer">
                          <p className="text-sm text-gray-600">
                            {paymentProof ? paymentProof.name : 'Click to upload payment screenshot'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Upload payment confirmation screenshot (Max 5MB)
                          </p>
                        </label>
                        {paymentProof && (<CheckCircle className="w-5 h-5 text-green-500 mx-auto mt-2"/>)}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="remarks">Additional Notes (Optional)</Label>
                      <Textarea id="remarks" placeholder="Any special instructions or notes..." value={remarks} onChange={(e) => setRemarks(e.target.value)} rows={3} className="mt-1"/>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5"/>
                        <div className="text-sm text-blue-800">
                          <p className="font-semibold mb-1">Payment Verification Process:</p>
                          <p>Our admin team will verify your payment within 2-4 hours. You'll receive confirmation via email and SMS once approved.</p>
                        </div>
                      </div>
                    </div>

                    <Button onClick={handlePaymentSubmit} className="w-full bg-green-600 hover:bg-green-700 py-3" disabled={!selectedPlan || !paymentProof || !utrNumber || isSubmitting || paymentSubmitted}>
                      {isSubmitting ? 'Submitting Payment...' : paymentSubmitted ? 'Payment Submitted ✓' : 'Submit Payment for Verification'}
                    </Button>

                    {paymentSubmitted && (<Alert className="border-green-200 bg-green-50">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <AlertDescription className="text-green-800">
                          <strong>Payment Submitted Successfully!</strong><br />
                          Your payment is under review by our admin team. You'll receive confirmation within 2-4 hours.
                          {user && "Check your dashboard for status updates."}
                        </AlertDescription>
                      </Alert>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>)}

        {/* Trust & Security Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-center">Why Trust Go Ride Pe?</CardTitle>
              <CardDescription className="text-center">
                Your security and satisfaction are our top priorities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-green-600"/>
                  </div>
                  <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-gray-600">100% electric vehicles reducing carbon footprint</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600"/>
                  </div>
                  <h3 className="font-semibold mb-2">Best Rates</h3>
                  <p className="text-sm text-gray-600">Competitive pricing with transparent billing</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-purple-600"/>
                  </div>
                  <h3 className="font-semibold mb-2">Secure Payments</h3>
                  <p className="text-sm text-gray-600">Bank-grade security for all transactions</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-orange-600"/>
                  </div>
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-sm text-gray-600">Join 5000+ satisfied delivery partners</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
