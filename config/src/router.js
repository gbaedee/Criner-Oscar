import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import aboutMe from '@/components/aboutMe/aboutMe'
import appLauncher from '@/components/appLauncher'
import Spirituality from '@/components/Spirituality/Spirituality'
import EthicsLawAndJustice from '@/components/EthicsLawAndJustice/EthicsLawAndJustice'
import Literature from '@/components/Literature/Literature'
import Business from '@/components/Business/Business'
import ContactMe from '@/components/ContactMe/ContactMe'
import publicLectures from '@/components/publicLectures/publicLectures'
import EssaysAndPoetry from '@/components/EssaysAndPoetry/EssaysAndPoetry'
import fundamentalsOfKnowledge from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge'
import fundamentalsOfKnowledge_Biology from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_Biology'
import fundamentalsOfKnowledge_Chemistry from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_Chemistry'
import fundamentalsOfKnowledge_ComputerScience from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_ComputerScience'
import fundamentalsOfKnowledge_Mathematics from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_Mathematics'
import fundamentalsOfKnowledge_Physics from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_Physics'
import fundamentalsOfKnowledge_Philosophy from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_Philosophy'
import fundamentalsOfKnowledge_English from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_English'
import fundamentalsOfKnowledge_History from '@/components/fundamentalsOfKnowledge/fundamentalsOfKnowledge_History'
import HumanEvolution from '@/components/fundamentalsOfKnowledge/HumanEvolution'
import studentAdvisementAndSurvival from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival'
import studentAdvisementAndSurvival_247Schedule from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_247Schedule'
import studentAdvisementAndSurvival_ChoosingACollege from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_ChoosingACollege'
import studentAdvisementAndSurvival_FinancialAidTrap from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_FinancialAidTrap'
import studentAdvisementAndSurvival_Major from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_Major'
import studentAdvisementAndSurvival_Preparation from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_Preparation'
import studentAdvisementAndSurvival_TeachingAndLearningProcess from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_TeachingAndLearningProcess'
import studentAdvisementAndSurvival_TimeManagement from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_TimeManagement'
import studentAdvisementAndSurvival_Tools from '@/components/studentAdvisementAndSurvival/studentAdvisementAndSurvival_Tools'
import teaching_learning2 from '@/components/studentAdvisementAndSurvival/teaching_learning2'
import associative_memory from '@/components/studentAdvisementAndSurvival/associative_memory'
import computationalEnvironmentalScience from '@/components/computationalEnvironmentalScience/computationalEnvironmentalScience'
import ComputationalFinanceAndEconomics from '@/components/ComputationalFinanceAndEconomics/ComputationalFinanceAndEconomics'
import OnEducation from '@/components/OnEducation/OnEducation'
import OnEducation_Biology from '@/components/OnEducation/OnEducation_Biology'
import OnEducation_Chemistry from '@/components/OnEducation/OnEducation_Chemistry'
import OnEducation_ComputerScience from '@/components/OnEducation/OnEducation_ComputerScience'
import OnEducation_Mathematics from '@/components/OnEducation/OnEducation_Mathematics'
import OnEducation_Physics from '@/components/OnEducation/OnEducation_Physics'
import OnEducation_Philosophy from '@/components/OnEducation/OnEducation_Philosophy'
import OnEducation_English from '@/components/OnEducation/OnEducation_English'
import OnEducation_History from '@/components/OnEducation/OnEducation_History'
import OnEducationHumanEvolution from '@/components/OnEducation/OnEducationHumanEvolution'
import logicPhilosophyAndScience from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience'
import logicPhilosophyAndScience_Biology from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_Biology'
import logicPhilosophyAndScience_Chemistry from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_Chemistry'
import logicPhilosophyAndScience_ComputerScience from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_ComputerScience'
import logicPhilosophyAndScience_Mathematics from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_Mathematics'
import logicPhilosophyAndScience_Physics from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_Physics'
import logicPhilosophyAndScience_Philosophy from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_Philosophy'
import logicPhilosophyAndScience_English from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_English'
import logicPhilosophyAndScience_History from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScience_History'
import logicPhilosophyAndScienceHumanEvolution from '@/components/logicPhilosophyAndScience/logicPhilosophyAndScienceHumanEvolution'
import logicArtAndTheHumanities from '@/components/logicArtAndTheHumanities/logicArtAndTheHumanities'
import theater from '@/components/logicArtAndTheHumanities/theater'
import beautyEqualTruth from '@/components/logicArtAndTheHumanities/beautyEqualTruth'
import complexSystem from '@/components/logicArtAndTheHumanities/complexSystem'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutMe',
      name: 'About Me',
      component: aboutMe
    },
    {
      path: '/Spirituality',
      name: 'Spirituality',
      component: Spirituality
    },
    {
      path: '/Business',
      name: 'Business',
      component: Business
    },
    {
      path: '/fundamentalsOfKnowledge',
      name: 'Fundamentals Of Knowledge',
      component: fundamentalsOfKnowledge

    },
    {
      path: '/fundamentalsOfKnowledge_Biology',
      name: 'Fundamentals Of Knowledge: Biology',
      component: fundamentalsOfKnowledge_Biology
      
    },
    {
      path: '/fundamentalsOfKnowledge_Chemistry',
      name: 'Fundamentals Of Knowledge: Chemistry',
      component: fundamentalsOfKnowledge_Chemistry
      
    },
    {
      path: '/fundamentalsOfKnowledge_ComputerScience',
      name: 'Fundamentals Of Knowledge: ComputerScience',
      component: fundamentalsOfKnowledge_ComputerScience
      
    },
    {
      path: '/fundamentalsOfKnowledge_Mathematics',
      name: 'Fundamentals Of Knowledge: Mathematics',
      component: fundamentalsOfKnowledge_Mathematics
      
    },
    {
      path: '/fundamentalsOfKnowledge_Physics',
      name: 'Fundamentals Of Knowledge: Physics',
      component: fundamentalsOfKnowledge_Physics
      
    },
    {
      path: '/fundamentalsOfKnowledge_Philosophy',
      name: 'Fundamentals Of Knowledge: Philosophy',
      component: fundamentalsOfKnowledge_Philosophy
      
    },
    {
      path: '/fundamentalsOfKnowledge_English',
      name: 'Fundamentals Of Knowledge: English',
      component: fundamentalsOfKnowledge_English
      
    },
    {
      path: '/fundamentalsOfKnowledge_History',
      name: 'Fundamentals Of Knowledge: History',
      component: fundamentalsOfKnowledge_History
      
    },
    {
      path: '/HumanEvolution',
      name: 'Fundamentals Of Knowledge: Human Evolution',
      component: HumanEvolution
      
    },
    {
      path: '/studentAdvisementAndSurvival',
      name: 'Student Advisement And Survival',
      component: studentAdvisementAndSurvival
      
    },
    {
      path: '/studentAdvisementAndSurvival_247Schedule',
      name: 'Student Advisement And Survival: 24-7 Schedule',
      component: studentAdvisementAndSurvival_247Schedule
      
    },
    {
      path: '/studentAdvisementAndSurvival_ChoosingACollege',
      name: 'Student Advisement And Survival: Choosing A College',
      component: studentAdvisementAndSurvival_ChoosingACollege
      
    },
    {
      path: '/studentAdvisementAndSurvival_FinancialAidTrap',
      name: 'Student Advisement And Survival: Financial Aid Trap',
      component: studentAdvisementAndSurvival_FinancialAidTrap
      
    },
    {
      path: '/studentAdvisementAndSurvival_Major',
      name: 'Student Advisement And Survival: Major',
      component: studentAdvisementAndSurvival_Major
      
    },
    {
      path: '/studentAdvisementAndSurvival_Preparation',
      name: 'Student Advisement And Survival: Preparation',
      component: studentAdvisementAndSurvival_Preparation
      
    },
    {
      path: '/studentAdvisementAndSurvival_TeachingAndLearningProcess',
      name: 'Student Advisement And Survival: Teaching And Learning Process',
      component: studentAdvisementAndSurvival_TeachingAndLearningProcess
      
    },
    {
      path: '/teaching_learning2',
      name: 'Student Advisement And Survival: Teaching And Learning Process',
      component: teaching_learning2
      
    },
    {
      path: '/associative_memory',
      name: 'Student Advisement And Survival: Teaching And Learning Process',
      component: associative_memory
      
    },
    {
      path: '/studentAdvisementAndSurvival_TimeManagement',
      name: 'Student Advisement And Survival: Time Management',
      component: studentAdvisementAndSurvival_TimeManagement
      
    },
    {
      path: '/studentAdvisementAndSurvival_Tools',
      name: 'Student Advisement And Survival: Tools',
      component: studentAdvisementAndSurvival_Tools
      
    },
    {
      path: '/OnEducation',
      name: 'On Education',
      component: OnEducation

    },
    {
      path: '/OnEducation_Biology',
      name: 'On Education: Biology',
      component: OnEducation_Biology
      
    },
    {
      path: '/OnEducation_Chemistry',
      name: 'On Education: Chemistry',
      component: OnEducation_Chemistry
      
    },
    {
      path: '/OnEducation_ComputerScience',
      name: 'On Education: ComputerScience',
      component: OnEducation_ComputerScience
      
    },
    {
      path: '/OnEducation_Mathematics',
      name: 'On Education: Mathematics',
      component: OnEducation_Mathematics
      
    },
    {
      path: '/OnEducation_Physics',
      name: 'On Education: Physics',
      component: OnEducation_Physics
      
    },
    {
      path: '/OnEducation_Philosophy',
      name: 'On Education: Philosophy',
      component: OnEducation_Philosophy
      
    },
    {
      path: '/OnEducation_English',
      name: 'On Education: English',
      component: OnEducation_English
      
    },
    {
      path: '/OnEducation_History',
      name: 'On Education: History',
      component: OnEducation_History
      
    },
    {
      path: '/OnEducationHumanEvolution',
      name: 'On Education: Human Evolution',
      component: OnEducationHumanEvolution
    },
    {
      path: '/logicPhilosophyAndScience',
      name: 'Logic, Philosophy And Science',
      component: logicPhilosophyAndScience

    },
    {
      path: '/logicPhilosophyAndScience_Biology',
      name: 'Logic, Philosophy And Science: Biology',
      component: logicPhilosophyAndScience_Biology
      
    },
    {
      path: '/logicPhilosophyAndScience_Chemistry',
      name: 'Logic, Philosophy And Science: Chemistry',
      component: logicPhilosophyAndScience_Chemistry
      
    },
    {
      path: '/logicPhilosophyAndScience_ComputerScience',
      name: 'Logic, Philosophy And Science: ComputerScience',
      component: logicPhilosophyAndScience_ComputerScience
      
    },
    {
      path: '/logicPhilosophyAndScience_Mathematics',
      name: 'Logic, Philosophy And Science: Mathematics',
      component: logicPhilosophyAndScience_Mathematics
      
    },
    {
      path: '/logicPhilosophyAndScience_Physics',
      name: 'Logic, Philosophy And Science: Physics',
      component: logicPhilosophyAndScience_Physics
      
    },
    {
      path: '/logicPhilosophyAndScience_Philosophy',
      name: 'Logic, Philosophy And Science: Philosophy',
      component: logicPhilosophyAndScience_Philosophy
      
    },
    {
      path: '/logicPhilosophyAndScience_English',
      name: 'Logic, Philosophy And Science: English',
      component: logicPhilosophyAndScience_English
      
    },
    {
      path: '/logicPhilosophyAndScience_History',
      name: 'Logic, Philosophy And Science: History',
      component: logicPhilosophyAndScience_History
      
    },
    {
      path: '/logicPhilosophyAndScienceHumanEvolution',
      name: 'Logic, Philosophy And Science: Human Evolution',
      component: logicPhilosophyAndScienceHumanEvolution
    },
    {
      path: '/logicArtAndTheHumanities',
      name: 'Logic, Art And The Humanities',
      component: logicArtAndTheHumanities
      
    },
    {
      path: '/beautyEqualTruth',
      name: 'Logic, Art And The Humanities: Beauty Equal Truth',
      component: beautyEqualTruth
      
    },
    {
      path: '/complexSystem',
      name: 'Logic, Art And The Humanities: Complex System',
      component: complexSystem
      
    },
    {
      path: '/theater',
      name: 'Logic, Art And The Humanities: Theater',
      component: theater
    },
    {
      path: '/EthicsLawAndJustice',
      name: 'Ethics, Law and Justice',
      component: EthicsLawAndJustice
    },
    {
      path: '/EssaysAndPoetry',
      name: 'Essays and Poetry',
      component: EssaysAndPoetry
    },
    {
      path: '/publicLectures',
      name: 'Public Lectures',
      component: publicLectures
    },
    {
      path: '/ContactMe',
      name: 'Contact Me',
      component: ContactMe
    },
    {
      path: '/Literature',
      name: 'Literature',
      component: Literature
    },
    {
      path: '/ComputationalFinanceAndEconomics',
      name: 'Computational Finance And Economics',
      component: ComputationalFinanceAndEconomics
    },
    {
      path: '/computationalEnvironmentalScience',
      name:'Computational Environmental Science',
      component: computationalEnvironmentalScience
    }
  ]
})
