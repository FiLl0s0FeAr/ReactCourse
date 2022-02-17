import React from 'react';
import Link from "./Link";
import Button from "./Button";

const Header = () => {
    return (
        <div className='header'>
            <Link text={'Mail'}/>
            <Link text={'Images'}/>
            <Button text = {'Sign in'}/>
            <Button text = {'Sign up'}/>
        </div>
    );
};

export default Header;