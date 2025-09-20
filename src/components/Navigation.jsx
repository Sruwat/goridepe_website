import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { User, LogOut, Shield, FileCheck } from 'lucide-react';
export function Navigation({ currentPage, onNavigate, user, onLogout, onAuthModeChange }) {
    return (<nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">GORidepe</span>
              <span className="text-xs text-gray-600">Ride Green. Earn More.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className={`text-sm transition-colors ${currentPage === 'home'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              Home
            </button>
            <button onClick={() => onNavigate('vehicles')} className={`text-sm transition-colors ${currentPage === 'vehicles'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              Vehicles
            </button>
            <button onClick={() => onNavigate('pricing')} className={`text-sm transition-colors ${currentPage === 'pricing'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              Pricing
            </button>
            <button onClick={() => onNavigate('about')} className={`text-sm transition-colors ${currentPage === 'about'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              About Us
            </button>
            <button onClick={() => onNavigate('contact')} className={`text-sm transition-colors ${currentPage === 'contact'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              Contact
            </button>
            <button onClick={() => onNavigate('payment')} className={`text-sm transition-colors ${currentPage === 'payment'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              Payment
            </button>
            <button onClick={() => onNavigate('why-go-ride-pe')} className={`text-sm transition-colors ${currentPage === 'why-go-ride-pe'
            ? 'text-primary font-medium'
            : 'text-gray-600 hover:text-primary'}`}>
              Why Us?
            </button>
            {user && (<button onClick={() => onNavigate('kyc')} className={`text-sm transition-colors flex items-center gap-1 ${currentPage === 'kyc'
                ? 'text-primary font-medium'
                : 'text-gray-600 hover:text-primary'}`}>
                <FileCheck className="w-4 h-4"/>
                KYC
                {user.kycStatus === 'approved' && (<span className="w-2 h-2 bg-green-500 rounded-full"></span>)}
                {user.kycStatus === 'pending' && (<span className="w-2 h-2 bg-yellow-500 rounded-full"></span>)}
                {user.kycStatus === 'rejected' && (<span className="w-2 h-2 bg-red-500 rounded-full"></span>)}
              </button>)}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (<DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuItem onClick={() => onNavigate('dashboard')}>
                    <User className="mr-2 h-4 w-4"/>
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('kyc')}>
                    <FileCheck className="mr-2 h-4 w-4"/>
                    <span>KYC Verification</span>
                    {user.kycStatus === 'approved' && (<span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>)}
                    {user.kycStatus === 'pending' && (<span className="ml-auto w-2 h-2 bg-yellow-500 rounded-full"></span>)}
                  </DropdownMenuItem>
                  {user.role === 'admin' && (<DropdownMenuItem onClick={() => onNavigate('admin')}>
                      <Shield className="mr-2 h-4 w-4"/>
                      <span>Admin Panel</span>
                    </DropdownMenuItem>)}
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>) : (<div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={() => {
                onAuthModeChange('login');
                onNavigate('auth');
            }}>
                  Log in
                </Button>
                <Button onClick={() => {
                onAuthModeChange('register');
                onNavigate('auth');
            }}>
                  Sign up
                </Button>
              </div>)}
          </div>
        </div>
      </div>
    </nav>);
}
