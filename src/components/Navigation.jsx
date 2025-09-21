import React, { useState } from 'react';
import logo from '../assets/logor.png';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { User, LogOut, Shield, FileCheck } from 'lucide-react';

export function Navigation({
  currentPage,
  onNavigate,
  user,
  onLogout,
  onAuthModeChange,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
    { id: 'payment', label: 'Payment' },
    { id: 'why-go-ride-pe', label: 'Why Us?' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex relative items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src={logo}
              alt="GoRidePe"
              className="h-20 drop-shadow-lg"
            />
          </div>

          {/* Navigation Links (desktop) */}
          <div className="hidden md:flex flex-row space-x-8 whitespace-nowrap">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm transition-colors whitespace-nowrap pb-1 ${
                  currentPage === link.id
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}

            {user && (
              <button
                onClick={() => onNavigate('kyc')}
                className={`text-sm transition-colors flex items-center gap-1 ${
                  currentPage === 'kyc'
                    ? 'text-primary font-medium'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                KYC
                {user.kycStatus === 'approved' && (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                )}
                {user.kycStatus === 'pending' && (
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                )}
                {user.kycStatus === 'rejected' && (
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Hamburger (mobile only) */}
            <button
              className="block md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>

            {/* Desktop User dropdown / auth buttons */}
            <div className="hidden md:block">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
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
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onNavigate('kyc')}>
                      <FileCheck className="mr-2 h-4 w-4" />
                      <span>KYC Verification</span>
                      {user.kycStatus === 'approved' && (
                        <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
                      )}
                      {user.kycStatus === 'pending' && (
                        <span className="ml-auto w-2 h-2 bg-yellow-500 rounded-full"></span>
                      )}
                    </DropdownMenuItem>
                    {user.role === 'admin' && (
                      <DropdownMenuItem onClick={() => onNavigate('admin')}>
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Admin Panel</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={onLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onAuthModeChange('login');
                      onNavigate('auth');
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    onClick={() => {
                      onAuthModeChange('register');
                      onNavigate('auth');
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left py-2"
                >
                  {link.label}
                </button>
              ))}

              <div className="mt-4 border-t pt-4">
                {user ? (
                  <div className="space-y-2">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setMobileOpen(false);
                      }}
                      className="block w-full text-left py-2"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('kyc');
                        setMobileOpen(false);
                      }}
                      className="block w-full text-left py-2"
                    >
                      KYC Verification
                    </button>
                    {user.role === 'admin' && (
                      <button
                        onClick={() => {
                          onNavigate('admin');
                          setMobileOpen(false);
                        }}
                        className="block w-full text-left py-2"
                      >
                        Admin Panel
                      </button>
                    )}
                    <button
                      onClick={() => {
                        onLogout();
                        setMobileOpen(false);
                      }}
                      className="block w-full text-left py-2 text-red-600"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onAuthModeChange('login');
                        onNavigate('auth');
                        setMobileOpen(false);
                      }}
                      className="w-full justify-start"
                    >
                      Log in
                    </Button>
                    <Button
                      onClick={() => {
                        onAuthModeChange('register');
                        onNavigate('auth');
                        setMobileOpen(false);
                      }}
                      className="w-full justify-start"
                    >
                      Sign up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
