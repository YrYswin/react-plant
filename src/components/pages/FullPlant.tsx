import React from 'react'

import { FullPlantPage, Description, InterestingPlant } from '..'

export const FullPlant: React.FC = () => {
  return (
    <div>
      <FullPlantPage />
      <Description />
      <InterestingPlant />
    </div>
  )
}