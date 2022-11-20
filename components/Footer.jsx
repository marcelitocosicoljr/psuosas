import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className='footer' >
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by {' '}
            <span className='logo'>
                <Image src="/assets/images/osaslogo.jpg" alt="PESYU"  width={50} height={50} />
            </span>
            {' '} PSU OSAS {' '}
            </a>
      </footer>
    </div>
  )
}
