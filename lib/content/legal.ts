/**
 * Ported verbatim from the 4Supplier mobile app's
 * `client/constants/legalContent.ts` — the app itself is the source of
 * truth for this legal content. Keep this file in sync with the app when
 * the Privacy Policy or Terms & Conditions change there.
 */

export type LegalSection = {
  heading: string
  body: string
}

export const LEGAL_LAST_UPDATED = "2026"

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    heading: "1. Introduction",
    body: `This Privacy Policy explains how 4Supplier ("4Supplier," "the App," "we," "us," or "our") collects, uses, discloses, and protects information when you use the 4Supplier mobile application and any related services (together, the "Service").

4Supplier is a mobile application operated by Nsians ("Nsians," the "Company," or the "Operator"). References in this Policy to "we," "us," or "our" mean Nsians acting as the operator of 4Supplier.

By creating an account, accessing, or using 4Supplier, you agree to the collection and use of information as described in this Privacy Policy.`,
  },
  {
    heading: "2. Scope",
    body: `4Supplier is a business-to-business (B2B) operational platform used by suppliers to manage their customers, products, orders, recurring deliveries, and delivery personnel. This Policy applies to three categories of users who may interact with the App:

• Suppliers — the primary account holders who use 4Supplier to run their delivery/order operations.
• Customers — individuals or businesses that receive products or deliveries from a supplier and may be invited to use a customer-facing portal within the App.
• Delivery Persons — individuals engaged by a supplier to fulfill and complete deliveries, who may be invited to use a delivery-facing portal within the App.

This Policy applies to all three roles unless a specific section states otherwise.`,
  },
  {
    heading: "3. Information We Collect",
    body: "",
  },
  {
    heading: "3.1 Account Information",
    body: `When a user registers or is invited to 4Supplier, we may collect: full name, email address, phone number, password (stored in hashed/encrypted form), profile photo/avatar, role (supplier, customer, or delivery person), and account verification data (such as one-time passcodes used to verify email addresses or complete registration).`,
  },
  {
    heading: "3.2 Supplier Information",
    body: `For supplier accounts, we may additionally collect: business/profile details entered by the supplier, business location(s) and addresses, currency and regional settings, and operational configuration settings (such as auto-cancellation rules for recurring orders).`,
  },
  {
    heading: "3.3 Customer Information",
    body: `Customer records are primarily created and maintained by suppliers within their own account, and may include: customer name, contact details (email, phone), one or more delivery addresses, order and subscription history, account balance/deposit information related to the supplier relationship, and any notes or profile details the supplier chooses to record. Where a customer is invited to use the customer-facing portal directly, the customer may also manage or update parts of their own profile and addresses.

Important: Customer information in 4Supplier is entered and controlled primarily by the supplier, not by 4Supplier or Nsians. See Section 5 and the corresponding responsibilities described in our Terms & Conditions.`,
  },
  {
    heading: "3.4 Delivery Person Information",
    body: `For delivery person accounts or profiles created by a supplier, we may collect: name, contact details, account credentials, assigned locations or delivery zones, and records of deliveries assigned, completed, or reassigned.`,
  },
  {
    heading: "3.5 Order and Delivery Information",
    body: `We collect information relating to orders placed or scheduled through the App, including: product/line-item details, quantities and pricing, order type (one-time or recurring/subscription), delivery schedule and frequency, delivery status (e.g., pending, assigned, completed, cancelled), the delivery person assigned to an order, and, where applicable, a record of whether payment for an order has been marked as collected. Payment collection is recorded within the App for operational and bookkeeping purposes; 4Supplier does not process card or bank payments through an integrated online payment gateway.`,
  },
  {
    heading: "3.6 Product Information",
    body: `Product and catalog data entered by suppliers, including product names, descriptions, categories, pricing, and images uploaded by the supplier.`,
  },
  {
    heading: "3.7 Device and Technical Information",
    body: `We may automatically collect limited technical information necessary for the App to function and remain secure, such as device type, operating system and version, app version, and unique device or installation identifiers used for authentication sessions.`,
  },
  {
    heading: "3.8 Log Information",
    body: `Our servers may automatically record technical logs when the App is used, such as request timestamps, IP address, and error/diagnostic information, for the purpose of maintaining, securing, and troubleshooting the Service.`,
  },
  {
    heading: "3.9 Location Information",
    body: `4Supplier uses location information to help suppliers, customers, and delivery persons set, confirm, and display delivery and business addresses (including map coordinates) used for scheduling and completing deliveries. Location may be captured when a user manually sets or updates an address using their device's current location, or when an address is entered or edited.

4Supplier does not continuously track a device's location in the background. If this changes in a future version of the App, this Policy will be updated accordingly.`,
  },
  {
    heading: "3.10 Notification Information",
    body: `The App maintains an in-app notification system that records events relevant to a user's account (e.g., a new order, an order status change, or a delivery assignment) so they can be viewed and marked as read within the App.`,
  },
  {
    heading: "3.11 Communication Information",
    body: `We may send transactional communications necessary to operate the Service, such as account verification codes (OTP), invitations to join a supplier's account (for customers and delivery persons), and important account or service-related notices.`,
  },
  {
    heading: "4. How We Use Information",
    body: `We use the information described above to:

• Create and manage user accounts and authenticate access to the App;
• Enable suppliers to manage customers, products, orders, recurring deliveries, and delivery personnel;
• Process, schedule, assign, and track one-time and recurring orders and deliveries;
• Enable communication between the App and its users regarding orders, deliveries, and account activity;
• Maintain, secure, and improve the Service, including diagnosing technical issues;
• Enforce our Terms & Conditions and protect against misuse, fraud, or unauthorized access; and
• Comply with applicable legal obligations.

We do not use customer or delivery-person data collected on behalf of a supplier for our own independent marketing purposes.`,
  },
  {
    heading: "5. How Information Is Shared",
    body: "",
  },
  {
    heading: "5.1 Information Shared Between Suppliers, Customers, and Delivery Persons",
    body: `4Supplier is designed so that certain information is necessarily visible between roles in order for the Service to function:

• Suppliers can view the customer and delivery-person information they have entered or that has been created within their own account.
• Customers may be able to view information relevant to their own orders, deliveries, and account with a specific supplier (such as order status and the identity of an assigned delivery person, where enabled).
• Delivery Persons may be able to view the information necessary to complete an assigned delivery, such as the customer's name, delivery address, and order details.

Suppliers, customers, and delivery persons operating under different, unrelated supplier accounts cannot see each other's data. Data is scoped to the supplier account it belongs to.`,
  },
  {
    heading: "5.2 Service Providers",
    body: `We may share limited information with third-party service providers who perform services on our behalf, such as hosting, cloud data storage, email delivery, and infrastructure support, solely to the extent necessary for them to provide those services. We do not sell personal information.`,
  },
  {
    heading: "5.3 Legal and Safety Disclosures",
    body: `We may disclose information if required to do so by law, or in a good-faith belief that such action is necessary to comply with a legal obligation, protect the rights or safety of Nsians, 4Supplier's users, or the public, or investigate potential violations of our Terms & Conditions.`,
  },
  {
    heading: "5.4 Business Transfers",
    body: `If Nsians is involved in a merger, acquisition, reorganization, or sale of assets related to 4Supplier, information may be transferred as part of that transaction, subject to standard confidentiality protections and, where required, prior notice to affected users.`,
  },
  {
    heading: "6. Data Security",
    body: `We implement reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted to or stored by the App.`,
  },
  {
    heading: "7. Data Retention",
    body: `We retain personal information for as long as an account remains active and as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce agreements.`,
  },
  {
    heading: "8. User Rights",
    body: `Depending on your role and applicable law, you may have rights to:

• Access the personal information associated with your account;
• Request correction of inaccurate or incomplete information;
• Request deletion of your account and associated personal information, subject to Sections 9 and 10; and
• Object to or request restriction of certain processing, where applicable law provides such rights.

Customers and delivery persons whose information is entered by a supplier should generally direct data correction or access requests to that supplier in the first instance, as the supplier controls that data. Where 4Supplier can directly assist, requests may be sent using the contact details in Section 16.`,
  },
  {
    heading: "9. Account Deletion",
    body: `Users may request deletion of their 4Supplier account by contacting us through the Help & Support section in the App. Deleting a supplier account may also affect the availability of related customer and delivery-person records created under that account.`,
  },
  {
    heading: "10. Data Deletion Requests",
    body: `Where you are not able to delete certain data directly within the App, you may submit a data deletion request through the Help & Support section in the App. We will respond to verified requests within a reasonable timeframe, subject to legal, contractual, or legitimate business retention requirements.`,
  },
  {
    heading: "11. Children's Privacy",
    body: `4Supplier is a business-oriented (B2B) application intended for use by suppliers, their customers, and their delivery personnel in a professional/operational capacity. It is not directed to children, and we do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have inadvertently collected such information, we will take steps to delete it.`,
  },
  {
    heading: "12. Third-Party Services and Links",
    body: `The App may rely on third-party infrastructure (such as cloud hosting or map/location services) to operate certain features. We are not responsible for the privacy practices of third-party services not operated by us.`,
  },
  {
    heading: "13. International Data Transfers",
    body: `If information is stored or processed in a country other than the one in which you are located, it may be subject to different data protection laws. We take reasonable steps to protect information in accordance with this Privacy Policy regardless of where it is processed.`,
  },
  {
    heading: "14. Cookies and Similar Technologies",
    body: `4Supplier is a mobile application and does not use browser cookies. The App may use functionally equivalent technologies, such as locally stored authentication tokens, to keep you signed in and to remember app preferences.`,
  },
  {
    heading: "15. Changes to This Privacy Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in the App, our practices, or legal requirements. Where changes are material, we will provide additional notice (such as an in-app notice) before the changes take effect.`,
  },
  {
    heading: "16. Contact Information",
    body: `If you have questions about this Privacy Policy or wish to exercise your rights, please contact Nsians (operator of 4Supplier) through the Help & Support section in the App.`,
  },
]

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: `These Terms & Conditions ("Terms") govern access to and use of the 4Supplier mobile application (the "App" or "Service"), operated by Nsians ("we," "us," "our," or the "Operator"). 4Supplier is a mobile application operated by Nsians.

By creating an account or using the App, you agree to be bound by these Terms. If you do not agree, do not use the Service.`,
  },
  {
    heading: "2. Eligibility",
    body: `The Service is intended for business use by suppliers and the customers and delivery personnel they engage. By using 4Supplier, you represent that you are at least 18 years of age and have the legal capacity and authority to enter into these Terms, whether individually or on behalf of a business.`,
  },
  {
    heading: "3. Account Registration",
    body: `To use 4Supplier, you must register for an account or be invited by a supplier. You agree to provide accurate, current, and complete information during registration and to keep such information up to date. Accounts are role-based (supplier, customer, or delivery person), and access to features depends on the assigned role.`,
  },
  {
    heading: "4. Account Security",
    body: `You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify us or the relevant supplier promptly if you become aware of any unauthorized access to or use of your account.`,
  },
  {
    heading: "5. Supplier Responsibilities",
    body: `As the primary account holder, a supplier is responsible for:

• The accuracy of business, product, and pricing information entered into the App;
• Having the appropriate authority, consent, or legal basis under applicable law to enter, store, and manage personal information about their customers and delivery persons within the App;
• Ensuring that customers and delivery persons invited to the App are informed, where required, that their information is being processed through 4Supplier;
• Managing the assignment, reassignment, and unassignment of orders to delivery persons in a lawful and fair manner; and
• Maintaining accurate records of order and delivery status, including any recorded payment-collection status.

Suppliers are solely responsible for their relationships, agreements, and disputes with their own customers and delivery persons; 4Supplier and Nsians are not a party to those relationships and do not mediate commercial disputes between them, except as may be required to enforce these Terms.`,
  },
  {
    heading: "6. Customer Data Responsibilities",
    body: `Suppliers who add or manage customer records within 4Supplier confirm that they have obtained any necessary consent or have another valid legal basis to provide that individual's personal information for the purposes described in our Privacy Policy. Customers who register or interact directly with the App are responsible for the accuracy of the information they themselves provide.`,
  },
  {
    heading: "7. Delivery Person Responsibilities",
    body: `Delivery persons are responsible for maintaining accurate profile information, performing assigned deliveries in accordance with the supplier's instructions, updating delivery status accurately and promptly, and complying with applicable laws while performing delivery duties. Delivery persons are engaged by the supplier, and their working relationship (employment, contractor, or otherwise) is determined by the supplier, not by Nsians.`,
  },
  {
    heading: "8. Acceptable Use",
    body: `You agree not to: use the Service for any unlawful purpose; misrepresent your identity or role; interfere with or disrupt the App's operation or security; attempt to access accounts, data, or systems you are not authorized to access; upload false, misleading, or infringing product or business content; or use the Service to harass, defraud, or harm another user.`,
  },
  {
    heading: "9. Orders and Deliveries",
    body: `The App enables suppliers to create and manage one-time orders and to schedule deliveries. Order and delivery information (such as pricing, availability, and delivery timing) is set and controlled by the supplier. Nsians does not guarantee the accuracy of product, pricing, or availability information entered by suppliers, and is not responsible for disputes relating to order fulfillment between a supplier and its customer.`,
  },
  {
    heading: "10. Recurring Orders / Subscriptions",
    body: `4Supplier supports recurring/subscription-based orders configured by a supplier, including scheduled delivery frequency and, where enabled, automatic cancellation of a scheduled order under supplier-defined conditions (e.g., if not confirmed by a cutoff time). Suppliers are responsible for clearly communicating the terms of any recurring order arrangement to their customers, including frequency, pricing, and cancellation conditions. Cancellation or modification of a recurring order is subject to the rules configured by the relevant supplier within the App.`,
  },
  {
    heading: "11. Delivery Management",
    body: `Suppliers may assign, reassign, or unassign orders to delivery persons, and may track pending and completed delivery status within the App. Suppliers are responsible for ensuring deliveries are assigned appropriately and for resolving any issues relating to delivery completion, timing, or quality with their customers and delivery personnel.`,
  },
  {
    heading: "12. Notifications and Communications",
    body: `The App may send in-app notifications and transactional communications (such as account verification codes and invitations) relevant to your account and role. By using the Service, you consent to receive communications necessary for account operation and security; you may not be able to opt out of essential transactional communications while maintaining an active account.`,
  },
  {
    heading: "13. User-Generated / Business Content",
    body: `Suppliers are solely responsible for content they upload or enter into the App, including product descriptions, images, pricing, and customer or delivery-person records ("Business Content"). You represent that you have the right to upload and use any Business Content and that it does not infringe the rights of any third party or violate applicable law.`,
  },
  {
    heading: "14. Prohibited Activities",
    body: `In addition to Section 8, you may not: reverse-engineer, decompile, or attempt to extract the source code of the App except as permitted by law; use automated means to scrape or extract data from the Service without authorization; circumvent any access restrictions or role-based permissions; or use the Service to store or transmit unlawful, defamatory, or infringing material.`,
  },
  {
    heading: "15. Intellectual Property",
    body: `The App, including its software, design, trademarks, logos (including "4Supplier" and any associated branding), and underlying technology, is owned by or licensed to Nsians and is protected by applicable intellectual property laws. These Terms do not grant you any ownership rights in the App. Business Content you upload remains yours or your customer's, as applicable, but you grant Nsians a limited license to host, store, and process it solely to provide the Service.`,
  },
  {
    heading: "16. Application License",
    body: `Subject to your compliance with these Terms, Nsians grants you a limited, non-exclusive, non-transferable, revocable license to download and use the 4Supplier App on a device you own or control, solely for its intended business purpose.`,
  },
  {
    heading: "17. Third-Party Services",
    body: `The App may rely on third-party infrastructure or services (such as hosting, cloud storage, or mapping/location services) to function. We are not responsible for the availability, accuracy, or practices of third-party services outside our control.`,
  },
  {
    heading: "18. Service Availability",
    body: `We aim to keep the Service available and reliable but do not guarantee uninterrupted, error-free, or continuous availability. The Service may be temporarily unavailable due to maintenance, updates, technical issues, or factors outside our control.`,
  },
  {
    heading: "19. Maintenance and Updates",
    body: `We may update, modify, or discontinue features of the App from time to time, with or without notice, to improve functionality, security, or performance. Continued use of the App after an update constitutes acceptance of the updated version, where applicable.`,
  },
  {
    heading: "20. Disclaimer of Warranties",
    body: `The Service is provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be error-free, secure, or uninterrupted, or that any product, order, or delivery information entered by a supplier is accurate.`,
  },
  {
    heading: "21. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, Nsians and its officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunity, arising out of or related to your use of, or inability to use, the Service, including disputes between suppliers, customers, and delivery persons.`,
  },
  {
    heading: "22. Indemnification",
    body: `You agree to indemnify and hold harmless Nsians and its officers, employees, and affiliates from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your violation of these Terms, your misuse of the Service, or your violation of any rights of a third party (including customers or delivery persons whose data you enter into the App).`,
  },
  {
    heading: "23. Account Suspension / Termination",
    body: `We may suspend or terminate your access to the Service, with or without notice, if we reasonably believe you have violated these Terms, engaged in unlawful or harmful conduct, or created risk or legal exposure for Nsians or other users. You may stop using the Service or request account closure at any time by contacting us through the Help & Support section in the App.`,
  },
  {
    heading: "24. Data and Account After Termination",
    body: `Upon termination, your right to use the Service ends immediately. We may retain certain data as required for legal, accounting, or dispute-resolution purposes, consistent with our Privacy Policy.`,
  },
  {
    heading: "25. Changes to Terms",
    body: `We may revise these Terms from time to time. For material changes, we will provide reasonable notice (such as an in-app notice) before the changes take effect. Continued use of the App after changes take effect constitutes acceptance of the revised Terms.`,
  },
  {
    heading: "26. Governing Law",
    body: `These Terms shall be governed by the applicable laws of the jurisdiction in which Nsians operates, without regard to conflict-of-law principles.`,
  },
  {
    heading: "27. Dispute Resolution",
    body: `Any dispute arising out of or relating to these Terms or the Service shall first be addressed through good-faith negotiation. If the dispute cannot be resolved through negotiation, it shall be submitted to the courts of competent jurisdiction where Nsians operates.`,
  },
  {
    heading: "28. Contact Information",
    body: `Questions about these Terms may be directed to Nsians (operator of 4Supplier) through the Help & Support section in the App.`,
  },
]
