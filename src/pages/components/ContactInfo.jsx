import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="w-full bg-white py-6 md:py-0 shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center min-h-[12rem]">
          {/* Phone */}
          <div className="flex flex-col items-center justify-center h-full">
            <Phone size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">
              <a href="tel:1234567890" className="hover:underline">
                (123) 456-7890
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@levelupmma.com" className="hover:underline">
                info@levelupmma.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
