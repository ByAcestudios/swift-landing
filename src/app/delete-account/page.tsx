"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DeleteAccount() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-black">
          <h1 className="text-4xl font-bold mb-8 text-center text-swift-purple">Delete Your Account</h1>
          <p className="text-lg text-center mb-12 text-gray-600">Swift Logistics - Account Deletion Request</p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4">⚠️ Important Notice</h2>
            <p className="text-red-700">
              Deleting your account is a permanent action that cannot be undone. All your data, including order history, 
              saved addresses, and preferences will be permanently removed from our systems.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-swift-purple">How to Request Account Deletion</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Step-by-Step Process:</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Contact Us:</strong> Send an email to <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline font-semibold">info@swiftlogisticsng.com</a></li>
                  <li><strong>Subject Line:</strong> Use "Account Deletion Request" as the subject</li>
                  <li><strong>Provide Information:</strong> Include your full name, email address, and phone number associated with your account</li>
                  <li><strong>Verification:</strong> We will verify your identity before processing the deletion</li>
                  <li><strong>Confirmation:</strong> You will receive a confirmation email once your account is deleted</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-swift-purple">What Data Will Be Deleted</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">✅ Data That Will Be Deleted</h3>
                  <ul className="list-disc pl-6 space-y-2 text-green-700">
                    <li>Personal profile information (name, email, phone number)</li>
                    <li>Saved delivery addresses</li>
                    <li>Order history and transaction records</li>
                    <li>Payment method information</li>
                    <li>App preferences and settings</li>
                    <li>Chat history with customer support</li>
                    <li>Account credentials and login information</li>
                    <li>Location data and tracking history</li>
                    <li>User-generated content and reviews</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">⚠️ Data That May Be Retained</h3>
                  <ul className="list-disc pl-6 space-y-2 text-yellow-700">
                    <li>Financial records (for tax and accounting purposes)</li>
                    <li>Legal compliance data (for regulatory requirements)</li>
                    <li>Fraud prevention records (for security purposes)</li>
                    <li>Anonymized analytics data (no personal identifiers)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-swift-purple">Data Retention Period</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800 mb-4">
                  <strong>Retention Period:</strong> Most data will be deleted within 30 days of your request. However, 
                  some data may be retained for legal or regulatory purposes for up to 7 years.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Personal Data Deletion:</span>
                    <span className="font-semibold">30 days</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Financial Records:</span>
                    <span className="font-semibold">7 years (legal requirement)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Legal Compliance Data:</span>
                    <span className="font-semibold">7 years (regulatory requirement)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Anonymized Analytics:</span>
                    <span className="font-semibold">Indefinitely (no personal data)</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-swift-purple">Alternative Options</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">Before deleting your account, consider these alternatives:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Deactivate Account:</strong> Temporarily disable your account instead of permanent deletion</li>
                  <li><strong>Data Export:</strong> Request a copy of your data before deletion</li>
                  <li><strong>Privacy Settings:</strong> Adjust your privacy preferences to limit data collection</li>
                  <li><strong>Unsubscribe:</strong> Opt out of marketing communications while keeping your account</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Contact us at <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline">info@swiftlogisticsng.com</a> for any of these alternatives.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-swift-purple">Contact Information</h2>
              <div className="bg-swift-purple text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Swift Logistics Data Protection Team</h3>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:info@swiftlogisticsng.com" className="underline">info@swiftlogisticsng.com</a></p>
                  <p><strong>Response Time:</strong> Within 48 hours</p>
                  <p><strong>Processing Time:</strong> 30 days for complete deletion</p>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  For urgent matters or if you haven&apos;t received a response within 48 hours, 
                  please include "URGENT" in your email subject line.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-swift-purple">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Can I reactivate my account after deletion?</h3>
                  <p className="text-gray-600">No, account deletion is permanent and cannot be undone. You would need to create a new account if you wish to use our services again.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">What happens to my pending orders?</h3>
                  <p className="text-gray-600">Any pending orders will be completed before your account is deleted. You will still receive delivery updates for these orders.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Will I receive a refund for any unused credits?</h3>
                  <p className="text-gray-600">Yes, any unused credits or refunds due will be processed before account deletion. We will contact you regarding any outstanding balances.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">How long does the deletion process take?</h3>
                  <p className="text-gray-600">The complete deletion process takes up to 30 days. You will receive a confirmation email once all your data has been removed.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="mailto:info@swiftlogisticsng.com?subject=Account%20Deletion%20Request" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Request Account Deletion
            </a>
            <p className="text-sm text-gray-500 mt-4">
              This link will open your email client with a pre-filled deletion request
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 