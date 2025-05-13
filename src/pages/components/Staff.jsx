
import { Link } from "react-router-dom";



const Staff = () => {

    return (

        <>
        
            
        <section class="max-w-6xl mx-auto mt-24 mb-16 px-6 py-0 space-y-12">
            {/* <!-- Profile 1 --> */}
            <div class="flex flex-col md:flex-row items-center gap-8">
            <picture>
                {/* <source srcSet="/img/nina.webp" type="image/webp" />
                <source srcSet="/img/nina.png" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500"
                src="/img/andrew.avif" alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Mr. C</h3>
                <p>
                I am Mr. Carrasco, aka “Mr. C”! I am the Owner of LUMA Sportz N Fun & Chief Instructor for 
                Little Warriors. I have been studying Martial Arts for 37 years & a 7th degree Black Belt. 
                I have taught for over 25 years in Commercial Karate Schools & 9 years in Texas Public Schools 
                with the Chuck Norris' KICKSTART KIDS Program. I'm also a Primrose Parent Alumni and know 
                first hand the love, attention, and commitment children receive from the staff at Primrose 
                Schools. My Martial Arts journey has blessed me with many achievements, state & world titles, 
                friendships, and a vast knowledge for all aspects of the Art. I look forward to sharing those 
                experiences with your Little Warrior to create opportunities, fun memories, and a desire to 
                become a champion in life. 
                </p>
                </div>
            </div>

            {/* <!-- Profile 2 --> */}
            <div class="flex flex-col md:flex-row-reverse items-center gap-8">
            <picture>
                {/* <source srcSet="/img/jay.webp" type="image/webp" />
                <source srcSet="/img/jay.jpg" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500" 
                src="/img/edward.avif" 
                alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Edward Stevenson</h3>
                <p>
                I'm Edward Stevenson. I began my journey as a martial artist at 5 years old studying Kajukenbo through 
                a local rec center class. Since then, I've trained with over a dozen instructors across many styles. I 
                finally earned my black belt under Andrew Carrasco in the Kickstart program. Now I'm a certified secondary 
                math teacher in the state of Texas as well as an instructor for Level Up.
                </p>
                </div>
            </div>

            {/* <!-- Profile 3 --> */}
            <div class="flex flex-col md:flex-row items-center gap-8">
            <picture>
                {/* <source srcSet="/img/felicia.webp" type="image/webp" />
                <source srcSet="/img/felicia.jpg" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500" 
                src="/img/francine.avif" 
                alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Francine Lisangi-Carrasco</h3>
                <p>M.E.D. Teaching, Leadership, Collaboration, & Curriculum B.S. Early Childhood</p>
                <p>
                Hello, I'm Francine and I help coordinate the  Curriculum for the LUMA Sportz Program & I am the Cheer Coach 
                for Little Pom Poms! I believe Education and the core values of Martial Arts serve as a great combination to 
                steer our community and the lives of our students in a positive direction. I'm a wife, mother, Educator, 
                Entrepreneur, and lover of fashion!
                </p>
                </div>
            </div>

            {/* <!-- Profile 4 --> */}
            <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
            <picture>
                {/* <source srcSet="/img/more.webp" type="image/webp" />
                <source srcSet="/img/more.png" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500" 
                src="/img/landon.jpg" 
                alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                    <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Landon Canizales</h3>
                    <p>
                    Hi, I’m Landon Canizales. I’m a black belt with over six years of experience in karate. I’m passionate 
                    about sharing what I’ve learned and helping others grow through martial arts. Karate has taught me discipline, 
                    focus, and confidence, and I’m excited to pass that on to my students
                    </p>
                </div>
            </div>

            {/* <!-- Profile 5 --> */}
            <div class="flex flex-col md:flex-row items-center gap-8">
            <picture>
                {/* <source srcSet="/img/felicia.webp" type="image/webp" />
                <source srcSet="/img/felicia.jpg" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500" 
                src="/img/sydney.jpg" 
                alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Coach Sydney</h3>
                <p>
                Hi, I’m Coach Sydney! I’m 25 years old and from Tulsa, OK. I started cheering in middle school and became 
                a cheer trainer in high school, which sparked my passion for coaching young athletes. I love working with 
                little ones and helping them build confidence, coordination, and a love for movement. I’m so excited to 
                bring cheer fun to your kids!
                </p>
                </div>
            </div>


             {/* <!-- Profile 6 --> */}
             <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
            <picture>
                {/* <source srcSet="/img/more.webp" type="image/webp" />
                <source srcSet="/img/more.png" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500" 
                src="/img/grace.jpg" 
                alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                    <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Grace Ortega-Ruiz</h3>
                    <p>
                    My name is Grace Ortega-Ruiz, and I’ve been doing karate since I was 11 years old. Over the years, 
                    I’ve competed in many tournaments and earned my black belt through hard work and dedication. Karate 
                    has taught me discipline, confidence, and resilience. Now, I’m excited to step into a new role as a 
                    passionate and enthusiastic karate coach. I’m looking forward to helping others grow and succeed in 
                    their martial arts journey.
                    </p>
                </div>
            </div>

            {/* <!-- Profile 7 --> */}
            <div class="flex flex-col md:flex-row items-center gap-8">
            <picture>
                {/* <source srcSet="/img/felicia.webp" type="image/webp" />
                <source srcSet="/img/felicia.jpg" type="image/jpeg" /> */}
                <img class="w-55 h-68 md:w-70 md:h-88 object-cover rounded-lg shadow-xl shadow-gray-500" 
                src="/img/benji.jpg" 
                alt="" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2 text-blue-600 underline">Coach Benji</h3>
                <p>
                I am Benjamin Aka “Coach Benji” for The Little All Stars. I have a great Love for sports. I played Football 
                And Basketball early In my childhood & teen years. It shaped me when I was young with discipline, courage 
                & focus. I believe in showing our Little All Stars that it can do the same for them! Whether it's dribbling 
                down the basketball court or passing on the soccer field, each moment is a chance for kids to learn 
                perseverance, teamwork, and self-belief.
                </p>
                </div>
            </div>

            
        </section>

        </>
    )
}

export default Staff;