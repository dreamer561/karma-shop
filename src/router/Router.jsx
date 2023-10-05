import React from "react"
import { Routes , Route  } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Shop from "../pages/Shop"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Auth from "../pages/admin/Auth"
import Profile from "../pages/admin/Profile"
import Category from "../pages/admin/category/Category"
import CategoryCreateUpdate from "../pages/admin/category/CategoryCreateUpdate"
import Products from "../pages/admin/products/Products"
import ProductCreateUpdate from "../pages/admin/products/ProductCreateUpdate"
import Users from "../pages/admin/users/Users"
import UserCreateUpdate from "../pages/admin/users/UserCreateUpdate"

export default function Router() {
    return (
        <Routes>
            {/* Home Page */}
            <Route path='/' element={<Home />} />

            {/* About Page */}
            <Route path='/about' element={<About />}></Route>

            {/* Shop Page */}
            <Route path='/shop' element={<Shop />} />

            {/* Product details */}
            <Route path='/product-details/:id' element={<ProductDetails />} />

            {/* cart page */}
            <Route path='/cart' element={<Cart />} />

            {/* Checkout page */}
            <Route path='/checkout' element={<Checkout />} />

{/* Admin Routes */}
            <Route path='/admin' element={<Auth />}>
                {/* Profile page */}

                <Route path='profile' element={<Profile />} />

                {/* category routes */}
                <Route path='categories' element={<Category />} />
                <Route path='category/create' element={<CategoryCreateUpdate />} />
                <Route path='category/edit/:id' element={<CategoryCreateUpdate />} />

                {/* Product routes  */}
                <Route path='products' element={<Products />} />
                <Route path='product/create' element={<ProductCreateUpdate />} />
                <Route path='category/edit/:id' element={<ProductCreateUpdate />} />


                {/* users routes  */}
                <Route path='users' element={<Users />} />
                <Route path='user/create' element={<UserCreateUpdate />} />
                <Route path='user/edit/:id' element={<UserCreateUpdate />} />
            </Route>
        </Routes>

    )
}
