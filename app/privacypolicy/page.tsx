"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>This privacy policy applies to the Atlas Intelligence app (hereby referred to as "Application") for mobile devices that was created by Atlas Group (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection and Use</h2>
              <p>The Application collects information when you download and use it. This information may include information such as</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your device's Internet Protocol address (e.g. IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>

              <p>The Application does not gather precise information about the location of your mobile device.</p>

              <p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
                <li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
                <li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Third Party Access</h2>
              <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>

              <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><a href="https://www.google.com/policies/privacy/" className="text-primary hover:underline">Google Play Services</a></li>
                <li><a href="https://expo.io/privacy" className="text-primary hover:underline">Expo</a></li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Opt-Out Rights</h2>
              <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention Policy</h2>
              <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at kiyanl@atlasintel.co.uk and they will respond in a reasonable time.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Children</h2>
              <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
              <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes</h2>
              <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>

              <p className="mt-4">This privacy policy is effective as of 2025-05-15</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Your Consent</h2>
              <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at kiyanl@atlasintel.co.uk.</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}