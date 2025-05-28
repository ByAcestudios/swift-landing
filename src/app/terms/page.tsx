'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const isSectionOpen = (index: number) => openSections.includes(index);

  const sections = [
    {
      title: '1. Introduction',
      content: (
        <div className="space-y-4">
          <p>By using the Swift Logistics User App (&quot;App&quot;), you agree to the following Terms of Use. These terms govern your access and use of logistics services offered by Swift Logistics Limited (&quot;Swift Logistics,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).</p>
          
          <p>These Terms of Use constitute a legally binding agreement between you and Swift Logistics regarding your use of the Swift Logistics platform, website, and mobile applications (collectively, the &quot;Services&quot;).</p>
          
          <p>Please read these Terms carefully. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services.</p>
        </div>
      ),
    },
    {
      title: '2. Eligibility',
      content: (
        <div className="space-y-4">
          <p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>You are at least 18 years old</li>
            <li>You have the right, authority, and capacity to agree to these Terms</li>
            <li>You will comply with these Terms</li>
            <li>You are not prohibited from receiving services under the laws of Nigeria or any other applicable jurisdiction</li>
          </ul>
        </div>
      ),
    },
    {
      title: '3. Account Registration',
      content: (
        <div className="space-y-4">
          <p>To use most aspects of the Services, you must register for a personal account. When you register, you agree to:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your account and password</li>
            <li>Accept all risks of unauthorized access to your account</li>
            <li>Immediately notify Swift Logistics of any security breach or unauthorized use of your account</li>
          </ul>
          
          <p>You are solely responsible for all activity that occurs under your account. Swift Logistics reserves the right to refuse service, terminate accounts, or remove content at its sole discretion.</p>
        </div>
      ),
    },
    {
      title: '4. Service Description',
      content: (
        <div className="space-y-4">
          <p>Swift Logistics provides a technology platform that connects users with:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Independent couriers for delivery services</li>
            <li>Local merchants and vendors for purchase of goods</li>
            <li>Swift Logistics logistics infrastructure for efficient package delivery</li>
          </ul>
          
          <p>Our Services allow you to:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Request delivery of packages within our service areas</li>
            <li>Track the status and location of your deliveries in real-time</li>
            <li>Communicate with couriers regarding your deliveries</li>
            <li>Rate and review your delivery experience</li>
            <li>Pay for delivery services through various payment methods</li>
          </ul>
          
          <p>Swift Logistics does not provide delivery services directly. We act as an intermediary platform connecting users with independent couriers. The actual delivery services are provided by independent contractors who are not employed by Swift Logistics.</p>
        </div>
      ),
    },
    {
      title: '5. User Obligations',
      content: (
        <div className="space-y-4">
          <p>As a user of our Services, you agree to:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Provide accurate and complete information when using our Services</li>
            <li>Use our Services only for lawful purposes and in accordance with these Terms</li>
            <li>Not use our Services to transport illegal items, hazardous materials, or dangerous goods</li>
            <li>Not engage in any activity that could damage, disable, or impair our Services</li>
            <li>Not attempt to gain unauthorized access to our Services or computer systems</li>
            <li>Not use our Services for any fraudulent or deceptive purpose</li>
            <li>Treat couriers, merchants, and other users with respect</li>
            <li>Pay all applicable fees for services requested through our platform</li>
          </ul>
        </div>
      ),
    },
    {
      title: '6. Payments and Fees',
      content: (
        <div className="space-y-4">
          <p>By using our Services, you agree to pay all fees charged by Swift Logistics for such Services. Fees for each delivery service will be disclosed to you before you confirm your request.</p>
          
          <p>Fees may include:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Base delivery fee</li>
            <li>Distance-based charges</li>
            <li>Surge pricing during high demand periods</li>
            <li>Special handling fees for certain items</li>
            <li>Service fees</li>
            <li>Tips for couriers (optional)</li>
          </ul>
          
          <p>Payment methods accepted include credit/debit cards and other electronic payment methods available in our App. You authorize Swift Logistics to charge your selected payment method for all fees incurred.</p>
          
          <p>All fees are non-refundable unless otherwise specified by Swift Logistics. We reserve the right to change our fees at any time, with or without notice.</p>
        </div>
      ),
    },
    {
      title: '7. Cancellations and Refunds',
      content: (
        <div className="space-y-4">
          <p>You may cancel a delivery request through our App subject to the following conditions:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>If you cancel before a courier accepts your request, no cancellation fee will be charged</li>
            <li>If you cancel after a courier accepts your request but before pickup, a cancellation fee may apply</li>
            <li>If you cancel after pickup has occurred, you may be charged the full delivery fee</li>
          </ul>
          
          <p>Refunds may be issued at Swift Logistics&apos; discretion in cases of:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Service not completed as described</li>
            <li>Significant delays not caused by external factors</li>
            <li>Damaged items (subject to our Damage Policy)</li>
            <li>Technical errors in processing payment</li>
          </ul>
          
          <p>Refund requests must be submitted through our App within 7 days of the delivery date.</p>
        </div>
      ),
    },
    {
      title: '8. Limitation of Liability',
      content: (
        <div className="space-y-4">
          <p>To the maximum extent permitted by law, Swift Logistics and its officers, directors, employees, and agents shall not be liable for:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Any loss of profits, revenue, data, or business opportunities</li>
            <li>Any damage to or loss of property</li>
            <li>Any damages arising from the acts or omissions of independent couriers</li>
            <li>Any delays, failures, or inaccuracies in the Services</li>
            <li>Any damage resulting from unauthorized access to your account</li>
          </ul>
          
          <p>In no event shall our total liability to you for all claims exceed the amount you paid to Swift Logistics in the 6 months preceding the event giving rise to the liability.</p>
        </div>
      ),
    },
    {
      title: '9. Dispute Resolution',
      content: (
        <div className="space-y-4">
          <p>Any dispute arising from these Terms or your use of our Services shall be resolved according to the following process:</p>
          <ol className="list-decimal pl-8 mt-2 space-y-2">
            <li>Informal Resolution: We encourage you to contact us first to seek an informal resolution.</li>
            <li>Formal Notice: If informal resolution is unsuccessful, you must send a written notice describing the dispute.</li>
            <li>Negotiation: Within 30 days of receiving notice, the parties will attempt to negotiate a resolution.</li>
            <li>Mediation: If negotiation fails, the dispute will be submitted to mediation in Lagos, Nigeria.</li>
            <li>Arbitration: If mediation is unsuccessful, the dispute will be resolved by binding arbitration in Lagos, Nigeria.</li>
          </ol>
          
          <p>These dispute resolution procedures are the exclusive means of resolving disputes under these Terms. Nigerian law will govern all disputes without regard to conflict of law principles.</p>
        </div>
      ),
    },
    {
      title: '10. Modification of Terms',
      content: (
        <div className="space-y-4">
          <p>Swift Logistics reserves the right to modify these Terms at any time. We will provide notice of significant changes by:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>Posting the updated Terms on our website</li>
            <li>Sending an email notification to registered users</li>
            <li>Displaying a notice in our App</li>
          </ul>
          
          <p>Your continued use of our Services after the modified Terms are posted constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using our Services.</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-swift-purple">Terms and Conditions</h1>
          <p className="text-lg text-center mb-12 text-gray-600">Last Updated: May 2025</p>
          
          <div className="max-w-4xl mx-auto text-black">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleSection(index)}
                  >
                    <span>{section.title}</span>
                    {isSectionOpen(index) ? (
                      <FaChevronUp className="text-swift-purple" />
                    ) : (
                      <FaChevronDown className="text-swift-purple" />
                    )}
                  </button>
                  
                  {isSectionOpen(index) && (
                    <div className="px-6 py-4 bg-white">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions; 