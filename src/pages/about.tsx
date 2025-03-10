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
        title: 'About Us',
        description:
        'Focus was founded in 2019 to bring together a unique set of industry and government experiences to government services. We take on projects that deliver meaningful impact for end users and agency programs through digital services.',
    },
    values: {
        title: 'Our Values',
        description: 'Our values are important both for the success of our clients and our company. They reflect the qualities of people we seek to hire, develop, and reward.',
        items: [
            {
                title: 'Progress through ambiguity',
                description: 'Our projects often come with a level of ambiguity. We use it as an opportunity for discovery and exploration, and we adapt our approach to our clients’ needs and priorities.',
                icon: TbProgressCheck,
            },
            {
                title: 'Bias for action',
                description: 'We set ourselves apart by not waiting to make progress until we have all the answers. We make incremental progress by taking initiative to identify multiple alternatives to challenges.',
                icon: FaTasks,
            },
            {
                title: 'Own our outcomes',
                description: 'Government projects are often known for taking too long to build the wrong thing. We aim to consistently deliver on our projects by focusing on key program outcomes for our clients and their users.',
                icon: MdDoneAll,
            },
            {
                title: 'Managers-of-one',
                description: 'Managers-of-one are self-sufficient, set their own direction, and get things done. We aim to stay as lean as possible so that we can continue to deliver at speed.',
                icon: BsPersonFillCheck,
            }
        ]
    },
    culture: {
        title: 'Our Culture',
        description: 'Our team thrives on meaningful contributions, values multiple voices, and trusts individuals to take ownership.',
        items: [            
            {
                title: 'Beyond One Perspective',
                description: 'We encourage and value the contributions of different perspectives, backgrounds, and experiences. We actively seek input to make our solutions better.',
                icon: IoIosPeople,
            },
            {
                title: 'Empowered Autonomy',
                description: 'We value and respect expertise closest to the work. Leaders provide the necessary context and support for folks to execute on their responsibilities.',
                icon: GrWorkshop,
            },
            {
                title: 'A Good Day’s Work',
                description: 'We strive to be engaged and make meaningful progress during the workday. We balance meeting our deadlines with the well-being of team members.',
                icon: TbYinYang,
            },
            {
                title: 'One-Team Mindset',
                description: 'The nature of our business tends to create project based silos. We share expertise and learnings, mentor and coach our colleagues, and support each other across projects.',
                icon: MdOutlineJoinInner,
            }
        ]
    },
    team: {
        title: 'Our Team',
        description: 'Our 40 strong, distributed, and growing team of **Product Managers**, **Designers**, **Software Engineers**, and **Project Managers** is working on critical government services.',        
        staff: [
            {
                name: 'Ant Addis',
                title: 'CEO',
                photo: '/images/staff/anteneh-avatar-new-sm.png',
                link: 'https://www.linkedin.com/in/ant-addis',
                department: 'leadership',
            },
            {
                name: 'Michael Kalish',
                title: 'CTO',
                photo: '/images/staff/kalish-profile.webp',
                link: 'https://www.linkedin.com/in/mqkalish',
                department: 'leadership',
            }
        ],
        ctas: [
            { title: 'Join our Growing Team', path: '/careers' }
        ]
    }
}

