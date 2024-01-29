import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>} >
            <Route index element={<HomePage/>} />
            <Route path='/products' element={<h1>Products Page</h1>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes 