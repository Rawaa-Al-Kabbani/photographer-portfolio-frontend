import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { goToLink } from '../util/utils'
import theme from '../styles/theme'
import { WebsiteData } from '../types'
import { API_URL } from '../constants'

const Header: React.FC<{
  hamburgerIsOpen: boolean
  setHamburgerIsOpen: (state: boolean) => void
}> = ({ hamburgerIsOpen, setHamburgerIsOpen }) => {
  const [websiteData, setWebsiteData] = useState<WebsiteData | undefined>(undefined)

  const fetchData = async () => {
    const result = await fetch(API_URL + '/album/website/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await result.json()
    setWebsiteData(response.website)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Menu>
      <HamburgerBox onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)} open={hamburgerIsOpen}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerBox>
      <Name onClick={() => goToLink('/')}>{websiteData?.name}</Name>
    </Menu>
  )
}

export default Header

const Menu = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  z-index: ${theme.zIndexes.header};
`

const HamburgerBox = styled.div<{ open: boolean }>`
  margin-left: 10px;
  cursor: pointer;
  span:nth-child(2) {
    opacity: ${(props) => (props?.open ? 0 : 1)};
  }

  span:nth-child(1) {
    transform: ${(props) => (props?.open ? 'translateY(8px) rotate(45deg)' : 'translateY(0)')};
  }

  span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transform: ${(props) => (props?.open ? 'translateY(-8px) rotate(-45deg)' : 'translateY(0)')};
  }
`

const HamburgerBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: ${theme.colors.egg};
`

const Name = styled.div`
  cursor: pointer;
  margin-left: 30px;
  text-transform: uppercase;
  font-size: 1.4rem;
`
