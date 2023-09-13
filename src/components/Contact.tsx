import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import { ContactItem } from '../types'
import theme from '../styles/theme'
import { API_URL } from '../constants'

const ContactGrid: FunctionComponent = () => {
  const [contactData, setContactData] = React.useState<ContactItem | undefined>(undefined)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL + '/album/contact/', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const allContacts = await response.json()
      setContactData(allContacts.contact)
    }
    getData()
  }, [])

  return (
    <MainContent>
      <ContactRow>{contactData?.title}</ContactRow>
      <ContactRow>{contactData?.name}</ContactRow>
      <ContactRow>
        <A href={`mailto:${contactData?.email}`}>{contactData?.email}</A>
      </ContactRow>
      <ContactRow>
        <A href={`tel:${contactData?.tel}`}>{contactData?.tel}</A>
      </ContactRow>
    </MainContent>
  )
}
export default ContactGrid

const MainContent = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  ${theme.media.desktop2000} {
    max-width: 2000px;
  }
`

const ContactRow = styled.div``

const A = styled.a`
  cursor: pointer;
  color: ${theme.colors.egg};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: #a9a9a9;
  }
`
