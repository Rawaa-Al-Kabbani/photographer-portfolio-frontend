import React, { FunctionComponent } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import styled from 'styled-components'
import { ImageCard } from '../types'
import theme from '../styles/theme'
const ImagesCarousel: FunctionComponent<{
  imageList: ImageCard[]
  startingImageIndex?: number
}> = ({ imageList, startingImageIndex }) => {
  const [imageIndex, setImageIndex] = React.useState(startingImageIndex || 0)
  const onForward = () => {
    const newImageIndex = imageIndex + 1
    if (newImageIndex <= imageList.length - 1) {
      setImageIndex(newImageIndex)
    } else {
      setImageIndex(0)
    }
  }

  const onReverse = () => {
    const newImageIndex = imageIndex - 1
    if (newImageIndex < 0) {
      setImageIndex(imageList.length - 1)
    } else {
      setImageIndex(newImageIndex)
    }
  }

  return (
    <>
      <MainContent>
        <FeaturedList>
          <FeaturedItem>
            <Picture src={imageList && imageList[imageIndex]?.photo} onClick={() => onForward()} />
          </FeaturedItem>
        </FeaturedList>
      </MainContent>
      <Arrows>
        <div style={{ flex: 1, cursor: 'pointer' }}>
          <ChevronLeft
            color={theme.colors.egg}
            width={'40px'}
            height={'40px'}
            onClick={() => onReverse()}
          />
        </div>
        <div style={{ cursor: 'pointer' }}>
          <ChevronRight
            color={theme.colors.egg}
            width={'40px'}
            height={'40px'}
            onClick={() => onForward()}
          />
        </div>
      </Arrows>
    </>
  )
}
export default ImagesCarousel

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;
  width: 100%;
  margin: 120px;
  ${theme.media.tablet} {
    height: 70vh;
  }
  ${theme.media.desktop1024} {
    height: 80vh;
    width: auto;
  }
`

const FeaturedList = styled.ul`
  display: grid;
  list-style: none;
  height: 100%;
  align-content: center;
  padding: 0;
`

const FeaturedItem = styled.li`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
`

const Picture = styled.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  max-height: 100%;
  background-color: var(--img-color);
  transition: opacity 1s ease-in-out;
  &:focus,
  &:active {
    opacity: 0;
  }
`

const Arrows = styled.div`
  position: absolute;
  z-index: ${theme.zIndexes.carouselModal};
  width: 94vw;
  margin: auto 0;
  display: flex;
  top: 35vh;
  ${theme.media.desktop1024} {
    width: 70vw;
    top: 40vh;
  }
`
