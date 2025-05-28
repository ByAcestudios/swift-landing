'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
      title: '1. Scope',
      content: (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Our commitment</h3>
          <p>Swift Logistics is committed to respecting Users&apos;/ Couriers&apos;/ Job Applicants&apos;/ Partners&apos;/ Investors&apos;/ Prospects&apos;/ Website Visitors&apos; (jointly named hereinafter as the &quot;Data Subjects&quot;) privacy and protecting their Personal data. In this sense, the aim of this Privacy Policy is to inform Data Subjects about Swift Logistics processing activities as per GDPR and the Local Regulation requirements.</p>
          
          <h3 className="font-bold text-lg">The purpose of the Privacy Policy</h3>
          <p>This Privacy Policy provides information on the processing of personal data of Data Subjects who contact us via the contact form available on our website, in accordance with the Nigeria Data Protection Regulation (&quot;NDPR&quot;).</p>
          
          <p>To find them, the different stakeholders involved in this processing as well as our Data Subjects can enter our main website [insert website] &gt;&gt;Contact us&gt;&gt;Policies.</p>
          
          <p>This Privacy Policy notice describes how Swift Logistics collects and processes the personal data; the different stakeholders involved in this processing as well as our Data Subjects rights with regard to their data.</p>
          
          <p>We recommend that both all stakeholders involved in the processing as well as Data Subjects read it carefully and on a frequent basis to fully understand this along with our privacy overview, which highlights key points about our current privacy practices.</p>
          
          <h3 className="font-bold text-lg">Possible changes and updates to the Privacy Policy</h3>
          <p>Due to the constant evolution of Swift Logistics activities, this Privacy Policy may be subject to change or updates in the future.</p>
          
          <p>Use of our Platform after this Privacy Policy has been updated shall be deemed to constitute consent by Data Subjects, whether located in Nigeria or outside Nigeria, to the updated or modified Privacy Policy to the extent permitted by local law.</p>
          
          <p>Swift Logistics will notify the Data Subjects in advance in case of substantial changes and modifications to the Privacy Policy by e-mail or through any other means that ensures its receipt. Swift Logistics will in no event modify its policies or practices to make them less effective in the protection of its Data Subjects personal data.</p>
          
          <h3 className="font-bold text-lg">Any doubts? Contact our DPO</h3>
          <p>If our Data Subjects have any doubt concerning this Privacy Policy or want to obtain more information on it, they can contact our DPO at any time to this email address: [insert DPO&apos;s email address]</p>
        </div>
      ),
    },
    {
      title: '2. Summary of Information',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-lg">Data Controller</h3>
              <p>Swift Logistics & Courier Services</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Your rights</h3>
              <p>You can exercise your rights related to personal data at any time by sending us an email {'{insert email}'} Your rights related to personal data: right of access, right to rectification, right to erasure, right to object to processing, right to object to profiling, right to unsubscribe to any marketing communication</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Data Protection Officer</h3>
              <p>[insert DPO email address]</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg">For which purpose do we use your data?</h3>
            <p className="font-medium mt-2">When you are a User or Courier, we may use your data for:</p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>legal purposes (e.g. in case of fraud and crimes committed on our App; to comply with legal regulations; menage your requests, to file and/or defend any claims and legal actions)</li>
              <li>contractual purposes (e.g. grant the possibility to create your own account, locate the nearest Partner and Courier, perform payment processing, assist in decisions and use of the service, provide you with a customer service, studying the use of the platform performed by you, provide you with the equipment and material needed to provide the services)</li>
              <li>security purposes (e.g. use device, location, profile, usage, and other data to prevent and detect malicious or unsafe activities, monitor all actions that could cause fraud, when requested by any authority, administration or court, collaborate with Public Authorities)</li>
              <li>Statistics and research purposes (e.g. analyses trends, purchase behaviour and characteristics, understand how you use our Platform, send voluntary and anonymous questionnaires, and surveys, competitions and communications of interest, carry out financial calculations)</li>
              <li>marketing and non-marketing purposes (e.g. carry out marketing, communications, research and development activities, analyses how to improve our services, provide you with offers, promotions, discounts, suggestions, carry out promotional activities for the delivery of samples or free products, generate and provide you with receipts, inform you about any incident on the App).</li>
            </ul>
            
            {/* Additional sections for Partner, Investor, Job Applicant, etc. would go here */}
          </div>
        </div>
      ),
    },
    {
      title: '3. Your Personal Data Rights',
      content: (
        <div className="space-y-4">
          <p>Privacy is your right, and you have the choice.</p>
          <p>You may exercise your rights free of charge at any time using the form available on our main website [insert website address]&gt;&gt;Contact us&gt;&gt;Policies, or in the App, entering to: Help&gt;&gt;Not related to an order&gt;&gt;Policies.</p>
          <p>If you have any questions, you can write to us at [insert email address]</p>
          
          <p>You may exercise the following rights vis-à-vis Swift Logistics:</p>
          <ul className="list-disc pl-8 mt-2 space-y-2">
            <li>The right of access to your personal data to know which data is being processed and the processing operations carried out thereon.</li>
            <li>The right to correct any inaccuracies in relation to your personal data.</li>
            <li>The right to the erasure of your personal data, where possible; by sending us a data erasure request</li>
            <li>The right to request the processing of your personal data when the accuracy, legality or need for processing of the data is in question, in which case we may retain the data for the purpose of filing or defending claims.</li>
            <li>The right to request portability of your data to another service provider. We will give you a copy of your data so that you can provide it to another service provider. If you request us to do so and it is technically possible, we will transfer the data directly to that other service provider on your behalf.</li>
            <li>The right to object to the processing of your data in order to resolve any query you may have raised with us through the contact form (website: &gt;&gt;Contact [insert website address] contact us&gt;&gt;Policies or in the App: Help&gt;&gt;Not related to an order&gt;&gt;Policies) and the right to object to the processing of your data on social media and/or for the purpose of processing your CV.</li>
            <li>If you are the User, and you don&apos;t want to receive any marketing communications, you have the right to unsubscribe to any marketing communication, by sending an e-mail or by using the link provided for this purpose in every commercial communication.</li>
          </ul>
          <p>Please note that disabling Push notifications will also prevent you from receiving notifications about the status of any order.</p>
        </div>
      ),
    },
    {
      title: '4. Data Controller of Your Personal Data',
      content: (
        <div className="space-y-4">
          <p>The Data Controller of your Personal Data in relation to the use of the Swift Logistics Platform and of the other Forms is Swift Logistics App.</p>
          <p>In addition to the information provided above, details of each Swift Logistics company can be found in Annex 1 to this Privacy Policy.</p>
          <p>Furthermore, Swift Logistics may share the data of those users (&quot;Users&quot;) or couriers (&quot;Couriers&quot;) who register on the website or App (the &quot;Platform&quot;) and of those persons who contact Swift Logistics using the forms available on its Platform with each of the subsidiaries and companies of the Swift Logistics Group for the purpose of offering the services requested by Users through the Platform.</p>
        </div>
      ),
    },
    {
      title: '5. Useful Information if You Are a USER',
      content: (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">5.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process the personal data for the following purposes:</p>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li>For legal purposes.</li>
            <li>For contractual purposes.</li>
            <li>For security purposes.</li>
            <li>For statistics and research purposes.</li>
            <li>For marketing and commercial purposes.</li>
            <li>For non-marketing purposes.</li>
          </ul>
          
          {/* The rest of section 5 content would go here */}
        </div>
      ),
    },
    // Additional sections would go here (6-17)
    {
      title: 'Terms of Use',
      content: (
        <div className="space-y-4">
          <p>By using the Swift Logistics User App (&quot;App&quot;), you agree to the following Terms of Use. These terms govern your access and use of logistics services offered by Swift Logistics Limited (&quot;Swift Logistics,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).</p>
          
          {/* Terms of use content would go here */}
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-swift-purple">Privacy Policy</h1>
          <p className="text-lg text-center mb-12 text-gray-600">Effective Date: May 2025</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Index</h2>
              <ol className="list-decimal pl-8 space-y-2">
                <li>Scope</li>
                <li>Summary of information</li>
                <li>Your personal data rights</li>
                <li>Data controller of your personal data</li>
                <li>Useful information if you are a USER</li>
                <li>Useful information if you are a COURIER</li>
                <li>Useful information if you are a PARTNER</li>
                <li>Useful information if you are an INVESTOR</li>
                <li>Useful information if you are a JOB APPLICANT</li>
                <li>Useful information if you are a PROSPECT</li>
                <li>Useful information if you are a WEBSITE VISITOR</li>
                <li>Do we proceed with international transfer of data?</li>
                <li>Do we proceed with automated decision making?</li>
                <li>Do we create profiles and/or segment users based on the collected data?</li>
                <li>What security measures have been adopted?</li>
                <li>Ethics Channel</li>
                <li>Artificial Intelligence</li>
              </ol>
            </div>
            
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

export default PrivacyPolicy; 