import { API_URL } from '../constants'
import theme from '../styles/theme'
import { ImageCard } from '../types'

export const isDesktop = (dimensions: { width: number; height: number }) => {
  return dimensions.width >= theme.sizes.large1024
}

export const goToLink = (link: string) => {
  window.location.href = link
}

export const fetchAlbum = async (categorySlug?: string): Promise<ImageCard[]> => {
  let queryParams = ''
  if (categorySlug) {
    queryParams =
      '?' +
      new URLSearchParams({
        slug: categorySlug,
      }).toString()
  }
  const response = await fetch(API_URL + '/album/' + queryParams, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const allImages = await response.json()
  return allImages.album
}
