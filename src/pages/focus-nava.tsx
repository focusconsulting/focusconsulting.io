import { Box, Container, Heading, Text, Link as ChakraLink, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { HeadFC, Link, PageProps } from 'gatsby'
import { SEO } from '../components/seo'
import React from "react";
import Hero from "../layout/Hero";
import Section from "../layout/Section";
import { FaDownload } from "react-icons/fa";
import { renderAvatar } from "../utils/ui-utils";
import { approach } from './index'
import SharedContainer from "../layout/SharedContainer";
import SectionNew from "../layout/SectionNew";
import { irsBeaconsProject, irsCIOProject } from "./our-work";
import { EngageUs } from "../layout/EngageUs";

const content = {
  hero: {
    title: 'Impactful Digital Services',
    subHeading:
        'We assemble strong teams across [Focus](https://focusconsulting.io) and [Nava PBC](https://navapbc.com) to deliverx human-centered, high impact, and modern government digital services.',
  },
  approach: {
    title: 'Our Approach',
    description: approach.description,
    items: approach.items
  },
  projects: {
    title: 'Projects',
    items: [irsCIOProject, irsBeaconsProject]
  },
  enageWithUs: {
    title: "Work with Us",
    engageWithUsItems: [        
        {
            title: 'NAICS Codes',
            list: [
                '**541511**: Custom Computer Programming Services',
                '**541512**: Computer Systems Design Services',
                '**518210**: Data Processing, Hosting, and Related Services',
                '**511210**: Software Publishers ',
                '**541519**: Other Computer Related Services',
            ]
        },
        {
            title: 'Set Asides',
            list: [
                '8(a) Business Development Program',
            ]
        },
        {
            title: 'Contracting Details',
            list: [
                '**DUNS**: 119264428',
                '**UEI**: S1ZFC39UHSY1',
                '**CAGE**: 9VDB4',
            ]
        }
    ],
    capabilityStatementLink: "https://drive.google.com/file/d/1eOEd1TeQ-hyGi_5xa_AHj9SXemTcld2k/view?usp=drive_link",
  }
}

const FocusNavaJVPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <SharedContainer bgColor="white" py={[4, 4]}>
        <Image height={{ base: '45px', md: '65px' }} src="/images/index/focus-nava-logo-black.png" />
      </SharedContainer>
      <Hero
          heading={content.hero.title}
          subHeading={content.hero.subHeading}
      />
      <SectionNew
          section={content.approach}
          backgroundColor="white"
      />
      <SectionNew
          section={content.projects}
          backgroundColor="gray.50"
      />
      <SharedContainer bgColor="white" py={[12, 12]}>
        <EngageUs
            title={content.enageWithUs.title}
            engageUsItems={content.enageWithUs.engageWithUsItems}
            capabilityStatementLink={content.enageWithUs.capabilityStatementLink}
        />
      </SharedContainer>
      <SharedContainer bgColor="#316A50" py={[12, 12]} color="white">
        <Heading marginBottom="10">Leadership</Heading>
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          mb={{ base: 12, md: 12 }}
          spacing="10"
        >
          {renderAvatar('Ant Addis', 'President', '/images/staff/anteneh-avatar-new-sm.png', 'https://www.linkedin.com/in/ant-addis')}
          {renderAvatar('Rohan Bhobe', 'Partner', '/images/staff/rohan-avatar.jpeg', 'https://www.linkedin.com/in/rbhobe')}
        </SimpleGrid>
        <Text fontSize={['lg', 'lg']}>Focus Nava JV I LLC</Text> 
        <Text fontSize={['md', 'md']}>1015 15th St NW, Suite 600</Text>
        <Text fontSize={['md', 'md']} mb={5}>Washington DC, 20005</Text>    
        <Button
            color="white"
            fontSize={['lg', 'lg']}
            fontWeight={500}
            lineHeight={'28px'}
            as={Link}
            to="mailto:jv@focus-digital.io"
            variant="link"
            textDecor="underline"
        >
          jv@focus-digital.io
        </Button>
      </SharedContainer>               
    </Box>
  )
}

export default FocusNavaJVPage;

export const Head: HeadFC = () => <SEO title="Focus Nava JV - Impactful Government Digital Services" />