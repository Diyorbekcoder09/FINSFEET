import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Home from "./home/Home"
import Blog from "./blog/Blog"
import About from "./about/About"
import Contact from "./contact/Contact"

import { Route } from "react-router-dom"


const Routes = () => {
    return (
        <div>
            <Header />
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/blog">
                <Blog />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Footer />

        </div>
    )
}

export default Routes