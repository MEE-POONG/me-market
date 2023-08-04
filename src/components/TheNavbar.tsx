import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '@/components/Language/LanguageContext';
import BtnSetting from './Language/BtnSetting';
import { navData } from '@/data/navber';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FaBars } from 'react-icons/fa';

const TheNavber: React.FC = () => {
  const router = useRouter();
  const { currentLanguage } = useContext(LanguageContext);
  const [isFaded, setIsFaded] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      const shouldFade: boolean = window.scrollY > 50;
      setIsFaded(shouldFade);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  const navList = navData.map((navItem, index) => (
    <Link key={index} href={navItem?.pathLink} className={`${router?.pathname === navItem?.pathLink ? "active" : ""}`}>
      {currentLanguage === "TH" ? navItem.name?.TH : navItem.name?.EN}
    </Link>
  ));
  return (
    <>
      <Navbar expand="lg" className={`navber-mepropmt sticky-top ${isFaded ? 'navbar-bg-scroll' : ''}`}>
        <Container className="">
          <Link href="/" className='navbar-brand m-0 p-0 fw-bold'>
            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/907bdcd3-565b-4ae1-045b-c4d966eaa600/350" alt="" className='me-2 d-flex align-item-flex-end' />
            <span className='w-100 d-none d-md-block'>Me Prompt Technology</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" >
            {/* <FaBars /> */}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              navbarScroll
            >
              {navList}
              <BtnSetting />

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default TheNavber;