const AboutPage: React.FC<PageProps> = () => {

    const renderPerson = (person: any) => {
        return (
            <Box>
                <Avatar
                    name={person.name}
                    size={{
                        base: 'xl',
                        md: '2xl',
                    }}
                    mb={2}
                    src={person.photo}
                />
                {person.link ? (
                    <Box>
                        <ChakraLink
                            isExternal
                            textDecor={
                                'underline'
                            }
                            href={
                                person.link
                            }
                            fontSize={{
                                base: 'xl',
                                md: '2xl',
                            }}
                            fontWeight="semibold"
                            mb={1}
                        >
                            {person.name}
                        </ChakraLink>
                    </Box>
                ) : (
                    <Text
                        fontSize={{
                            base: 'xl',
                            md: '2xl',
                        }}
                        fontWeight="semibold"
                        mb={1}
                    >
                        {person.name}
                    </Text>
                )}
                <Text
                    fontSize={{
                        base: 'lg',
                        md: 'xl',
                    }}
                >
                    {person.title}
                </Text>
            </Box>
        )
    }

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
            <SectionNew
                section={content.team}
                backgroundColor="white"
            >
                <Box>
                    <Heading
                        fontSize={['2xl', '3xl']}
                        mb={[4, 6]}
                    >                
                        Leadership
                    </Heading>
                    <SimpleGrid
                        columns={[2, 5]}
                        spacing={10}
                    >
                        {content.team.staff.map((person: any) => renderPerson(person))}
                    </SimpleGrid>                    
                </Box>
            </SectionNew>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - About" />

// const team = [
//     {
//         name: 'Japhet Teshale',
//         title: 'Software Engineer',
//         photo: '/images/staff/japhet-teshale.png',
//         department: 'engineering',
//     },
//     {
//         name: 'Eyuel Abebe',
//         title: 'Software Engineer',
//         photo: '/images/staff/eyuel.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Ant Addis',
//         title: 'CEO',
//         photo: '/images/staff/anteneh-avatar-new-sm.png',
//         link: 'https://www.linkedin.com/in/ant-addis',
//         department: 'leadership',
//     },
//     {
//         name: 'Kolawole Balegun',
//         title: 'Software Engineer',
//         photo: '/images/staff/kola.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Iverson Diles',
//         title: 'Software Engineer',
//         photo: '/images/staff/iverson-diles.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Michael Kalish',
//         title: 'CTO',
//         photo: '/images/staff/kalish-profile.webp',
//         link: 'https://www.linkedin.com/in/mqkalish',
//         department: 'leadership',
//     },
//     {
//         name: 'Mike Liu',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Gabriel Dorsch',
//         title: 'Software Engineer',
//         photo: '/images/staff/gabriel.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Thu Pham',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Jack Wang',
//         title: 'Software Engineer',
//         photo: '/images/staff/jack-wang.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Kant Kodali',
//         title: 'Software Engineer',
//         photo: '/images/staff/kant_kodali.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Jamie Albinson',
//         title: 'Software Engineer',
//         photo: '/images/staff/jamie-albinson.webp',
//         department: 'engineering',
//     },
//     {
//         name: 'Yishak Yusuf',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Paul Toner',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Andrew Pham',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Bruk Abebe',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Shijit Dasgupta',
//         title: 'Infrastructure Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Nathan Stricker',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Antoine Fillinger',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Stephen Jordan',
//         title: 'Software Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Ahmed Saeed',
//         title: 'QA Engineer',
//         department: 'engineering',
//     },
//     {
//         name: 'Sarah Parker',
//         title: 'Product Manager',
//         department: 'product',
//     },
//     {
//         name: 'Mel Woldeyesus',
//         title: 'Business Analyst',
//         department: 'product',
//     },
//     {
//         name: 'Tshering Yudon',
//         title: 'Designer',
//         photo: '/images/staff/tshering-yudon.webp',
//         department: 'design',
//     },
//     {
//         name: 'Jenn Snyder',
//         title: 'Designer',
//         department: 'design',
//     },
//     {
//         name: 'Katherine Kelly',
//         title: 'Designer',
//         department: 'design',
//     },
//     {
//         name: 'Upendra Jejjala',
//         title: 'Product Manager',
//         photo: '/images/staff/upendra-avatar.jpg',
//         department: 'product',
//     },
// ]

// const customRenderMap: any = {
//     team: () => {
//         return (
//             <>
//                 {['leadership', 'product', 'design', 'engineering'].map(
//                     (dept: string) => (
//                         <Box marginBottom="5">
//                             <Heading marginBottom="10">
//                                 {dept.charAt(0).toUpperCase() +
//                                     dept.slice(1)}
//                             </Heading>
//                             <SimpleGrid
//                                 columns={{ base: 2, md: 4 }}
//                                 mb={{ base: 12, md: 12 }}
//                                 spacing="10"
//                             >
//                                 {team
//                                     .filter(
//                                         (person) =>
//                                             person.department == dept
//                                     )
//                                     .map((person) => {
//                                         return (
//                                             <Box>
//                                                 <Avatar
//                                                     name={person.name}
//                                                     size={{
//                                                         base: 'xl',
//                                                         md: '2xl',
//                                                     }}
//                                                     mb={2}
//                                                     src={person.photo}
//                                                 />
//                                                 {person.link ? (
//                                                     <Box>
//                                                         <ChakraLink
//                                                             isExternal
//                                                             textDecor={
//                                                                 'underline'
//                                                             }
//                                                             href={
//                                                                 person.link
//                                                             }
//                                                             fontSize={{
//                                                                 base: 'xl',
//                                                                 md: '2xl',
//                                                             }}
//                                                             fontWeight="semibold"
//                                                             mb={1}
//                                                         >
//                                                             {person.name}
//                                                         </ChakraLink>
//                                                     </Box>
//                                                 ) : (
//                                                     <Text
//                                                         fontSize={{
//                                                             base: 'xl',
//                                                             md: '2xl',
//                                                         }}
//                                                         fontWeight="semibold"
//                                                         mb={1}
//                                                     >
//                                                         {person.name}
//                                                     </Text>
//                                                 )}
//                                                 <Text
//                                                     fontSize={{
//                                                         base: 'lg',
//                                                         md: 'xl',
//                                                     }}
//                                                 >
//                                                     {person.title}
//                                                 </Text>
//                                             </Box>
//                                         )
//                                     })}
//                             </SimpleGrid>
//                             <Divider />
//                         </Box>
//                     )
//                 )}
//             </>
//         )
//     },
//     'focus-areas': () => {
//         return (
//             <Stack
//                 justify="center"
//                 px={['0', '11']}
//                 spacing="5"
//                 margin={'auto'}
//                 direction={{ base: 'column', md: 'row' }}
//             >
//                 <Button
//                     variant="solid"
//                     fontSize={{ base: '2xl', md: '2xl' }}
//                     size="lg"
//                     colorScheme="blue"
//                     as={Link}
//                     to="/services"
//                 >
//                     Services & Expertise
//                 </Button>
//                 <Button
//                     variant="solid"
//                     size="lg"
//                     fontSize={{ base: '2xl', md: '2xl' }}
//                     colorScheme="blue"
//                     as={Link}
//                     to="/our-work"
//                 >
//                     Examples of Our Work
//                 </Button>
//             </Stack>
//         )
//     },
// }