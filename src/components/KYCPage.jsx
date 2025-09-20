import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Check, AlertCircle, User, CreditCard, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Footer } from './Footer';
export function KYCPage({ onNavigate, user, onUpdateUser }) {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        aadharNumber: '',
        drivingLicenseNumber: '',
        documents: {
            aadharFront: null,
            aadharBack: null,
            panFront: null,
            panBack: null,
            drivingLicenseFront: null,
            drivingLicenseBack: null,
        }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    if (!user) {
        return (<div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Please Login First</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to access KYC verification</p>
          <Button onClick={() => onNavigate('auth')}>Login</Button>
        </div>
      </div>);
    }
    const handleFileUpload = (documentType, file) => {
        setFormData(prev => ({
            ...prev,
            documents: {
                ...prev.documents,
                [documentType]: file
            }
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            // Update user KYC status to pending
            const updatedUser = { ...user, kycStatus: 'pending' };
            onUpdateUser(updatedUser);
            // Simulate document processing
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 3000);
        }, 2000);
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    const documentRequirements = [
        { name: 'Aadhar Card', description: 'Front and back photos', required: true },
        { name: 'PAN Card / Voter ID', description: 'Front and back photos', required: true },
        { name: 'Driving License', description: 'Front and back photos', required: true }
    ];
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center pt-16" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=600&fit=crop')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">KYC Verification</h1>
            <p className="text-xl opacity-90">
              Complete your Know Your Customer verification to start riding with Go Ride Pe
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Current Status */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600"/>
                  </div>
                  <div>
                    <h3 className="font-semibold">KYC Status</h3>
                    <p className="text-gray-600">Current verification status</p>
                  </div>
                </div>
                <Badge className={getStatusColor(user.kycStatus)}>
                  {user.kycStatus.charAt(0).toUpperCase() + user.kycStatus.slice(1)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {submitSuccess && (<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Alert className="border-green-200 bg-green-50">
              <Check className="h-4 w-4 text-green-600"/>
              <AlertDescription className="text-green-800">
                KYC documents submitted successfully! We'll review your documents within 24-48 hours.
              </AlertDescription>
            </Alert>
          </motion.div>)}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Requirements */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600"/>
                  Document Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {documentRequirements.map((req, index) => (<div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"/>
                    <div>
                      <p className="font-medium">{req.name}</p>
                      <p className="text-sm text-gray-600">{req.description}</p>
                    </div>
                  </div>))}
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• All photos should be clear and readable</li>
                    <li>• File size should be less than 5MB</li>
                    <li>• Accepted formats: JPG, PNG, PDF</li>
                    <li>• Documents should be valid and not expired</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* KYC Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information & Document Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" value={formData.fullName} onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))} placeholder="Enter your full name" required/>
                    </div>
                    <div>
                      <Label htmlFor="phoneNumber">Phone Number *</Label>
                      <Input id="phoneNumber" value={formData.phoneNumber} onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))} placeholder="+91-XXXXX-XXXXX" required/>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea id="address" value={formData.address} onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))} placeholder="Enter your complete address" required/>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                      <Input id="aadharNumber" value={formData.aadharNumber} onChange={(e) => setFormData(prev => ({ ...prev, aadharNumber: e.target.value }))} placeholder="XXXX-XXXX-XXXX" required/>
                    </div>
                    <div>
                      <Label htmlFor="drivingLicenseNumber">Driving License Number *</Label>
                      <Input id="drivingLicenseNumber" value={formData.drivingLicenseNumber} onChange={(e) => setFormData(prev => ({ ...prev, drivingLicenseNumber: e.target.value }))} placeholder="DL-XXXXXXXXXX" required/>
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Document Uploads</h3>
                    
                    {/* Aadhar Card */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CreditCard className="w-4 h-4"/>
                        Aadhar Card
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Front Side *</Label>
                          <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                            <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload('aadharFront', e.target.files?.[0] || null)} className="hidden" id="aadhar-front"/>
                            <label htmlFor="aadhar-front" className="cursor-pointer">
                              <p className="text-sm text-gray-600">Click to upload</p>
                              {formData.documents.aadharFront && (<p className="text-xs text-green-600 mt-1">
                                  {formData.documents.aadharFront.name}
                                </p>)}
                            </label>
                          </div>
                        </div>
                        <div>
                          <Label>Back Side *</Label>
                          <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                            <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload('aadharBack', e.target.files?.[0] || null)} className="hidden" id="aadhar-back"/>
                            <label htmlFor="aadhar-back" className="cursor-pointer">
                              <p className="text-sm text-gray-600">Click to upload</p>
                              {formData.documents.aadharBack && (<p className="text-xs text-green-600 mt-1">
                                  {formData.documents.aadharBack.name}
                                </p>)}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PAN Card / Voter ID */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CreditCard className="w-4 h-4"/>
                        PAN Card / Voter ID
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Front Side *</Label>
                          <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                            <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload('panFront', e.target.files?.[0] || null)} className="hidden" id="pan-front"/>
                            <label htmlFor="pan-front" className="cursor-pointer">
                              <p className="text-sm text-gray-600">Click to upload</p>
                              {formData.documents.panFront && (<p className="text-xs text-green-600 mt-1">
                                  {formData.documents.panFront.name}
                                </p>)}
                            </label>
                          </div>
                        </div>
                        <div>
                          <Label>Back Side *</Label>
                          <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                            <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload('panBack', e.target.files?.[0] || null)} className="hidden" id="pan-back"/>
                            <label htmlFor="pan-back" className="cursor-pointer">
                              <p className="text-sm text-gray-600">Click to upload</p>
                              {formData.documents.panBack && (<p className="text-xs text-green-600 mt-1">
                                  {formData.documents.panBack.name}
                                </p>)}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Driving License */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CreditCard className="w-4 h-4"/>
                        Driving License
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Front Side *</Label>
                          <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                            <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload('drivingLicenseFront', e.target.files?.[0] || null)} className="hidden" id="dl-front"/>
                            <label htmlFor="dl-front" className="cursor-pointer">
                              <p className="text-sm text-gray-600">Click to upload</p>
                              {formData.documents.drivingLicenseFront && (<p className="text-xs text-green-600 mt-1">
                                  {formData.documents.drivingLicenseFront.name}
                                </p>)}
                            </label>
                          </div>
                        </div>
                        <div>
                          <Label>Back Side *</Label>
                          <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2"/>
                            <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload('drivingLicenseBack', e.target.files?.[0] || null)} className="hidden" id="dl-back"/>
                            <label htmlFor="dl-back" className="cursor-pointer">
                              <p className="text-sm text-gray-600">Click to upload</p>
                              {formData.documents.drivingLicenseBack && (<p className="text-xs text-green-600 mt-1">
                                  {formData.documents.drivingLicenseBack.name}
                                </p>)}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit KYC Documents'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">KYC Verification Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">1. Submit Documents</h4>
                  <p className="text-sm text-gray-600">Upload required documents and personal information</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertCircle className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">2. Under Review</h4>
                  <p className="text-sm text-gray-600">Our team will verify your documents (24-48 hours)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">3. Approved</h4>
                  <p className="text-sm text-gray-600">KYC completed successfully</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6"/>
                  </div>
                  <h4 className="font-semibold mb-2">4. Start Riding</h4>
                  <p className="text-sm text-gray-600">Choose a plan and start your journey</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
