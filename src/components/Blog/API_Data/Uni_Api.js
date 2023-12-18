// Images
import melbourne from '../../Pics/Uni Pics/z1 - Melbourne.png'
import monash from '../../Pics/Uni Pics/Monash.png'
import anu from '../../Pics/Uni Pics/1 - ANU.png'
import flinder from '../../Pics/Uni Pics/Flinders.png'
import grifth from '../../Pics/Uni Pics/Griffith.png'
import La from '../../Pics/Uni Pics/2 - La Trobe.png'
import Swin from '../../Pics/Uni Pics/3 - Swinburne.png'
import UON from '../../Pics/Uni Pics/4 - UON.png'
import Tasmania from '../../Pics/Uni Pics/Tasmania.png'
import Wollongong from '../../Pics/Uni Pics/Wollongong.png'
import Deakin from '../../Pics/Uni Pics/Deakin.png'
import RMIT from '../../Pics/Uni Pics/5 - RMIT.png'
import Sdyney from '../../Pics/Uni Pics/z2 - Sduney.png'
import Charles from '../../Pics/Uni Pics/z3 - Charles.png'
import Victoria from '../../Pics/Uni Pics/z4 - Victoria.png'
import Queensland from '../../Pics/Uni Pics/x1 - Queensland.png'
import SouthCross from '../../Pics/Uni Pics/x2 - SouthCross.png'
import CharlesStunt from '../../Pics/Uni Pics/x3 - Charles Stunt.png'
import ECU from '../../Pics/Uni Pics/x4 - ecu.png'
import Murdosh from '../../Pics/Uni Pics/x5 - Murdosh.png'
import Torrens from '../../Pics/Uni Pics/x6 - Torrens.png'

