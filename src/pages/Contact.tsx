import React from 'react'
import CategoriesGrid from '../components/CategoriesGrid'
import ContactGrid from '../components/Contact'
import { Container } from '../styles/container'

const Contact: React.FunctionComponent<{ hamburgerIsOpen: boolean }> = ({ hamburgerIsOpen }) => {
  return <Container>{!hamburgerIsOpen ? <ContactGrid /> : <CategoriesGrid />} </Container>
}

export default Contact
