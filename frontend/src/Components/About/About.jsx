import React from 'react'
import './About.css'
import fashion from '../Assets/fashion.png'

const About = () => {
  return (
    <div className='about'>
        <h1>ABOUT FASHION</h1>
        <div className="aboutbody">
        <div className="left">
            <p>Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits that depict distinctive ways of dressing (styles and trends) as signifiers of social status, self-expression, and group belonging. As a multifaceted term, fashion describes an industry, styles, aesthetics, and trends.</p>
            <p>The term 'fashion' originates from the Latin word 'Facere,' which means 'to make,' and describes the manufacturing, mixing, and wearing of outfits adorned with specific cultural aesthetics, patterns, motifs, shapes, and cuts, allowing people to showcase their group belonging, values, meanings, beliefs, and ways of life. Given the rise in mass production of commodities and clothing at lower prices and global reach, reducing fashion's environmental impact and improving sustainability has become an urgent issue among politicians, brands, and consumers.</p>
        </div>
        <div className="right">
            <img src={fashion} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About