import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import FullScreenCarousel from './FullScreenCarousel'
import { ImageCard } from '../types'

const ImagesGrid: FunctionComponent<{ imageList: ImageCard[] }> = ({ imageList }) => {
  const [isFullScreenCarouselOpen, setIsFullScreenCarouselOpen] = useState<boolean>(false)
  const [startingImageIndex, setStartingImageIndex] = useState<number>(0)

  const onClickImage = (index: number) => {
    setStartingImageIndex(index)
    setIsFullScreenCarouselOpen(!isFullScreenCarouselOpen)
  }
  return (
    <>
      {imageList.length > 0 ? (
        <>
          {isFullScreenCarouselOpen ? (
            <FullScreenCarousel
              imageList={imageList}
              startingImageIndex={startingImageIndex}
              setIsFullScreenCarouselOpen={setIsFullScreenCarouselOpen}
            />
          ) : (
            <MainContent length={imageList.length}>
              {imageList.map((image, index) => (
                <FeaturedItem key={index} hasOneItem={imageList.length === 1}>
                  <Picture
                    src={image.photo}
                    width={'100%'}
                    height={'100%'}
                    onClick={() => imageList.length > 1 && onClickImage(index)}
                  />
                  <CardInfo style={{ fontStyle: 'italic', fontWeight: 700, padding: '8px' }}>
                    {image.title}
                  </CardInfo>
                  <CardInfo style={{ fontStyle: 'italic', fontWeight: 400, paddingLeft: '8px' }}>
                    {image.description}
                  </CardInfo>
                </FeaturedItem>
              ))}
            </MainContent>
          )}
        </>
      ) : (
        <div>No images</div>
      )}
    </>
  )
}
export default ImagesGrid

const MainContent = styled.div<{ length: number }>`
  max-width: 2000px;
  height: 85vh;
  margin: 120px 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 60px;
  column-gap: 60px;
  ${theme.media.tablet} {
    margin: 120px 70px;
    grid-template-columns: ${(props) =>
      props.length <= 2 ? `repeat(${props.length}, 1fr)` : 'repeat(2, 1fr)'};
  }
  ${theme.media.desktop1200} {
    height: 50vh;
    grid-template-columns: ${(props) =>
      props.length <= 2 ? `repeat(${props.length}, 1fr)` : 'repeat(3, 1fr)'};
  }
  }
  ${theme.media.desktop1600} {
    margin: 120px;
    grid-template-columns: ${(props) =>
      props.length <= 2 ? `repeat(${props.length}, 1fr)` : 'repeat(4, 1fr)'};
  }
`

const FeaturedItem = styled.li<{ hasOneItem }>`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

const Picture = styled.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  background-color: var(--img-color);
  transition: opacity 1s ease-in-out;
  &:focus,
  &:active {
    opacity: 0;
  }
`

const CardInfo = styled.div`
  font-size: 16px;
  ${theme.media.desktop1600} {
    font-size: 24px;
  }
`
