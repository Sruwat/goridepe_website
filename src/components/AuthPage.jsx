import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
export function AuthPage({ mode, onLogin, onRegister, onModeChange, onNavigate }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (mode === 'register') {
                if (password !== confirmPassword) {
                    setError('Passwords do not match');
                    return;
                }
                if (password.length < 6) {
                    setError('Password must be at least 6 characters');
                    return;
                }
                if (!name.trim()) {
                    setError('Name is required');
                    return;
                }
                onRegister(email, password, name);
            }
            else {
                onLogin(email, password);
            }
        }
        catch (err) {
            setError('An error occurred. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Button variant="ghost" onClick={() => onNavigate('home')} className="mb-8 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">Go Ride Pe</span>
          </div>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </CardTitle>
            <CardDescription className="text-center">
              {mode === 'login'
            ? 'Enter your credentials to access your account'
            : 'Join thousands of riders in the electric revolution'}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {error && (<Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>)}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (<div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required className="h-12"/>
                </div>)}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-12"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-12 pr-10"/>
                  <Button type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<EyeOff className="h-4 w-4 text-gray-400"/>) : (<Eye className="h-4 w-4 text-gray-400"/>)}
                  </Button>
                </div>
              </div>

              {mode === 'register' && (<div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="h-12 pr-10"/>
                    <Button type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? (<EyeOff className="h-4 w-4 text-gray-400"/>) : (<Eye className="h-4 w-4 text-gray-400"/>)}
                    </Button>
                  </div>
                </div>)}

              <Button type="submit" className="w-full h-12 bg-green-600 hover:bg-green-700 text-white" disabled={loading}>
                {loading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                {mode === 'login'
            ? "Don't have an account? "
            : "Already have an account? "}
                <button onClick={() => onModeChange(mode === 'login' ? 'register' : 'login')} className="text-green-600 hover:text-green-700 font-medium">
                  {mode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
              
              {mode === 'login' && (<p className="text-sm">
                  <button className="text-green-600 hover:text-green-700">
                    Forgot your password?
                  </button>
                </p>)}
            </div>

            {mode === 'register' && (<div className="text-xs text-gray-500 text-center space-y-1">
                <p>By creating an account, you agree to our</p>
                <p>
                  <span className="text-green-600">Terms of Service</span> and{' '}
                  <span className="text-green-600">Privacy Policy</span>
                </p>
              </div>)}
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="border border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-blue-900">Demo Credentials</p>
              <div className="text-xs text-blue-700 space-y-1">
                <p><strong>User:</strong> user@demo.com / password123</p>
                <p><strong>Admin:</strong> admin@demo.com / admin123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
}
