import React, { useState } from 'react';
import logo from '../assets/logor.png';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { User, LogOut, Shield, FileCheck } from 'lucide-react';
export function Navigation({ currentPage, onNavigate, user, onLogout, onAuthModeChange }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (<nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            {/* Bundler-imported logo for cache-busting; responsive sizing */}
            <img src={logo} alt="GoRidePe" className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto object-contain mr-4 drop-shadow-lg" />
          </div>

          {/* Navigation Links (desktop) */}
          <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
            <button onClick={() => onNavigate('home')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'home'
            ? 'text-primary font-semibold border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'}`}>
              Home
            </button>
            <button onClick={() => onNavigate('vehicles')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'vehicles'
            ? 'text-primary font-semibold border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'}`}>
              Vehicles
            </button>
            <button onClick={() => onNavigate('pricing')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'pricing'
            ? 'text-primary font-semibold border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'}`}>
              Pricing
            </button>
            <button onClick={() => onNavigate('about')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'about'
            ? 'text-primary font-semibold border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'}`}>
              About Us
            </button>
            <button onClick={() => onNavigate('contact')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'contact'
            ? 'text-primary font-semibold border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'}`}>
              Contact
            </button>
            <button onClick={() => onNavigate('payment')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'payment'
            ? 'text-primary font-semibold border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'}`}>
              Payment
            </button>
            <button onClick={() => onNavigate('why-go-ride-pe')} className={`text-base transition-colors whitespace-nowrap pb-1 ${currentPage === 'why-go-ride-pe'
            ? 'text-primary font-semibold border-b-2 border-primary'
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

          {/* User Actions + mobile toggle */}
          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
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
        {/* Mobile menu (small screens) */}
        {mobileOpen && (<div className="lg:hidden bg-white border-t border-border">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => { onNavigate('home'); setMobileOpen(false); }} className="block w-full text-left py-2">Home</button>
              <button onClick={() => { onNavigate('vehicles'); setMobileOpen(false); }} className="block w-full text-left py-2">Vehicles</button>
              <button onClick={() => { onNavigate('pricing'); setMobileOpen(false); }} className="block w-full text-left py-2">Pricing</button>
              <button onClick={() => { onNavigate('about'); setMobileOpen(false); }} className="block w-full text-left py-2">About Us</button>
              <button onClick={() => { onNavigate('contact'); setMobileOpen(false); }} className="block w-full text-left py-2">Contact</button>
              <button onClick={() => { onNavigate('payment'); setMobileOpen(false); }} className="block w-full text-left py-2">Payment</button>
              <button onClick={() => { onNavigate('why-go-ride-pe'); setMobileOpen(false); }} className="block w-full text-left py-2">Why Us?</button>
            </div>
          </div>)}
      </div>
    </nav>);
}
