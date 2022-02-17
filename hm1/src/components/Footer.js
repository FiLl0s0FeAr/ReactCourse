import React from 'react';
import Link from "./Link";

const Footer = () => {
    return (
        <div className='footer'>
            <p>
                Ukraine
            </p>
            <div className='footer-links-holder'>
                <div>
                    <Link text={'All about Google '}/>
                    <Link text={'Advertising '}/>
                    <Link text={'For business'}/>
                    <Link text={'How Google Search Works '}/>
                </div>
                <div>
                    <Link text={'Confidentiality '}/>
                    <Link text={'Terms'}/>
                    <Link text={'Settings '}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;