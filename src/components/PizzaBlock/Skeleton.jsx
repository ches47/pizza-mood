import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="149" cy="91" r="92" /> 
    <rect x="0" y="NaN" rx="0" ry="0" width="280" height="NaN" /> 
    <rect x="9" y="197" rx="0" ry="0" width="280" height="40" /> 
    <rect x="2" y="268" rx="0" ry="0" width="280" height="88" /> 
    <rect x="12" y="381" rx="5" ry="5" width="95" height="30" /> 
    <rect x="124" y="384" rx="22" ry="22" width="152" height="45" /> 
    <rect x="201" y="403" rx="0" ry="0" width="3" height="12" />
  </ContentLoader>
)

export default Skeleton