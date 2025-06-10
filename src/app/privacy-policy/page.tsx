"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Scope',
    content: (
      <div className="space-y-4">
        <p><strong>Our commitment</strong><br />
        Swift Logistics is committed to respecting Users&apos;, Couriers&apos;, Job Applicants&apos;, Partners&apos;, Investors&apos;, Prospects&apos;, Website Visitors&apos; (jointly named hereinafter as the &ldquo; Data Subjects&rdquo;) privacy and protecting their Personal data. In this sense, the aim of this Privacy Policy is to inform Data Subjects about Swift Logistics processing activities as per GDPR and the Local Regulation requirements.</p>
        <p><strong>The purpose of the Privacy Policy</strong><br />
        This Privacy Policy provides information on the processing of personal data of Data Subjects who contact us via the contact form available on our website, in accordance with the Nigeria Data Protection Regulation (&ldquo;NDPR&rdquo;).</p>
        <p>To find them, the different stakeholders involved in this processing as well as our Data Subjects can enter our main website [insert website] &gt;&gt;Contact us&gt;&gt;Policies.</p>
        <p>This Privacy Policy notice describes how Swift Logistics collects and processes the personal data; the different stakeholders involved in this processing as well as our Data Subjects rights with regard to their data.</p>
        <p>We recommend that both all stakeholders involved in the processing as well as Data Subjects read it carefully and on a frequent basis to fully understand this along with our privacy overview, which highlights key points about our current privacy practices.</p>
        <p><strong>Possible changes and updates to the Privacy Policy</strong><br />
        Due to the constant evolution of Swift Logistics activities, this Privacy Policy may be subject to change or updates in the future.</p>
        <p>Use of our Platform after this Privacy Policy has been updated shall be deemed to constitute consent by Data Subjects, whether located in Nigeria or outside Nigeria, to the updated or modified Privacy Policy to the extent permitted by local law.</p>
        <p>Swift Logistics will notify the Data Subjects in advance in case of substantial changes and modifications to the Privacy Policy by e-mail or through any other means that ensures its receipt.</p>
        <p>Swift Logistics will in no event modify its policies or practices to make them less effective in the protection of its Data Subjects personal data.</p>
        <p><strong>Any doubts? Contact our DPO</strong><br />
        If our Data Subjects have any doubt concerning this Privacy Policy or want to obtain more information on it, they can contact our DPO at any time to this email address: info@swiftlogisticsng.com</p>
      </div>
    ),
  },
  {
    title: '2. Summary of Information',
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-6">
          <li><strong>Data Controller:</strong> Swift Logistics & Courier Services</li>
          <li><strong>Your rights:</strong> You can exercise your rights related to personal data at any time by sending us an email at info@swiftlogisticsng.com. Your rights related to personal data: right of access, right to rectification, right to erasure, right to object to processing, right to object to profiling, right to unsubscribe to any marketing communication</li>
          <li><strong>Data Protection Officer:</strong> info@swiftlogisticsng.com</li>
        </ul>
        <h3 className="font-semibold mt-4">For which purpose do we use your data?</h3>
        <p>When you are a User or Courier, we may use your data for:</p>
        <ul className="list-disc pl-6">
          <li>Legal purposes (e.g. in case of fraud and crimes committed on our App; to comply with legal regulations; manage your requests, to file and/or defend any claims and legal actions)</li>
          <li>Contractual purposes (e.g. grant the possibility to create your own account, locate the nearest Partner and Courier, perform payment processing, assist in decisions and use of the service, provide you with a customer service, studying the use of the platform performed by you, provide you with the equipment and material needed to provide the services)</li>
          <li>Security purposes (e.g. use device, location, profile, usage, and other data to prevent and detect malicious or unsafe activities, monitor all actions that could cause fraud, when requested by any authority, administration or court, collaborate with Public Authorities)</li>
          <li>Statistics and research purposes (e.g. analyses trends, purchase behaviour and characteristics, understand how you use our Platform, send voluntary and anonymous questionnaires, and surveys, competitions and communications of interest, carry out financial calculations)</li>
          <li>Marketing and non-marketing purposes (e.g. carry out marketing, communications, research and development activities, analyses how to improve our services, provide you with offers, promotions, discounts, suggestions, carry out promotional activities for the delivery of samples or free products, generate and provide you with receipts, inform you about any incident on the App)</li>
        </ul>
        <p>When you are a Partner, we may use your data for:</p>
        <ul className="list-disc pl-6">
          <li>Grant you the possibility to create your own account and maintain the business relationship with Swift Logistics</li>
          <li>Provide you with customer service to answer your questions or consultations</li>
        </ul>
        <p>When you are an Investor, we may use your data for:</p>
        <ul className="list-disc pl-6">
          <li>Fulfil the compliance requirements</li>
          <li>Formalise the relationship with you as an Investor</li>
          <li>Notify you concerning the corporate matters and inform you about Swift Logistics&apos; results</li>
        </ul>
        <p>When you are a Job Applicant, we may use your data for:</p>
        <ul className="list-disc pl-6">
          <li>Consider your present or future suitability for any of the positions available at Swift Logistics, to conduct any interviews it may deem necessary for the position, test your knowledge, contact companies for which you have previously worked, check references, and assess your skills and abilities in general</li>
          <li>Provide you with information of your interest regarding our Job offers</li>
        </ul>
        <p>When you are a Prospect, we may use your data for:</p>
        <ul className="list-disc pl-6">
          <li>Process your requests to obtain the products and/or services offered by Swift Logistics and manage the prospective relationship</li>
          <li>Carry out marketing, communications, and research activities regarding Swift Logistics&apos; products and/or services similar to those included in your request</li>
        </ul>
        <p>When you are a Web Visitor, we may use your data for:</p>
        <ul className="list-disc pl-6">
          <li>Follow up your comments left on Swift Logistics Website or our Blog</li>
          <li>Provide you with the answer regarding your request</li>
        </ul>
        <h3 className="font-semibold mt-4">Why can we do it? Lawfulness of processing</h3>
        <ul className="list-disc pl-6">
          <li>Compliance with the business/ labour relationship</li>
          <li>Legitimate interest and User/Courier / Applicant/ Investor/ Website visitor consent</li>
        </ul>
        <h3 className="font-semibold mt-4">With whom do we share your data?</h3>
        <p>If you are a User, we may share your data with two different groups of recipients:</p>
        <ul className="list-disc pl-6">
          <li>The recipients of data while we carry on your orders: the Courier who carries out the task of collecting and delivering the product; the establishment or venue in charge of selling the product; the Customer Care Services available to you; the payment Platform and payment service providers; Telecommunications service providers; Providers rendering satisfaction survey services</li>
          <li>Recipients of the data, during the actions undertaken to continue to provide the services offered through the App: service providers that send parcels, carry out orders and/or resolve incidents with delivery; pharmacists dispensing products; Payment Platforms contracted by Swift Logistics; Service providers for fraud control purposes and for the anonymization of some data; Telecommunications services; Punctually another entity or affiliate of the Swift Logistics Group; Social media, Third parties associated with Swift Logistics for the purposes of commercial communications; insurance companies</li>
        </ul>
        <p>If you are a Courier, we may share your data with different groups of recipients:</p>
        <ul className="list-disc pl-6">
          <li>Advisers and consultants for the pursuit of accounting, labour, tax, insurance, legal and technical activities</li>
          <li>Government bodies (tax authority, social security system, etc.)</li>
          <li>State security forces, courts, mediation and arbitration bodies, governments for regulatory matters</li>
          <li>Users who have placed an order which you have agreed to carry out</li>
          <li>External service providers that provide commercial offers with benefits and/or discounts for you</li>
          <li>To group companies or third parties in charge of the filing and management of computer data</li>
        </ul>
        <p>In the case of every Data Subject (Users, Couriers, Job Applicants, Partners, Investors, Prospects, Website Visitors) we may share personal data with:</p>
        <ul className="list-disc pl-6">
          <li>Another entity or affiliate of the Swift Logistics Group</li>
          <li>Any public authority that requests the sharing</li>
        </ul>
      </div>
    ),
  },
  {
    title: '3. Your Personal Data Rights',
    content: (
      <div className="space-y-4">
        <p><strong>Privacy is your right, and you have the choice.</strong></p>
        <p>You may exercise your rights free of charge at any time using the form available on our main website &gt;&gt;Contact us&gt;&gt;Policies, or in the App, entering to: Help&gt;&gt;Not related to an order&gt;&gt;Policies.</p>
        <p>If you have any questions, you can write to us at <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline">info@swiftlogisticsng.com</a></p>
        <p>You may exercise the following rights vis-à-vis Swift Logistics:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>The right of access to your personal data to know which data is being processed and the processing operations carried out thereon.</li>
          <li>The right to correct any inaccuracies in relation to your personal data.</li>
          <li>The right to the erasure of your personal data, where possible; by sending us a data erasure request</li>
          <li>The right to request the processing of your personal data when the accuracy, legality or need for processing of the data is in question, in which case we may retain the data for the purpose of filing or defending claims.</li>
          <li>The right to request portability of your data to another service provider. We will give you a copy of your data so that you can provide it to another service provider. If you request us to do so and it is technically possible, we will transfer the data directly to that other service provider on your behalf.</li>
          <li>The right to object to the processing of your data in order to resolve any query you may have raised with us through the contact form (website: &gt;&gt;Contact www.swiftlogisticsng.com contact us&gt;&gt;Policies or in the App: Help&gt;&gt;Not related to an order&gt;&gt;Policies) and the right to object to the processing of your data on social media and/or for the purpose of processing your CV.</li>
          <li>If you are the User, and you don't want to receive any marketing communications, you have the right to unsubscribe to any marketing communication, by sending an e-mail or by using the link provided for this purpose in every commercial communication.</li>
        </ol>
        <p>Please note that disabling Push notifications will also prevent you from receiving notifications about the status of any order.</p>
      </div>
    ),
  },
  {
    title: '4. Data Controller of Your Personal Data',
    content: (
      <div className="space-y-4">
        <p>The Data Controller of your Personal Data in relation to the use of the Swift Logistics Platform and of the other Forms is <strong>Swift Logistics App</strong>.</p>
        <p>In addition to the information provided above, details of each Swift Logistics company can be found in Annex 1 to this Privacy Policy.</p>
        <p>Furthermore, Swift Logistics may share the data of those users ("Users") or couriers ("Couriers") who register on the website or App (the &ldquo;Platform&rdquo;) and of those persons who contact Swift Logistics using the forms available on its Platform with each of the subsidiaries and companies of the Swift Logistics Group for the purpose of offering the services requested by Users through the Platform.</p>
        <div className="mt-4">
          <h3 className="font-semibold">Contact Information:</h3>
          <ul className="list-disc pl-6">
            <li><strong>Website:</strong> <a href="https://swiftlogisticsng.com" className="text-swift-purple underline" target="_blank" rel="noopener noreferrer">https://swiftlogisticsng.com</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline">info@swiftlogisticsng.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+2348147321515" className="text-swift-purple underline">+2348147321515</a></li>
            <li><strong>Address:</strong> 19 Funmilayo Onaronke Akoka, Yaba, Lagos</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: '5. Useful Information if you are a USER',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">5.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process the personal data for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>For legal purposes.</li>
            <li>For contractual purposes.</li>
            <li>For security purposes.</li>
            <li>For statistics and research purposes.</li>
            <li>For marketing and commercial purposes.</li>
            <li>For non-marketing purposes.</li>
          </ul>
          <h4 className="font-medium mt-4">Legal purposes</h4>
          <ul className="list-disc pl-8">
            <li>Detect and investigate fraud and possible crimes committed against our Platform and all the users.</li>
            <li>Comply with the legislation in case any legal regulations oblige us to keep your data for a defined period of time (see Annex II on data retention).</li>
            <li>Manage and execute your request(s) to exercise the rights established in the NDPR and other local regulations.</li>
            <li>File, submit and defend legal action against any entity of our Group.</li>
            <li>Use any data obtained from you or arisen from your activity through our Platform (e.g. conversations between you and the Partner, you and the Courier, you and our Platform using the chat system) for the purpose of filing and/or defending any claims and/or legal actions that may be necessary, and to manage any incidents arising in connection with User&apos;s orders.</li>
          </ul>
          <h4 className="font-medium mt-4">Contractual purposes</h4>
          <ul className="list-disc pl-8">
            <li>Grant you the possibility to create your own account.</li>
            <li>Provide you with the services you have requested and any additional features on the Platform.</li>
            <li>Locate the nearest Partners and Courier to the delivery point informed by you (which may involve using geolocation services, if you agreed to them when asked to by the Platform, as described above).</li>
            <li>Perform payment processing and collection on behalf of you.</li>
            <li>Communicate your Order to the Partner selected by you and update you on the status of your Order.</li>
            <li>Assist you in your decisions and use of the service, including the possibility to quickly reorder from the stores, where you have ordered in the past or suggest you stores based on your past orders or &ldquo;popularity&rdquo; among new users. Additionally, we could assist you in your decisions through automatically determined filters by the historical order you have placed in the past, providing in each case specific contents in the Platform tailored for you.</li>
            <li>Send you the receipt corresponding to your Orders.</li>
            <li>Provide you with a customer service to manage any incident related to your Orders and being able to answer your questions or consultations.</li>
            <li>Allow your direct contact with the Courier in charge of your Order.</li>
            <li>Be contacted by our Partners in case of any incident with your Orders.</li>
            <li>Process reimbursements and refunds both via promo-codes or bank refunds.</li>
            <li>Notify you concerning changes or updates to our services, terms and conditions, privacy policy, cookies policy and any other corporate document that may affect you in a substantial way.</li>
          </ul>
          <h4 className="font-medium mt-4">Security purposes</h4>
          <ul className="list-disc pl-8">
            <li>Use device, location (including geolocation data, if you agreed to), profile, usage, and other data to prevent and detect malicious or unsafe activities (e.g. payment fraud, identity fraud, account hacking, phishing, incentive abuses). Swift Logistics uses your device&apos;s IP address to detect fraudulent activity on your device and to keep the platform away from attackers who may try to access your account by impersonating you.</li>
            <li>Monitor all actions that could cause fraud or in the commission of a criminal offence related to the payment method employed by you; if any irregularities are detected, Swift Logistics reserves the right to retain the data provided and share it with the competent Authorities to carry out the relevant investigation.</li>
            <li>Make sure that you follow the legal requirements related to specific products you may order through the Platform (e.g. legal age for alcoholic beverages).</li>
          </ul>
          <h4 className="font-medium mt-4">For statistics and research purposes</h4>
          <ul className="list-disc pl-8">
            <li>Analyse trends, purchase behaviour and characteristics.</li>
            <li>Understand how you use our Platform.</li>
            <li>Manage and improve the services offered, including the possibility of adding new or different features and services to improve the quality of the services.</li>
          </ul>
          <h4 className="font-medium mt-4">Marketing and commercial purposes</h4>
          <ul className="list-disc pl-8">
            <li>Carry out marketing, communications, research and development activities.</li>
            <li>Analyze and research how to improve our services both offline and on the Platform, by using the data provided by you (such as in focus groups, reviews, valuations of the services, satisfaction survey, feedback or any kind, etc.).</li>
            <li>Provide you with personalised offers, promotions, discounts, suggestions, views and options in App, by email or by any other means of communication, including the use of cookies or other technologies for advertising in third party websites or apps, according to our cookies policy only if you have agreed to.</li>
            <li>Carry out promotional activities for the delivery of samples or free products inside the order placed by you, which may be of interest to promote Swift Logistics&apos; and our Partner&apos;s products or services.</li>
            <li>Carry out promotional activities such as contests, raffles, tenders, quizzes, competitions between users when they have subscribed and/or sent their data for such campaigns.</li>
            <li>Create custom audiences with Meta or other providers to reach out to you or other people with similar characteristics, who might be interested in using Swift Logistics services; you can manage your privacy in your Meta or other third-party platform settings.</li>
            <li>Use as commercial or marketing material published by you on your social networks profiles when Swift Logistics has been expressly mentioned by you (i.e. via hashtag). Swift Logistics might show you ads based on your interests. If you prefer not to see these ads, you can always opt out by emailing us at info@swiftlogisticsng.com or through managing your privacy in our settings: enter your Swift Logistics account &gt;&gt;Manage privacy&gt;&gt;personalised ads.</li>
          </ul>
          <p>We may personalize the marketing communications by using the User activity in our App (including your past orders) and the interaction with the App, online advertising, previous emails, promotions, etc. However, this personalisation is not made only by automated means, nor have any legal effect or affect the User similarly.</p>
          <p>Swift Logistics may use Push services on the User's mobile device to provide marketing communications. If the User does not want to receive these marketing communications, he / she shall unsubscribe in the notifications center. Please note that disabling Push notifications will also prevent the User from receiving notifications about the status of any order.</p>
          <h4 className="font-medium mt-4">Non-marketing purposes</h4>
          <ul className="list-disc pl-8">
            <li>Generate and provide you with receipts from each of your Orders placed through our App.</li>
            <li>Inform you about any incident on the Platform or the operation of the services, including incidents related to your orders. This information can be sent by e-mail or SMS messages, and any other messaging application, that may be used by you and Swift Logistics at any moment.</li>
            <li>Inform you about any changes to our Terms and Conditions, privacy policy, cookies policy, services, and more generally to inform you about any relevant non-marketing communications.</li>
            <li>Process incidents and claims with insurance companies in the event you report the occurrence of any damage or unforeseen events that may be covered by Swift Logistics' insurance policy.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">5.2 What kind of data do we hold about you and how is your personal data collected?</h3>
          <p>Swift Logistics holds the following data about you:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Information supplied directly by you:</strong>
              <ul className="list-disc pl-8 mt-2">
                <li><strong>Registration Data:</strong> the information provided by you when you create an account on the Swift Logistics Platform: username and e-mail.</li>
                <li><strong>User Profile Information:</strong> the information added by you on the Platform in order to be able to use Swift Logistics' service, e.g. your mobile phone number and delivery address. You can view and edit the personal data on your profile whenever you wish.</li>
                <li><strong>Payment information:</strong> payment information when processing your orders; card data will be processed by our electronic payment service providers, who will receive the data directly from you. Swift Logistics will have access to this information only to comply with the request of any competent authority. Swift Logistics offers its users the money to store the payment information or card details. In this case, the card details are tokenized (converted into a unique code). This token is usable in the Swift Logistics platform, allowing Swift Logistics to facilitate the use of the platform by preventing the introduction of card details each time you want to perform a payment and provide additional security, as the details of the card are never stored in our systems. You can erase this token at any moment in your profile area.</li>
                <li><strong>Additional information:</strong> any information that you could supply to Swift Logistics for other purposes, e.g. your photograph or the billing address in case you have been asked to receive invoices from Swift Logistics.</li>
                <li><strong>Information about previous communications with Swift Logistics:</strong> information supplied by you for the resolution of any queries or complaints about the use of the platform, whether through the contact form (website: swiftlogisticsng.com&gt;&gt;Contact us&gt;&gt;Policies, App: Help&gt;&gt;Not related to an order&gt;&gt;Policies), by e-mail or by phone through customer service.</li>
                <li><strong>Information regarding any accidents:</strong> information of any of the parties involved in the provision of services through the Platform for the purpose of making insurance claims or carrying out any other actions with the insurance companies contracted by Swift Logistics.</li>
                <li><strong>Information of conversations held with Swift Logistics:</strong> Transcription and recording of conversations for the processing of incidents, queries or other consultations that may be made to guarantee and improve the quality of our services and for security reasons.</li>
                <li><strong>Information on Communications:</strong> communications exchanged between you and the Couriers on the chat system provided on the Platform whenever it is necessary to address any incident or discussion between Users and Couriers, or to comply with any request made by authorities. Swift Logistics will never access the communications if it is not strictly necessary and will always ensure the privacy of its users and the confidentiality of all information exchanged on its platform.</li>
                <li><strong>Any additional information that you provide in your requests, comments or questions.</strong></li>
              </ul>
            </li>
            <li><strong>Information indirectly supplied by Users:</strong>
              <ul className="list-disc pl-8 mt-2">
                <li><strong>Data arising from the Use of the Platform:</strong> Swift Logistics collects the data arising from your Use of the Platform every time you interact with the Platform.</li>
                <li><strong>Data on the application and the device:</strong> Swift Logistics stores data on the device and the Application used by you to access the services:
                  <ul className="list-disc pl-8 mt-2">
                    <li>the IP address used by you to connect to the Internet using your computer or mobile phone, and to prevent fraudulent misappropriation or unauthorized access to your account by third parties,</li>
                    <li>information about your computer or mobile phone, such as your Internet connection, browser type, version and operating system, and type of device,</li>
                    <li>the full uniform resource locator (URL) Clickstream (the information related with your navigation through our website or the Application, links followed, etc.), including date and time,</li>
                    <li>data from your account: information on the orders made by you, as well as feedback and/or comments made by you,</li>
                    <li>your browsing history and preferences.</li>
                  </ul>
                </li>
                <li><strong>Data arising from the User's origin:</strong> if you arrive at the Swift Logistics Platform through an external source (such as a link from another website or a social network, if you have authorised it on those websites), Swift Logistics collects data on the source from which you arrived.</li>
                <li><strong>Data resulting from the management of incidents:</strong> if you contact the Swift Logistics Platform through the Contact Form( website: swiftlogisticsng.com&gt;&gt;Contact us&gt;&gt;Policies or App: Help&gt;&gt;Not related to an order&gt;&gt;Policies), Swift Logistics Chat or on Swift Logistics' phone number, Swift Logistics will collect the messages received in the format used by you and may use and store them to manage current or future incidents.</li>
                <li><strong>Data arising from "cookies":</strong> Swift Logistics uses its own and third-party cookies to facilitate browsing by its users and for statistical purposes, among others (please refer to Cooky Policy for more details).</li>
                <li><strong>Geolocation Data:</strong> if you have authorised this, Swift Logistics will collect data relating to your location, including the real-time geographic location of your computer or mobile device.</li>
                <li><strong>Data resulting from external third parties:</strong>
                  <ul className="list-disc pl-8 mt-2">
                    <li>Swift Logistics collects personal data or information from external third parties only if you authorise such third parties to share that information with Swift Logistics. For example, if you create an account through your Meta or Google account, these platforms could disclose to us your personal data that can be found on your Meta/Google profile (such as name, gender or age).</li>
                    <li>If you choose to send messages to us from social media networks (including Twitter, Meta and WhatsApp), we will collect that information you provide to us for the purposes set out in this privacy policy, including responding to your inquiry, providing you with customer support and resolving issues.</li>
                  </ul>
                </li>
                <li><strong>At Swift Logistics your privacy is our top priority.</strong> We want to remind you that Swift Logistics will never ask for an ID Card or related documents to verify your identity. Instead, we use secure and less intrusive methods to ensure your privacy. If you ever receive a request for personal documentation, such as an ID Card or any other related document, please, do not share it. In those cases, reach out to us immediately for verification and assistance. You can contact us through a form or email us to info@swiftlogisticsng.com.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">5.3 What are the recipients of your data and why are we communicating it?</h3>
          <p>Swift Logistics warrants that all commercial partners, technicians, suppliers or independent third parties are bound by contractually binding promises to process the information shared with them in accordance with Swift Logistics' indications, this Privacy Policy and the applicable data protection legislation.</p>
          <p>We will not disclose your personal data to any third party who does not act under our instructions and no communication will involve selling, renting, sharing or in any other way revealing customers' personal information for commercial purposes in breach of the commitments made in this Privacy Policy.</p>
          <p>When carrying out an order, data may be shared with:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>The Courier who carries out the task of collecting and delivering the product.</li>
            <li>The establishment or venue in charge of selling the product, if you have requested the purchase of a product. If you contact the above-mentioned providers directly and give them your data directly, Swift Logistics will not be responsible for the providers' use of such data.</li>
            <li>The Customer Care Services contracted by Swift Logistics for the purpose of warning you of any possible incidents or asking why negative feedback has been given; data will be used to manage any incidents that may occur during the provision of the services.</li>
            <li>The payment Platform and payment service providers so that the amount can be charged to your account.</li>
            <li>Telecommunications service providers, when they are used to sending communications regarding orders or incidents relating to orders.</li>
            <li>Providers rendering satisfaction survey services on Swift Logistics' behalf.</li>
          </ol>
          <p><strong>Sharing your data with third parties:</strong></p>
          <p>To continue providing the services offered through the Platform, Swift Logistics may share your certain personal data with:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Service providers:</strong> service providers that send parcels, carry out orders and/or resolve incidents with deliveries have access to your personal information as may be necessary only to carry out their functions. They must process the said personal information as provided in this Privacy Policy and in the applicable data protection legislation.</li>
            <li><strong>Payment Service Providers:</strong> When you enter your card number on the App, this is stored directly by the Payment Platforms contracted by Swift Logistics, which allows payment to be charged to your account. Payment service providers have been chosen based on their security measures and in any event complying with the security measures stipulated in the payment service legislation, and they are PCI Compliant under the Payment Card Industry Data Security Standard or PCI DSS. Swift Logistics does not store such data at any event.</li>
            <li><strong>Service providers for fraud control purposes:</strong> Swift Logistics will share your data with fraud control service providers to assess the risk of the transactions carried out.</li>
            <li><strong>Service providers for the anonymisation of some data:</strong> In order to prevent the misuse of your data by third-party service providers, your data may be being anonymised so that it can be used solely for the provision of the service. For example, Swift Logistics may assign your telephone numbers to third parties to anonymise them and provide them in this format to the providers used to carry out the services contracted by you.</li>
            <li><strong>Security companies and Law Enforcement Forces and Agencies:</strong> Swift Logistics may disclose personal data on its customers' accounts if such disclosure is necessary to comply with the law, to enforce or apply the "Terms of Use'' or to protect Swift Logistics', its users' or third parties' rights, property or safety. It includes the exchange of information with other companies (for example, Swift Logistics uses Google's reCAPTCHA Enterprise service to protect users from cyber-attacks or threats to their accounts) and organisations and Law Enforcement Forces and Agencies to protect against fraud and reduce credit risk.</li>
            <li><strong>Call center and incident management services:</strong> In order to provide Customer Service and call centers, actions to measure your degree of satisfaction and the provision of administrative support services, your data may be disclosed to companies located outside Nigeria.</li>
            <li><strong>Telecommunications services:</strong> In order to be able to provide you with telephone contact services, Swift Logistics may contact telecommunications companies that provide secure lines and systems for the purpose of contacting you.</li>
            <li><strong>Companies in the Swift Logistics group:</strong> To be able to provide its services, Swift Logistics may transfer your certain personal data to subsidiaries, based on the geographical area from which users request our services and to Delivery Hero GmbH. When you register on the Platform from any country in which Swift Logistics operates, your data is stored on Swift Logistics' database, which is located in Ireland and belongs to the Spanish company Swift Logisticsapp23, S.A. In the case of subsidiaries located outside the European Economic Area, the data will be transferred, using the systems established by the European Commission and the GDPR, to countries with an appropriate personal data protection level or through contracts approved by the European Commission establishing and guaranteeing the rights of data subjects.</li>
            <li><strong>Delivery Hero group companies:</strong> We are part of an international group of companies with legal entities in many parts of the world, including our group's headquarters located with Delivery Hero SE in Berlin, Germany. In order to utilise our resources efficiently and ensure that our business processes function properly, we utilise our group-wide shared technological support services that sometimes necessitate sharing personal data with our parent company, Delivery Hero SE. Delivery Hero group companies are bound by strict intra-group data transfer agreements ascertaining compliance with data protection requirements whenever sharing personal data with group companies.</li>
            <li><strong>Social media connected by Users:</strong> If you connect your Swift Logistics account to other social media or to a third-party platform, Swift Logistics may use the information provided to such social media or third party in compliance with the privacy policy of the social media or third-party platform in question.</li>
            <li><strong>Third parties are associated with Swift Logistics for the purposes of commercial communications:</strong> Swift Logistics may transfer your personal data to third parties associated with Swift Logistics, provided that you have given your express informed and unequivocal consent to such transfer of data and that you are aware of the purpose and recipient of such transfer.</li>
            <li><strong>Changes of ownership:</strong> If Swift Logistics' ownership changes or most of its assets are acquired by a third party, you are informed that Swift Logistics will transfer your data to the acquiring organisations to continue to provide the services subject to the processing of data. As Swift Logistics keeps growing continuously, we may buy or sell business units, assets, shares or legal entities, so data subjects' information may also be transferred. That information, when acquired by Swift Logistics, shall be processed as any other information as described in our privacy policy. You acknowledge that such a transfer may occur and that we will be allowed to use your personal information for any of the purposes described in this Privacy Policy. The new file controller will inform Users of its identification data. Swift Logistics states that it will comply with its duty of information and it shall inform Users of the change of file controller if and when this happens. This processing shall be carried out under the contract entered into with Swift Logistics.</li>
            <li><strong>Insurance companies:</strong> Swift Logistics may provide your data to those insurers and insurance brokers it collaborates with, for the management and processing of claims and losses arising from the activity carried out by Swift Logistics and the parties that collaborate with it.</li>
          </ol>
          <p>Your data will not be disclosed to any third party unless:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>This is necessary to provide the services requested if Swift Logistics is collaborating with third parties.</li>
            <li>If Swift Logistics has your express and unambiguous authorisation.</li>
            <li>Where this has been requested by a competent authority pursuant to its functions (in order to investigate, prevent or take action in relation to illegal actions).</li>
            <li>Finally, where required by law.</li>
          </ol>
          <p><strong>Sharing your data with Swift Logistics Partners</strong></p>
          <p>Swift Logistics may share your data also with some of Swift Logistics' top Partners and only under some certain conditions:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Having obtained your expressed consent via consent checkbox which may appear (a) at the first order made by you or (b) in each order made by you previously to proceed with the check-out when placing an order through the Partner store. Once giving your consent, you will be able to withdraw it at any time, using Contact Form (website: swiftlogisticsng.com&gt;&gt;Contact us&gt;&gt;Policies or App: Help&gt;&gt;Not related to an order&gt;&gt;Policies).</li>
            <li>Having signed a Data Sharing Agreement with the Partner and ensuring that all legal, safety and technical measures are met.</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">5.4 How long will we keep your data?</h3>
          <p>Swift Logistics shall retain your data for the duration of the contractual relationship and, after this has come to an end, for the period established by law filing or defending the appropriate legal actions. This is established at a maximum of fifteen (15) years in order to comply with Swift Logistics' legal obligations – which include the duty to assist the security forces as necessary in the investigation and prosecution of crimes pursuant to the higher interest of public safety – and defend itself or take any action in relation to criminal, tax and social security matters.</p>
          <p>The said period may be shorter depending on the legal provision applicable to each purpose of data processing, as established in the table of retention periods set forth in Annex II.</p>
        </div>
      </div>
    ),
  },
  {
    title: '6. Useful Information if you are a COURIER',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">6.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process the personal data of Couriers for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>For legal purposes.</li>
            <li>For contractual purposes.</li>
            <li>For security purposes.</li>
            <li>For statistics and research purposes.</li>
          </ul>
          <h4 className="font-medium mt-4">Legal purposes</h4>
          <ul className="list-disc pl-8">
            <li>Detect and investigate fraud and possible crimes committed against our Platform and all the users.</li>
            <li>Comply with the legislation in case any legal regulations oblige us to keep your data for a defined period (see Annex II on data retention).</li>
            <li>Manage and execute your request(s) to exercise the rights established in the NDPR and other local regulations.</li>
            <li>File, submit and defend legal action against any entity of our Group.</li>
            <li>Manage and execute your claims related to an Order, problems with the delivery and different sorts of general incidents generated using the Platform.</li>
          </ul>
          <h4 className="font-medium mt-4">Contractual purposes</h4>
          <ul className="list-disc pl-8">
            <li>Manage Swift Logistics' activity, enabling you to access and communicate with the Swift Logistics platform so as to provide their services through it.</li>
            <li>Provide informative sessions to you before the starting of services (focus groups) and to comply with the services offered by the providers through the technological platform, and with obligations arising from the contractual relationship.</li>
            <li>Studying the use of the platform performed by you and performance of focus groups with you to understand their opinion and feedback about the services provided.</li>
            <li>Provide you with the equipment and material needed to provide the services, if requested.</li>
            <li>Activate the insurance in case of an incident of you during the delivery of an Order.</li>
            <li>Assign Orders to you and show to the Customers your position while delivering their Orders.</li>
            <li>Assist you during the performance of services by contacting customer centres.</li>
            <li>Notify you concerning changes or updates to our services, terms and conditions, privacy policy, cookies policy and any other corporate document that may affect them in a substantial way.</li>
          </ul>
          <h4 className="font-medium mt-4">Security purposes</h4>
          <ul className="list-disc pl-8">
            <li>Control visitors' access to Courier center's facilities and ensure your goods and facilities' safety.</li>
            <li>Use device, location, profile, usage, and other data to prevent and detect improper payments, money laundering, especially when you pay by cash.</li>
            <li>When requested by any authority, administration or court, collaborate with Public Authorities whenever they request Swift Logistics information useful to the aim of their investigation (e.g. anti-drug projects, anti-fraud projects, anti-terrorism projects).</li>
            <li>Defend Swift Logistics' interests in case of a conflict between the parties related to the interpretation or execution of the contract.</li>
            <li>Comply with the compensation, accounting, tax and economic obligations.</li>
          </ul>
          <h4 className="font-medium mt-4">For statistics and research purposes</h4>
          <ul className="list-disc pl-8">
            <li>Carry out statistical and financial calculations based on aggregate and non-identifiable data.</li>
            <li>Send voluntary and anonymous questionnaires, as well as surveys, competitions and communications of your interest, for the purpose of assessing the quality of the relationship and any opinions that you may have.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">6.2 What kind of data do we hold about you and how is your personal data collected?</h3>
          <p>Swift Logistics holds the following data about you:</p>
          <ul className="list-disc pl-6">
            <li>Name and surnames: pursuit of contractual relationship.</li>
            <li>Identity Card (DNI) / Passport No. Foreign resident's card: pursuit of the contractual relationship – billing and legal compliance.</li>
            <li>Social Security number: payment management and legal compliance.</li>
            <li>Bank and billing information: information for billing purposes, current account or credit card numbers, if necessary to fulfil contractual obligations or manage purchases, or services.</li>
            <li>Photo: road safety, account fraud prevention and public safety.</li>
            <li>Image: video surveillance and access control when entering one of the company's sites.</li>
            <li>Voice (without biometrics) from Customer service calls: pursuit of contractual relationship and legal compliance.</li>
            <li>Signature: pursuit of contractual relationship.</li>
            <li>Date of birth: legal compliance.</li>
            <li>Residence details (resident/non-resident): legal compliance.</li>
            <li>Accident insurance processing details: accident insurance management.</li>
            <li>Driving license: road safety.</li>
            <li>Own vehicle: pursuit of contractual relationship.</li>
            <li>Vehicle insurance: pursuit of contractual relationships.</li>
            <li>Geolocation: management of the service provider's location during the provision of services for road safety reasons and in order to comply with tax and accounting obligations.</li>
            <li>Phone number and Email (Contact data): Pursuit of contractual relationship and be able to communicate with the Courier by sending some communications through different channels such as: SMS, email, WhatsApp messages, etc.</li>
            <li>Internet connection: pursuit of contractual relationships.</li>
            <li>Conversation information: Transcription and recording of conversations held between Couriers and Swift Logistics to guarantee and improve the quality of our services, processing of incidents and for security reasons.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">6.3 What are the recipients of your data and why are we communicating it?</h3>
          <p>Your data may be disclosed to third parties only where necessary for the establishment, performance and termination of the contractual relationship with Swift Logistics. We never disclose your data to unauthorised third parties. All data recipients must meet the legal data protection requirements and prove their data protection level with appropriate proofs.</p>
          <p>The third-party recipients of the Data include:</p>
          <ul className="list-disc pl-6">
            <li>Establishments with which Swift Logistics has a commercial contract</li>
            <li>Users who have placed an order whose delivery will be provided by you</li>
            <li>External service providers that provide commercial offers with benefits and/or discounts for you</li>
            <li>Advisers and consultants for the pursuit of accounting, labour, tax, insurance, legal and technical activities</li>
            <li>Government bodies for regulatory matters (tax authority, social security system, etc.)</li>
            <li>State security forces, courts, mediation and arbitration bodies</li>
          </ul>
          <p>During the performance of the relationship and to ensure that you can carry out your activity, the Data will be disclosed:</p>
          <ul className="list-disc pl-6">
            <li>To those establishments with which Swift Logistics has commercial T&Cs</li>
            <li>Those users who have placed an order which you have agreed to carry out</li>
            <li>External service providers that provide commercial offers with benefits and/or discounts for you</li>
          </ul>
          <p>Swift Logistics hereby informs you that the Data may be disclosed to companies in the Swift Logistics Company in connection with the purposes described previously.</p>
          <p>The Data may also be transferred outside Nigeria to group companies or third parties in charge of the filing and management of computer data solely for purposes related to the management of the contractual relationship between the Parties and fully in accordance with the applicable data protection legislation. Swift Logistics hereby reports that it has taken the necessary measures to ensure that the disclosure of your data is carried out in accordance with the above-mentioned legislation.</p>
          <p>Companies in Swift Logistics: To be able to provide its services, Swift Logistics may transfer your certain personal data to subsidiaries based on the geographical area from which users request our services and to Delivery Hero GmbH. When you register on the Platform from any country in which Swift Logistics operates, your data is stored on Swift Logistics' database. In the case of subsidiaries located outside the European Economic Area, the data will be transferred, using the systems established by the European Commission and the GDPR, to countries with an appropriate personal data protection level or through contracts approved by the European Commission establishing and guaranteeing the rights of data subjects.</p>
        </div>
        <div>
          <h3 className="font-semibold">6.4 How long will we keep your data?</h3>
          <p>Swift Logistics shall retain your data for the duration of the contractual relationship and, after this has come to an end, for the period established by law filing or defending the appropriate legal actions. This is established at a maximum of fifteen (15) years in order to comply with Swift Logistics' legal obligations – which include the duty to assist the security forces as necessary in the investigation and prosecution of crimes pursuant to the higher interest of public safety – and defend itself or take any action in relation to criminal, tax and social security matters.</p>
          <p>The said period may be shorter depending on the legal provision applicable to each purpose of data processing, as established in the table of retention periods set forth in Annex II.</p>
        </div>
      </div>
    ),
  },
  {
    title: '7. Useful Information if you are a PARTNER',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">7.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process the personal data of Partners for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>For legal purposes.</li>
            <li>For contractual purposes.</li>
            <li>For security purposes.</li>
            <li>For statistics and research purposes.</li>
          </ul>
          <h4 className="font-medium mt-4">Legal purposes</h4>
          <ul className="list-disc pl-8">
            <li>Detect and investigate fraud and possible crimes committed against our Platform and all the users.</li>
            <li>Comply with the legislation in case any legal regulations oblige us to keep your data for a defined period (see Annex II on data retention).</li>
            <li>Manage and execute your request(s) to exercise the rights established in the NDPR and other local regulations.</li>
            <li>File, submit and defend legal action against any entity of our Group.</li>
            <li>Manage and execute your claims related to an Order, problems with the delivery and different sorts of general incidents generated using the Platform.</li>
          </ul>
          <h4 className="font-medium mt-4">Contractual purposes</h4>
          <ul className="list-disc pl-8">
            <li>Grant you the possibility to create your own account and maintain the business relationship with Swift Logistics.</li>
            <li>Provide you with customer service to answer your questions or consultations.</li>
            <li>Manage Swift Logistics' activity, enabling you to access and communicate with the Swift Logistics platform so as to provide their services through it.</li>
            <li>Provide informative sessions to you before the starting of services (focus groups) and to comply with the services offered by the providers through the technological platform, and with obligations arising from the contractual relationship.</li>
            <li>Studying the use of the platform performed by you and performance of focus groups with you to understand their opinion and feedback about the services provided.</li>
            <li>Provide you with the equipment and material needed to provide the services, if requested.</li>
            <li>Assign Orders to you and show to the Customers your position while delivering their Orders.</li>
            <li>Assist you during the performance of services by contacting customer centres.</li>
            <li>Notify you concerning changes or updates to our services, terms and conditions, privacy policy, cookies policy and any other corporate document that may affect them in a substantial way.</li>
            <li>Process payments and manage billing for services provided through the Platform.</li>
            <li>Facilitate communication between Partners and Users regarding orders and services.</li>
          </ul>
          <h4 className="font-medium mt-4">Security purposes</h4>
          <ul className="list-disc pl-8">
            <li>Control visitors' access to Partner facilities and ensure your goods and facilities' safety.</li>
            <li>Use device, location, profile, usage, and other data to prevent and detect improper payments, money laundering, especially when you receive payments.</li>
            <li>When requested by any authority, administration or court, collaborate with Public Authorities whenever they request Swift Logistics information useful to the aim of their investigation (e.g. anti-drug projects, anti-fraud projects, anti-terrorism projects).</li>
            <li>Defend Swift Logistics' interests in case of a conflict between the parties related to the interpretation or execution of the contract.</li>
            <li>Comply with the compensation, accounting, tax and economic obligations.</li>
            <li>Monitor transactions and activities to prevent fraudulent activities and ensure platform security.</li>
          </ul>
          <h4 className="font-medium mt-4">For statistics and research purposes</h4>
          <ul className="list-disc pl-8">
            <li>Carry out statistical and financial calculations based on aggregate and non-identifiable data.</li>
            <li>Send voluntary and anonymous questionnaires, as well as surveys, competitions and communications of your interest, for the purpose of assessing the quality of the relationship and any opinions that you may have.</li>
            <li>Analyze business performance and market trends to improve services.</li>
            <li>Conduct research to enhance the Platform's functionality and user experience.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">7.2 What kind of data do we hold about you and how is your personal data collected?</h3>
          <p>Swift Logistics holds the following data about Partners:</p>
          <ul className="list-disc pl-6">
            <li><strong>Business Information:</strong> Company name, business registration number, tax identification number, business license details.</li>
            <li><strong>Contact Information:</strong> Business address, phone number, email address, website URL.</li>
            <li><strong>Representative Details:</strong> Name and contact information of authorized representatives or key personnel.</li>
            <li><strong>Financial Information:</strong> Bank account details for payment processing, billing information, transaction history.</li>
            <li><strong>Service Details:</strong> Types of services offered, operating hours, service areas, capacity information.</li>
            <li><strong>Performance Data:</strong> Order completion rates, customer ratings, delivery times, service quality metrics.</li>
            <li><strong>Communication Records:</strong> Correspondence with Swift Logistics, customer service interactions, support tickets.</li>
            <li><strong>Platform Usage Data:</strong> Login information, platform navigation patterns, feature usage statistics.</li>
            <li><strong>Location Data:</strong> Business location coordinates, service area boundaries, real-time location during service provision.</li>
            <li><strong>Insurance Information:</strong> Insurance policy details, coverage information, claims history.</li>
            <li><strong>Compliance Documents:</strong> Licenses, permits, certifications required for business operations.</li>
            <li><strong>Marketing Preferences:</strong> Communication preferences, promotional material consent, newsletter subscriptions.</li>
            <li><strong>Technical Data:</strong> Device information, IP addresses, browser details used to access the Platform.</li>
            <li><strong>Customer Interaction Data:</strong> Reviews, feedback, complaints, and resolutions related to Partner services.</li>
            <li><strong>Contractual Information:</strong> Service agreements, terms and conditions acceptance, contract modifications.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">7.3 What are the recipients of your data and why are we communicating it?</h3>
          <p>Your data may be disclosed to third parties only where necessary for the establishment, performance and termination of the contractual relationship with Swift Logistics. We never disclose your data to unauthorised third parties. All data recipients must meet the legal data protection requirements and prove their data protection level with appropriate proofs.</p>
          <p>The third-party recipients of Partner data include:</p>
          <ul className="list-disc pl-6">
            <li><strong>Users and Customers:</strong> Basic business information (name, location, services offered) is shared with Users who request services from Partners.</li>
            <li><strong>Couriers:</strong> Relevant order and location information is shared with Couriers assigned to collect from or deliver to Partner locations.</li>
            <li><strong>Payment Service Providers:</strong> Financial information necessary for processing payments and managing transactions.</li>
            <li><strong>Insurance Companies:</strong> Relevant information for processing claims and managing insurance coverage.</li>
            <li><strong>Regulatory Bodies:</strong> Information required for compliance with local business regulations, tax authorities, and licensing bodies.</li>
            <li><strong>Legal Advisors:</strong> Information necessary for legal compliance, contract management, and dispute resolution.</li>
            <li><strong>Technology Service Providers:</strong> Data necessary for platform maintenance, security, and technical support.</li>
            <li><strong>Marketing Partners:</strong> With explicit consent, information for promotional activities and business development opportunities.</li>
            <li><strong>Auditing Firms:</strong> Information required for financial audits and compliance verification.</li>
            <li><strong>Government Authorities:</strong> Information required by law enforcement, tax authorities, and other regulatory bodies.</li>
          </ul>
          <p>During the performance of the business relationship, Partner data will be disclosed:</p>
          <ul className="list-disc pl-6">
            <li>To Users who place orders through Partner establishments</li>
            <li>To Couriers who need to coordinate with Partners for order fulfillment</li>
            <li>To customer service teams for incident resolution and support</li>
            <li>To payment processors for transaction management</li>
            <li>To quality assurance teams for service monitoring and improvement</li>
          </ul>
          <p>Swift Logistics hereby informs Partners that data may be disclosed to companies in the Swift Logistics Group in connection with the purposes described previously.</p>
          <p>Partner data may also be transferred outside Nigeria to group companies or third parties in charge of data management solely for purposes related to the business relationship and fully in accordance with applicable data protection legislation. Swift Logistics has taken necessary measures to ensure that data disclosure is carried out in accordance with applicable legislation.</p>
        </div>
        <div>
          <h3 className="font-semibold">7.4 How long will we keep your data?</h3>
          <p>Swift Logistics shall retain Partner data for the duration of the business relationship and, after termination, for the period established by law for filing or defending legal actions. This is established at a maximum of fifteen (15) years to comply with Swift Logistics' legal obligations – including the duty to assist security forces in investigations and prosecution of crimes pursuant to public safety interests – and to defend itself or take action in relation to criminal, tax, and regulatory matters.</p>
          <p>The retention period may be shorter depending on the legal provision applicable to each purpose of data processing, as established in the table of retention periods set forth in Annex II.</p>
          <p>Specific retention periods for Partner data:</p>
          <ul className="list-disc pl-6">
            <li><strong>Financial Records:</strong> Retained for 7 years after contract termination for tax and accounting purposes.</li>
            <li><strong>Performance Data:</strong> Retained for 3 years after contract termination for business analysis and improvement.</li>
            <li><strong>Communication Records:</strong> Retained for 5 years after contract termination for dispute resolution and legal compliance.</li>
            <li><strong>Compliance Documents:</strong> Retained as required by applicable regulations, typically 7-10 years.</li>
            <li><strong>Marketing Data:</strong> Retained until consent is withdrawn or for 2 years after last interaction, whichever is sooner.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: '8. Useful Information if you are an INVESTOR',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">8.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process your personal data for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>Fulfil the requirements of Swift Logistics' Compliance Model for carrying out an Investors Due Diligence procedure.</li>
            <li>Formalise the relationship with you as an Investor.</li>
            <li>Notify you concerning corporate matters and inform you about Swift Logistics' results.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">8.2 What kind of data do we hold about you and how is your personal data collected?</h3>
          <ul className="list-disc pl-6">
            <li><strong>Registration Data:</strong> the information provided by you when you create an account on the Swift Logistics Platform: username and e-mail.</li>
            <li><strong>User Profile Information:</strong> phone number and email; pursuit of the business relationship and be able to communicate with the Partner or the Investor by sending some communications through different channels such as: SMS, email.</li>
            <li><strong>Information about conversations conducted with Swift Logistics:</strong> transcription and recording of conversations for the processing of incidents, queries or other consultations that may be made to guarantee and improve the quality of our services and for security reasons.</li>
            <li><strong>Any additional information that you provide in your requests, comments or questions.</strong></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">8.3 How long will we keep your data?</h3>
          <p>Swift Logistics shall retain your data for the duration of the contractual or investment relationship and, after this has come to an end, for the period established by law for filing or defending the appropriate legal actions. This is established at a maximum of fifteen (15) years in order to comply with Swift Logistics' legal obligations – including the duty to assist the security forces as necessary in the investigation and prosecution of crimes pursuant to the higher interest of public safety – and to defend itself or take action in relation to criminal, tax and social security matters.</p>
          <p>The retention period may be shorter depending on the legal provision applicable to each purpose of data processing, as established in the table of retention periods set forth in Annex II.</p>
        </div>
      </div>
    ),
  },
  {
    title: '10. Useful Information if you are a PROSPECT',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">10.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process your personal data for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>Process your requests to obtain the products and/or services offered by Swift Logistics and manage the prospective relationship between both parties.</li>
            <li>Carry out marketing, communications, and research activities regarding Swift Logistics' products and/or services that are similar to those included in your request.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">10.2 What kind of data do we hold about you and how is your personal data collected?</h3>
          <ul className="list-disc pl-6">
            <li><strong>Registration Data:</strong> the information provided by you when you request information relating to our products and/or services.</li>
            <li><strong>Any additional information that you provide in your requests, comments or questions.</strong></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">10.3 How long will we keep your data?</h3>
          <p>Swift Logistics shall retain your data while it is necessary to provide you with the relevant answer to any question you may ask and, after this has come to an end, for the period established by law for filing or defending the appropriate legal actions.</p>
          <p>The said period may vary depending on the legal provision applicable to each purpose of data processing, as established in the table of retention periods set forth in Annex II.</p>
        </div>
      </div>
    ),
  },
  {
    title: '11. Useful Information if you are a WEBSITE VISITOR',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">11.1 What are the data processing purposes and the legitimate basis of the processing?</h3>
          <p>Swift Logistics will process your personal data for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>Follow up your comments left on Swift Logistics Website or our Blog. This may include, depending on your consent, the notification of new comments on the article commented by you, and the information on new entries on the blog or our website.</li>
            <li>Provide you with the answer regarding your request.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">11.2 What kind of data do we hold about you and how is your personal data collected?</h3>
          <ul className="list-disc pl-6">
            <li><strong>Registration Data:</strong> the information provided by you when you request information relating to our products and/or services.</li>
            <li><strong>Any additional information that you provide in your requests, comments or questions.</strong></li>
            <li><strong>Data derived from cookies:</strong> Swift Logistics uses its own- and third-party cookies to facilitate navigation for its users and for statistical purposes.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">11.3 How long will we keep your data?</h3>
          <p>Swift Logistics shall retain your data while it is necessary to provide you with the relevant answer to any question you may ask and, after this has come to an end, for the period established by law for filing or defending the appropriate legal actions.</p>
          <p>The said period may vary depending on the legal provision applicable to each purpose of data processing, as established in the table of retention periods set forth in Annex II.</p>
          <p>Any comment you may post on our articles published on Swift Logistics Website and/or Blog may be kept indefinitely while the post is still published.</p>
        </div>
      </div>
    ),
  },
  {
    title: '12. Do we proceed with international transfer of data?',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">12.1 International Data Transfers</h3>
          <p>When choosing service providers, Swift Logistics may transfer your data outside the borders of Nigeria. In such cases, Swift Logistics will ensure before sending the data, that such service providers are in compliance with the standard clauses, minimum security standards and other data transfer rules established by the Nigeria Data Protection Bureau and that they always process the data in accordance with Swift Logistics' instructions.</p>
          <h4 className="font-medium mt-4">Basis and instructions regarding the international transfer</h4>
          <p>Swift Logistics may have a contractual relationship with service providers under which they agree to comply with Swift Logistics' instructions and put in place the necessary security measures to protect your data.</p>
          <p>Where Swift Logistics is compelled to carry out further processing by Nigerian law, it shall inform the service provider of such legal requirements prior to the processing. Swift Logistics may subsequently change, supplement or replace the instructions initially given to the service provider by means of individual instructions and is entitled to issue appropriate instructions at any time. This includes, among other things, instructions regarding the correction, deletion and prohibition of data. All instructions issued shall be documented by both Swift Logistics and the service provider.</p>
          <h4 className="font-medium mt-4">Requirements directed to service providers</h4>
          <p>Service providers may only collect, process or use data pursuant to a master's contract and in accordance with Swift Logistics' instructions. This applies to the transfer of personal data to a third country or an international organization.</p>
          <p>External service providers are required to inform Swift Logistics if they consider that an instruction issued by Swift Logistics is in contravention of the data protection legislation. Furthermore, service providers are entitled to suspend the execution of the instructions concerned until their confirmation or modification by Swift Logistics, and they have a duty to refuse to carry out any instructions that are clearly illegal.</p>
        </div>
      </div>
    ),
  },
  {
    title: '13. Do we proceed with automated decision making?',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">13.1 Automated Decision Making</h3>
          <p>Swift Logistics does not adopt any decision that could affect our User, Courier, or Driver significantly based solely on automated processing of their data (e.g. reordering from the stores where our Users have ordered in the past). The only decision-making processes of Swift Logistics are conducted by applying human intervention (e.g. defining the conditions that the User shall meet to be considered for an offer, such as location).</p>
          <h4 className="font-medium mt-4">Automated decisions for Couriers/Drivers</h4>
          <ul className="list-disc pl-6">
            <li>Decisions are not made solely on the basis of the automated processing of the personal data of the Couriers/Drivers, but, where appropriate, on the basis of an assessment of the performance of the service.</li>
            <li>Consumers or Stores have generated all parameters to be considered manually.</li>
            <li>All parameters and metrics used to make such decisions always and exclusively refer to the service and the execution of the Terms and Conditions, regardless of the Courier/Driver executing it.</li>
            <li>Profiles based on the personal data or personal characteristics of the Couriers/Drivers are not created, as described below.</li>
            <li>In no case are the attributes of the personality or of the non-professional sphere of the Couriers/Drivers considered.</li>
            <li>The results depend on previous and voluntary actions of the Couriers/Drivers.</li>
            <li>The results may be corrected if there has been an error and/or discrepancy between Couriers/Drivers and Swift Logistics.</li>
            <li>The Couriers/Drivers are not prevented from exercising any right.</li>
            <li>The Couriers/Drivers are not prevented from accessing a good or service.</li>
            <li>The Couriers/Drivers are not prevented from entering into a contract.</li>
          </ul>
          <h4 className="font-medium mt-4">User Segmentation</h4>
          <p>When using the application, Swift Logistics classifies Users based on the information provided by them about their usage of the application to adapt it to their needs and to improve it. The classification is conducted by solely using first party data. We use information that our Users provide us, such as their historical orders and popularity among new users to suggest similar stores that could be of their interest. This classification is only intended to ensure that our Users find relevant contents, Partners or offers, among others, that may be suitable according to their preferences, and will never have any legal effect on them or the provision of the services by Swift Logistics, the Partners or the Couriers/Drivers.</p>
          <p>Swift Logistics reserves the right to customise the content on its platform and adjust its fees based on various factors and/or information, including but not limited to the number of orders placed by the user prior to the current session, location data, order and delivery data. This process may involve user segmentation based on the data we collect from you, ensuring we can offer you the most personalised and relevant experience possible in our APP.</p>
          <p>We remind you that you have the right to not be subject to automated decision making in case you consider that user segmentation may have legal effects to you, by emailing us at info@swiftlogisticsng.com.</p>
        </div>
      </div>
    ),
  },
  {
    title: '14. Do we create profiles and/or segment users based on the collected data?',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">14.1 Profiling and Segmentation</h3>
          <p>When using the application, Swift Logistics classifies Users based on the information provided by them about their usage of the application to adapt it to their needs and to improve it.</p>
          <ul className="list-disc pl-6">
            <li>The classification is conducted by solely using first party data. We use information that our Users provide us, such as their historical orders and popularity among new users to suggest similar stores that could be of their interest.</li>
            <li>This classification is only intended to ensure that our Users find relevant contents, Partners or offers, among others, that may be suitable according to their preferences, and will never have any legal effect on them or the provision of the services by Swift Logistics, the Partners or the Couriers/Drivers.</li>
          </ul>
          <p>Swift Logistics reserves the right to customise the content on its platform and adjust its fees based on various factors and/or information, including but not limited to the number of orders placed by the user prior to the current session, location data, order and delivery data. This process may involve user segmentation based on the data we collect from you, ensuring we can offer you the most personalised and relevant experience possible in our APP.</p>
          <p>We remind you that you have the right to not be subject to automated decision making in case you consider that user segmentation may have legal effects to you, by emailing us at info@swiftlogisticsng.com.</p>
        </div>
      </div>
    ),
  },
  {
    title: '15. What security measures have been adopted?',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">15.1 Security Measures</h3>
          <p>Swift Logistics has taken the necessary steps recommended by the European Commission and the competent authority to maintain the required security level, according to the nature of the personal data processed and the circumstances of the processing, in order to avoid, to the extent possible and always in accordance with the state of the art, its alteration, loss or unauthorised access or processing. As mentioned above, the personal data supplied will not be disclosed to third parties without the data subject's prior authorisation.</p>
          <ul className="list-disc pl-6">
            <li>Technical and organizational measures are in place to protect your data from unauthorized access, alteration, disclosure, or destruction.</li>
            <li>Access to personal data is restricted to authorized personnel only, and all staff are trained on data protection and confidentiality obligations.</li>
            <li>Regular security audits and assessments are conducted to ensure ongoing compliance and effectiveness of security measures.</li>
            <li>Incident response procedures are established to address and mitigate any data breaches or security incidents promptly.</li>
          </ul>
          <p>If you have any questions about our security practices, please contact us at <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline">info@swiftlogisticsng.com</a>.</p>
        </div>
      </div>
    ),
  },
  {
    title: '16. Ethics Channel',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">16.1 Ethics Channel</h3>
          <p>Swift Logistics' Ethics Channel is an information system aimed at both employees and third parties, from which they can request information about the company's Compliance model and/or the internal regulations that develop it and/or report conduct or acts that may constitute a violation of the regulations to which Swift Logistics is subject, the Code of Ethics or any other internal regulations.</p>
          <ul className="list-disc pl-6">
            <li>Swift Logistics informs its employees and third parties that it will process the personal data provided in this context for different purposes:</li>
            <ul className="list-disc pl-8">
              <li>To process requests/complaints received through the complaints channel.</li>
              <li>To investigate the facts communicated/complained through this mechanism.</li>
              <li>Propose resolutions on communications and complaints related to possible criminal acts or breaches of regulations and ethics.</li>
              <li>Notify the competent authority of facts constituting criminal or administrative offenses and/or, where appropriate, take disciplinary action against an employee, as well as legal and/or contractual actions against partners, distributors, suppliers or other third parties with which it maintains relations.</li>
            </ul>
          </ul>
          <p>Swift Logistics declares that it has all the measures required by current regulations to ensure:</p>
          <ul className="list-disc pl-6">
            <li>The confidentiality of the identity of both the complainant and the reported, as well as any third party involved in the process.</li>
            <li>The confidentiality of the communication and documents that the complainant may have provided, as well as the unauthorized access to them.</li>
          </ul>
          <p>If our Data Subjects have any questions or would like to obtain more information, they can contact the department in charge through the following e-mail address: <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline">info@swiftlogisticsng.com</a></p>
          <p>For any exercise of data protection rights, or contact us at <a href="mailto:info@swiftlogisticsng.com" className="text-swift-purple underline">info@swiftlogisticsng.com</a></p>
        </div>
      </div>
    ),
  },
  {
    title: '17. Artificial Intelligence',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">17.1 Artificial Intelligence</h3>
          <p>We may use artificial intelligence technology, such as chatbots supported by large language models, as part of our customer service processes. In doing so, we maintain full control over your data and guarantee that it will not be shared with third parties for the purpose of training AI models.</p>
          <p>In order to effectively address and resolve your concerns, which are integral to the fulfilment of the service we offer, we process your data based on the legal grounds of 'performance of a contract' in accordance with the local legislation.</p>
          <p>Please, be assured that we will never share your sensitive personal information when using AI tools, as well as ensure that human intervention takes place in any artificial intelligence technology we may use.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Location Data',
    content: (
      <div className="space-y-4">
        <h3 className="font-semibold">18.How We Use Location Data</h3>
        <p>Swift Logistics collects location data from users and drivers to enable core features of the app, including:</p>
        <ul className="list-disc pl-6">
          <li>Matching users with nearby couriers</li>
          <li>Real-time order tracking and delivery updates</li>
          <li>Fraud prevention and security</li>
        </ul>
        <p>Location data is collected only with your permission and may be collected in the background (even when the app is closed or not in use) to ensure accurate and timely deliveries. Your location data may be shared with couriers, partners, and service providers as necessary to fulfill your delivery requests and improve our services.</p>
        <p>You can disable location permissions at any time in your device settings, but this may affect the app&apos;s functionality.</p>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const isSectionOpen = (index: number) => openSections.includes(index);

  return (
    <>
      <Navbar />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-black">
          <h1 className="text-4xl font-bold mb-8 text-center text-swift-purple">SWIFT LOGISTICS PRIVACY POLICY</h1>
          <p className="text-lg text-center mb-12 text-gray-600">Effective Date: May 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Index</h2>
          <ol className="list-decimal pl-6 space-y-1 mb-8">
            <li>Scope</li>
            <li>Summary of information</li>
            <li>Your Personal Data Rights</li>
            <li>Data Controller of Your Personal Data</li>
            <li>Useful Information if you are a USER</li>
            <li>Useful Information if you are a COURIER</li>
            <li>Useful Information if you are a PARTNER</li>
            <li>Useful Information if you are an INVESTOR</li>
            <li>Useful Information if you are a PROSPECT</li>
            <li>Useful Information if you are a WEBSITE VISITOR</li>
            <li>Do we proceed with international transfer of data?</li>
            <li>Do we proceed with automated decision making?</li>
            <li>Do we create profiles and/or segment users based on the collected data?</li>
            <li>What security measures have been adopted?</li>
            <li>Ethics Channel</li>
            <li>Artificial Intelligence</li>
            <li>Location Data</li>
          </ol>

          <div className="space-y-4">
            {sections.map((section, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleSection(idx)}
                >
                  <span>{section.title}</span>
                  <span>{isSectionOpen(idx) ? '-' : '+'}</span>
                </button>
                {isSectionOpen(idx) && (
                  <div className="px-6 py-4 bg-white">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 