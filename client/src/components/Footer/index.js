import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

require('./style.css');

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      showLabels
      className={classes.root}
      className={classes.stickToBottom}>
    >
    <div className="copyright">
        <p>Copyright Zoe 2020, All rights reserved. Zoe is a product of apelab, Inc. Let's empower the next generations of XR makers! <a href="https://www.apelab.io/">apelab.io</a></p>
    </div>
    </BottomNavigation>
  );
}
