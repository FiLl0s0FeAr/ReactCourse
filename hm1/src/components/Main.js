import React from 'react';
import Input from "./Input";
import Link from "./Link";

const Main = () => {
    return (
        <div className='main-section'>
            <img src='https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className='logo'/>
            <Input />
           <div className='link-holder'>
               <Link text={'Google search '}/>
           </div>
        </div>
    );
};

export default Main;