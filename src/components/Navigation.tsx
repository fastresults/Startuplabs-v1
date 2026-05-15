import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, ShieldCheck, User } from 'lucide-react';
import { throttle } from '../lib/utils';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { currentUser, isSuperAdmin, signOut } = useAuth();

  const mainLinks = [
    { label: 'ideate', href: '/ideation' },
    { label: 'plan', href: '/planning' },
    { label: 'fund', href: '/funding' },
    { label: 'build', href: '/development' },
    { label: 'launch', href: '/launch' },
    { label: 'grow', href: '/growth' }
  ];

  const actionLinks = [
    { label: 'turnkey startups', href: '/turkeystartups' },
    { label: 'startup advisor', href: '/startup-advisor' },
    { label: 'packages', href: '/packages' }
  ];

  const handleScroll = useCallback(throttle(() => {
    setIsScrolled(window.scrollY > 10);
  }, 100), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-md' : 'bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center" aria-label="StartupLabs Home">
                <img src="/images/sl-icon.svg" alt="StartupLabs Icon" className="h-8 w-8" />
              </Link>
            </div>

            {/* Main Navigation Links - Desktop */}
            <div className="hidden md:block flex-1 px-4">
              <nav aria-label="Main navigation">
                <div className="flex items-center justify-center space-x-8">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
                      aria-label={`Go to ${link.label} section`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Action Links + Auth - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {actionLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Super Admin Dashboard link */}
              {isSuperAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center gap-1.5 bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <ShieldCheck size={15} />
                  Admin
                </Link>
              )}

              {/* Auth button */}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    aria-label="User menu"
                  >
                    <User size={15} />
                    <span className="max-w-[120px] truncate">{currentUser.displayName || currentUser.email}</span>
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-2 text-xs text-gray-400 truncate border-b border-gray-700">
                        {currentUser.email}
                      </div>
                      {isSuperAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-300 hover:bg-gray-800 transition-colors"
                        >
                          <ShieldCheck size={14} />
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition-colors"
                      >
                        <LogOut size={14} />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 inset-x-0 bg-black/95 border-t border-gray-700 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {mainLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t border-gray-700 my-2"></div>

                {actionLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t border-gray-700 my-2"></div>

                {isSuperAdmin && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 text-indigo-300 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ShieldCheck size={16} />
                    Admin Dashboard
                  </Link>
                )}

                {currentUser ? (
                  <>
                    <div className="px-3 py-2 text-xs text-gray-400 truncate">{currentUser.email}</div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full text-left text-red-400 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }}
                    className="w-full text-left bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navigation;
