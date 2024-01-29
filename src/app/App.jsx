import React, { useState } from 'react'
import AppRoutes from '../routes/AppRoutes'
import CatalogDrawer from '../components/CatalogDrawer/CatalogDrawer'

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <div>
     {!true && <CatalogDrawer />}
      <AppRoutes/>
    </div>
  )
}

export default App