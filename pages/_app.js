import React from 'react'
import App from 'next/app'

class MyApp extends App {
  constructor() {
    super()
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps}></Component>
  }
}

export default MyApp
