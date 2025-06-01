import { useState } from "react";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [upload, setUpload] = useState([]);
  const [how, setHow] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("timeframe", timeframe);
    formData.append("how", how);

    // Append each file separately
    Array.from(upload).forEach((file, index) => {
      formData.append(`upload${index + 1}`, file);
    });

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setShowModal(true);
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setDescription('');
        setTimeframe('');
        setUpload([]);
        setHow('');
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      {/* Netlify Hidden Form */}
      <form name="contact" netlify hidden encType="multipart/form-data">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="description"></textarea>
      </form>

      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="LoneStar Property Management"
      >
        <p>
          Thank you for reaching out to LoneStar Property Management.
          We've received your message and will get back to you as soon as possible.
          We appreciate your interest and look forward to helping you with your property needs!
        </p>
      </SuccessModal>

      <form onSubmit={handleSubmit} name="contact" data-netlify="true" encType="multipart/form-data" className="bg-white mt-12 mb-18 space-y-6 text-blue-600 text-xl max-w-[36rem] mx-auto px-4 rounded-lg shadow-lg shadow-gray-500" id="contact-form">
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-cols-1 gap-4 mx-8 pt-6 px-4 max-w-[36rem] mx-auto">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full px-4 py-2 rounded-md bg-gray-200 shadow-lg shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-green-200" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-4 py-2 rounded-md bg-gray-200 shadow-lg shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-green-200" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required
              className="w-full px-4 py-2 rounded-md bg-gray-200 shadow-lg shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-green-200" />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block mb-1 font-medium">Ask Us Anything</label>
          <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required
            className="w-full px-4 py-2 rounded-md max-w-[36rem] bg-gray-200 shadow-lg shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-green-200"></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mb-12 shadow-lg bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold transition"
          >
            Submit Request
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
