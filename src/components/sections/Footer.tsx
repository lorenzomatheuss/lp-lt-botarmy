
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16 fade-in-section opacity-0">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-3xl font-bold mb-6">Your AI Army</h4>
        <p className="text-slate-400 mb-8 text-lg">
          Empowering beginners to harness the power of AI without the complexity
        </p>
        <p className="text-slate-500">
          © 2024 InovaLabs. All rights reserved. • 
          <Link to="/privacy-policy" className="hover:text-white ml-2 transition-colors">
            Privacy Policy
          </Link> • 
          <Link to="/terms-of-use" className="hover:text-white ml-2 transition-colors">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};
