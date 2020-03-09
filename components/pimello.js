import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
// import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')

const DynamicComponentWithNoSSR = dynamic(
  () => {
    import('./custom-element')
  },
  {
    ssr: false
  }
)

const Pimello = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
      <womans-day></womans-day>
    </div>
  )
}

export default Pimello
