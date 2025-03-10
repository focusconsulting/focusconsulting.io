import Layout from '../layout/Layout'
import React from 'react'
import { Script } from 'gatsby'
import Hero from '../layout/Hero'
import SectionNew from '../layout/SectionNew'
import { CgHello } from "react-icons/cg";
import { MdOutlineComputer } from "react-icons/md";
import { FaUsers, FaFileContract, FaSpinner, FaRegHandshake, FaLaptopCode, FaComments, FaFileSignature } from "react-icons/fa";
import { 
    FaMoneyBillWave, 
    FaUmbrellaBeach, 
    FaHeartbeat, 
    FaNotesMedical, 
    FaShieldAlt, 
    FaWallet, 
    FaBabyCarriage, 
    FaPiggyBank, 
    FaLaptop, 
    FaGraduationCap, 
    FaHome, 
    FaGift 
} from "react-icons/fa";
import SharedContainer from '../layout/SharedContainer'
import { describe } from 'node:test'

const content = {
    hero: {
        title: 'Careers at Focus',
        description:
        'Join our team of technologists to help deliver meaningful impact through government digital services.',
    },
    hiring: {
        title: 'Hiring Process',
        description: 'Our hiring process looks for practical day to day skills needed for our work. No gimmicks or trick questions. Our hiring process usually takes *two weeks* from the first session to offer.',
        items: [
            {
                title: '1. Intro Call',
                subtitle: '30 mins',
                description: "You'll speak to one of your future teammates to talk briefly about your career history, understand your interests for a next role, and answering any questions you have about Focus. We want to make sure there is mutual interest.",
                icon: FaRegHandshake,
            },
            {
                title: '2. Technical Interview',
                subtitle: '60 - 90 mins',
                description: 'Our technical interviews focus on your ability to perform day to day tasks. We ask Software Engineers submit a short take home exercise, which we go over and expand on during our session. Other roles will dive deeper into your experience and work through practical project scenarios.',
                icon: FaLaptopCode,
            },
            {
                title: '3. Behavioral Interview',
                subtitle: '60 mins',
                description: 'During our last session, we talk through how you work and collaborate with your team and clients.',
                icon: FaComments,
            },
            {
                title: '4. Offer',
                subtitle: 'Within days',
                description: 'The interview team syncs to make a decision and send an offer. We take pride in getting back to folks quickly.',
                icon: FaFileSignature,
            }
        ],
        ctas: [
            { title: 'Our Values & Culture', path: '/about' },
            { title: 'See Open Roles', path: '/careers#open-roles' }
        ]
    },
    benefits: {
        title: 'Benefits',
        description: 'We strive to provide employees with highly competitive benefits to our industry.',
        items: [
            {
                title: "Competitive Salary",
                description: "Competitive compensation to the Washington D.C. market, and transparent levels and salary bands.",
                icon: FaMoneyBillWave
            },
            {
                title: "Vacation",
                description: "26 days off per year: 15 days PTO plus 11 federal holidays.",
                icon: FaUmbrellaBeach
            },
            {
                title: "Health Insurance",
                description: "Medical, dental and vision coverage for you and your family.",
                icon: FaHeartbeat
            },
            {
                title: "Unlimited Sick Leave",
                description: "No need to spend your vacation days in bed.",
                icon: FaNotesMedical
            },
            {
                title: "Life & Disability Insurance",
                description: "100% company paid life, short-term and long-term disability insurance.",
                icon: FaShieldAlt
            },
            {
                title: "Pre-Tax Spending Accounts",
                description: "Pre-tax medical flexible spending accounts (FSA) and dependent care assistance program (DCAP).",
                icon: FaWallet
            },
            {
                title: "Paid Family & Medical Leave",
                description: "Up to 12 weeks of fully paid parental or medical leave for eligible employees.",
                icon: FaBabyCarriage
            },
            {
                title: "401(K)",
                description: "We provide 401(k) contributions through Human Interest.",
                icon: FaPiggyBank
            },
            {
                title: "Laptop",
                description: "We get you a work laptop of your choice when you join.",
                icon: FaLaptop
            },
            {
                title: "Professional Development",
                description: "$1,000 every year to take classes, attend conferences, or buy subscriptions.",
                icon: FaGraduationCap
            },
            {
                title: "Remote",
                description: "Work from anywhere within the continental US.",
                icon: FaHome
            },
            {
                title: "Bonus",
                description: "Yearly bonus based on your performance and company outcomes.",
                icon: FaGift
            }
        ]        
    },
    roles: {
        title: 'Open Roles',
        description: "Don't see an role open that matches your experience? We have roles opening up all the time - share your interest in our resume drop off!"
    }
}

const JobBoard = () => (
    <Layout>
        <Hero
            heading={content.hero.title}
            subHeading={content.hero.description}
        />
        <SectionNew
            section={content.hiring}
            backgroundColor="white"
        />
        <SectionNew
            section={content.benefits}
            backgroundColor="gray.50"
            columns={[1, 3]}
        />
        <SectionNew
            section={content.roles}
            backgroundColor="white"
            anchor="open-roles"
        >
            <div id="ashby_embed" style={{ minHeight: '55vh' }}>
                <FaSpinner />
            </div>
            <Script src="https://jobs.ashbyhq.com/focus/embed"></Script>
        </SectionNew>
    </Layout>
)

export default JobBoard