// API Data
const Blog_Uni = [
    {
        id: "1",
        title: "The University of Melbourne",
        Intro: "Renowned globally for its cutting-edge research programs in business, engineering, and medicine, fostering academic excellence. Situated in Melbourne, it offers a vibrant student life within a bustling city setting, complementing comprehensive courses.",
        Factors: "The University of Melbourne stands as a beacon of academic excellence, boasting prestigious research programs and a diverse range of courses. Nestled in the prime location of Melbourne, it offers a vibrant academic atmosphere coupled with robust business and engineering programs. This institution places a strong emphasis on academic excellence, fostering an environment where students thrive and excel across various fields of study.",
        Courses: "Business, Engineering, Medicine",
        Fees: "Approximately $40,000 to $45,000 AUD Per Year",
        Pic: melbourne,
    },
    {
        id: "2",
        title: "Monash University",
        Intro: "A pioneering institution driving innovation across IT, arts, and science, encouraging critical thinking and offering a diverse curriculum. Emphasizing a global outlook, Monash provides students with a forward-thinking educational experience.",
        Factors: "Monash University is renowned for its innovative approach, offering a wide array of courses that foster a global outlook among students. Encouraging critical thinking and creativity, the institution places a strong emphasis on innovation across all disciplines. With a commitment to nurturing a culture of creativity and innovation, Monash inspires students to explore new perspectives and push the boundaries of knowledge and discovery.",
        Courses: "IT, Arts, Science",
        Fees: "Around $35,000 to $40,000 AUD Per Year",
        Pic: monash,
    },
    {
        id: "3",
        title: "The University of Queensland",
        Intro: "Known for its academic distinction in law, health sciences, and business, creating a supportive community for holistic learning. With a dynamic environment, it champions top-tier programs and a nurturing educational culture.",
        Factors: "The University of Queensland stands as a beacon of academic excellence, boasting strong programs in law and health sciences. Beyond its exceptional academic offerings, it cultivates a vibrant community where students thrive. Renowned for its top-notch business courses, the university provides a holistic educational experience, combining academic rigor with a supportive environment that encourages growth and collaboration.",
        Courses: "Law, Health Sciences, Business",
        Fees: "Approximately $35,000 to $42,000 AUD Per Year",
        Pic: Queensland,
    },
    {
        id: "4",
        title: "The University of Sydney",
        Intro: "Houses world-class facilities, particularly excelling in engineering, arts, and economics, reflecting a commitment to academic innovation. Situated in Sydney, it provides prime educational opportunities in a dynamic urban setting.",
        Factors: "The University of Sydney is distinguished by its world-class facilities and strong engineering programs that underline its commitment to academic innovation. Nestled in the prime location of Sydney, this institution offers renowned arts courses, fostering a dynamic environment for creativity and exploration. With state-of-the-art facilities and a focus on academic advancement, the university provides a platform for students to excel in their chosen disciplines while embracing a vibrant cultural backdrop in the heart of the city.",
        Courses: "Engineering, Arts, Economics",
        Fees: "Around $42,000 to $48,000 AUD Per Year",
        Pic: Sdyney,
    },
    {
        id: "5",
        title: "The Australian National University",
        Intro: "Esteemed for its exceptional programs in politics, economics, and science, fostering personal growth and research excellence. The stimulating academic environment encourages scholarly pursuits and intellectual development.",
        Factors: "The Australian National University stands as a pinnacle of academic distinction, offering exceptional programs in politics and economics alongside a strong focus on scientific inquiry. Its stimulating academic environment fosters personal growth, encouraging students to explore their potential. Renowned for its excellence in research, the university provides a fertile ground for scholarly pursuits, nurturing an atmosphere where innovation thrives and intellectual curiosity flourishes.",
        Courses: "Politics, Economics, Science",
        Fees: "Approximately $38,000 to $44,000 AUD Per Year",
        Pic: anu,
    },
    {
        id: "6",
        title: "Charles Sturt University",
        Intro: "Emphasizes hands-on learning in agriculture, education, and environmental science, empowering students with practical skills for real-world applications and industry relevance.",
        Factors: "Charles Sturt University prides itself on its emphasis on practical learning, offering robust agriculture programs and renowned education courses. With a dedicated focus on environmental science, the university equips students with real-world skills essential for their professional journeys. By emphasizing hands-on experience, it prepares individuals to tackle real-world challenges in their respective fields, fostering a foundation grounded in practical knowledge and application.",
        Courses: "Education, Agriculture, Business",
        Fees: "Around $25,000 to $30,000 AUD Per Year",
        Pic: CharlesStunt,
    },
    {
        id: "7",
        title: "Flinders University",
        Intro: "Offers a personalized learning environment, specializing in health sciences, humanities, and social sciences, nurturing individual student growth and scholarly exploration.",
        Factors: "Flinders University fosters a personalized learning environment known for its strong health sciences programs and distinguished humanities courses. With a dedicated focus on social sciences, the university encourages individual student growth by nurturing a supportive and engaging atmosphere. It tailors education to each student's needs, offering an enriching experience that enables personal and academic development within a diverse and vibrant learning community.",
        Courses: "Nursing, Psychology, IT",
        Fees: "Approximately $25,000 to $32,000 AUD Per Year",
        Pic: flinder,
    },
    {
        id: "8",
        title: "Griffith University",
        Intro: "Internationally recognized for its innovation in education, business, and criminology, fostering a culture of creativity and entrepreneurship among students, preparing them for real-world challenges.",
        Factors: "Griffith University stands as an internationally recognized institution with a keen focus on innovation in education. Renowned for its robust business programs and esteemed criminology courses, the university cultivates an environment that fosters creativity and entrepreneurship. By encouraging students to think innovatively and embrace entrepreneurial spirits, Griffith University prepares individuals to excel in a rapidly evolving global landscape, offering pathways that blend academic excellence with real-world innovation and enterprise.",
        Courses: "Education, Environmental Science, Business",
        Fees: "Around $30,000 to $36,000 AUD Per Year",
        Pic: grifth,
    },
    {
        id: "9",
        title: "La Trobe University",
        Intro: "Distinguished for its innovation and research in health sciences, law, and humanities, ensuring a diverse academic experience and a forward-thinking educational approach.",
        Factors: "La Trobe University prides itself on being innovation and research-oriented, fostering a culture of academic exploration. With strong health sciences programs and noted expertise in law, the university excels in humanities, providing a diverse academic experience. La Trobe's commitment to innovation permeates its approach to education, offering students a rich learning environment that encourages critical thinking, research, and a holistic understanding of various disciplines, ensuring a well-rounded academic journey.",
        Courses: "Health Sciences, Business, IT",
        Fees: "Approximately $30,000 to $35,000 AUD Per Year",
        Pic: La,
    },
    {
        id: "10",
        title: "Southern Cross University",
        Intro: "Nestled in a coastal region, it boasts robust environmental science programs and practical business education, offering hands-on learning opportunities in a picturesque setting.",
        Factors: "Southern Cross University, known as the Coastal Lifestyle University, offers a unique academic experience set against a coastal backdrop. Renowned for its strong environmental science programs and noted expertise in business courses, the university has a focused approach toward information technology. Embracing the coastal lifestyle, it provides students with an environment that inspires learning, particularly in areas related to environmental sciences and cutting-edge information technology, ensuring a well-rounded education with a distinctive flair.",
        Courses: "Marine Science, Education, Business",
        Fees: "Around $22,000 to $28,000 AUD Per Year",
        Pic: SouthCross,
    },
    {
        id: "11",
        title: "Swinburne University of Technology",
        Intro: "Focuses on technology, science, engineering, and design, providing a dynamic learning environment accentuating innovation and practical application.",
        Factors: "Swinburne University of Technology is a beacon for technological advancement, fostering a dynamic learning environment with a strong emphasis on innovation. Renowned for excellence in science, engineering, and notable design programs, Swinburne cultivates an atmosphere where creativity and technology converge. With a forward-thinking approach, the university provides a platform for students to excel in their chosen disciplines, encouraging innovation and creativity to thrive in a technologically driven world.",
        Courses: "Science, Engineering, Design",
        Fees: "Approximately $30,000 to $35,000 AUD Per Year",
        Pic: Swin,
    },
    {
        id: "12",
        title: "Torrens University",
        Intro: "Emphasizes industry-relevant courses in business, design, and health sciences, focusing on practical skills development and preparing students for real-world challenges.",
        Factors: "Torrens University is a contemporary institution that prides itself on being industry-relevant, offering a strong emphasis on business programs and noteworthy design courses. With a focus on excellence in health sciences, the university is dedicated to developing practical skills among its students. By blending contemporary industry insights with practical education, Torrens University equips its graduates with the expertise and real-world abilities necessary to excel in their chosen fields within the dynamic landscape of business, design, and health sciences.",
        Courses: "Business, Design, Health Sciences",
        Fees: "Around $25,000 to $30,000 AUD Per Year",
        Pic: Torrens,
    },
    {
        id: "13",
        title: "University of Newcastle",
        Intro: "Recognized for its research-intensive focus in health, engineering, and social sciences, fostering academic excellence and community engagement.",
        Factors: "The University of Newcastle stands as a research-intensive institution known for its excellence in health sciences and acclaimed engineering programs. Noteworthy for its social sciences courses, the university fosters both academic excellence and community engagement. With a commitment to robust research and a focus on multidisciplinary learning, it cultivates an environment where innovation thrives, empowering students to contribute meaningfully to society while excelling in their chosen academic pursuits.",
        Courses: "Health Sciences, Engineering, Social Sciences",
        Fees: "Approximately $35,000 to $40,000 AUD Per Year",
        Pic: UON,
    },
    {
        id: "14",
        title: "University of Tasmania",
        Intro: "Set amidst picturesque campuses, it emphasizes research in natural sciences, humanities, and maritime studies, providing a holistic academic experience.",
        Factors: "The University of Tasmania offers a picturesque academic setting renowned for its strong emphasis on research and excellence in natural sciences. Alongside its noteworthy humanities programs, the university provides a holistic academic experience. Set against breathtaking campus landscapes, it fosters a culture of intellectual curiosity and scholarly exploration, offering students a comprehensive educational journey that combines rigorous research, diverse academic disciplines, and a rich cultural environment.",
        Courses: "Natural Sciences, Humanities, Maritime Studies",
        Fees: "Around $30,000 to $35,000 AUD Per Year",
        Pic: Tasmania,
    },
    {
        id: "15",
        title: "Edith Cowan University",
        Intro: "Known for its vibrant campus life and diverse programs in arts, business, and science, nurturing creative thinking and practical skill development.",
        Factors: "Edith Cowan University thrives on a vibrant campus life, offering diverse programs in arts, business, and science, fostering an atmosphere that nurtures creative thinking and innovation. With a strong emphasis on practical skills development, the university prepares students for future success by equipping them with the hands-on experience and creative mindset essential for thriving in their chosen fields. Edith Cowan University focuses on holistic growth, enabling students to harness their potential and embark on successful career paths with confidence and adaptability.",
        Courses: "Arts, Business, Science",
        Fees: "Approximately $25,000 to $32,000 AUD Per Year",
        Pic: ECU,
    },
    {
        id: "16",
        title: "Charles Darwin University",
        Intro: "Focuses on indigenous programs, environmental science, and regional development, offering a diverse and inclusive academic environment with a unique regional focus.",
        Factors: "Charles Darwin University, situated in Australia's Northern Territory, champions Indigenous-focused programs and stands as a beacon for excellence in environmental science. With a dedicated commitment to regional development, the university contributes significantly to the Northern Territory's growth. Embracing a diverse and inclusive academic environment, it fosters cultural richness and academic exploration, offering a platform that celebrates diversity while driving forward-thinking initiatives in environmental studies and community development.",
        Courses: "Indigenous Studies, Environmental Science, Regional Development",
        Fees: "Around $22,000 to $28,000 AUD Per Year",
        Pic: Charles,
    },
    {
        id: "17",
        title: "Victoria University",
        Intro: "Celebrated for its industry connections and programs in business, sports science, and creative arts, offering pathways to successful careers.",
        Factors: "Victoria University is distinguished by its strong emphasis on industry connections, boasting robust business programs and excellence in sports science. Renowned for its noteworthy creative arts courses, the university prepares students for successful careers by integrating theoretical knowledge with practical industry insights. With a proactive approach to fostering professional development, Victoria University equips graduates with the skills and expertise necessary to thrive in their chosen fields, ensuring a seamless transition from academia to the professional world.",
        Courses: "Business, Sports Science, Creative Arts",
        Fees: "Approximately $30,000 to $35,000 AUD Per Year",
        Pic: Victoria,
    },
    {
        id: "18",
        title: "Murdoch University",
        Intro: "Globally focused, known for research contributions across science, business, and media, promoting a multicultural and inclusive learning environment.",
        Factors: "Murdoch University epitomizes a globally focused institution, making impactful research contributions across various fields. It excels in both science and business programs, recognized for their excellence. The university offers noteworthy media courses and nurtures a multicultural, inclusive learning environment, fostering a global perspective while celebrating diversity. With a commitment to innovation and a rich tapestry of academic offerings, Murdoch University prepares students to become global citizens, equipped with versatile skills and a deep understanding of contemporary global issues.",
        Courses: "Science, Business, Media",
        Fees: "Around $25,000 to $32,000 AUD Per Year",
        Pic: Murdosh,
    },
    {
        id: "19",
        title: "University of Wollongong",
        Intro: "Committed to innovation and research in engineering, health sciences, and social sciences, offering a globally recognized education.",
        Factors: "The University of Wollongong stands as a testament to unwavering commitment to innovation and pioneering research across various disciplines. Renowned for its excellence in engineering programs and noted for its exceptional health sciences courses, the university also places a strong emphasis on social sciences. It offers a globally recognized education, fostering an environment that encourages critical thinking and academic exploration. With a dedication to cutting-edge research and a comprehensive approach to education, the University of Wollongong ensures students are equipped with a global perspective and a solid foundation for future success.",
        Courses: "Engineering, Health Sciences, Social Sciences",
        Fees: "Approximately $35,000 to $40,000 AUD Per Year",
        Pic: Wollongong,
    },
    {
        id: "20",
        title: "Deakin University",
        Intro: "Positioned as a progressive and technologically advanced institution, focusing on technology, health sciences, and environmental sustainability, preparing students for future challenges.",
        Factors: "Deakin University epitomizes progressiveness and technological advancement, offering excellence in technology programs and noteworthy health sciences courses. With a dedicated focus on environmental sustainability, the university prepares students to address future challenges in a rapidly evolving world. Embracing a forward-thinking approach, Deakin University equips its graduates with cutting-edge skills and knowledge, fostering a dynamic learning environment that nurtures innovation and prepares individuals to thrive in an ever-changing landscape.",
        Courses: "Technology, Health Sciences, Environmental Sustainability",
        Fees: "Around $30,000 to $35,000 AUD Per Year",
        Pic: Deakin,
    },
    {
        id: "21",
        title: "RMIT University",
        Intro: "Known for strong industry ties, emphasizing practical experience in design, technology, and business, preparing students for evolving careers.",
        Factors: "RMIT University thrives on strong industry connections, prioritizing practical experience and excelling in design programs. Renowned for its noteworthy technology courses, the institution gears students towards successful careers in our rapidly evolving world. With an emphasis on hands-on learning and industry-relevant skills, RMIT fosters an environment where innovation meets practicality, ensuring graduates are well-equipped to navigate the complexities of modern professions, emerging as agile and adaptable professionals ready to make substantial contributions.",
        Courses: "Design, Technology, Business",
        Fees: "Around $40,000 to $45,000 AUD Per Year",
        Pic: RMIT,
    },
]

export default Blog_Uni;













