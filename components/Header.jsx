import Head from 'next/head'
import React from 'react'
import HeaderNav from './HeaderNav/HeaderNav'


const Header = () => {
  return (
    <div>
      <Head>
        <title>PSU OSAS</title>
        <meta name="description" content="PSU OSAS Website" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <HeaderNav/>


    </div>
  )
}

export default Header
