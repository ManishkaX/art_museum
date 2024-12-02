import { Route, Routes } from 'react-router'
import { PageLayout } from '@components/PageLayout/PageLayout'
import { HomePage } from '@pages/HomePage'
import { FavoritesPage } from '@pages/FavoritesPage'
import { PictureDetails } from '@pages/PictureDetails'



function App() {

  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/details/:pictureId' element={<PictureDetails />} />
      </Route>
    </Routes>
  )
}

export default App
