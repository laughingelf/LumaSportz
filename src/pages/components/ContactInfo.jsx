import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="w-full bg-white py-6 md:py-0 shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center min-h-[12rem]">
          {/* Phone */}
          <div className="flex flex-col items-center justify-center h-full">
            <Phone size={40} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-blue-600 text-xl">
              <a href="tel:2146809155" className="hover:underline">
                (214) 680-9155
              </a>
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center h-full">
            <img src="/img/luma-logo.svg" className="h-54 mx-auto" />
          </div>

          {/* Email */}
          <div className="flex flex-col items-center justify-center h-full">
            <Mail size={40} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-blue-600 text-xl">
              <a href="mailto:info@sportznfun.com" className="hover:underline">
                info@sportznfun.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
