import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import { Upload, FileText, CheckCircle, AlertCircle, User, MapPin, CreditCard, Camera, Shield, ArrowRight } from 'lucide-react';
export function KYCForm({ onSubmit, onGeneratePDF }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [kycData, setKycData] = useState({
        personalInfo: {
            fullName: '',
            phoneNumber: '',
            email: '',
            dateOfBirth: '',
            address: '',
            city: '',
            state: '',
            pincode: ''
        },
        documents: {
            aadhaarNumber: '',
            aadhaarFront: null,
            aadhaarBack: null,
            addressProofType: 'voter-card',
            addressProofFront: null,
            addressProofBack: null,
            photoId: null
        }
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const totalSteps = 3;
    const progress = (currentStep / totalSteps) * 100;
    const handlePersonalInfoChange = (field, value) => {
        setKycData(prev => ({
            ...prev,
            personalInfo: {
                ...prev.personalInfo,
                [field]: value
            }
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    const handleDocumentChange = (field, value) => {
        setKycData(prev => ({
            ...prev,
            documents: {
                ...prev.documents,
                [field]: value
            }
        }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    const handleFileUpload = (field, file) => {
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, [field]: 'File size must be less than 5MB' }));
            return;
        }
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
        if (!allowedTypes.includes(file.type)) {
            setErrors(prev => ({ ...prev, [field]: 'Only JPG, PNG, and PDF files are allowed' }));
            return;
        }
        handleDocumentChange(field, file);
    };
    const validateStep = (step) => {
        const newErrors = {};
        if (step === 1) {
            // Validate personal information
            const { personalInfo } = kycData;
            if (!personalInfo.fullName.trim())
                newErrors.fullName = 'Full name is required';
            if (!personalInfo.phoneNumber.trim())
                newErrors.phoneNumber = 'Phone number is required';
            if (!/^[6-9]\d{9}$/.test(personalInfo.phoneNumber))
                newErrors.phoneNumber = 'Invalid phone number';
            if (!personalInfo.email.trim())
                newErrors.email = 'Email is required';
            if (!/\S+@\S+\.\S+/.test(personalInfo.email))
                newErrors.email = 'Invalid email address';
            if (!personalInfo.dateOfBirth)
                newErrors.dateOfBirth = 'Date of birth is required';
            if (!personalInfo.address.trim())
                newErrors.address = 'Address is required';
            if (!personalInfo.city.trim())
                newErrors.city = 'City is required';
            if (!personalInfo.state.trim())
                newErrors.state = 'State is required';
            if (!personalInfo.pincode.trim())
                newErrors.pincode = 'Pincode is required';
            if (!/^\d{6}$/.test(personalInfo.pincode))
                newErrors.pincode = 'Invalid pincode';
        }
        if (step === 2) {
            // Validate Aadhaar documents
            const { documents } = kycData;
            if (!documents.aadhaarNumber.trim())
                newErrors.aadhaarNumber = 'Aadhaar number is required';
            if (!/^\d{12}$/.test(documents.aadhaarNumber.replace(/\s/g, '')))
                newErrors.aadhaarNumber = 'Invalid Aadhaar number';
            if (!documents.aadhaarFront)
                newErrors.aadhaarFront = 'Aadhaar front photo is required';
            if (!documents.aadhaarBack)
                newErrors.aadhaarBack = 'Aadhaar back photo is required';
        }
        if (step === 3) {
            // Validate address proof and photo
            const { documents } = kycData;
            if (!documents.addressProofFront)
                newErrors.addressProofFront = 'Address proof front is required';
            if (!documents.addressProofBack)
                newErrors.addressProofBack = 'Address proof back is required';
            if (!documents.photoId)
                newErrors.photoId = 'Photo ID is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        }
    };
    const handlePrevious = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };
    const handleSubmit = async () => {
        if (!validateStep(currentStep))
            return;
        setIsSubmitting(true);
        try {
            // Generate PDF first
            await onGeneratePDF(kycData);
            // Then submit KYC data
            await onSubmit(kycData);
            alert('KYC submitted successfully! Your PDF has been generated and sent to your email.');
        }
        catch (error) {
            alert('Error submitting KYC. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const renderFileUpload = (field, label, description, icon, currentFile) => (<div className="space-y-2">
      <Label className="flex items-center">
        {icon}
        <span className="ml-2">{label}</span>
      </Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
        <input type="file" accept="image/*,.pdf" onChange={(e) => e.target.files?.[0] && handleFileUpload(field, e.target.files[0])} className="hidden" id={field}/>
        <label htmlFor={field} className="cursor-pointer">
          {currentFile ? (<div className="space-y-2">
              <CheckCircle className="mx-auto h-8 w-8 text-green-600"/>
              <p className="text-sm font-medium text-green-600">{currentFile.name}</p>
              <p className="text-xs text-gray-500">Click to change file</p>
            </div>) : (<div className="space-y-2">
              <Upload className="mx-auto h-8 w-8 text-gray-400"/>
              <p className="text-sm font-medium text-gray-900">Upload {label}</p>
              <p className="text-xs text-gray-500">{description}</p>
            </div>)}
        </label>
      </div>
      {errors[field] && (<p className="text-sm text-red-600">{errors[field]}</p>)}
    </div>);
    return (<div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-xl">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold flex items-center justify-center">
            <Shield className="mr-3 h-8 w-8 text-green-600"/>
            KYC Verification
          </CardTitle>
          <CardDescription className="text-lg">
            Complete your identity verification to start riding with Go Ride Pe
          </CardDescription>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2"/>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (<div className="space-y-6">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-green-600 mr-3"/>
                <h3 className="text-2xl font-bold">Personal Information</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Enter your full name as per ID" value={kycData.personalInfo.fullName} onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)} className={errors.fullName ? 'border-red-500' : ''}/>
                  {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input id="phoneNumber" placeholder="10-digit mobile number" value={kycData.personalInfo.phoneNumber} onChange={(e) => handlePersonalInfoChange('phoneNumber', e.target.value)} className={errors.phoneNumber ? 'border-red-500' : ''}/>
                  {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={kycData.personalInfo.email} onChange={(e) => handlePersonalInfoChange('email', e.target.value)} className={errors.email ? 'border-red-500' : ''}/>
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input id="dateOfBirth" type="date" value={kycData.personalInfo.dateOfBirth} onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)} className={errors.dateOfBirth ? 'border-red-500' : ''}/>
                  {errors.dateOfBirth && <p className="text-sm text-red-600">{errors.dateOfBirth}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Complete Address *</Label>
                <Textarea id="address" placeholder="House/Flat number, Street, Area, Landmark" rows={3} value={kycData.personalInfo.address} onChange={(e) => handlePersonalInfoChange('address', e.target.value)} className={errors.address ? 'border-red-500' : ''}/>
                {errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="Enter city" value={kycData.personalInfo.city} onChange={(e) => handlePersonalInfoChange('city', e.target.value)} className={errors.city ? 'border-red-500' : ''}/>
                  {errors.city && <p className="text-sm text-red-600">{errors.city}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" placeholder="Enter state" value={kycData.personalInfo.state} onChange={(e) => handlePersonalInfoChange('state', e.target.value)} className={errors.state ? 'border-red-500' : ''}/>
                  {errors.state && <p className="text-sm text-red-600">{errors.state}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input id="pincode" placeholder="6-digit pincode" value={kycData.personalInfo.pincode} onChange={(e) => handlePersonalInfoChange('pincode', e.target.value)} className={errors.pincode ? 'border-red-500' : ''}/>
                  {errors.pincode && <p className="text-sm text-red-600">{errors.pincode}</p>}
                </div>
              </div>
            </div>)}

          {/* Step 2: Aadhaar Documents */}
          {currentStep === 2 && (<div className="space-y-6">
              <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-green-600 mr-3"/>
                <h3 className="text-2xl font-bold">Aadhaar Card Details</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhaarNumber">Aadhaar Number *</Label>
                <Input id="aadhaarNumber" placeholder="Enter 12-digit Aadhaar number" value={kycData.documents.aadhaarNumber} onChange={(e) => handleDocumentChange('aadhaarNumber', e.target.value)} className={errors.aadhaarNumber ? 'border-red-500' : ''}/>
                {errors.aadhaarNumber && <p className="text-sm text-red-600">{errors.aadhaarNumber}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {renderFileUpload('aadhaarFront', 'Aadhaar Card (Front)', 'Upload clear photo of front side', <FileText className="h-4 w-4"/>, kycData.documents.aadhaarFront)}

                {renderFileUpload('aadhaarBack', 'Aadhaar Card (Back)', 'Upload clear photo of back side', <FileText className="h-4 w-4"/>, kycData.documents.aadhaarBack)}
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4"/>
                <AlertDescription>
                  Ensure that all four corners of the Aadhaar card are visible and the text is clearly readable.
                  Avoid glare and shadows in the photos.
                </AlertDescription>
              </Alert>
            </div>)}

          {/* Step 3: Address Proof & Photo */}
          {currentStep === 3 && (<div className="space-y-6">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-green-600 mr-3"/>
                <h3 className="text-2xl font-bold">Address Proof & Photo ID</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="addressProofType">Address Proof Type *</Label>
                <select id="addressProofType" value={kycData.documents.addressProofType} onChange={(e) => handleDocumentChange('addressProofType', e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
                  <option value="voter-card">Voter ID Card</option>
                  <option value="pan-card">PAN Card</option>
                  <option value="passport">Passport</option>
                  <option value="driving-license">Driving License</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {renderFileUpload('addressProofFront', `${kycData.documents.addressProofType.replace('-', ' ').toUpperCase()} (Front)`, 'Upload clear photo of front side', <FileText className="h-4 w-4"/>, kycData.documents.addressProofFront)}

                {renderFileUpload('addressProofBack', `${kycData.documents.addressProofType.replace('-', ' ').toUpperCase()} (Back)`, 'Upload clear photo of back side', <FileText className="h-4 w-4"/>, kycData.documents.addressProofBack)}
              </div>

              {renderFileUpload('photoId', 'Your Photo', 'Upload a clear recent photograph (passport size)', <Camera className="h-4 w-4"/>, kycData.documents.photoId)}

              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600"/>
                <AlertDescription className="text-green-700">
                  Once you submit, you'll instantly receive a KYC confirmation PDF via email and SMS.
                  Our team will review your documents within 24-48 hours.
                </AlertDescription>
              </Alert>
            </div>)}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1} className="px-8">
              Previous
            </Button>

            {currentStep < totalSteps ? (<Button onClick={handleNext} className="bg-green-600 hover:bg-green-700 px-8">
                Next Step
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>) : (<Button onClick={handleSubmit} disabled={isSubmitting} className="bg-green-600 hover:bg-green-700 px-8">
                {isSubmitting ? 'Submitting...' : 'Submit KYC'}
                <CheckCircle className="ml-2 h-4 w-4"/>
              </Button>)}
          </div>
        </CardContent>
      </Card>
    </div>);
}
