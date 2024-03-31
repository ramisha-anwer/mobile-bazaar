import { useState, createContext } from 'react';
import { AppShell } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { CommonHeader } from './common/header/header'
import { CommonNavbar } from './common/navbar/navbar'
import { Footer } from './common/footer/footer'
import { ProductDetail } from './page/detail/detail'
import { Explore } from './page/explore/grid'
import { Error } from './page/error/404'
import { ContactUs } from './page/contact/contactUs'
const mobileData = require('../mobiles.json'); 

export const MobileContext = createContext();
   
export function Main() {
  const [opened, setOpened] = useState(false);
  const [ mobiles ] = useState(mobileData)

  return (
    <Router>
      <AppShell
        fixed // fixed prop on AppShell will be automatically added to Header and Navbar
        header={ <CommonHeader opened={opened} setOpened={setOpened}/> }
        navbar={ <CommonNavbar hidden={!opened} /> }
      >
        <MobileContext.Provider value={mobiles}>
          <Routes>
            <Route path="/contact" element={ <ContactUs/>} />
            <Route path="/compare" element={ <ProductDetail/> } />
            <Route path="/detail/:index" element={ <ProductDetail/> } />
            <Route path="/error" element={ <Error/>} />
            <Route path="/" element={ <Explore/> } />
          </Routes>
        </MobileContext.Provider>
        <Footer />
      </AppShell>
    </Router>
  );
}