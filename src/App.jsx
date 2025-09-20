import React, { useEffect, useState, useRef } from 'react';
import { HomePage } from './components/HomePage';
import { AuthPage } from './components/AuthPage';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { PricingPage } from './components/PricingPage';
import { VehiclesPage } from './components/VehiclesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PaymentPage } from './components/PaymentPage';
import { WhyGoRidePePage } from './components/WhyGoRidePePage';
import { SafetyPage } from './components/SafetyPage';
import { CareersPage } from './components/CareersPage';
import { HelpPage } from './components/HelpPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { KYCPage } from './components/KYCPage';
import { BlogPage } from './components/BlogPage';
import { HelpCenterPage } from './components/HelpCenterPage';
import { BuyVehiclesPage } from './components/BuyVehiclesPage';
import { RentPage } from './components/RentPage';
import { Navigation } from './components/Navigation';
import whatsappIcon from './assets/whatsapp.svg';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentUser, setCurrentUser] = useState(null);
    const [authMode, setAuthMode] = useState('login');

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) setCurrentUser(JSON.parse(savedUser));
    }, []);

    const handleLogin = (email, password) => {
        const user = {
            id: '1',
            email,
            name: email.split('@')[0],
            role: email.includes('admin') ? 'admin' : 'user',
            kycStatus: 'pending',
            subscriptionStatus: 'none',
        };
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentPage(user.role === 'admin' ? 'admin' : 'dashboard');
    };

    const handleRegister = (email, password, name) => {
        const user = { id: Date.now().toString(), email, name, role: 'user', kycStatus: 'pending', subscriptionStatus: 'none' };
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        setCurrentPage('home');
    };

    const updateUser = (updatedUser) => {
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} user={currentUser} />;
            case 'auth':
                return <AuthPage mode={authMode} onLogin={handleLogin} onRegister={handleRegister} onModeChange={setAuthMode} onNavigate={setCurrentPage} />;
            case 'dashboard':
                return currentUser ? <UserDashboard user={currentUser} onNavigate={setCurrentPage} onUpdateUser={updateUser} /> : <AuthPage mode="login" onLogin={handleLogin} onRegister={handleRegister} onModeChange={setAuthMode} onNavigate={setCurrentPage} />;
            case 'admin':
                return currentUser?.role === 'admin' ? <AdminDashboard user={currentUser} onNavigate={setCurrentPage} /> : <HomePage onNavigate={setCurrentPage} user={currentUser} />;
            case 'pricing':
                return <PricingPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'vehicles':
                return <VehiclesPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'about':
                return <AboutPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'contact':
                return <ContactPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'payment':
                return <PaymentPage onNavigate={setCurrentPage} user={currentUser} onUpdateUser={updateUser} />;
            case 'why-go-ride-pe':
                return <WhyGoRidePePage onNavigate={setCurrentPage} user={currentUser} />;
            case 'safety':
                return <SafetyPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'careers':
                return <CareersPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'help':
                return <HelpPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'privacy':
                return <PrivacyPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'terms':
                return <TermsPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'kyc':
                return <KYCPage onNavigate={setCurrentPage} user={currentUser} onUpdateUser={updateUser} />;
            case 'blog':
                return <BlogPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'help-center':
                return <HelpCenterPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'buy-vehicles':
                return <BuyVehiclesPage onNavigate={setCurrentPage} user={currentUser} />;
            case 'rent':
                return <RentPage onNavigate={setCurrentPage} />;
            default:
                return <HomePage onNavigate={setCurrentPage} user={currentUser} />;
        }
    };

    // Back-to-top visibility handling via React
    useEffect(() => {
        const btn = document.getElementById('goridepe-top-btn');
        if (!btn) return;
        let lastKnownScroll = 0;
        let ticking = false;
        const showAt = 200;
        const onScroll = () => {
            lastKnownScroll = window.scrollY || window.pageYOffset;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (lastKnownScroll > showAt) {
                        btn.classList.remove('opacity-0', 'pointer-events-none');
                        btn.classList.add('opacity-100');
                        btn.setAttribute('aria-hidden', 'false');
                        btn.classList.add('goridepe-entrance');
                    } else {
                        btn.classList.add('opacity-0', 'pointer-events-none');
                        btn.classList.remove('opacity-100');
                        btn.setAttribute('aria-hidden', 'true');
                        btn.classList.remove('goridepe-entrance');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        // run once to set initial state
        onScroll();
        return () => { window.removeEventListener('scroll', onScroll); };
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {currentPage !== 'auth' && <Navigation currentPage={currentPage} onNavigate={setCurrentPage} user={currentUser} onLogout={handleLogout} onAuthModeChange={setAuthMode} />}
            {renderCurrentPage()}

            {/* Sticky WhatsApp button (right-bottom) */}
            <a href="https://wa.me/917276872285" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="goridepe-whatsapp fixed right-4 md:right-6 lg:right-8 bottom-4 md:bottom-6 lg:bottom-8 z-50">
                <img src={whatsappIcon} alt="WhatsApp" style={{width: '28px', height: '28px'}} />
            </a>

                                {/* Sticky Back-to-top button (left-middle) -- rendered via React for better lifecycle handling */}
                                <button
                                    id="goridepe-top-btn"
                                    ref={(el) => { /* keep for SSR-safe access if needed */ }}
                                    aria-label="Back to top"
                                    aria-hidden="true"
                                    title="Back to top"
                                    role="button"
                                    tabIndex={0}
                                    className="goridepe-top goridepe-top-lg fixed left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-50 opacity-0 pointer-events-none"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M12 19V6M5 12l7-7 7 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* scroll listener moved into React useEffect below */}
        </div>
    );
}

export default App;
