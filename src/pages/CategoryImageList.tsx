import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ImagesGrid from '../components/ImagesGrid'
import CategoriesGrid from '../components/CategoriesGrid'
import { fetchAlbum } from '../util/utils'
import { useEffect } from 'react'
import { ImageCard } from '../types'
import React from 'react'
import { Container } from '../styles/container'

const CategoryImageList: React.FunctionComponent<{ hamburgerIsOpen: boolean }> = ({
  hamburgerIsOpen,
}) => {
  const { slug } = useParams()
  const [album, setAlbum] = React.useState<ImageCard[]>([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAlbum(slug)
      setAlbum(data)
    }
    if (slug) {
      getData()
    }
  }, [])

  return (
    <CategoryListContainer>
      {!hamburgerIsOpen ? <ImagesGrid imageList={album} /> : <CategoriesGrid />}
    </CategoryListContainer>
  )
}

export default CategoryImageList

const CategoryListContainer = styled(Container)`
  position: relative;
`
