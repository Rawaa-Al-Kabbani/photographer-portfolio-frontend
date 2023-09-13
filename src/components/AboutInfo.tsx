import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import { AboutItem } from '../types'
import theme from '../styles/theme'
import ReactMarkdown from 'react-markdown'
import { API_URL } from '../constants'

const AboutInfo: FunctionComponent = () => {
  const [aboutData, setAboutData] = React.useState<AboutItem | undefined>(undefined)

  useEffect(() => {
    const fetchAbout = async () => {
      const result = await fetch(API_URL + '/album/about/', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const allAbouts = await result.json()
      setAboutData(allAbouts.about)
    }
    fetchAbout()
  }, [])
  return (
    <MainContent>
      <DetailList>
        <DetailRow>
          <ReactMarkdown>{aboutData?.text as string}</ReactMarkdown>
        </DetailRow>
      </DetailList>
      <ImageContainer>
        <Picture src={aboutData?.photo} width={'100%'} height={'100%'} />
      </ImageContainer>
    </MainContent>
  )
}
export default AboutInfo

const MainContent = styled.div`
  padding: 80px 40px 0 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: calc(10px + 0.8vmin);
  ${theme.media.tablet} {
    align-items: center;
    padding: 99px;
    flex-direction: row;
    height: calc(100vh - 189px);
  }
  ${theme.media.desktop2000} {
    max-width: 2000px;
  }
`

const DetailList = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${theme.media.tablet} {
    max-height: calc(100vh -189px);
    overflow: hidden;
    justify-content: center;
  }
`

const DetailRow = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 40px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  ${theme.media.tablet} {
    width: calc(60% - 30px);
    margin-left: 60px;
  }
  ${theme.media.desktop1024} {
    width: calc(50% - 30px);
  }
`
const Picture = styled.img`
  cursor: pointer;
  display: block;
  transition: opacity 1s ease-in-out;
  &:focus,
  &:active {
    opacity: 0;
  }
`
