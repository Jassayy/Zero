import React from 'react';
import Button from '../components/Button';

function PaymentGateways() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 dark:opacity-10 blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-400 to-blue-500 opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Secure payment options for Pro and Enterprise plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pro Plan</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <svg className="w-8 h-8 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Credit/Debit Cards</span>
              </div>
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <svg className="w-8 h-8 text-blue-500 mr-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM22 7h-2V4h-3V2h5v5zm0 15v-5h-2v3h-3v2h5zM2 22h5v-2H4v-3H2v5zM2 2v5h2V4h3V2H2z"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">QR Code Payment</span>
              </div>
            </div>
            <Button variant="primary" className="w-full mt-6">
              Subscribe to Pro
            </Button>
          </div>

          <div className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Enterprise Plan</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <svg className="w-8 h-8 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Credit/Debit Cards</span>
              </div>
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <svg className="w-8 h-8 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Wire Transfer</span>
              </div>
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <svg className="w-8 h-8 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Purchase Order</span>
              </div>
            </div>
            <Button variant="primary" className="w-full mt-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateways;
