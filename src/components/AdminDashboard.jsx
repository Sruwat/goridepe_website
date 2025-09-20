import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Users, FileText, CreditCard, CheckCircle, XCircle, AlertCircle, Eye, Search, Download, Image, X, ShoppingCart, Bike } from 'lucide-react';
// Enhanced mock data with complete user details
const mockUsers = [
    {
        id: '1',
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        phone: '+91 9876543210',
        address: 'Sector 18, Noida, UP - 201301',
        kycStatus: 'pending',
        subscriptionStatus: 'active',
        subscriptionPlan: 'Monthly Plan',
        subscriptionExpiry: '2024-02-15',
        planAmount: '₹5,000',
        paymentDate: '2024-01-15',
        joinDate: '2024-01-10',
        status: 'active',
        kycDocuments: {
            aadhaar: 'https://images.unsplash.com/photo-1551803091-e20673f15e9d?w=400&h=300&fit=crop',
            pan: 'https://images.unsplash.com/photo-1520685803027-80c39e5d6adf?w=400&h=300&fit=crop',
            drivingLicense: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop'
        },
        paymentScreenshot: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop',
        utrNumber: 'UPI123456789012'
    },
    {
        id: '2',
        name: 'Priya Singh',
        email: 'priya@example.com',
        phone: '+91 9876543211',
        address: 'Connaught Place, Delhi - 110001',
        kycStatus: 'approved',
        subscriptionStatus: 'active',
        subscriptionPlan: 'Weekly Plan',
        subscriptionExpiry: '2024-01-28',
        planAmount: '₹1,500',
        paymentDate: '2024-01-21',
        joinDate: '2024-01-08',
        status: 'active',
        kycDocuments: {
            aadhaar: 'https://images.unsplash.com/photo-1551803091-e20673f15e9d?w=400&h=300&fit=crop',
            pan: 'https://images.unsplash.com/photo-1520685803027-80c39e5d6adf?w=400&h=300&fit=crop',
            drivingLicense: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop'
        },
        paymentScreenshot: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop',
        utrNumber: 'UPI987654321098'
    },
    {
        id: '3',
        name: 'Amit Kumar',
        email: 'amit@example.com',
        phone: '+91 9876543212',
        address: 'Cyber City, Gurgaon - 122002',
        kycStatus: 'rejected',
        subscriptionStatus: 'none',
        subscriptionPlan: null,
        subscriptionExpiry: null,
        planAmount: null,
        paymentDate: null,
        joinDate: '2024-01-12',
        status: 'blocked',
        kycDocuments: {
            aadhaar: 'https://images.unsplash.com/photo-1551803091-e20673f15e9d?w=400&h=300&fit=crop',
            pan: null,
            drivingLicense: null
        },
        paymentScreenshot: null,
        utrNumber: null
    }
];
// Vehicle buyers data
const mockBuyers = [
    {
        id: 'B001',
        name: 'Rohit Verma',
        email: 'rohit@example.com',
        mobile: '+91 9876543213',
        state: 'Delhi',
        city: 'Delhi',
        dealerHub: 'Connaught Place',
        vehicleModel: 'Winner Pro',
        vehiclePrice: '₹72,000',
        paymentType: 'booking',
        bookingAmount: '₹5,000',
        paymentStatus: 'pending',
        submittedDate: '2024-01-16',
        referralCode: 'REF123',
        paymentScreenshot: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop',
        utrNumber: 'UPI555666777888'
    },
    {
        id: 'B002',
        name: 'Sneha Patel',
        email: 'sneha@example.com',
        mobile: '+91 9876543214',
        state: 'Haryana',
        city: 'Gurgaon',
        dealerHub: 'Cyber City',
        vehicleModel: 'Prince HS',
        vehiclePrice: '₹95,000',
        paymentType: 'full',
        bookingAmount: '₹95,000',
        paymentStatus: 'verified',
        submittedDate: '2024-01-14',
        referralCode: null,
        paymentScreenshot: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop',
        utrNumber: 'UPI888999111222'
    }
];
export function AdminDashboard({ user, onNavigate }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedBuyer, setSelectedBuyer] = useState(null);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showBuyerModal, setBuyerModal] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved':
            case 'active':
            case 'verified':
                return <CheckCircle className="h-4 w-4 text-green-600"/>;
            case 'pending':
                return <AlertCircle className="h-4 w-4 text-yellow-600"/>;
            case 'rejected':
            case 'blocked':
                return <XCircle className="h-4 w-4 text-red-600"/>;
            default:
                return <AlertCircle className="h-4 w-4 text-gray-400"/>;
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
            case 'active':
            case 'verified':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'rejected':
            case 'blocked':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const handleViewUser = (userData) => {
        setSelectedUser(userData);
        setShowUserModal(true);
    };
    const handleViewBuyer = (buyerData) => {
        setSelectedBuyer(buyerData);
        setBuyerModal(true);
    };
    const handleImageView = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowImageModal(true);
    };
    const handleKycAction = (userId, action) => {
        alert(`KYC ${action === 'approve' ? 'approved' : 'rejected'} for user ID: ${userId}`);
        setShowUserModal(false);
    };
    const handlePaymentAction = (userId, action) => {
        alert(`Payment ${action === 'verify' ? 'verified' : 'rejected'} for user ID: ${userId}`);
        setShowUserModal(false);
    };
    const handleBuyerAction = (buyerId, action) => {
        alert(`Vehicle booking ${action === 'approve' ? 'approved' : 'rejected'} for buyer ID: ${buyerId}`);
        setBuyerModal(false);
    };
    return (<div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users, verifications, payments, and vehicle bookings</p>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{mockUsers.length}</p>
                  <p className="text-xs text-green-600">+12% this month</p>
                </div>
                <Users className="h-8 w-8 text-blue-600"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending KYCs</p>
                  <p className="text-2xl font-bold text-gray-900">{mockUsers.filter(u => u.kycStatus === 'pending').length}</p>
                  <p className="text-xs text-yellow-600">Needs attention</p>
                </div>
                <FileText className="h-8 w-8 text-yellow-600"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Subscriptions</p>
                  <p className="text-2xl font-bold text-gray-900">{mockUsers.filter(u => u.subscriptionStatus === 'active').length}</p>
                  <p className="text-xs text-green-600">Revenue generating</p>
                </div>
                <CreditCard className="h-8 w-8 text-green-600"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Vehicle Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">{mockBuyers.length}</p>
                  <p className="text-xs text-blue-600">Purchase orders</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-blue-600"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Fleet Size</p>
                  <p className="text-2xl font-bold text-gray-900">485</p>
                  <p className="text-xs text-green-600">97% operational</p>
                </div>
                <Bike className="h-8 w-8 text-green-600"/>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="kyc">KYC Verification</TabsTrigger>
            <TabsTrigger value="payments">Payment Verification</TabsTrigger>
            <TabsTrigger value="buyers">Vehicle Buyers</TabsTrigger>
            <TabsTrigger value="fleet">Fleet Management</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest user actions and system events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
            { action: 'New vehicle booking', user: 'Rohit Verma', time: '2 minutes ago', type: 'booking' },
            { action: 'KYC document uploaded', user: 'Ravi Kumar', time: '15 minutes ago', type: 'kyc' },
            { action: 'Payment verification completed', user: 'Priya Singh', time: '30 minutes ago', type: 'payment' },
            { action: 'Subscription renewed', user: 'Rohit Sharma', time: '1 hour ago', type: 'subscription' },
            { action: 'New user registration', user: 'Neha Patel', time: '2 hours ago', type: 'registration' }
        ].map((activity, index) => (<div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          {activity.type === 'booking' && <ShoppingCart className="w-4 h-4 text-blue-600"/>}
                          {activity.type === 'kyc' && <FileText className="w-4 h-4 text-yellow-600"/>}
                          {activity.type === 'payment' && <CreditCard className="w-4 h-4 text-green-600"/>}
                          {activity.type === 'subscription' && <CheckCircle className="w-4 h-4 text-green-600"/>}
                          {activity.type === 'registration' && <Users className="w-4 h-4 text-blue-600"/>}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-600">{activity.user}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('kyc')}>
                    <FileText className="mr-2 h-4 w-4"/>
                    Review Pending KYCs ({mockUsers.filter(u => u.kycStatus === 'pending').length})
                  </Button>
                  
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('payments')}>
                    <CreditCard className="mr-2 h-4 w-4"/>
                    Verify Payments ({mockUsers.filter(u => u.subscriptionStatus === 'active').length})
                  </Button>
                  
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('buyers')}>
                    <ShoppingCart className="mr-2 h-4 w-4"/>
                    Vehicle Bookings ({mockBuyers.length})
                  </Button>
                  
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('users')}>
                    <Users className="mr-2 h-4 w-4"/>
                    User Management
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Enhanced Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage all registered users with complete details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
                      <Input placeholder="Search users..." className="pl-10 w-64" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4"/>
                    Export
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User Details</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>KYC Status</TableHead>
                      <TableHead>Subscription</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((userData) => (<TableRow key={userData.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{userData.name}</div>
                            <div className="text-sm text-gray-500">{userData.email}</div>
                            <div className="text-xs text-gray-400">ID: {userData.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="text-sm">{userData.phone}</div>
                            <div className="text-xs text-gray-500">{userData.address}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(userData.kycStatus)}>
                            {userData.kycStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div>
                            <Badge className={getStatusColor(userData.subscriptionStatus)}>
                              {userData.subscriptionStatus}
                            </Badge>
                            {userData.subscriptionPlan && (<div className="text-xs text-gray-500 mt-1">
                                {userData.subscriptionPlan}
                              </div>)}
                          </div>
                        </TableCell>
                        <TableCell>{userData.joinDate}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleViewUser(userData)}>
                            <Eye className="h-4 w-4 mr-1"/>
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* KYC Verification Tab */}
          <TabsContent value="kyc" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>KYC Verification Queue</CardTitle>
                <CardDescription>Review and approve user KYC submissions with document verification</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Submitted Date</TableHead>
                      <TableHead>Documents</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.filter(user => user.kycStatus === 'pending').map((userData) => (<TableRow key={userData.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{userData.name}</div>
                            <div className="text-sm text-gray-500">{userData.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{userData.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {userData.kycDocuments.aadhaar && <Badge variant="outline">Aadhaar</Badge>}
                            {userData.kycDocuments.pan && <Badge variant="outline">PAN</Badge>}
                            {userData.kycDocuments.drivingLicense && <Badge variant="outline">DL</Badge>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(userData.kycStatus)}>
                            {userData.kycStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleViewUser(userData)}>
                            <Eye className="h-4 w-4 mr-1"/>
                            Review KYC
                          </Button>
                        </TableCell>
                      </TableRow>))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Verification Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Verification</CardTitle>
                <CardDescription>Review and verify user payment submissions with screenshots</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Plan & Amount</TableHead>
                      <TableHead>UTR Number</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.filter(user => user.subscriptionStatus === 'active').map((userData) => (<TableRow key={userData.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{userData.name}</div>
                            <div className="text-sm text-gray-500">{userData.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{userData.subscriptionPlan}</div>
                            <div className="text-sm text-green-600">{userData.planAmount}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{userData.utrNumber}</TableCell>
                        <TableCell>{userData.paymentDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor('verified')}>
                            Verified
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleViewUser(userData)}>
                            <Eye className="h-4 w-4 mr-1"/>
                            View Payment
                          </Button>
                        </TableCell>
                      </TableRow>))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vehicle Buyers Tab */}
          <TabsContent value="buyers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Buyer Management</CardTitle>
                <CardDescription>Manage vehicle purchase bookings and customer details</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Vehicle Details</TableHead>
                      <TableHead>Payment Info</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockBuyers.map((buyer) => (<TableRow key={buyer.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{buyer.name}</div>
                            <div className="text-sm text-gray-500">{buyer.email}</div>
                            <div className="text-xs text-gray-400">{buyer.mobile}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{buyer.vehicleModel}</div>
                            <div className="text-sm text-green-600">{buyer.vehiclePrice}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="text-sm">
                              {buyer.paymentType === 'full' ? 'Full Payment' : 'Booking Amount'}
                            </div>
                            <div className="font-medium">{buyer.bookingAmount}</div>
                            <div className="text-xs text-gray-500">{buyer.utrNumber}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="text-sm">{buyer.city}, {buyer.state}</div>
                            <div className="text-xs text-gray-500">{buyer.dealerHub}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(buyer.paymentStatus)}>
                            {buyer.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleViewBuyer(buyer)}>
                            <Eye className="h-4 w-4 mr-1"/>
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fleet" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fleet Management</CardTitle>
                <CardDescription>Monitor and manage vehicle fleet status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Fleet management interface coming soon...
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* User Details Modal */}
        {showUserModal && selectedUser && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">User Details - {selectedUser.name}</h2>
                  <Button variant="ghost" onClick={() => setShowUserModal(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-5 h-5"/>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5"/>
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Name</Label>
                          <p className="text-sm">{selectedUser.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Email</Label>
                          <p className="text-sm">{selectedUser.email}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Phone</Label>
                          <p className="text-sm">{selectedUser.phone}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Join Date</Label>
                          <p className="text-sm">{selectedUser.joinDate}</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Address</Label>
                        <p className="text-sm">{selectedUser.address}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Subscription Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5"/>
                        Subscription Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Status</Label>
                          <Badge className={getStatusColor(selectedUser.subscriptionStatus)}>
                            {selectedUser.subscriptionStatus}
                          </Badge>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Plan</Label>
                          <p className="text-sm">{selectedUser.subscriptionPlan || 'None'}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Amount</Label>
                          <p className="text-sm font-medium text-green-600">{selectedUser.planAmount || 'N/A'}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Expires</Label>
                          <p className="text-sm">{selectedUser.subscriptionExpiry || 'N/A'}</p>
                        </div>
                      </div>
                      {selectedUser.utrNumber && (<div>
                          <Label className="text-sm font-medium text-gray-600">UTR Number</Label>
                          <p className="text-sm font-mono">{selectedUser.utrNumber}</p>
                        </div>)}
                    </CardContent>
                  </Card>
                </div>

                {/* KYC Documents */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5"/>
                      KYC Documents
                      <Badge className={getStatusColor(selectedUser.kycStatus)}>
                        {selectedUser.kycStatus}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedUser.kycDocuments.aadhaar && (<div className="text-center">
                          <Label className="text-sm font-medium">Aadhaar Card</Label>
                          <div className="mt-2 border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleImageView(selectedUser.kycDocuments.aadhaar)}>
                            <img src={selectedUser.kycDocuments.aadhaar} alt="Aadhaar" className="w-full h-32 object-cover"/>
                          </div>
                        </div>)}
                      {selectedUser.kycDocuments.pan && (<div className="text-center">
                          <Label className="text-sm font-medium">PAN Card</Label>
                          <div className="mt-2 border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleImageView(selectedUser.kycDocuments.pan)}>
                            <img src={selectedUser.kycDocuments.pan} alt="PAN" className="w-full h-32 object-cover"/>
                          </div>
                        </div>)}
                      {selectedUser.kycDocuments.drivingLicense && (<div className="text-center">
                          <Label className="text-sm font-medium">Driving License</Label>
                          <div className="mt-2 border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleImageView(selectedUser.kycDocuments.drivingLicense)}>
                            <img src={selectedUser.kycDocuments.drivingLicense} alt="Driving License" className="w-full h-32 object-cover"/>
                          </div>
                        </div>)}
                    </div>

                    {selectedUser.kycStatus === 'pending' && (<div className="flex gap-4 mt-6">
                        <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleKycAction(selectedUser.id, 'approve')}>
                          <CheckCircle className="w-4 h-4 mr-2"/>
                          Approve KYC
                        </Button>
                        <Button variant="outline" onClick={() => handleKycAction(selectedUser.id, 'reject')}>
                          <XCircle className="w-4 h-4 mr-2"/>
                          Reject KYC
                        </Button>
                      </div>)}
                  </CardContent>
                </Card>

                {/* Payment Screenshot */}
                {selectedUser.paymentScreenshot && (<Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Image className="w-5 h-5"/>
                        Payment Screenshot
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 items-start">
                        <div>
                          <div className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleImageView(selectedUser.paymentScreenshot)}>
                            <img src={selectedUser.paymentScreenshot} alt="Payment Screenshot" className="w-full h-48 object-cover"/>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium text-gray-600">UTR Number</Label>
                            <p className="text-sm font-mono">{selectedUser.utrNumber}</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-600">Amount</Label>
                            <p className="text-sm font-medium text-green-600">{selectedUser.planAmount}</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-600">Payment Date</Label>
                            <p className="text-sm">{selectedUser.paymentDate}</p>
                          </div>
                          
                          {selectedUser.subscriptionStatus === 'active' && (<div className="flex gap-2">
                              <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handlePaymentAction(selectedUser.id, 'verify')}>
                                Verify Payment
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handlePaymentAction(selectedUser.id, 'reject')}>
                                Reject Payment
                              </Button>
                            </div>)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </motion.div>
          </div>)}

        {/* Buyer Details Modal */}
        {showBuyerModal && selectedBuyer && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Vehicle Booking Details - {selectedBuyer.name}</h2>
                  <Button variant="ghost" onClick={() => setBuyerModal(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-5 h-5"/>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Customer Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5"/>
                        Customer Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Name</Label>
                          <p className="text-sm">{selectedBuyer.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Email</Label>
                          <p className="text-sm">{selectedBuyer.email}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Mobile</Label>
                          <p className="text-sm">{selectedBuyer.mobile}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Submitted Date</Label>
                          <p className="text-sm">{selectedBuyer.submittedDate}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">State</Label>
                          <p className="text-sm">{selectedBuyer.state}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">City</Label>
                          <p className="text-sm">{selectedBuyer.city}</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Dealer Hub</Label>
                        <p className="text-sm">{selectedBuyer.dealerHub}</p>
                      </div>
                      {selectedBuyer.referralCode && (<div>
                          <Label className="text-sm font-medium text-gray-600">Referral Code</Label>
                          <p className="text-sm">{selectedBuyer.referralCode}</p>
                        </div>)}
                    </CardContent>
                  </Card>

                  {/* Vehicle & Payment Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5"/>
                        Vehicle & Payment Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Vehicle Model</Label>
                          <p className="text-sm font-medium">{selectedBuyer.vehicleModel}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Vehicle Price</Label>
                          <p className="text-sm font-medium text-green-600">{selectedBuyer.vehiclePrice}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Payment Type</Label>
                          <p className="text-sm capitalize">{selectedBuyer.paymentType} Payment</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Amount Paid</Label>
                          <p className="text-sm font-medium text-green-600">{selectedBuyer.bookingAmount}</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">UTR Number</Label>
                        <p className="text-sm font-mono">{selectedBuyer.utrNumber}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Payment Status</Label>
                        <Badge className={getStatusColor(selectedBuyer.paymentStatus)}>
                          {selectedBuyer.paymentStatus}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Payment Screenshot */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="w-5 h-5"/>
                      Payment Screenshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 items-start">
                      <div>
                        <div className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleImageView(selectedBuyer.paymentScreenshot)}>
                          <img src={selectedBuyer.paymentScreenshot} alt="Payment Screenshot" className="w-full h-48 object-cover"/>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">UTR Number</Label>
                          <p className="text-sm font-mono">{selectedBuyer.utrNumber}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Amount</Label>
                          <p className="text-sm font-medium text-green-600">{selectedBuyer.bookingAmount}</p>
                        </div>
                        
                        {selectedBuyer.paymentStatus === 'pending' && (<div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleBuyerAction(selectedBuyer.id, 'approve')}>
                              <CheckCircle className="w-4 h-4 mr-2"/>
                              Approve Booking
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleBuyerAction(selectedBuyer.id, 'reject')}>
                              <XCircle className="w-4 h-4 mr-2"/>
                              Reject Booking
                            </Button>
                          </div>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>)}

        {/* Image Viewer Modal */}
        {showImageModal && (<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-4xl max-h-[90vh] w-full">
              <Button variant="ghost" onClick={() => setShowImageModal(false)} className="absolute -top-12 right-0 text-white hover:text-gray-300">
                <X className="w-6 h-6"/>
              </Button>
              <img src={selectedImage} alt="Document" className="w-full h-full object-contain rounded-lg"/>
            </motion.div>
          </div>)}
      </div>
    </div>);
}
