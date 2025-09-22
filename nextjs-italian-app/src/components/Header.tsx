'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import LoginButton from './LoginButton';
import UserProfile from './UserProfile';
import { useState } from 'react';

export default function Header() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const verbTenses = [
    {
      name: "Indicativo",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/indicativo/presente" },
        { name: "Passato Prossimo", path: "/verb-conjugation/indicativo/passato-prossimo" },
        { name: "Imperfetto", path: "/verb-conjugation/indicativo/imperfetto" },
        { name: "Futuro Semplice", path: "/verb-conjugation/indicativo/futuro-semplice" },
      ],
    },
    {
      name: "Congiuntivo",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/congiuntivo/presente" },
        { name: "Passato", path: "/verb-conjugation/congiuntivo/passato" },
        { name: "Imperfetto", path: "/verb-conjugation/congiuntivo/imperfetto" },
      ],
    },
    {
      name: "Condizionale",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/condizionale/presente" },
        { name: "Passato", path: "/verb-conjugation/condizionale/passato" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇮🇹</span>
            <span className="font-bold text-xl text-blue-600">
              Italian Verb Master
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Verb Tenses Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>📚 Verb Tenses</span>
                <span className="text-xs">▼</span>
              </button>

              <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                <div className="grid grid-cols-1 gap-2 p-4">
                  {verbTenses.map((mood) => (
                    <div key={mood.name} className="space-y-1">
                      <h3 className="font-semibold text-gray-800 text-sm border-b border-gray-100 pb-1">
                        {mood.name}
                      </h3>
                      <div className="grid grid-cols-2 gap-1">
                        {mood.subtenses.map((tense) => (
                          <Link
                            key={tense.path}
                            href={tense.path}
                            className="text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                          >
                            • {tense.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {/* Authentication */}
            <div className="flex items-center space-x-4">
              {status === "loading" ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              ) : session ? (
                <UserProfile />
              ) : (
                <LoginButton />
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 border-t border-gray-200">
                {session ? <UserProfile /> : <LoginButton />}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}