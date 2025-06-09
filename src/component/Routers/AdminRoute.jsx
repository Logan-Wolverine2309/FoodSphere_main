import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../../AdminComponent/Admin/Admin'
import CreateRestaurantForm from '../../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'

export const AdminRoute = () => {
  return (
    <div>
        <Routes>
            
            <Route path= "/*" element={false?<CreateRestaurantForm/>:<Admin/>}>

            </Route>
        
        </Routes>
    </div>
  )
}
