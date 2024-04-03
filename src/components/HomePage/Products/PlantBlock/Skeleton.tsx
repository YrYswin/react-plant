import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton: React.FC = () => (
  <div className="item">
    <ContentLoader
      speed={2}
      width={217}
      height={350}
      viewBox="0 0 217 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="217" height="270" />
      <rect x="53" y="275" rx="10" ry="10" width="180" height="25" />
      <rect x="0" y="305" rx="10" ry="10" width="217" height="20" />
      <rect x="0" y="330" rx="10" ry="10" width="200" height="20" />
    </ContentLoader>
  </div>
)