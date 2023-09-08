import React from 'react'
import Logo from './Logo'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
      <footer>
    <div className='flex border-2 '>
        <div className='flex-1 flex flex-col items-center'>
            <Logo/>
            <div>4662364238</div>
            <div>mail@email.com</div>
        </div>
        <div className='flex-1 bg-blue1 text-white flex flex-col items-center'>
          <header className='text-2xl'>Social media handles</header>
          <ol>
            <li><InstagramIcon/></li>
            <li><TwitterIcon/></li>
            <li><FacebookIcon/></li>
            <li><GitHubIcon/></li>
          </ol>
        </div>
        
        <div className='flex-1 bg-blue1'>
          <form action="" className='flex flex-col items-center text-2xl mx-5' >
          <h1 htmlFor="" className='text-white text-4xl'>Send Message</h1>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='email'  className='border w-full'/>
          <label htmlFor="">Message</label>
          <textarea placeholder='Type your Message' className='border w-full ' />
          </form>
        </div>
    </div>
      </footer>
  )
}
