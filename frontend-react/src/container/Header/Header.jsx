import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default AppWrap(
  MotionWrap(Header,'app__home'),
  'home',
  'app__primarybg'
);