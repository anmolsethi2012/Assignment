import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span>© 2020 <a href="http://datasciencx.com" target="_blank">DATASCIENCX</a> All rights reserved.</span>
      </div>

    </CFooter>
  )
}

export default React.memo(TheFooter)
