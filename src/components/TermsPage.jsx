import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, Scale, Users, Shield, CreditCard, AlertTriangle, Mail } from 'lucide-react';
export function TermsPage({ onNavigate, user }) {
    return (<div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-blue-600"/>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-4">
            Please read these terms carefully before using Go Ride Pe services.
          </p>
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            Last updated: January 2024
          </Badge>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Agreement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Scale className="h-6 w-6 text-blue-600 mr-3"/>
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                  Go Ride Pe Pvt. Ltd. ("Company," "we," "us," or "our") regarding your use of our electric 
                  vehicle sharing platform and related services.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you do not 
                  agree to these Terms, you may not access or use our services.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting. Your continued use of our services after changes are posted constitutes acceptance 
                  of the modified Terms.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="h-6 w-6 text-green-600 mr-3"/>
                  Service Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Go Ride Pe provides an electric vehicle sharing platform that allows users to rent electric 
                  scooters on a subscription basis. Our services include:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Electric vehicle rental through subscription plans</li>
                  <li>Mobile and web-based booking platform</li>
                  <li>GPS tracking and fleet management</li>
                  <li>Customer support and maintenance services</li>
                  <li>Safety equipment and insurance coverage</li>
                </ul>
                <p>
                  Services are currently available in Noida, Delhi, and Gurgaon, with plans to expand to 
                  additional cities.
                </p>
              </CardContent>
            </Card>

            {/* User Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">User Eligibility and Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility Requirements</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Must be at least 18 years of age</li>
                    <li>Must possess a valid driving license</li>
                    <li>Must be a resident of India with valid identity documents</li>
                    <li>Must complete KYC verification process</li>
                    <li>Must not be prohibited from using our services under applicable law</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Registration Process</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Provide accurate and complete registration information</li>
                    <li>Submit required identity and address verification documents</li>
                    <li>Maintain updated account information</li>
                    <li>Protect account credentials and notify us of any unauthorized access</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Subscription and Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CreditCard className="h-6 w-6 text-purple-600 mr-3"/>
                  Subscription Plans and Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Subscription Plans</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Daily Pass: ₹250 for 24-hour access</li>
                    <li>Weekly Pass: ₹1,500 for 7-day access</li>
                    <li>Monthly Pass: ₹5,000 for 30-day access</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>All payments must be made in advance</li>
                    <li>Payments are processed through UPI and verified manually</li>
                    <li>Subscription begins upon payment verification</li>
                    <li>No refunds for partially used subscription periods</li>
                    <li>Additional charges may apply for damages or violations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="h-6 w-6 text-orange-600 mr-3"/>
                  User Responsibilities and Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Vehicle Use</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Operate vehicles safely and in accordance with traffic laws</li>
                    <li>Wear provided safety equipment at all times</li>
                    <li>Report any vehicle issues or accidents immediately</li>
                    <li>Return vehicles to designated parking areas</li>
                    <li>Do not modify, damage, or misuse vehicles</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Using vehicles under the influence of alcohol or drugs</li>
                    <li>Carrying passengers beyond vehicle capacity</li>
                    <li>Using vehicles for commercial purposes without authorization</li>
                    <li>Tampering with GPS tracking or safety systems</li>
                    <li>Subletting or transferring vehicle access to others</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Liability and Insurance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3"/>
                  Liability and Insurance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Insurance Coverage</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Basic third-party insurance is included with all subscriptions</li>
                    <li>Coverage applies only during authorized ride periods</li>
                    <li>Users are responsible for deductibles and uncovered damages</li>
                    <li>Insurance does not cover damages due to misuse or violations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">User Liability</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Users are liable for damages caused by negligence or misuse</li>
                    <li>Traffic violations and fines are the user's responsibility</li>
                    <li>Users must report accidents and incidents immediately</li>
                    <li>Failure to report may result in additional liability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Availability and Modifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We strive to provide continuous service availability but cannot guarantee uninterrupted access. 
                  Service may be temporarily unavailable due to:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical issues or system failures</li>
                  <li>Weather conditions or safety concerns</li>
                  <li>Regulatory requirements or legal restrictions</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
                  with reasonable notice to users.
                </p>
              </CardContent>
            </Card>

            {/* Account Termination */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Account Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by User</h3>
                  <p>
                    You may terminate your account at any time by contacting customer support. Upon termination, 
                    you will lose access to all services, and any remaining subscription balance is non-refundable.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by Company</h3>
                  <p>
                    We may suspend or terminate your account immediately for violations of these Terms, illegal 
                    activities, or behavior that poses risks to safety or security. We will provide notice when 
                    reasonably possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Your privacy is important to us. Our collection, use, and protection of your personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using 
                  our services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  All content, features, and functionality of our platform, including but not limited to text, 
                  graphics, logos, software, and design, are owned by Go Ride Pe or our licensors and are protected 
                  by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable license to use our services for personal, 
                  non-commercial purposes in accordance with these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers and Warranties */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Disclaimers and Warranties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express 
                  or implied. We disclaim all warranties, including but not limited to:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Continuous, uninterrupted, or error-free operation</li>
                  <li>Accuracy or completeness of information</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  To the maximum extent permitted by law, Go Ride Pe shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, 
                  or business opportunities.
                </p>
                <p>
                  Our total liability for any claims arising from or related to these Terms or our services shall not 
                  exceed the amount paid by you for services in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  These Terms are governed by the laws of India. Any disputes arising from or relating to these Terms 
                  or our services will be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.
                </p>
                <p>
                  We encourage users to contact us first to resolve any concerns before pursuing legal action. 
                  Many disputes can be resolved through direct communication.
                </p>
              </CardContent>
            </Card>

            {/* Severability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Severability and Entire Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions 
                  will continue in full force and effect. The invalid provision will be replaced with a valid provision 
                  that most closely matches the intent of the original.
                </p>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
                  Go Ride Pe regarding the use of our services and supersede all prior agreements and understandings.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Mail className="h-6 w-6 text-blue-600 mr-3"/>
                  Contact Information
                </CardTitle>
                <CardDescription>
                  If you have questions about these Terms of Service, please contact us:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">legal@goridpe.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">+91 9876543210</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      Go Ride Pe Pvt. Ltd.<br />
                      A-123, Sector 63<br />
                      Noida, Uttar Pradesh 201301<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>);
}
