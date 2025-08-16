"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Simple TopBar for contact info (remains the same)
const TopBar = () => {
  return (
    <div className="bg-featured text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-2 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
            <a
              href="tel:+911615002086"
              className="flex items-center space-x-2 hover:text-green-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 161-5002086 (IN)</span>
            </a>
            <a
              href="tel:02030026314"
              className="flex items-center space-x-2 hover:text-green-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>020 3002 6314 (UK)</span>
            </a>
            <a
              href="mailto:info@sapphireinfo.net"
              className="flex items-center space-x-2 hover:text-green-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@sapphireinfo.net</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data for navigation links. Managed in one place for easy updates.
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// Simplified MobileNav using the navLinks data
const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-[300px] bg-white transform transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-semibold text-lg text-featured">Menu</span>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-4 hover:bg-gray-100 font-medium border-b text-featured"
              onClick={onClose} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t bg-gray-50">
          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-featured text-white hover:bg-featured/90"
            >
              <Link href="/book-meeting">Book A Meeting</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Navigation component, now much simpler
const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white py-4 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-featured">
              SAR Globals
            </span>
          </Link>

          {/* Simplified Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-featured transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 pl-4">
              <Button
                asChild
                className="bg-featured text-white hover:bg-featured/90"
              >
                <Link href="/book-meeting">Book A Meeting</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-featured" />
          </button>
        </div>
      </div>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

// Final Header component
const Header = () => {
  return (
    <header className="relative">
      <TopBar />
      <MainNav />
    </header>
  );
};

export default Header;
