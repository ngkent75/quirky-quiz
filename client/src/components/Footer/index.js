import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCopyright} from 'react-icons/fa';
import { BiHomeHeart } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

function Footer () {
    return (
        <footer className='bg-white text-center text-white'>
            <div className='container p-3 pb-0'>
                <section className='mb-2'>
                   <Link to='/home' className='btn btn-outline-light btn-floating m-1' role='button' title='Home'><BiHomeHeart/></Link>

                   <Link to='/about' className='btn btn-outline-light btn-floating m-1' role='button' title='About'><AiOutlineInfoCircle/></Link>

                   <Link to='/profile' className='btn btn-outline-light btn-floating m-1' role='button' title='Profile'><FaUserCircle/></Link>

                   <a href='https://github.com/ngkent75/quirky-quiz' target='_blank' className='btn btn-outline-light btn-floating m-1' role='button' title='Github Repo'>< GoMarkGithub/> </a>
                </section>
                <section className='bg-dark text-center p-3'>
                    IM/NK/UR/HS <FaCopyright/> 2021
                </section>
            </div>
        </footer>

    );
}

export default Footer;
