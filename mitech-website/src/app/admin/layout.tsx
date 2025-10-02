'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
import { 
  HomeIcon,
  CogIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  UsersIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Services', href: '/admin/services', icon: CogIcon },
  { name: 'Products', href: '/admin/products', icon: ShoppingBagIcon },
  { name: 'Blog', href: '/admin/blog', icon: DocumentTextIcon },
  { name: 'Appointments', href: '/admin/appointments', icon: CalendarIcon },
  { name: 'Inquiries', href: '/admin/inquiries', icon: ChatBubbleLeftRightIcon },
  { name: 'Testimonials', href: '/admin/testimonials', icon: StarIcon },
  { name: 'Team', href: '/admin/team', icon: UsersIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Override main layout styles for admin
    const originalStyle = document.body.style.cssText;
    document.body.style.cssText = `margin: 0; padding: 0; font-family: ${inter.variable};`;
    
    return () => {
      document.body.style.cssText = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-50 z-[9999] font-sans antialiased overflow-hidden">
      <div className="h-full bg-gray-50 flex">
          {/* Mobile sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
              <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
                <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200">
                  <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex-1 px-6 py-6">
                  <ul className="space-y-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            pathname === item.href
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <item.icon className="mr-3 h-5 w-5" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t border-gray-200 p-6">
                  <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop sidebar */}
          <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
            <div className="flex h-16 items-center px-6 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <nav className="flex-1 px-6 py-6 overflow-y-auto">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gray-200 p-6">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                Sign out
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 flex-shrink-0">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <div className="flex flex-1"></div>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">A</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Admin User</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Page content */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 px-4 py-6 sm:px-6 lg:px-8 flex-shrink-0">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <p className="text-sm text-gray-500">
                    © 2024 Mitech Ghana Admin Panel. All rights reserved.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="/admin/help" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Help
                    </Link>
                    <Link href="/admin/settings" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Settings
                    </Link>
                    <Link href="/admin/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Privacy
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    Version 1.0.0
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500">System Online</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
      </div>
    </div>
  );
}
