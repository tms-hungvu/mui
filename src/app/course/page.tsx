
"use client";
import { Avatar, Box, Button, Link, List, ListItem, Stack, Typography } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RadarIcon from '@mui/icons-material/Radar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
export default function Course(){
    return (<>
      <Box component={'header'} className="app__header" >
              <Box className="app__header--left">
                   <Avatar className="app__header--left-image" src="https://assets-global.website-files.com/61ba09162b87002e87715b91/61bb125944d9e0417af764a9_perspective-icon-logo.webp" alt="" />
                   <Typography variant="h1">
                      Perspective
                   </Typography>
              </Box>
              <Box  className="app__header--middle">
                  <Stack component={'ul'} className="app__header--middle-list" flexDirection={'row'}>
                       <Box component={'li'}>
                          
                              <Link href="" underline="none">
                                 Product
                              </Link>

                              <Box  component={'ul'}>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 1</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 2</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 3</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 4</Link>
                                      </Box>
                              </Box>
                       </Box>
                       <Box component={'li'}>
                          
                              <Link href="" underline="none">
                                 Template
                              </Link>

                              <Box  component={'ul'}>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 1</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 2</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 3</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 4</Link>
                                      </Box>
                              </Box>
                       </Box>
                       <Box component={'li'}>
                          
                              <Link href="" underline="none">
                                 Pricing
                              </Link>

                              <Box  component={'ul'}>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 1</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 2</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 3</Link>
                                      </Box>
                                      <Box component={'li'}>
                                         <Link href="" underline={'none'}> Product 4</Link>
                                      </Box>
                              </Box>
                       </Box>

                       <Box component={'li'}>
                       <Link href="" underline="none">
                                 Resources
                              </Link>
                       </Box>

                       <Box component={'li'}>
                       <Link href="" underline="none">
                                 About us 
                              </Link>
                       </Box>
                  </Stack>
              </Box>
              <Box className="app__header--right">
                  <Stack flexDirection={'row'} component={'div'}>
                       <Button className="c-white-btn" sx={{textTransform :'none'}} > Login </Button>

                       <Button className="c-primary-btn" sx={{textTransform :'none'}}> Try for free </Button>
                  </Stack>
              </Box>
      </Box>

      <Box className="container" sx={{my: '80px'}}>
           <Box className="row">
               <Box className="col-xl-6">
                   <Box className="app__course--banner">
                         <Typography variant="h1" className="text-center">
                            Build the best funnel with 5,000+ Integrations
                         </Typography>
                         <Typography variant="inherit" className="text-center">
                           Save time and power up your advertising, marketing, and sales by connecting Perspective to your favorite tools via direct integrations, webhooks, Zapier, or Make.
                         </Typography>
                         <Button className="c-primary-btn">
                              14-day free trial
                         </Button>
                   </Box>
               </Box>
               <Box className="col-xl-6" >
                   <Box className="app__course--banner-image">
                      <Avatar  sx={{width: '100%', height : '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/6606f17518d2113ad67a0c57_Header%20visual(1)%201.webp" alt="" />
                   </Box>
               </Box>
           </Box>
      </Box>


      <Box className="container">
               <Box className="app_carousel--brand">
                     <Box className="app_carousel--brand-title">
                           <Typography variant="h1" className="text-center">
                                 Used daily by more than 5,000 small and large businessess
                           </Typography>
                     </Box>
                     <Box className="app_carousel--brand-content">
                     <Swiper
              autoplay={{
                delay: 900,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65a41d6337b6a1c4fafc1416_Zalando.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65a41dcf390d57d9169710d7_Mercedes%20Benz.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65a41db80e2f09b58ae2f53f_Daimler%20Truck.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65a41d6f4d2aa04c7934ac13_Google.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65a41d8603d49a3f70f8d252_Coca%20Cola.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65a41ddb54fed3eb897961c0_Marriot.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
                     </Box>
               </Box>
      </Box>

      <Box className="container app_blog"  >
            <Box className="app_blog--title">
                  <Box className="app_blog--title-text">
                       <Typography variant="h1">
                          All integrations
                       </Typography>
                  </Box>
                  <Box className="app_blog--title-button">
                  <Button className="c-primary-btn"> All</Button>
                       <Button className="c-white-btn"> Analytics and Tracking</Button>

                       <Button className="c-white-btn"> CRM</Button>
                       <Button className="c-white-btn"> Email Marketing</Button>
                       <Button className="c-white-btn"> Task Management</Button>
                       <Button className="c-white-btn"> Other</Button>
                  </Box>
            </Box>
            <Box sx={{my : '100px'}}>
            <Box className="row " >
                  <Box className="col-xl-4">
                        <Box className="app__blog--content-item">
                            <Box className="app__blog--content-item-icon">
                                  <Box className="app__blog--content-item-icon-box">
                                      <Avatar sx={{borderRadius : '0px'}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/656f1d75fa21cae2a9ecafdd_Meta.png" alt="" />
                                  </Box>
                            </Box>
                            <Box className="app__blog--content-item-description">
                                 <Typography variant="h1">
                                    Meta Pixel & Conversion API
                                 </Typography>
                                 <Typography variant="inherit">
                                     Our direct connection to Facebook CAPI helps you set up your tracking cleanly. With 3 simple clicks.
                                 </Typography>
                            </Box>
                        </Box>

                  </Box>
                  <Box className="col-xl-4">
                        <Box className="app__blog--content-item">
                            <Box className="app__blog--content-item-icon">
                                  <Box className="app__blog--content-item-icon-box">
                                      <Avatar sx={{borderRadius : '0px'}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/656f1d75fa21cae2a9ecafdd_Meta.png" alt="" />
                                  </Box>
                            </Box>
                            <Box className="app__blog--content-item-description">
                                 <Typography variant="h1">
                                    Meta Pixel & Conversion API
                                 </Typography>
                                 <Typography variant="inherit">
                                     Our direct connection to Facebook CAPI helps you set up your tracking cleanly. With 3 simple clicks.
                                 </Typography>
                            </Box>
                        </Box>

                  </Box>
                  <Box className="col-xl-4">
                        <Box className="app__blog--content-item">
                            <Box className="app__blog--content-item-icon">
                                  <Box className="app__blog--content-item-icon-box">
                                      <Avatar sx={{borderRadius : '0px'}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/656f1d75fa21cae2a9ecafdd_Meta.png" alt="" />
                                  </Box>
                            </Box>
                            <Box className="app__blog--content-item-description">
                                 <Typography variant="h1">
                                    Meta Pixel & Conversion API
                                 </Typography>
                                 <Typography variant="inherit">
                                     Our direct connection to Facebook CAPI helps you set up your tracking cleanly. With 3 simple clicks.
                                 </Typography>
                            </Box>
                        </Box>

                  </Box>
                  <Box className="col-xl-4">
                        <Box className="app__blog--content-item">
                            <Box className="app__blog--content-item-icon">
                                  <Box className="app__blog--content-item-icon-box">
                                      <Avatar sx={{borderRadius : '0px'}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/656f1d75fa21cae2a9ecafdd_Meta.png" alt="" />
                                  </Box>
                            </Box>
                            <Box className="app__blog--content-item-description">
                                 <Typography variant="h1">
                                    Meta Pixel & Conversion API
                                 </Typography>
                                 <Typography variant="inherit">
                                     Our direct connection to Facebook CAPI helps you set up your tracking cleanly. With 3 simple clicks.
                                 </Typography>
                            </Box>
                        </Box>

                  </Box>
                  <Box className="col-xl-4">
                        <Box className="app__blog--content-item">
                            <Box className="app__blog--content-item-icon">
                                  <Box className="app__blog--content-item-icon-box">
                                      <Avatar sx={{borderRadius : '0px'}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/656f1d75fa21cae2a9ecafdd_Meta.png" alt="" />
                                  </Box>
                            </Box>
                            <Box className="app__blog--content-item-description">
                                 <Typography variant="h1">
                                    Meta Pixel & Conversion API
                                 </Typography>
                                 <Typography variant="inherit">
                                     Our direct connection to Facebook CAPI helps you set up your tracking cleanly. With 3 simple clicks.
                                 </Typography>
                            </Box>
                        </Box>

                  </Box>
                  <Box className="col-xl-4">
                        <Box className="app__blog--content-item">
                            <Box className="app__blog--content-item-icon">
                                  <Box className="app__blog--content-item-icon-box">
                                      <Avatar sx={{borderRadius : '0px'}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/656f1d75fa21cae2a9ecafdd_Meta.png" alt="" />
                                  </Box>
                            </Box>
                            <Box className="app__blog--content-item-description">
                                 <Typography variant="h1">
                                    Meta Pixel & Conversion API
                                 </Typography>
                                 <Typography variant="inherit">
                                     Our direct connection to Facebook CAPI helps you set up your tracking cleanly. With 3 simple clicks.
                                 </Typography>
                            </Box>
                        </Box>

                  </Box>
            </Box>
            </Box>
    </Box>



      <Box component={'footer'} className="app__footer">
           <Box className="container">
           <Box className="row">
                  <Box className="col-xl-2">
                      <List className="app__footer--list">
                          <ListItem> <Link href="">Use cases </Link></ListItem>
                          <ListItem> <Link href="">Generate appointments</Link></ListItem>
                          <ListItem> <Link href="">Source talent</Link></ListItem>
                          <ListItem> <Link href="">Build an e-mail list</Link></ListItem>
                          <ListItem> <Link href="">Make online sales</Link></ListItem>
                          <ListItem> <Link href="">Gain insights</Link></ListItem>
                          <ListItem> <Link href="">For Agencies</Link></ListItem>
                          
                      </List>
                  </Box>
                  <Box className="col-xl-2">
                  <List className="app__footer--list">
                          <ListItem> <Link href="">Product </Link></ListItem>
                          <ListItem> <Link href="">Why Perspective</Link></ListItem>
                          <ListItem> <Link href="">Features</Link></ListItem>
                          <ListItem> <Link href="">Templates</Link></ListItem>
                          <ListItem> <Link href="">Pricing</Link></ListItem>
                          <ListItem> <Link href="">Status</Link></ListItem>
                          <ListItem> <Link href="">Login</Link></ListItem>
                          
                      </List>
                  </Box>
                  <Box className="col-xl-2">
                  <List className="app__footer--list">
                          <ListItem> <Link href="">Resources</Link></ListItem>
                          <ListItem> <Link href="">Crashcourse</Link></ListItem>
                          <ListItem> <Link href="">Academy</Link></ListItem>
                          <ListItem> <Link href="">Community</Link></ListItem>
                          <ListItem> <Link href="">Make online sales</Link></ListItem>
                          <ListItem> <Link href="">Gain insights</Link></ListItem>
                          <ListItem> <Link href="">For Agencies</Link></ListItem>
                          
                      </List>
                  </Box>
                  <Box className="col-xl-2">
                  <List className="app__footer--list">
                          <ListItem> <Link href="">Use cases </Link></ListItem>
                          <ListItem> <Link href="">Generate appointments</Link></ListItem>
                          <ListItem> <Link href="">Source talent</Link></ListItem>
                          <ListItem> <Link href="">Build an e-mail list</Link></ListItem>
                          <ListItem> <Link href="">Make online sales</Link></ListItem>
                          <ListItem> <Link href="">Gain insights</Link></ListItem>
                          <ListItem> <Link href="">For Agencies</Link></ListItem>
                          
                      </List>
                  </Box>
                  <Box className="col-xl-2">
                  <List className="app__footer--list">
                          <ListItem> <Link href="">Use cases </Link></ListItem>
                          <ListItem> <Link href="">Generate appointments</Link></ListItem>
                          <ListItem> <Link href="">Source talent</Link></ListItem>
                          <ListItem> <Link href="">Build an e-mail list</Link></ListItem>
                          <ListItem> <Link href="">Make online sales</Link></ListItem>
                          <ListItem> <Link href="">Gain insights</Link></ListItem>
                          <ListItem> <Link href="">For Agencies</Link></ListItem>
                          
                      </List>
                  </Box>
                  <Box className="col-xl-2">
                  <List className="app__footer--list">
                          <ListItem> <Link href="">Follow us </Link></ListItem>
                          <ListItem> <Link href="">
                             <Box className="app__footer--list-socialite-item">
                                          <FacebookIcon />
                                          <Typography variant="inherit">
                                                Facebook
                                          </Typography>
                                    </Box>
                           </Link></ListItem>
                           <ListItem> <Link href="">
                             <Box className="app__footer--list-socialite-item">
                                          <RadarIcon />
                                          <Typography variant="inherit">
                                                Intagram
                                          </Typography>
                                    </Box>
                           </Link></ListItem>
                           <ListItem> <Link href="">
                             <Box className="app__footer--list-socialite-item">
                                          <YouTubeIcon />
                                          <Typography variant="inherit">
                                                Youtube
                                          </Typography>
                                    </Box>
                           </Link></ListItem>
                           <ListItem> <Link href="">
                             <Box className="app__footer--list-socialite-item">
                                          <LinkedInIcon />
                                          <Typography variant="inherit">
                                                LinkedLn
                                          </Typography>
                                    </Box>
                           </Link></ListItem>
                        
                          
                      </List>
                  </Box>
          </Box>

            <Box className="row app__footer-last-block">
                  <Box className="col-xl-6">
                      <Typography variant="inherit" className="app__footer--copyright">
                      © Perspective Software GmbH
                      </Typography>
                  </Box>
                  <Box className="col-xl-6">
                      <Stack flexDirection={'row'} gap={'40px'} className="app__footer--image-content">
                           <Avatar src="https://assets-global.website-files.com/61ba09162b87002e87715b91/62c85f30dfdd6b544f3cfbf7_gdpr.webp" alt="" className="app__footer--image"/>
                           <Avatar src="https://assets-global.website-files.com/61ba09162b87002e87715b91/6495d2ed50590116fbd4e99c_climate_active.webp" alt="" className="app__footer--image"/>
                           <Avatar src="https://assets-global.website-files.com/61ba09162b87002e87715b91/62257b4bcd0f0b08e9b93658_remote-company.webp" alt="" className="app__footer--image"/>
                      </Stack>
                  </Box>
            </Box>
           </Box>
      </Box>


   


</>)
}