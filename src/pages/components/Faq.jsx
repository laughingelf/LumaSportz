import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Little Warrior Starter Kits / Karate Gear",
    answer:
      "Our Little Warrior Starter Kits take 2-5 weeks to be fully prepared after classes start. We distribute a portion of the starter kit in class in the second & third week except for the karate uniform. We take two weeks to size up all our students for their karate uniforms to ensure we get their correct size. Unlike T-Shirts, Karate uniform sizes are different & must be sized up to ensure the best fit. Our uniforms take 10-15 days to produce and ship. We understand that most gear and uniforms can be found on Amazon for a cheaper price. Our uniforms & gear have our team logo on it so that your child may feel a part of the team. We will not allow any other uniforms or gear in class. We appreciate your understanding.",
  },
  {
    question: "What style of Martial Arts does Luma Sportz teach?",
    answer:
      "Level Up Martial Arts offers a variety of options. Mostly focusing on Tae Kwon Do, MMA, Sport Karate, & Self Defense. Little Warriors classes include a mixture of Tae Kwon Do, MMA, Sport Karate, Self Defense, Meditation, Fitness, Character Development, & fun activities! Level UP MMA Classes include Tae Kwon Do, MMA, Sport Karate, Brazilian Jiu Jitsu,  Kickboxing, Boxing, Self Defense, Weapons training, & MMA / Sport Karate Tournament Preparation. Our instructors have an extensive background in tournament competition, weapons, self-defense, MMA training and conditioning, creating demos for 20+ students, right down to your basic karate. ",
  },
  {
    question: "Are Level Up Little Warrior Instructors background checked & qualified?",
    answer:
      "Our Level Up Black Belt Instructors are fully Covid-19 Vaccinated, American Red Cross Adult / Child / Toddler: CPR / AED / First Aid Certified, Texas Health & Human Service CBCU Background approved, and highly trained professional Martial Arts Instructors. Our Level Up Instructors can adapt & communicate to any age level of instruction. ",
  },
  {
    question: "How long does it take to get a black belt?",
    answer:
      "For Level Up Students, it takes approximately 4-5 years to reach black belt.",
  },
  {
    question: "Can I get the Little Warrior Program or Martial Arts program in my School / Daycare / After - School Program / or Summer Camp Program?",
    answer:
      "Absolutely! Level Up has a variety of curriculums designed for your program. Each curriculum can be designed and adapt to your needs and requirements. Our Level Up Black Belt Instructors are consistent, communicative, highly trained Black Belt professionals with great attitudes. We aim to increase more value to your program by bringing our positive energy, consistency, & building meaningful relationships.",
  },
  {
    question: "What sort of things should I consider when choosing a school?",
    answer:
      "Picking a school can be tough. Each school has its own business model, goals, and what it wants to achieve for their students. You will see some schools that just want your $$$. They will say your student is ready to test every two weeks whether they've been in class or not and will charge outrageous prices as well. Some schools have instructors that are old in tradition and do not make the classes fun or exciting for their students. Sometimes they're either burnt out and their passion is gone. Then there are the schools that have it all. Enthusiasm, passion, excitement, expectations, wanting the best for your students, a place where they have to work to earn everything, a great community, and actually care about the name on their student's uniforms. Don't settle. Find a great instructor and a great school. You won't regret it.",
  },
  {
    question: "Does Karate teach my child how to fight?",
    answer:
      "Level Up teaches your child how to defend themselves through Martial Arts, but does not condone or teach your child to fight. In fact, we constantly reiterate to your child to never use their karate on their friends or family each class. One of our most important skills we teach all our Little Warriors is our Stranger Danger Safety Course. God forbid anything happens to any of our children, but we also want to be proactive and educate our children how to protect themselves in the situation they are confronted by a Stranger. We keep it simple, safe, and fun for our kids to learn basic self-defense and critical thinking skills for these situations.",
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
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">What People Ask Us</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-gray-50"
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
                  {faq.answer}
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
