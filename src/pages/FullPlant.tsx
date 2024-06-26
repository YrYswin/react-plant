import React from 'react'

import { FullPlantPage, Description, InterestingPlant } from '../components'

const FullPlant: React.FC = () => {
  return (
    <div>
      <FullPlantPage />
      <Description />
      <InterestingPlant />
    </div>
  )
}

export default FullPlant 