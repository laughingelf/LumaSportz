import { useState } from "react";
import { motion } from "framer-motion";
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
        title="Luma SportznFun"
      >
        <p>
          Thanks for reaching out to Luma SportznFun! We’ve received your message and can’t wait to connect. Whether you're ready to book an unforgettable party or just have a few questions, we’ll be in touch shortly to get the fun rolling. Keep an eye on your inbox—we’ll be reaching out soon!
        </p>
      </SuccessModal>

      <motion.form
        onSubmit={handleSubmit}
        name="contact"
        data-netlify="true"
        encType="multipart/form-data"
        className="bg-white mt-12 mb-18 space-y-6 text-blue-600 text-xl max-w-[36rem] mx-auto px-4 rounded-lg shadow-lg shadow-gray-500"
        id="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-cols-1 gap-4 mx-8 pt-6 px-4 max-w-[36rem] mx-auto">
          {[
            { label: 'Name', value: name, setValue: setName, type: 'text', id: 'name' },
            { label: 'Email', value: email, setValue: setEmail, type: 'email', id: 'email' },
            { label: 'Phone Number', value: phone, setValue: setPhone, type: 'tel', id: 'phone' },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <label htmlFor={field.id} className="block mb-1 font-medium">{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-200 shadow-lg shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-green-200"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="description" className="block mb-1 font-medium">Ask Us Anything</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md max-w-[36rem] bg-gray-200 shadow-lg shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-green-200"
          />
        </motion.div>

        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <button
            type="submit"
            className="mb-12 shadow-lg bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold transition"
          >
            Submit Request
          </button>
        </motion.div>
      </motion.form>
    </>
  );
};

export default ContactForm;
