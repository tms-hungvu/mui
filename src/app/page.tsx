"use client";

import {
  
  createTheme,
  ThemeProvider,
  Container,
  Box,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  Link,
  Button,
  colors,
} from "@mui/material";
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthSm": {
            maxWidth: "400px",
          },
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "800px",
          },
          "&.MuiContainer-maxWidthXl": {
            maxWidth: "1200px",
          },
          // Add other classes as needed
        },
      },
    },
  },
});
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Home() {
  return (
    <>
      <Box component="section" sx={{ padding : 2 }}>
        <Stack
          
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          
              <Box component={"div"} >
                  <Stack 
                     direction="row"
                     justifyContent="center"
                     alignItems={"center"}
                     spacing={1}
                  >
                     <Avatar variant="rounded" sx={{ width: 32, height: 32 }} alt="Remy Sharp" src="https://assets-global.website-files.com/61ba09162b87002e87715b91/61bb125944d9e0417af764a9_perspective-icon-logo.webp" />
                   
                      <Typography variant={"h6"}>
                          Perspective
                      </Typography>
                  </Stack>
              </Box> 
              <Box component={"div"}>
                    <Stack direction="row" spacing={4}>
                        <Link underline="none" href="#" color="black">Product</Link>
                        <Link underline="none" href="#" color="black">Templates</Link>
                        <Link underline="none" href="#" color="black">Pricing</Link>
                        <Link underline="none" href="#" color="black">Resource</Link>
                        <Link underline="none" href="#" color="black" >
                            <Box component={"div"} sx={{position : 'relative'}}>
                                About us
                                <Box component={"div"} sx={{  

                                      display : "flex",
                                      justifyContent : "center",
                                      alignItems : 'center',
                                      color : "white", 
                                      position : 'absolute' , 
                                      top : '-10px', 
                                      right : '-25px' , 
                                      width: '20px' , 
                                      height: '20px', 
                                      background : '#437AFF',
                                      borderRadius : '20px',
                                      fontSize : 12
                                      }}>
                                   3
                                </Box>
                            </Box>
                        </Link>
                    </Stack>
              </Box>
              
              
              <Box component={"div"}>
                  <Stack direction="row" spacing={2}>
                     <Button  sx={{color : "black", border : '1px solid #437AFF', borderRadius : '6px'}} variant="outlined">Login</Button>
                     <Button variant="contained" sx={{ background : "#437AFF" , borderRadius : '6px'}}>Try for free</Button>
                  </Stack>
              </Box>
        </Stack>
      </Box>
      


      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
            <Box component="section" sx={{ display : 'flex', justifyContent: "center", width : '100%' }}>
               <Box sx={{ p: 2, width : '78%'}}>
                   <Stack direction={"column"} component={"div"} spacing={3} alignItems="center"  justifyContent="center">
                       <Box> 
                           <Typography variant="h2" sx={{textAlign: "center", fontWeight: "1000", fontSize : 77}}>
                                Create hight-converting funnels in just 60 minutes
                           </Typography>
                       </Box>
                       <Box> 
                       <Typography variant="inherit" sx={{textAlign: "center",fontSize : 23, lineHeight : 1.2, color : "#544F54"}}>
                                Generate a steady flow of customers or talents with lightning-fast and easy-to-build Perspective Funnels. No design or programing skills required
                           </Typography>
                       </Box>
                       <Box> 
                          <Stack direction="row" spacing={2}>
                               <Button variant="contained" sx={{ py:2, px : 3, background : "#437AFF" , borderRadius : '6px', fontSize : '15px'}}>TStart my free 14-day trial</Button>
                              <Button   startIcon={<ArrowForwardIosIcon />} sx={{px : 3, color : "#437AFF", border : '1px solid #437AFF', borderRadius : '6px'}} variant="outlined">Login</Button>
                              
                          </Stack>
                       </Box>
                       <Box> 4</Box>
                   </Stack>
               </Box>
            </Box>
          </Container>
    </ThemeProvider>
    </>
  );
}
