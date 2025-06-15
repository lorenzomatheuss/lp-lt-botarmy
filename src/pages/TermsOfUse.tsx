
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Terms of Use</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By purchasing and using "Your AI Army" products, you agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Product Description</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              "Your AI Army" is a digital product consisting of custom GPT agent configurations and 
              accompanying documentation. The product is delivered digitally upon purchase completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Use of AI Tools Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our products provide access to AI-powered tools and configurations. Please note:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>AI outputs may vary and are not guaranteed to be accurate or suitable for all purposes</li>
              <li>Users are responsible for reviewing and validating all AI-generated content</li>
              <li>We do not guarantee specific results or outcomes from using our AI configurations</li>
              <li>AI tools may have usage limitations imposed by third-party providers (OpenAI, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Refund Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We offer a 7-day money-back guarantee from the date of purchase. To request a refund:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Contact us within 7 days of purchase</li>
              <li>Provide your order number and reason for refund</li>
              <li>Refunds will be processed within 5-10 business days</li>
              <li>Refunds are available for the original purchase price only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All content, configurations, and materials provided are owned by InovaLabs or our licensors. 
              You receive a limited, non-exclusive license to use the products for personal or commercial purposes. 
              You may not redistribute, resell, or share the products without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, InovaLabs shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses resulting from your use 
              of our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our products may integrate with or reference third-party services (such as OpenAI's ChatGPT). 
              Your use of these services is subject to their respective terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Modifications</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting. Continued use of our products constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              For questions about these Terms of Use, please contact us at: 
              <a href="mailto:support@inovailabs.com" className="text-blue-600 hover:underline ml-1">
                support@inovailabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
