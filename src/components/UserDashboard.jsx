import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Footer } from './Footer';
import { FileText, CreditCard, Calendar, Clock, MapPin, CheckCircle, XCircle, AlertCircle, History, Download, Eye, Banknote, Star, TrendingUp, Zap } from 'lucide-react';
export function UserDashboard({ user, onNavigate, onUpdateUser }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedPlan, setSelectedPlan] = useState('');
    const [paymentProof, setPaymentProof] = useState(null);
    const [utrNumber, setUtrNumber] = useState('');
    const [kycDocuments, setKycDocuments] = useState({});
    // Mock payment history data
    const paymentHistory = [
        {
            id: 'PAY001',
            date: '2024-01-15',
            plan: 'Monthly Plan',
            amount: '₹5,000',
            utrNumber: '123456789012',
            status: 'approved',
            paymentMethod: 'UPI'
        },
        {
            id: 'PAY002',
            date: '2024-01-10',
            plan: 'Weekly Plan',
            amount: '₹1,500',
            utrNumber: '987654321098',
            status: 'pending',
            paymentMethod: 'UPI'
        },
        {
            id: 'PAY003',
            date: '2024-01-05',
            plan: 'Daily Plan',
            amount: '₹250',
            utrNumber: '456789012345',
            status: 'approved',
            paymentMethod: 'UPI'
        }
    ];
    const handleKycSubmit = (kycData) => {
        const updatedUser = { ...user, kycStatus: 'pending' };
        onUpdateUser(updatedUser);
        alert('KYC submitted successfully! You will receive a confirmation PDF via email.');
    };
    const handlePaymentSubmission = () => {
        if (!selectedPlan || (!paymentProof && !utrNumber)) {
            alert('Please select a plan and provide payment proof');
            return;
        }
        alert('Payment proof submitted for verification. You will be notified once verified by our admin team.');
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved':
            case 'active':
                return <CheckCircle className="h-5 w-5 text-green-600"/>;
            case 'pending':
                return <AlertCircle className="h-5 w-5 text-yellow-600"/>;
            case 'rejected':
            case 'expired':
                return <XCircle className="h-5 w-5 text-red-600"/>;
            default:
                return <AlertCircle className="h-5 w-5 text-gray-400"/>;
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
            case 'active':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'rejected':
            case 'expired':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const completionProgress = () => {
        let completed = 0;
        let total = 2;
        if (user.kycStatus === 'approved')
            completed += 1;
        if (user.subscriptionStatus === 'active')
            completed += 1;
        return (completed / total) * 100;
    };
    return (<div className="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}! 👋</h1>
                <p className="text-gray-600 mt-2">Manage your EV rental journey with Go Ride Pe</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{Math.round(completionProgress())}%</div>
                <p className="text-sm text-gray-500">Profile Complete</p>
                <Progress value={completionProgress()} className="w-24 mt-2"/>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Status Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">KYC Status</p>
                  <div className="flex items-center mt-2">
                    <Badge className="bg-white text-green-800">
                      {user.kycStatus.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <FileText className="h-8 w-8 text-green-200"/>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Subscription</p>
                  <div className="flex items-center mt-2">
                    <Badge className="bg-white text-blue-800">
                      {user.subscriptionStatus.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <CreditCard className="h-8 w-8 text-blue-200"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Plan</p>
                  <p className="text-lg font-semibold mt-2">
                    {user.subscriptionPlan || 'No active plan'}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-gray-400"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Rides</p>
                  <p className="text-lg font-semibold mt-2">
                    {user.subscriptionStatus === 'active' ? '24' : '0'}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-gray-400"/>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6 bg-white">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="kyc">KYC Status</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="payments">Payment History</TabsTrigger>
              <TabsTrigger value="rides">My Rides</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Setup Progress</CardTitle>
                    <CardDescription>Complete these steps to start your EV journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user.kycStatus === 'approved' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          {user.kycStatus === 'approved' ?
            <CheckCircle className="h-5 w-5 text-green-600"/> :
            <AlertCircle className="h-5 w-5 text-yellow-600"/>}
                        </div>
                        <span className="ml-3">KYC Verification</span>
                      </div>
                      <Button size="sm" variant={user.kycStatus === 'approved' ? 'outline' : 'default'} onClick={() => onNavigate('kyc')}>
                        {user.kycStatus === 'approved' ? 'View' : 'Complete'}
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user.subscriptionStatus === 'active' ? 'bg-green-100' : 'bg-gray-100'}`}>
                          {user.subscriptionStatus === 'active' ?
            <CheckCircle className="h-5 w-5 text-green-600"/> :
            <AlertCircle className="h-5 w-5 text-gray-400"/>}
                        </div>
                        <span className="ml-3">Active Subscription</span>
                      </div>
                      <Button size="sm" variant={user.subscriptionStatus === 'active' ? 'outline' : 'default'} onClick={() => onNavigate('payment')}>
                        {user.subscriptionStatus === 'active' ? 'Manage' : 'Subscribe'}
                      </Button>
                    </div>

                    {user.kycStatus === 'approved' && user.subscriptionStatus === 'active' && (<Alert className="border-green-200 bg-green-50">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <AlertDescription className="text-green-700">
                          🎉 You're all set! Start exploring available vehicles and book your first ride.
                        </AlertDescription>
                      </Alert>)}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Get things done faster</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {user.kycStatus !== 'approved' && (<Button className="w-full justify-start bg-gradient-to-r from-green-600 to-green-700 text-white" onClick={() => onNavigate('kyc')}>
                        <FileText className="mr-2 h-4 w-4"/>
                        Complete KYC Verification
                      </Button>)}
                    
                    {user.subscriptionStatus !== 'active' && (<Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-700 text-white" onClick={() => onNavigate('payment')}>
                        <CreditCard className="mr-2 h-4 w-4"/>
                        Get Subscription
                      </Button>)}
                    
                    <Button className="w-full justify-start" variant="outline" onClick={() => onNavigate('vehicles')}>
                      <Zap className="mr-2 h-4 w-4"/>
                      View Available Vehicles
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('payments')}>
                      <History className="mr-2 h-4 w-4"/>
                      View Payment History
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Stats Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6 text-center">
                    <Zap className="h-12 w-12 text-green-600 mx-auto mb-3"/>
                    <h3 className="font-semibold text-green-800">Eco Impact</h3>
                    <p className="text-2xl font-bold text-green-600 mt-2">2.5 kg</p>
                    <p className="text-sm text-green-700">CO2 Saved</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3"/>
                    <h3 className="font-semibold text-blue-800">Total Distance</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">
                      {user.subscriptionStatus === 'active' ? '156 km' : '0 km'}
                    </p>
                    <p className="text-sm text-blue-700">This Month</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-purple-600 mx-auto mb-3"/>
                    <h3 className="font-semibold text-purple-800">Rider Rating</h3>
                    <p className="text-2xl font-bold text-purple-600 mt-2">
                      {user.subscriptionStatus === 'active' ? '4.8' : '--'}
                    </p>
                    <p className="text-sm text-purple-700">Out of 5</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="kyc" className="space-y-6">
              {user.kycStatus === 'approved' ? (<Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <CheckCircle className="h-6 w-6 mr-3"/>
                      KYC Verification Complete ✅
                    </CardTitle>
                    <CardDescription className="text-green-700">
                      Your identity verification has been successfully completed and approved.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between bg-white rounded-lg p-4">
                      <div>
                        <p className="font-semibold">KYC Documents</p>
                        <p className="text-sm text-gray-600">View your verified documents</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2"/>
                        View PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>) : user.kycStatus === 'pending' ? (<Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-800">
                      <Clock className="h-6 w-6 mr-3"/>
                      KYC Under Review ⏳
                    </CardTitle>
                    <CardDescription className="text-yellow-700">
                      Your documents are being reviewed by our verification team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert className="border-yellow-200 bg-white">
                      <AlertCircle className="h-4 w-4 text-yellow-600"/>
                      <AlertDescription className="text-yellow-800">
                        <strong>Review in Progress:</strong> We'll notify you within 24-48 hours via email and SMS once the verification is complete.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>) : (<Card>
                  <CardHeader>
                    <CardTitle>Complete KYC Verification</CardTitle>
                    <CardDescription>
                      Upload your documents to verify your identity and start riding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert className="mb-4">
                      <AlertCircle className="h-4 w-4"/>
                      <AlertDescription>
                        Please complete your KYC verification to access subscription plans and start riding.
                      </AlertDescription>
                    </Alert>
                    <Button onClick={() => onNavigate('kyc')} className="w-full">
                      <FileText className="w-4 h-4 mr-2"/>
                      Start KYC Verification
                    </Button>
                  </CardContent>
                </Card>)}
            </TabsContent>

            <TabsContent value="subscription" className="space-y-6">
              {/* Current subscription info and renewal options */}
              {/* ... existing subscription content ... */}
            </TabsContent>

            <TabsContent value="payments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Banknote className="h-6 w-6 mr-3"/>
                    Payment History
                  </CardTitle>
                  <CardDescription>
                    Track all your subscription payments and transaction history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {paymentHistory.length === 0 ? (<div className="text-center py-8">
                      <Banknote className="mx-auto h-12 w-12 text-gray-400 mb-4"/>
                      <p className="text-gray-500 mb-4">No payments made yet</p>
                      <Button onClick={() => onNavigate('payment')}>
                        Make Your First Payment
                      </Button>
                    </div>) : (<div className="space-y-4">
                      {paymentHistory.map((payment) => (<Card key={payment.id} className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-4">
                                <Badge className={getStatusColor(payment.status)}>
                                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                </Badge>
                                <span className="text-sm text-gray-600">#{payment.id}</span>
                                <span className="text-sm text-gray-500">{payment.date}</span>
                              </div>
                              <div>
                                <p className="font-semibold">{payment.plan}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span>UTR: {payment.utrNumber}</span>
                                  <span>Method: {payment.paymentMethod}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right space-y-2">
                              <div className="text-xl font-bold text-green-600">
                                {payment.amount}
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-2"/>
                                Receipt
                              </Button>
                            </div>
                          </div>
                        </Card>))}
                    </div>)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rides" className="space-y-6">
              {/* Enhanced ride history with better visuals */}
              {/* ... existing rides content with improvements ... */}
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              {/* Enhanced profile management */}
              {/* ... existing profile content ... */}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
