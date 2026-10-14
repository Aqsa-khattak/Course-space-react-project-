import { UserPen, BookOpen, Users, Award, ShieldCheck, Zap } from 'lucide-react'


import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Rating from "./components/Rating/Rating"
import FeaturesUpper from "./components/Features/FeaturesUpper"
import Courses from "./components/Courses/Courses"
import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"
import Footer from './components/Footer/Footer'




const App = () => {

  const users = [
    {
      para: "CourseSpace completely transformed my career trajectory. The instructors are exceptional, and the projects gave me the exact confidence I needed to land my dream engineering role.",
      img: "https://plus.unsplash.com/premium_photo-1697753121669-fe1307d66b7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jessica Taylor",
      professional: "Software Engineer at TechCorp"
    },
    {
      para: "The practical approach to design systems and UI/UX taught here is unmatched. It's concise, updated with modern tools, and well worth every single penny.",
      img: "https://plus.unsplash.com/premium_photo-1787683489154-73822eeb8cdc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Marcus Chen",
      professional: "Lead Product Designer"
    },
    {
     para: "As someone transitioning into AI, the data science bootcamp provided crystal-clear guidance and brilliant mentors. Highly recommended to anyone looking to level up.",
     img: "https://images.unsplash.com/photo-1788497170787-019582ff2e95?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     name: "Elena Rostova",
     professional: "AI Researcher & Developer"
    }
  ]

  const pricing = [
    {
      top: 'Starter',
      paragraph: 'Ideal for individual learners starting their journey.',
      pricing: '19',
      description: [
        'Access to basic courses',
        'Community forum access',
        'Standard video quality',
        'Course completion certificates',
      ]
    
    },
    {
      top: 'Pro Learner',
      paragraph: 'For serious professionals seeking rapid career advancement.',
      pricing: '49',
       description: [
        'Unlimited access to all courses',
        'Priority expert Q&A support',
        'HD 4K streaming quality',
        'Downloadable project resources',
        'Verified career certificates',
      ],
    },
    {
      top: 'Team / Enterprise',
      paragraph: 'Tailored for organizations and growing engineering teams.',
      pricing: '199',
       description: [
        'Everything in Pro Learner',
        'Centralized team dashboard',
        'Dedicated account manager',
        'Custom learning paths',
        'Advanced progress analytics',
      ],
    }
  ]

  const courses = [
    {
     img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
     top1: 'Full Stack',
     top2: 'Advanced',
     lessons: '42 Lessons',
     heading: 'Advanced React, Next.js & Node.js Masterclass',
     author: 'By Alex Morgan',
     rating: '4.9',
     students: '(1.4k)',
     price: '99'
    },
    {
     img: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
     top1: 'UI/UX Design',
     top2: 'Beginner',
     lessons: '34 Lessons',
     heading: 'Modern UI/UX Product Design Systems from Scratch',
     author: 'By Sarah Jenkins',
     rating: '4.8',
     students: '(950)',
     price: '79'
    },
    {
     img: 'https://images.unsplash.com/photo-1596560292551-97c0d8871dd4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
     top1: 'AI & Data',
     top2: 'Intermediate',
     lessons: '56 Lessons',
     heading: 'Machine Learning & Python Practical Bootcamp',
     author: 'By Dr. David Vance',
     rating: '5.0',
     students: '(2.1k)',
     price: '129'
    }
  ]
   
  const feature = [
    {
      logo: BookOpen,
      heading: 'Interactive Curriculum',
      para: 'Step-by-step guidance designed by industry experts with hands-on coding exercises.'
    },
    {
      logo: Users,
      heading: 'Global Community',
      para: 'Collaborate with peers, share knowledge, and build your professional network.'
    },
    {
      logo: Award,
      heading: 'Verified Certificates',
      para: 'Earn recognized credentials to showcase your proficiency to top employers worldwide.'
    },
    {
      logo: ShieldCheck,
      heading: 'Learn Anywhere',
      para: 'Seamless learning experience optimized for desktop, tablet, and mobile devices.'
    },
    {
      logo: Zap,
      heading: 'Lifetime Access',
      para: 'Review course content anytime and receive free updates as technologies evolve.'
    },
    {
      logo: UserPen,
      heading: 'Real-World Projects',
      para: 'Build production-ready applications that stand out in your resume.'
    }
  ]


  return (
    <div>

    
     <Navbar/>
     <Home/>
     <Rating/>
     <FeaturesUpper feature={feature}/>
     <Courses  courses={courses}/>
     <Section1 users={users}/>
     <Section2 pricing={pricing}/>
     <Footer/>
     
    </div>
  )
}

export default App
