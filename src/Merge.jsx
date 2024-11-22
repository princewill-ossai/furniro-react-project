import React from 'react'
import FurniroHome from './pages/Homepage/FurniroHome';
import syltherine from '../src/pages/Homepage/ProductSecImg/syltherine.png'
import lolito from '../src/pages/Homepage/ProductSecImg/lolito.png'
import mugo from '../src/pages/Homepage/ProductSecImg/mugo.png'
import pingky from '../src/pages/Homepage/ProductSecImg/pingky.png'
import potty from '../src/pages/Homepage/ProductSecImg/potty.png'
import grifo from '../src/pages/Homepage/ProductSecImg/grifo.png'
import respira from '../src/pages/Homepage/ProductSecImg/respira.png'

import ProductChild from "./pages/Homepage/ProductChild";
import FurniroFooter from './pages/Homepage/FurniroFooter';

const Merge = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 205px)',
        gap: '2rem',
        placeContent: 'center',
        marginBottom: '5rem'
      }

  return (
    <div>
    <FurniroHome />
      <div style={gridStyle}>
        <ProductChild
          imgUrl={syltherine}
          name="Syltherine"
          description="Stylish cafe chair"
          price="Rp 2.500.000"
          price2="Rp 3.500.000"
        />
        <ProductChild
          imgUrl={lolito}
          name="Lolito"
          description="Luxury Big Sofa"
          price="Rp 2.500.000"
          price2="Rp 3.500.000"
        />
        <ProductChild
          imgUrl={syltherine}
          name="Syltherine"
          description="Stylish cafe chair"
          price="Rp 7.000.000"
          price2="Rp 14.000.000"
        />
        <ProductChild
          imgUrl={respira}
          name="Respira"
          description="Outdoor Bar table and stool"
          price="Rp 500.000"
          price2="Rp 1.000.000"
        />
        <ProductChild
          imgUrl={grifo}
          name="Grifo"
          description="Night Lamp"
          price="Rp 1.500.000"
          price2="Rp 3.000.000"
        />
        <ProductChild
          imgUrl={mugo}
          name="Muggo"
          description="Small mug"
          price="Rp 150.000"
          price2="Rp 300.000"
        />
        <ProductChild
          imgUrl={pingky}
          name="Pingky"
          description="Cute bed set"
          price="Rp 7.000.000"
          price2="Rp 14.000.000"
        />
        <ProductChild
          imgUrl={potty}
          name="Potty"
          description="Minimalist flower pot"
          price="Rp 500.000"
          price2="Rp 1.000.000"
        />
      </div>
      <FurniroFooter />
    </div>
  )
}

export default Merge