import React from 'react';
import {Badge, Box} from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledBadge = styled(Badge)(({ theme }) => ({
  backgroundColor : '#44b700',
    color : '#44b700',
    boxShadow : `0 0 0 2px ${theme.palette.background.paper}`,
    // '&::after' : {
    //   position : 'absolute',
    //   top : 0,
    //   left : 0,
    //   width : '100%',
    //   height : '100%',
    //   borderRadius : '50%',
    //   animation : '$ripple 1.2s infinite ease-in-out',
    //   border : '1px solid currentColor',
    //   content : '""',
    // }
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display : 'flex',
    '& > *' : {
      marginLeft : theme.spacing(0.5),
      marginRight : -theme.spacing(0.75),
    },

}));
// const StyledBadge = withStyles((theme) => ({
//   badge : {
//     backgroundColor : '#44b700',
//     color : '#44b700',
//     boxShadow : `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after' : {
//       position : 'absolute',
//       top : 0,
//       left : 0,
//       width : '100%',
//       height : '100%',
//       borderRadius : '50%',
//       animation : '$ripple 1.2s infinite ease-in-out',
//       border : '1px solid currentColor',
//       content : '""',
//     },
//   },
//   '@keyframes ripple' : {
//     '0%' : {
//       transform : 'scale(.8)',
//       opacity : 1,
//     },
//     '100%' : {
//       transform : 'scale(1.8)',
//       opacity : 0,
//     },
//   },
// }))(Badge);


export default function BadgeAvatars({ children }) {

  return (
    <CustomBox>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical : 'bottom',
          horizontal : 'right',
        }}
        variant="dot"
      >
        {children}
      </StyledBadge>
    </CustomBox>
  );
}
