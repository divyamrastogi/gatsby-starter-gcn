import React from 'react'
import Img from 'gatsby-image'
import { useLogo } from '../hooks/use-logo'

export default function Logo({ alt }) {
  const fluidImg = useLogo()
  return <Img fixed={fluidImg} alt={alt} />
}
