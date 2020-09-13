import React from 'react';

import { Button } from 'semantic-ui-react'


const MobileButton = (props) => {
  const defaultStyle = {
      'cursor': 'pointer',
  }
  const mandateStyle = Object.assign({}, props.style, defaultStyle);
    return <Button {...props} style={mandateStyle}> {props.children} </Button>
}

MobileButton.propTypes = Button.propTypes

export default MobileButton
