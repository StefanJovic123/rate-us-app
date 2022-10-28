import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const EditPenSVG = ({ color, ...props }) => {
  return (
    <Svg
      width={47}
      height={48}
      viewBox='0 0 47 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M42.167.667H4.833C2.267.667.19 2.767.19 5.333l-.023 42L9.5 38h32.667a4.68 4.68 0 004.666-4.667v-28A4.68 4.68 0 0042.167.667zm-32.667 28v-5.764L25.553 6.85a1.155 1.155 0 011.657 0l4.13 4.13c.467.467.467 1.19 0 1.657l-16.077 16.03H9.5zm28 0H20L24.667 24H37.5v4.667z'
        fill={color || '#FFC34E'}
      />
    </Svg>
  )
}

export default EditPenSVG;
