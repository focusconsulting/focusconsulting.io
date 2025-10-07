import * as React from 'react'

import {
    Avatar,
    Box,
    Button,
    Link as ChakraLink,
    Divider,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import { HeadFC, Link, PageProps } from 'gatsby'

import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import { FaTasks, FaDotCircle } from 'react-icons/fa'
import { TbProgressCheck } from "react-icons/tb";
import { MdDoneAll, MdOutlineJoinInner } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import { TbYinYang } from "react-icons/tb";

import SectionNew from '../layout/SectionNew'

const content = {
    hero: {
        title: 'Focus Labs',
        description:
        "Our Labs division is combining emerging technologies with our digital delivery expertise to build ahead for the future.",
    },
    values: {
        title: 'AI & Emerging Technologies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        items: [
            {
                title: 'Taming Complex Rules',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icon: TbProgressCheck,
            },
            {
                title: 'Automated Testing',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icon: FaTasks,
            },
            {
                title: 'Developer Productivity',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icon: MdDoneAll,
            },
            {
                title: 'What else?',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icon: BsPersonFillCheck,
            }
        ]
    },
    culture: {
        title: 'Building Ahead',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        items: [            
            {
                title: 'Accelerator Applications',
                description: 'We encourage and value the contributions of different perspectives, backgrounds, and experiences. We actively seek input to make our solutions better.',
                icon: IoIosPeople,
            },
            {
                title: 'Starter Templates',
                description: 'We value and respect expertise closest to the work. Leaders provide the necessary context and support for folks to execute on their responsibilities.',
                icon: GrWorkshop,
            },
            {
                title: 'Our open source tools',
                description: 'We strive to be engaged and make meaningful progress during the workday. We balance meeting our deadlines with the well-being of team members.',
                icon: TbYinYang,
            },
        ]
    },    
}

const AboutPage: React.FC<PageProps> = () => {

    return (
        <Layout>
            <Hero2
                heading={content.hero.title}
                subHeading={content.hero.description}
            />
            <SectionNew
                section={content.values}
                backgroundColor="white"
            />
            <SectionNew
                section={content.culture}
                backgroundColor="gray.50"
            />
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - About" />