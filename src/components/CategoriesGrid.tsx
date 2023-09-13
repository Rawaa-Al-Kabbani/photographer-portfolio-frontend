import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import { CategoryItem } from '../types'
import theme from '../styles/theme'
import { API_URL } from '../constants'

const CategoriesGrid: FunctionComponent = () => {
  const [categories, setCategories] = React.useState<CategoryItem[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL + '/album/categories/', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const allCategories = await response.json()
      const expandedCategories = [...allCategories.categories]
      expandedCategories.push({
        id: allCategories.categories.length + 2,
        name: 'Contact',
        link: 'contact',
      })
      expandedCategories.push({
        id: allCategories.categories.length + 1,
        name: 'About',
        link: 'about-me',
      })
      setCategories(expandedCategories)
    }
    getData()
  }, [])

  return (
    <MainContent columnCount={categories.length}>
      {categories.map((category, index) => (
        <Category key={category.id} animationDuration={(index + 1) * 1000} href={category.link}>
          {category.name}
        </Category>
      ))}
    </MainContent>
  )
}
export default CategoriesGrid

const MainContent = styled.div<{ columnCount: number }>`
  padding: 99px 0vw 0vw 0vw;
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: ${(props) => `repeat(${props.columnCount}, 1fr)`};
  align-items: center;
  justify-items: center;
  row-gap: 100px;
  animation-name: categories-load;
  animation-duration: 1000ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  ${theme.media.desktop1024} {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: ${(props) => `repeat(${props.columnCount}, 1fr)`};
    column-gap: 100px;
    row-gap: 0;
  }
`

const Category = styled.a<{ animationDuration: number }>`
  cursor: pointer;
  animation-name: categories-load;
  animation-duration: ${(animationDuration) => `${animationDuration}ms`};
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: #a9a9a9;
  }
`
