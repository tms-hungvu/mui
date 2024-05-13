"use client";
import { Box, Container, createTheme, List, ListItem, Stack, ThemeProvider, Link, Avatar } from "@mui/material";


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
              maxWidth: "1060px",
            },
            // Add other classes as needed
          },
        },
      },
    },
  });
export default function Footer(){
     return (
        <ThemeProvider theme={theme}>
                <Container maxWidth="xl">
            <Stack flexDirection={'row'} gap={'10px'}>
                <Box  >
                   <List>
                      <ListItem sx={{color : '#141414', fontWeight : '600'}}> Use cases</ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Generate appointments </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Source talent </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Build an e-mail list</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Make online sales</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>For Agencies</Link></ListItem>
                     
                      
                   </List>
                </Box>
                <Box >
                <List>
                      <ListItem sx={{color : '#141414', fontWeight : '600'}}> Product</ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Generate appointments </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Source talent </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Build an e-mail list</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Make online sales</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>For Agencies</Link></ListItem>
                     
                      
                   </List>
                </Box>
                <Box  >
                <List>
                      <ListItem sx={{color : '#141414', fontWeight : '600'}}> Resources</ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Generate appointments </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Source talent </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Build an e-mail list</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Make online sales</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>For Agencies</Link></ListItem>
                     
                      
                   </List>
                </Box>
                <Box  >
                <List>
                      <ListItem sx={{color : '#141414', fontWeight : '600'}}> Company</ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Generate appointments </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Source talent </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Build an e-mail list</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Make online sales</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>For Agencies</Link></ListItem>
                     
                      
                   </List>
                </Box>
                <Box  >
                <List>
                      <ListItem sx={{color : '#141414', fontWeight : '600'}}> Legal</ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Generate appointments </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Source talent </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Build an e-mail list</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Make online sales</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>For Agencies</Link></ListItem>
                     
                      
                   </List>
                </Box>
                <Box  >
                <List>
                      <ListItem sx={{color : '#141414', fontWeight : '600'}}> Follow us</ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Generate appointments </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Source talent </Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Build an e-mail list</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>Make online sales</Link></ListItem>
                      <ListItem > <Link color={'#4F4F4F'} href="" underline={"none"}>For Agencies</Link></ListItem>
                     
                      
                   </List>
                </Box>
                
            </Stack>
        </Container>

        <Container maxWidth="xl" sx={{my : '60px'}} >
            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
               <Box>
                   <List>
                   
                     <ListItem sx={{fontSize : '14px', fontWeight : 600}}>
                     © Perspective Software GmbH
                     </ListItem>
                   </List>
               </Box>

               <Stack flexDirection={'row'} gap={'10px'}>
                   <Avatar variant="square"  sx={{width: '64px' , height : '100px'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/62c85f30dfdd6b544f3cfbf7_gdpr.webp" alt="" />
                   <Avatar variant="square"  sx={{width: '64px' , height : '100px'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/6495d2ed50590116fbd4e99c_climate_active.webp" alt="" />
                   <Avatar variant="square"  sx={{width: '64px' , height : '100px'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/62257b4bcd0f0b08e9b93658_remote-company.webp" alt="" />

               </Stack>
            </Stack>
        </Container>
        </ThemeProvider>
     )
}