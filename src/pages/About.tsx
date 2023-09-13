import React from 'react'
import CategoriesGrid from '../components/CategoriesGrid'
import AboutInfo from '../components/AboutInfo'
import { Container } from '../styles/container'
import styled from 'styled-components'
import theme from '../styles/theme'

const About: React.FunctionComponent<{ hamburgerIsOpen: boolean }> = ({ hamburgerIsOpen }) => {
  return <AboutContainer>{!hamburgerIsOpen ? <AboutInfo /> : <CategoriesGrid />} </AboutContainer>
}

export default About

const AboutContainer = styled(Container)`
  height: auto;
  ${theme.media.desktop1024} {
    height: 100vh;
  }
`
