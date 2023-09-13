import React, { useEffect } from 'react'
import CategoriesGrid from '../components/CategoriesGrid'
import ImagesCarousel from '../components/ImagesCarousel'
import { ImageCard } from '../types'
import { fetchAlbum } from '../util/utils'
import { Container } from '../styles/container'

const Home: React.FC<{ hamburgerIsOpen: boolean }> = ({ hamburgerIsOpen }) => {
  const [album, setAlbum] = React.useState<ImageCard[]>([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAlbum()
      setAlbum(data)
    }
    getData()
  }, [])

  return (
    <Container>
      {!hamburgerIsOpen ? <ImagesCarousel imageList={album}></ImagesCarousel> : <CategoriesGrid />}
    </Container>
  )
}

export default Home
