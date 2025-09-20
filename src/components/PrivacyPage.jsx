import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Lock, Eye, Database, UserCheck, Globe, Mail } from 'lucide-react';
export function PrivacyPage({ onNavigate, user }) {
    return (<div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-green-600"/>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <Badge className="bg-green-100 text-green-800 border-green-200">
            Last updated: January 2024
          </Badge>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="h-6 w-6 text-green-600 mr-3"/>
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Go Ride Pe ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                  electric vehicle sharing platform and related services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with the terms of this Privacy Policy, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="h-6 w-6 text-blue-600 mr-3"/>
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name, email address, and phone number</li>
                    <li>• Date of birth and residential address</li>
                    <li>• Government-issued identity documents (Aadhaar, PAN, etc.)</li>
                    <li>• Photographs for identity verification</li>
                    <li>• Payment information and transaction history</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ride history, locations, and duration</li>
                    <li>• Vehicle usage patterns and preferences</li>
                    <li>• App usage data and interaction patterns</li>
                    <li>• Device information and IP addresses</li>
                    <li>• GPS location data during rides</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Log files, cookies, and similar technologies</li>
                    <li>• Browser type, operating system, and device identifiers</li>
                    <li>• Time stamps and referrer URLs</li>
                    <li>• Performance and diagnostic data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="h-6 w-6 text-purple-600 mr-3"/>
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Provide and maintain our electric vehicle sharing services</li>
                    <li>• Process registrations, KYC verification, and payments</li>
                    <li>• Enable ride bookings and fleet management</li>
                    <li>• Ensure safety and security of users and vehicles</li>
                    <li>• Provide customer support and technical assistance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Secondary Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Improve our services and develop new features</li>
                    <li>• Send service updates, notifications, and promotional content</li>
                    <li>• Conduct research and analytics for business insights</li>
                    <li>• Comply with legal obligations and regulatory requirements</li>
                    <li>• Prevent fraud and ensure platform security</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="h-6 w-6 text-orange-600 mr-3"/>
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We do not sell, trade, or rent your personal information to third parties. However, we may share 
                  your information in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
                    <p className="text-gray-700">
                      We may share information with trusted third-party service providers who assist us in operating 
                      our platform, such as payment processors, cloud storage providers, and analytics services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                    <p className="text-gray-700">
                      We may disclose information when required by law, court order, or government regulations, 
                      or to protect our rights, property, or safety.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Transfers</h3>
                    <p className="text-gray-700">
                      In the event of a merger, acquisition, or sale of assets, user information may be 
                      transferred as part of the business transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="h-6 w-6 text-red-600 mr-3"/>
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures Include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Regular security audits and vulnerability assessments</li>
                    <li>• Access controls and authentication mechanisms</li>
                    <li>• Employee training on data protection practices</li>
                    <li>• Incident response procedures and monitoring</li>
                  </ul>
                </div>

                <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <strong>Important:</strong> While we strive to protect your information, no method of transmission 
                  over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="h-6 w-6 text-indigo-600 mr-3"/>
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You have certain rights regarding your personal information:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Access and Portability</h3>
                    <p className="text-gray-700">
                      You can request access to your personal information and receive a copy in a portable format.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Correction and Updates</h3>
                    <p className="text-gray-700">
                      You can update or correct your personal information through your account dashboard or by contacting us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Deletion</h3>
                    <p className="text-gray-700">
                      You can request deletion of your personal information, subject to legal and contractual obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Communications</h3>
                    <p className="text-gray-700">
                      You can opt out of promotional emails and notifications through your account settings or unsubscribe links.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We retain your personal information only for as long as necessary to provide our services 
                  and fulfill the purposes outlined in this Privacy Policy. Retention periods vary based on:
                </p>
                <ul className="space-y-2">
                  <li>• The type of information and its purpose</li>
                  <li>• Legal and regulatory requirements</li>
                  <li>• Legitimate business interests</li>
                  <li>• Your consent and preferences</li>
                </ul>
                <p>
                  When information is no longer needed, we securely delete or anonymize it according to 
                  our data retention policies.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Our services are not intended for children under 18 years of age. We do not knowingly collect 
                  personal information from children under 18. If you are a parent or guardian and believe your 
                  child has provided us with personal information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Your information may be transferred to and processed in countries other than your country of 
                  residence. We ensure appropriate safeguards are in place to protect your information during 
                  such transfers, including contractual protections and compliance with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, 
                  services, or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="space-y-2">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending email notifications to registered users</li>
                  <li>• Displaying prominent notices in our app</li>
                </ul>
                <p>
                  Your continued use of our services after the effective date of the updated policy constitutes 
                  acceptance of the changes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Mail className="h-6 w-6 text-green-600 mr-3"/>
                  Contact Us
                </CardTitle>
                <CardDescription>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">privacy@goridpe.com</p>
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
