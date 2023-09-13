import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ImagesCarousel from './ImagesCarousel'
import theme from '../styles/theme'
import { ImageCard } from '../types'

const FullScreenCarousel: FunctionComponent<{
  imageList: ImageCard[]
  startingImageIndex: number
  setIsFullScreenCarouselOpen: (open: boolean) => void
}> = ({ imageList, startingImageIndex, setIsFullScreenCarouselOpen }) => {
  return (
    <FullScreenCarouselContainer>
      <ImagesCarousel imageList={imageList} startingImageIndex={startingImageIndex} />
      <ClosingBox onClick={() => setIsFullScreenCarouselOpen(false)}>
        <div>
          <LineBar />
          <LineBar />
          <LineBar />
        </div>
      </ClosingBox>
    </FullScreenCarouselContainer>
  )
}
export default FullScreenCarousel

const FullScreenCarouselContainer = styled.div`
  position: absolute;
  z-index: ${theme.zIndexes.carouselModal};
  top: 120px;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  width: 100%;
  ${theme.media.desktop1024} {
    height: 80%;
    width: auto;
  }
`

const ClosingBox = styled.div`
  cursor: pointer;
  position: absolute;
  width: calc(94vw - 10px);
  top: 0;
  display: flex;
  justify-content: flex-end;
  span:nth-child(2) {
    opacity: 0;
  }

  span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  ${theme.media.desktop1024} {
    width: 70vw;
  }
`

const LineBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: ${theme.colors.egg};
`
