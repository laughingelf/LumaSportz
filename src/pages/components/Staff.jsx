import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

const staffProfiles = [
  {
    name: "Mr. C",
    image: "/img/andrew.avif",
    direction: "left",
    bio: `I am Mr. Carrasco, aka “Mr. C”! I am the Owner of LUMA Sportz N Fun & Chief Instructor for 
Little Warriors. I have been studying Martial Arts for 37 years & a 7th degree Black Belt. 
I have taught for over 25 years in Commercial Karate Schools & 9 years in Texas Public Schools 
with the Chuck Norris' KICKSTART KIDS Program. I'm also a Primrose Parent Alumni and know 
first hand the love, attention, and commitment children receive from the staff at Primrose 
Schools. My Martial Arts journey has blessed me with many achievements, state & world titles, 
friendships, and a vast knowledge for all aspects of the Art. I look forward to sharing those 
experiences with your Little Warrior to create opportunities, fun memories, and a desire to 
become a champion in life.`,
  },
  {
    name: "Coach Edward",
    image: "/img/edward.avif",
    direction: "right",
    bio: `I'm Coach Edward. I began my journey as a martial artist at 5 years old studying Kajukenbo through 
a local rec center class. Since then, I've trained with over a dozen instructors across many styles. I 
finally earned my black belt under Andrew Carrasco in the Kickstart program. Now I'm a certified secondary 
math teacher in the state of Texas as well as an instructor for Level Up.`,
  },
  {
    name: "Coach Francine",
    image: "/img/francine.avif",
    direction: "left",
    title: "M.E.D. Teaching, Leadership, Collaboration, & Curriculum B.S. Early Childhood",
    bio: `Hello, I'm Coach Francine and I help coordinate the Curriculum for the LUMA Sportz Program & I am the Cheer Coach 
for Little Pom Poms! I believe Education and the core values of Martial Arts serve as a great combination to 
steer our community and the lives of our students in a positive direction. I'm a wife, mother, Educator, 
Entrepreneur, and lover of fashion!`,
  },
  {
    name: "Coach Landon",
    image: "/img/landon.jpg",
    direction: "right",
    bio: `Hi, I’m Coach Landon. I’m a black belt with over six years of experience in karate. I’m passionate 
about sharing what I’ve learned and helping others grow through martial arts. Karate has taught me discipline, 
focus, and confidence, and I’m excited to pass that on to my students.`,
  },
  {
    name: "Coach Sydney",
    image: "/img/sydney.jpg",
    direction: "left",
    bio: `Hi, I’m Coach Sydney! I’m 25 years old and from Tulsa, OK. I started cheering in middle school and became 
a cheer trainer in high school, which sparked my passion for coaching young athletes. I love working with 
little ones and helping them build confidence, coordination, and a love for movement. I’m so excited to 
bring cheer fun to your kids!`,
  },
  {
    name: "Coach Grace",
    image: "/img/grace.jpg",
    direction: "right",
    bio: `My name is Coach Grace, and I’ve been doing karate since I was 11 years old. Over the years, 
I’ve competed in many tournaments and earned my black belt through hard work and dedication. Karate 
has taught me discipline, confidence, and resilience. Now, I’m excited to step into a new role as a 
passionate and enthusiastic karate coach. I’m looking forward to helping others grow and succeed in 
their martial arts journey.`,
  },
  {
    name: "Coach Benji",
    image: "/img/benji.jpg",
    direction: "left",
    bio: `I am Benjamin Aka “Coach Benji” for The Little All Stars. I have a great Love for sports. I played Football 
And Basketball early In my childhood & teen years. It shaped me when I was young with discipline, courage 
& focus. I believe in showing our Little All Stars that it can do the same for them! Whether it's dribbling 
down the basketball court or passing on the soccer field, each moment is a chance for kids to learn 
perseverance, teamwork, and self-belief.`,
  },
];

const Staff = () => {
  return (
    <section className="max-w-6xl mx-auto mt-24 mb-16 px-6 space-y-12 text-md md:text-lg overflow-x-hidden">
      {staffProfiles.map((staff, idx) => (
        <motion.div
          key={idx}
          className={`flex flex-col md:flex-row ${
            staff.direction === "right" ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants[staff.direction]}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <picture>
            <img
              src={staff.image}
              alt={staff.name}
              className="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500"
            />
          </picture>
          <div className="text-black max-w-xl">
            <h3 className="text-3xl font-semibold mb-2 text-blue-600 underline">{staff.name}</h3>
            {staff.title && <p className="font-semibold mb-2">{staff.title}</p>}
            <p className="break-words">{staff.bio}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Staff;
