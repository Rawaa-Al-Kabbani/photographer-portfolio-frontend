import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import CategoryImageList from './pages/CategoryImageList'

function App() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = React.useState<boolean>(false)

  /* 
  const importAll = (r) => {
    return r.keys().map(r)
  }

  React.useEffect(() => {
    setFashionList(importAll(require.context('./images/fashion', false, /\.(png|jpe?g|svg|tif)$/)))
    setFineArtList(importAll(require.context('./images/fine-art', false, /\.(png|jpe?g|svg|tif)$/)))
    setStillLifeList(
      importAll(require.context('./images/still-life', false, /\.(png|jpe?g|svg|tif)$/)),
    )
  }, [])


  const allUniqueImages: ImageCard[] = []
  const removeDuplicatedElements = (arr: ImageCard[]) => {
    for (const item of arr) {
      const isDuplicate = allUniqueImages.find((obj) => obj.photo === item.photo)
      if (!isDuplicate) {
        allUniqueImages.push(item)
      }
    }
  }

  */

  return (
    <BrowserRouter>
      <Header hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />
      <Routes>
        <Route path='/' element={<Home hamburgerIsOpen={hamburgerIsOpen} />}></Route>
        <Route path='/contact' element={<Contact hamburgerIsOpen={hamburgerIsOpen} />}></Route>
        <Route path='/about-me' element={<About hamburgerIsOpen={hamburgerIsOpen} />}></Route>
        <Route
          path='/:slug'
          element={<CategoryImageList hamburgerIsOpen={hamburgerIsOpen} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
