import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long are classes and how often will you teach my child?",
    answer:
      "Classes are held once a week and run for 30 minutes each session.",
  },
  {
    question: "How do we sign up our child and how do we pay?",
    answer:
      "Our program is a private, parent-pay program, meaning parents register and pay us directly. Consider us a partnered vendor with your child’s school. You’ll sign up through our GYMDESK Parent Portal, where you can also set up and manage your payments.",
  },
  {
    question: "I want my child to participate in all three programs. How do I sign them up?",
    answer: [
      "If your school offers all of our sport programs, you are welcome to sign up for all three!",
      "Please note:",
      "* Each sport has its own membership.",
      "* Our coaches specialize in their specific program.",
      "* If your school does not offer one of our programs, registration for that sport will not be available."
    ]
  },
  {
    question: "Are your coaches background checked and approved to be at our school?",
    answer: [
      "Yes! All LUMA Sportz N Fun Coaches are:",
      "* American Red Cross Certified in Adult/Child/Toddler CPR, AED, and First Aid.",
      "* Texas Health & Human Services CBCU Background Approved.",
      "* Highly trained professionals who adapt their teaching style to any age group."
    ]
  },
  {
    question: "What kind of events do you host for our child?",
    answer:
      "We host year-round events for Karate, Cheerleading, Basketball, and Soccer—many of which involve parent participation! Our goal is to create unique, memorable experiences that go beyond regular classes.",
  },
  {
    question: "Can I get a LUMA Sportz N Fun program in my School, Daycare, After-School Program, or Summer Camp?",
    answer: [
      "Absolutely! We offer customizable curriculums designed to fit your program’s needs and requirements.",
      "Our coaches bring:",
      "* Consistency and communication.",
      "* High-level training and professionalism.",
      "* Positive energy and relationship-building that adds value to your program."
    ]
  },
  {
    question: "Does Karate teach my child how to fight?",
    answer:
      "Level Up teaches your child how to defend themselves through Martial Arts, but does not condone or teach your child to fight. In fact, we constantly reiterate to your child to never use their karate on their friends or family each class. One of our most important skills we teach all our Little Warriors is our Stranger Danger Safety Course. God forbid anything happens to any of our children, but we also want to be proactive and educate our children how to protect themselves in the situation they are confronted by a Stranger. We keep it simple, safe, and fun for our kids to learn basic self-defense and critical thinking skills for these situations.",
  },
  {
    question: "What do we provide for Foam or Snow Parties?",
    answer:[
      "* Pro Grade foam cannon with safe solution",
      "* setup and take down of our equipment",
      "* Fully licensed and insured",
      "* great music with light up speakers",
      "* beach balls"
    ]
  },
  {
    question: "What do you need to provide for Foam and Snow Parties? ",
    answer: [
      "* 3 prong Electrical outlet within 200 ft of event",
      "* Water source within 75ft",
      "* Flat Area of at least 20x20 feet. Grass, concrete, or  pavement are fine.",
      "* Constant Adult Supervision * parties with children",
      "* Kids & Adults to have lots of fun at your Foam Party!"
    ]
  },
  {
    question: "Where can a Foam party take place?",
    answer:
      "We can set your foam party up in your backyard, playground, front yard, driveway, cul-de-sac, or even a permitted park or parking lot. As long as there’s enough space for the kids to roam (around 20′ x 20′ or more), we’ll be there to bring the foam-n-fun. We recommend concrete, but not smooth concrete, as smooth concrete tends to be slippery when water is poured on top of it. All other flat-surfaces will be fine.",
  },
  {
    question: "How many kids can get in the foam?",
    answer:
      "We recommend that no more than 25 kids attend the party. If you have a party larger than 20, please contact us first so we can make accommodations for a larger party size. We calculate a few factors when making accommodations, such as location, and the size of the party space. The larger the party, the larger the foam machine may be.",
  },
  {
    question: "How safe are foam parties?",
    answer:
      "Certainly, foam parties are designed with safety in mind. Children can move around freely, playing either in groups or individually. However, we advise against running or lying on the ground during the foam frenzy. This precaution is taken to avoid any potential tripping hazards due to the foam’s height. With the foam covering the ground, visibility might be compromised, and this measure helps prevent unintended collisions.",
  },
  {
    question: "Any safety tips I should know about for Foam Parties?",
    answer:[
      "Here are some safety tips to follow when you are at a foam party: ",
      "* You must wear comfy clothing, preferably bathing suits, comfy shoes, and goggles.",
      "* Please avoid any running.",
      "* It is a good idea to have an extra change of clothes and some towels.",
      "* No laying down when covered with foam.",
      "* If you’re planning a foam party, use plastic cups, plates, and cutlery to prevent breaking any glass items and creating a hazardous atmosphere.",
      "* No slippery slide activities should be set up close to the event because this can cause harm."
    ]
    },
    {
      question: "Is the foam solution safe for my party?",
      answer:
        "Absolutely, we prioritize your safety and well-being above all else. Our foam solution is rigorously tested and formulated to be non-toxic, hypoallergenic, and environmentally friendly. You can enjoy the frothy fun with complete peace of mind, knowing that the foam we use is safe for participants of all ages. Your health and enjoyment are our top priorities, and our dedication to using a safe foam solution reflects that commitment in every foam-filled moment we create.",
    },
    {
      question: "Is the foam slippery?",
      answer:
        "Definitely not! The foam will not cause the ground to be slippery. It is as slippery as the water is. We do recommend concrete but not smooth concrete, as smooth concrete tends to be slippery when water is poured on top of it. We just have to make sure that the kids don’t run and walk while having fun to avoid bumping into each other.",
    },
    {
      question: "How do we clean up the foam & will it kill my grass?",
      answer: [
        "At the end of the event the foam will disappear on its own. If you have any foam left over you just wash it away with water. No, the foam will not harm your grass. While the grass might get a bit wet and muddy during the foam party, it will bounce back in no time.",
        "In the case of colored foam, a thorough water rinse may be necessary, possibly supplemented with detergent to mitigate staining on certain surfaces and fabrics."
      ]
    },
    {
      question: "How do refunds work? ",
      answer:
        "If you need to cancel at least seven days before the party, you can do so without incurring any fees. A 50% refund will be given if you must cancel within seven days of the party, and no refund will be given if you must cancel 24 hours or less before the foam party.",
    },
    {
      question: "What area do you travel too?",
      answer:
        "Level Up Foam-N-Fun is happy to travel just about anywhere to host our AMAZING foam parties. There no travel fee if your location is inside our free 30 mile radius of 75007. Locations outside of this radius will incur a travel fee.",
    },{
      question: "How is payment handled?",
      answer:
        "We will send you an invoice via email through our Squared Up invoicing system. We accept all major credit / debit cards.",
    },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 mt-12 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">If you have any further questions, don't hesitate to contact us</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-green-200 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-green-300 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-left">
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
