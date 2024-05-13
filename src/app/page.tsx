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
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Menu,
  MenuItem,
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
            maxWidth: "1060px",
          },
          // Add other classes as needed
        },
      },
    },
  },
});


import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowForwardIos";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useRef, useState } from "react";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dataSlider = [
    {
      index: 0,
      title: "Fast editing",
      description:
        "Create stunning mobile funnels quickly and easily. Now you can build in minutes, not hours.",
    },
    {
      index: 1,
      title: "Proven templates",
      description:
        "Choose from 16 incredible mobile funnel templates tested in 50+ industries. Start now.",
    },
    {
      index: 2,
      title: "Unique design",
      description:
        "Choose from 2 million+ license-free graphics, photos, and components to help bring your funnels to life.",
    },
    {
      index: 3,
      title: "Personalized approach",
      description:
        "Talk with your target audience like you are face-to-face and customize the funnel flow accordingly.",
    },
  ];
  return (
    <>
      <Box component="section" sx={{ padding: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Box component={"div"}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems={"center"}
              spacing={1}
            >
              <Avatar
                variant="rounded"
                sx={{ width: 32, height: 32 }}
                alt="Remy Sharp"
                src="https://assets-global.website-files.com/61ba09162b87002e87715b91/61bb125944d9e0417af764a9_perspective-icon-logo.webp"
              />

              <Typography variant={"h6"}>Perspective</Typography>
            </Stack>
          </Box>
          <Box component={"div"}>
            <Stack direction="row" spacing={4}>
              <Link underline="none" href="#" color="black">
                Product
              </Link>
              <Link underline="none" href="#" color="black">
                Templates
              </Link>
              <Link underline="none" href="#" color="black">
                Pricing
              </Link>
              <Link underline="none" href="#" color="black">
                Resource
              </Link>
              <Link underline="none" href="#" color="black">
                <Box component={"div"} sx={{ position: "relative" }}>
                  About us
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      position: "absolute",
                      top: "-10px",
                      right: "-25px",
                      width: "20px",
                      height: "20px",
                      background: "#437AFF",
                      borderRadius: "20px",
                      fontSize: 12,
                    }}
                  >
                    3
                  </Box>
                </Box>
              </Link>
            </Stack>
          </Box>

          <Box component={"div"}>
            <Stack direction="row" spacing={2}>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid #437AFF",
                  borderRadius: "6px",
                }}
                variant="outlined"
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#437AFF", borderRadius: "6px" }}
              >
                Try for free
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ mt: "87px" }}>
          <Box
            component="section"
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box sx={{ p: 2, width: "100%" }}>
              <Stack
                direction={"column"}
                component={"div"}
                spacing={"42px"}
                alignItems="center"
                justifyContent="center"
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      textAlign: "center",
                      fontWeight: "1000",
                      fontSize: 77,
                    }}
                  >
                    Create hight-converting funnels in just 60 minutes
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="inherit"
                    sx={{
                      textAlign: "center",
                      fontSize: 23,
                      lineHeight: 1.2,
                      color: "#544F54",
                    }}
                  >
                    Generate a steady flow of customers or talents with
                    lightning-fast and easy-to-build Perspective Funnels. No
                    design or programing skills required
                  </Typography>
                </Box>
                <Box>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      sx={{
                        py: 2,
                        px: 3,
                        background: "#437AFF",
                        borderRadius: "6px",
                        fontSize: "15px",
                      }}
                    >
                      Start my free 14-day trial
                    </Button>
                    <Button
                      startIcon={<ArrowForwardIosIcon />}
                      sx={{
                        px: 3,
                        color: "#437AFF",
                        border: "1px solid #437AFF",
                        borderRadius: "6px",
                        fontWeight: "1000",
                      }}
                      variant="outlined"
                    >
                      Watch demo
                    </Button>
                  </Stack>
                </Box>
                <Box>
                  <Stack
                    direction={"row"}
                    component={"div"}
                    spacing={5}
                    alignContent={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <Stack
                        direction={"row"}
                        component={"div"}
                        spacing={1}
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        <CheckIcon sx={{ color: "#24896C" }} />
                        <Typography
                          variant="body1"
                          sx={{ color: "#808085", fontSize: "18px" }}
                        >
                          Cancel anytime
                        </Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <Stack
                        direction={"row"}
                        component={"div"}
                        spacing={1}
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        <CheckIcon sx={{ color: "#24896C" }} />
                        <Typography
                          variant="body1"
                          sx={{ color: "#808085", fontSize: "18px" }}
                        >
                          Access to all content
                        </Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <Stack
                        direction={"row"}
                        component={"div"}
                        spacing={1}
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        <CheckIcon sx={{ color: "#24896C" }} />
                        <Typography
                          variant="body1"
                          sx={{ color: "#808085", fontSize: "18px" }}
                        >
                          Expert support
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>

        <Container maxWidth="xl">
          <Box my="115px">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box
                  component={"div"}
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  gap={"30px"}
                  borderRadius={10}
                  sx={{ background: "#FB585A", padding: "50px 0px" }}
                >
                  <Box
                    component={"div"}
                    width={"60%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <Typography
                        variant="h1"
                        fontSize={"32px"}
                        fontWeight={700}
                        color={"white"}
                      >
                        Build an e-mail list
                      </Typography>
                    </Box>

                    <Box width={"50%"}>
                      <Typography
                        variant="inherit"
                        fontSize={"16px"}
                        color={"white"}
                        textAlign={"center"}
                      >
                        Free yourself from expensive advertising costs and build
                        up valuable target group ownership.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "20px",
                          color: "white",
                          border: "none",
                        }}
                        variant="outlined"
                        startIcon={<ArrowCircleRightIcon />}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                  <Box component={"div"} width={"40%"}>
                    <Avatar
                      sx={{ width: "60%", height: "100%" }}
                      alt=""
                      src="https://help.apple.com/assets/6598817BD84F513BE609FC12/6598817CFF5E0690C7035CD9/en_US/b727f3856579b833286cc2bb29b29df9.png"
                      variant="square"
                    />
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"div"}
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  gap={"30px"}
                  borderRadius={10}
                  sx={{ background: "#FBBF24", padding: "50px 0px" }}
                >
                  <Box
                    component={"div"}
                    width={"60%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <Typography
                        variant="h1"
                        fontSize={"32px"}
                        fontWeight={700}
                        color={"white"}
                      >
                        Build an e-mail list
                      </Typography>
                    </Box>

                    <Box width={"50%"}>
                      <Typography
                        variant="inherit"
                        fontSize={"16px"}
                        color={"white"}
                        textAlign={"center"}
                      >
                        Free yourself from expensive advertising costs and build
                        up valuable target group ownership.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "20px",
                          color: "white",
                          border: "none",
                        }}
                        variant="outlined"
                        startIcon={<ArrowCircleRightIcon />}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                  <Box component={"div"} width={"40%"}>
                    <Avatar
                      sx={{ width: "60%", height: "100%" }}
                      alt=""
                      src="https://help.apple.com/assets/6598817BD84F513BE609FC12/6598817CFF5E0690C7035CD9/en_US/b727f3856579b833286cc2bb29b29df9.png"
                      variant="square"
                    />
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"div"}
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  gap={"30px"}
                  borderRadius={10}
                  sx={{ background: "#007AFF", padding: "50px 0px" }}
                >
                  <Box
                    component={"div"}
                    width={"60%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <Typography
                        variant="h1"
                        fontSize={"32px"}
                        fontWeight={700}
                        color={"white"}
                      >
                        Build an e-mail list
                      </Typography>
                    </Box>

                    <Box width={"50%"}>
                      <Typography
                        variant="inherit"
                        fontSize={"16px"}
                        color={"white"}
                        textAlign={"center"}
                      >
                        Free yourself from expensive advertising costs and build
                        up valuable target group ownership.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "20px",
                          color: "white",
                          border: "none",
                        }}
                        variant="outlined"
                        startIcon={<ArrowCircleRightIcon />}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                  <Box component={"div"} width={"40%"}>
                    <Avatar
                      sx={{ width: "60%", height: "100%" }}
                      alt=""
                      src="https://help.apple.com/assets/6598817BD84F513BE609FC12/6598817CFF5E0690C7035CD9/en_US/b727f3856579b833286cc2bb29b29df9.png"
                      variant="square"
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>

        <Container maxWidth="xl">
          <Box>
            <Typography
              variant="h3"
              fontSize={24}
              fontWeight={600}
              textAlign={"center"}
            >
              Used daily by more than 5,000 small and large businesses
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Box my={"42px"}>
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
        </Container>

        <Container maxWidth="xl">
          <Box display={"flex"} justifyContent={"center"} mt="147px">
            <Box
              width={"70%"}
              gap={"20px"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                variant="h1"
                textAlign={"center"}
                color={"#141414"}
                lineHeight={"67px"}
                fontSize={"56px"}
                fontWeight={700}
              >
                Why you need a Mobile Funnel™?
              </Typography>
              <Typography
                variant="inherit"
                textAlign={"center"}
                color={"#4F4F4F"}
                fontSize={"20px"}
                lineHeight={"32px"}
              >
                Traditional websites and landing pages are neither interactive
                nor personalized. These sites also load slowly and are not
                optimized for the mobile world. Moreover, 98.5% of your target
                audience uses social media via their cell phones. Mobile funnels
                are your new modern tool. The result: more appointments,
                employees, and leads.
              </Typography>
            </Box>
          </Box>
          <Box my={"80px"}>
            <Avatar
              variant="square"
              sx={{ width: "100%", height: "100%" }}
              src="https://thesweetsetup.com/wp-content/uploads/2022/07/original-lock-home-screens-scaled.jpg"
              alt=""
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"5px"}
            >
              <Box>
                <Typography variant="h1" fontSize={"48px"} fontWeight={700}>
                  7x
                </Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <Typography variant="h3" fontSize={"24px"} fontWeight={600}>
                  higher conversion rate
                </Typography>
                <ErrorOutlineIcon
                  sx={{ fontSize: "24px", color: "#333" }}
                  fontWeight={600}
                />
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"5px"}
            >
              <Box>
                <Typography variant="h1" fontSize={"48px"} fontWeight={700}>
                  300%
                </Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <Typography variant="h3" fontSize={"24px"} fontWeight={600}>
                  higher lead quality
                </Typography>
                <ErrorOutlineIcon
                  sx={{ fontSize: "24px", color: "#333" }}
                  fontWeight={600}
                />
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"5px"}
            >
              <Box>
                <Typography variant="h1" fontSize={"48px"} fontWeight={700}>
                  43x
                </Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <Typography variant="h3" fontSize={"24px"} fontWeight={600}>
                  faster implementation
                </Typography>
                <ErrorOutlineIcon
                  sx={{ fontSize: "24px", color: "#333" }}
                  fontWeight={600}
                />
              </Box>
            </Box>
          </Box>
        </Container>


        <Container maxWidth="xl">
          <Box padding={"87px 0px"}>
            <Typography
              variant="h1"
              textAlign={"center"}
              color={"#141414"}
              lineHeight={"67px"}
              fontSize={"56px"}
              fontWeight={700}
            >
              Create your first funnel in 60 minutes. Headache-free.
            </Typography>
          </Box>



          <Box width={"100%"} display={"flex"} flexDirection={"row-reverse"}>
            <Swiper
              onRealIndexChange={(element) =>
                setActiveIndex(element.activeIndex)
              }
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              style={{ height: "500px", width: "70%" }}
              direction={"vertical"}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Avatar
                    variant="square"
                    src="https://cdn.tgdd.vn/Files/2022/01/31/1413758/iphone-13promax.jpeg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Avatar
                    variant="square"
                    src="https://images.macrumors.com/t/xq3jBq3yK0pzNnG6uyM25WwNbUY=/800x0/smart/article-new/2023/03/iPhone-16-Mock-Header-1.jpg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Avatar
                    variant="square"
                    src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Avatar
                    variant="square"
                    src="https://assets-prd.ignimgs.com/2022/10/13/iphone-14-pro-hero-1665669498410.jpg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
            </Swiper>

            <Swiper
              direction={"vertical"}
              style={{ maxHeight: "500px", width: "30%" }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >

              {dataSlider.map((item, key) => (
                  <SwiperSlide key={key} style={{opacity : activeIndex == item.index ? '0.9' : '0.2'}}>
                  <Box display={"flex"} flexDirection={"column"} gap={"1px"}>
                    <Typography variant="h2" fontWeight={600} fontSize={"24px"}>
                      {item.title}
                    </Typography>
                    <Typography
                      
                      variant="inherit"
                      fontSize={"16px"}
                      lineHeight={"28px"}
                      color={"#4F4F4F"}
                      
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
          
          



            </Swiper>
          </Box>




          <Box padding={"87px 0px"}>
            <Typography
              variant="h1"
              textAlign={"center"}
              color={"#141414"}
              lineHeight={"67px"}
              fontSize={"56px"}
              fontWeight={700}
            >
              Integrate your favorite tools and share your funnel with the world.
            </Typography>
          </Box>


          <Box width={"100%"} display={"flex"} flexDirection={"row"} >
            <Swiper
              onRealIndexChange={(element) =>
                setActiveIndex(element.activeIndex)
              }
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              style={{ height: "500px", width: "70%" }}
              direction={"vertical"}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <Avatar
                    variant="square"
                    src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <Avatar
                    variant="square"
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-dep-thien-nhien-3d-003.jpg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <Avatar
                    variant="square"
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-3d-thien-nhien-001.jpg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <Avatar
                    variant="square"
                    src="https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-3.jpeg"
                    alt=""
                    sx={{ width: "95%", height: "74%", borderRadius: "4px" }}
                  />
                </Box>
              </SwiperSlide>
            </Swiper>

            <Swiper
              direction={"vertical"}
              style={{ maxHeight: "500px", width: "30%" }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >

              {dataSlider.map((item, key) => (
                  <SwiperSlide key={key} style={{opacity : activeIndex == item.index ? '0.9' : '0.2'}}>
                  <Box display={"flex"} flexDirection={"column"} gap={"1px"}>
                    <Typography variant="h2" fontWeight={600} fontSize={"24px"}>
                      {item.title}
                    </Typography>
                    <Typography
                      
                      variant="inherit"
                      fontSize={"16px"}
                      lineHeight={"28px"}
                      color={"#4F4F4F"}
                      
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
          
          



            </Swiper>
          </Box>


        </Container>
        

        <Container maxWidth="xl">
        <Box padding={"87px 0px"}>
            <Typography
              variant="h1"
              textAlign={"center"}
              color={"#141414"}
              lineHeight={"67px"}
              fontSize={"56px"}
              fontWeight={700}
            >
              With Perspective, our customers make the impossible possible.
            </Typography>
          </Box>

         

          <Swiper

        style={{position : 'relative'}}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[ Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
        <Box component={'div'}>
               <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{background : '#D2C7BE'}} borderRadius={7}>
                    <Stack padding={'40px'} flexDirection={'column'} justifyContent={'space-between'} width={'50%'}>
                        <Box>
                             <List>
                                <ListItem>
                                    <Typography sx={{textTransform : "uppercase"}} variant="h2" fontSize={'35px'} lineHeight={'22px'} color={'#1F1F1F'}> 
                                          Rauyant
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h1" fontWeight={600} fontSize={'32px'} lineHeight={'40px'} color={'#1F1F1F'}>
                                    Generated 66 high-ticket appointments for a B2B company in 6 weeks.
                                    </Typography>
                                </ListItem>
                             </List>
                        </Box>
                        <Box>
                             <List>
                                 <ListItem>
                                 <Typography variant="subtitle1" fontWeight={500} fontSize={'20px'} lineHeight={'32px'} color={'#1F1F1F'}>
                                 Niklas Buschner, CEO
                            </Typography>
                                 </ListItem>
                             </List>
                        </Box>
                    </Stack>
                    <Box width={'50%'}  position={'relative'}>
                      <Box  height={'100%'} component={'div'} position={'absolute'} top={'0px'} left={'0px'} sx={{backgroundImage : 'linear-gradient(90deg, #d2c7be 0%, rgba(210, 199, 190, 0) 100%)'}} zIndex={'9999'} width={'60%'}></Box>
                       <Avatar  sx={{width : '100%' , height : '100%', position : 'relative', borderRadius : 7}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65987a6e0fe458dc1a7b1ac0_Frame%2028.png" alt="" variant="square" />
                    </Box>
               </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box component={'div'}>
               <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{background : '#E0E7ED'}} borderRadius={7}>
                    <Stack padding={'40px'} flexDirection={'column'} justifyContent={'space-between'} width={'50%'}>
                        <Box>
                             <List>
                                <ListItem>
                                    <Typography sx={{textTransform : "uppercase"}} variant="h2" fontSize={'35px'} lineHeight={'22px'} color={'#1F1F1F'}> 
                                          Cobvaix.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h1" fontWeight={600} fontSize={'32px'} lineHeight={'40px'} color={'#1F1F1F'}>
                                         Generated over 900 applications in 10 weeks and over 120 new hires.
                                    </Typography>
                                </ListItem>
                             </List>
                        </Box>
                        <Box>
                             <List>
                                 <ListItem>
                                 <Typography variant="subtitle1" fontWeight={500} fontSize={'20px'} lineHeight={'32px'} color={'#1F1F1F'}>
                                Phillip Weber, CEO
                            </Typography>
                                 </ListItem>
                             </List>
                        </Box>
                    </Stack>
                    <Box width={'50%'}  position={'relative'}>
                      <Box  height={'100%'} component={'div'} position={'absolute'} top={'0px'} left={'0px'} sx={{backgroundImage : 'linear-gradient(90deg, #e0e7ed 0%, hsla(207.6923076923077, 26.53%, 90.39%, 0.00) 100%)'}} zIndex={'9999'} width={'60%'}></Box>
                       <Avatar  sx={{width : '100%' , height : '100%', position : 'relative', borderRadius : 7}} src="https://assets-global.website-files.com/61c05cf1fe36bc5723b06446/65987daaa08881c926bcfad3_Frame%2016.png" alt="" variant="square" />
                    </Box>
               </Stack>
          </Box>
        </SwiperSlide>
      
       

  
        <Box component={'div'} zIndex={'9999'} height={'100%'} display={'flex'} alignItems={'center'} position={'absolute'} left={'-30px'} top={'0px'}>
            <Button  ref={prevRef} variant="contained" sx={{borderRadius : '100%', height : 60, background : 'white', color : 'black'}}>
              <NavigateBeforeIcon />
          </Button>
        </Box>

        <Box component={'div'} zIndex={'9999'} height={'100%'} display={'flex'} alignItems={'center'} position={'absolute'} right={'-30px'} top={'0px'}>
            <Button sx={{borderRadius : '100%', height : 60, background : 'white', color : 'black'}} ref={nextRef} variant="contained" >
            <NavigateNextIcon />
          </Button>
        </Box>

      </Swiper>
     

     

   

        </Container>
     
        <Container maxWidth="xl" sx={{py : '78px'}}>
             <Box>
                 <Typography variant="subtitle1" fontSize={'16px'} color={'#4F4F4F'} textAlign={'center'}>
                     The top rated Conversion Optimization Tool
                 </Typography>
             </Box>
            <Stack gap={'30px'} flexDirection={'row'} justifyContent={'center'}>
                  <Avatar variant="square" sx={{width : '100px', height : '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/653bde868bbb09ed2fdf65af_google.webp" alt="" />
                  <Avatar variant="square" sx={{width : '70px', height : '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/653bde8639a57799b8c238ff_omr.webp" alt="" />
                  <Avatar variant="square" sx={{width : '100px',  height : '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/653bde860c3591cb5d3bbc2f_omr-reviews.webp" alt="" />
            
            
            </Stack>
        </Container>
        

        <Container maxWidth="xl">
        <Box padding={"87px 0px"}>
            <Typography
              variant="h1"
              textAlign={"center"}
              color={"#141414"}
              lineHeight={"67px"}
              fontSize={"56px"}
              fontWeight={700}
            >
              Learn easily and free. Take your online marketing into your own hands.
            </Typography>
          </Box>

          <Box>
          <Grid container spacing={4} columns={12}>
            <Grid item xs={6}  >
               <Stack height={'100%'} flexDirection={'column'} justifyContent={'space-between'} bgcolor={"#E4F1FF"} borderRadius={'20px'}>
                    <Box>
                        <Stack flexDirection={'column'} alignItems={'center'} padding={'65px'} gap={'10px'}>
                                <Typography width={'70%'} color={'#2A496B'}  variant="h3" textAlign={'center'} fontSize={'32px'} fontWeight={'600'} lineHeight={'40px'}>
                                     Perspective Community
                                </Typography>

                                <Typography color={'#2A496B'} fontSize={'16px'} lineHeight={'22.4px'} variant="subtitle1" textAlign={'center'}>
                                   Where marketers and resruiters exchange insights on a daily basis
                                </Typography>

                                <Button  sx={{border : 'none', color: "#2A496B", width : "fit-content", fontSize : '20px', fontWeight : '600', textTransform : 'lowercase'}} variant="outlined" startIcon={<PlayCircleFilledIcon sx={{fontSize : '20px', fontWeight : '600', textTransform : 'lowercase'}} />}>
                                    Learn more
                                  </Button>
                        </Stack>
                    </Box>
                    <Box>
                        <Avatar sx={{width: '100%', height: "100%", borderRadius :'20px'}} variant="square" src="https://assets-global.website-files.com/61ba09162b87002e87715b91/61c9acd20344d128a3de941e_community-visual-p-500.webp" alt="" />
                    </Box>
               </Stack>
            </Grid>

            
            <Grid item xs={6} >
            <Stack height={'100%'} flexDirection={'column'} justifyContent={'space-between'} bgcolor={"#E4E7FF"} borderRadius={'20px'}>
                    <Box>
                        <Stack flexDirection={'column'} alignItems={'center'} padding={'65px'} gap={'10px'}>
                                <Typography width={'70%'} color={'#2A496B'}  variant="h3" textAlign={'center'} fontSize={'32px'} fontWeight={'600'} lineHeight={'40px'}>
                                     Mobile Funnel Crash Course
                                </Typography>

                                <Typography color={'#2A496B'} fontSize={'16px'} lineHeight={'22.4px'} variant="subtitle1" textAlign={'center'}>
                                    The popular 60-minute mobile funnel crash course, moderated live
                                </Typography>

                                <Button  sx={{border : 'none', color: "#2A496B", width : "fit-content", fontSize : '20px', fontWeight : '600', textTransform : 'lowercase'}} variant="outlined" startIcon={<PlayCircleFilledIcon sx={{fontSize : '20px', fontWeight : '600', textTransform : 'lowercase'}} />}>
                                    Learn more
                                  </Button>
                        </Stack>
                    </Box>
                    <Box>
                        <Avatar  sx={{width: '100%', height: "100%", borderRadius :'20px'}} variant="square" src="https://assets-global.website-files.com/61ba09162b87002e87715b91/63d7c9482be79c83a445967d_ressources-nav-crashcurs-en.webp" alt="" />
                    </Box>
               </Stack>
            </Grid>



            <Grid item xs={12}>
            <Stack flexDirection={'row'} alignItems={'space-between'} bgcolor={"#FAF1E3"} borderRadius={'20px'} height={'fit-content'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Stack   flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={'65px'} gap={'10px'}>
                                <Typography width={'70%'} color={'#2A496B'}  variant="h3" textAlign={'center'} fontSize={'32px'} fontWeight={'600'} lineHeight={'40px'}>
                                     Mobile Funnel Crash Course
                                </Typography>

                                <Typography color={'#2A496B'} fontSize={'16px'} lineHeight={'22.4px'} variant="subtitle1" textAlign={'center'}>
                                    The popular 60-minute mobile funnel crash course, moderated live
                                </Typography>

                                <Button  sx={{border : 'none', color: "#2A496B", width : "fit-content", fontSize : '20px', fontWeight : '600', textTransform : 'lowercase'}} variant="outlined" startIcon={<PlayCircleFilledIcon sx={{fontSize : '20px', fontWeight : '600', textTransform : 'lowercase'}} />}>
                                    Learn more
                                  </Button>
                        </Stack>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <Avatar  sx={{width: '100%', height: "100%", borderRadius :'20px'}} variant="square" src="https://assets-global.website-files.com/61ba09162b87002e87715b91/64550f1985bc54287e055ba2_leni_ptalk.webp" alt="" />
                    </Box>
               </Stack>
            </Grid>
           
</Grid>

          </Box>
        </Container>
        

        <Container>
          <Stack flexDirection={'column'} gap={'40px'}> 
          <Box padding={"87px 0px 0px 0px"}>
            <Typography
              
              variant="h1"
              textAlign={"center"}
              color={"#141414"}
              lineHeight={"67px"}
              fontSize={"56px"}
              fontWeight={700}
            >
             Your free trial
made simple.
            </Typography>
          </Box>

          <Box>
          <Stepper activeStep={3} alternativeLabel>
              <Step >
                <StepLabel >
                    <Box display={'flex'} justifyContent={'center'}>
                    <Stack flexDirection={'column'} gap={'10px'} alignItems={'center'} width={'70%'}>
                       <Typography variant="h2" color={'#141414'} fontSize={'24px'} fontWeight={'600'}>
                          Today
                       </Typography>
                       <Typography variant="subtitle1" color={'#727272'} fontSize={'16px'} lineHeight={'22px'}>
                           You get 14 days of free access to your software including all courses
                       </Typography>
                    </Stack>
                    </Box>
                </StepLabel>
              </Step>
              <Step >
              <StepLabel >
                    <Box display={'flex'} justifyContent={'center'}>
                    <Stack flexDirection={'column'} gap={'10px'} alignItems={'center'} width={'70%'}>
                       <Typography variant="h2" color={'#141414'} fontSize={'24px'} fontWeight={'600'}>
                          Day 7
                       </Typography>
                       <Typography variant="subtitle1" color={'#727272'} fontSize={'16px'} lineHeight={'22px'}>
                           We will send you a reminder email that your trial will end in 7 days
                       </Typography>
                    </Stack>
                    </Box>
                </StepLabel>
              </Step>
              <Step >
              <StepLabel >
                    <Box display={'flex'} justifyContent={'center'}>
                    <Stack flexDirection={'column'} gap={'10px'} alignItems={'center'} width={'70%'}>
                       <Typography variant="h2" color={'#141414'} fontSize={'24px'} fontWeight={'600'}>
                          Day 14
                       </Typography>
                       <Typography variant="subtitle1" color={'#727272'} fontSize={'16px'} lineHeight={'22px'}>
                          Your subscription begins, but can be cancelled at any time
                       </Typography>
                    </Stack>
                    </Box>
                </StepLabel>
              </Step>
          </Stepper>
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
             <Button sx={{textTransform : 'none', borderRadius : '7px', background : '#007AFF', fontSize : '20px'}} variant="contained">Get started for free now</Button>
          </Box>
          </Stack>
        </Container>

        <Container  sx={{my : '80px'}}>
            <Box position={'relative'} >
                <Box   zIndex={'99'} component={'div'}  width={'100%'} height={'100%'} position={'absolute'} top={'0px'} left={'0px'}>
                      <Stack flexDirection={'row'} justifyContent={'space-between'} width={'100%'} height={'100%'}>
                           <Box width={'50%'} >
                              <Avatar  sx={{borderRadius: '40px', width : '100%', height : '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/61c309bdd88108d4ae9c4e50_cta-banner-gradient-left-p-800.webp" alt="" variant="square" />
                           </Box>
                        
                           <Box width={'50%'} >
                               <Avatar sx={{borderRadius: '40px',width : '100%', height : '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/61c30943923e30f2d653556d_cta-banner-gradient-right-p-800.webp" alt="" variant="square" />
                           </Box>
                      </Stack>
                </Box>

                <Stack zIndex={'9999'} position={'relative'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
                  <Stack flexDirection={'column'} alignItems={'center'} gap={'30px'}>
                      <Typography
                            width={'80%'}
                            variant="h1"
                            textAlign={"center"}
                            color={"#141414"}
                            lineHeight={"67px"}
                            fontSize={"56px"}
                            fontWeight={700}
                          >
                          Start advertising more effectively in the mobile age.
                          </Typography>

                          <Stack flexDirection={'row'} gap={'40px'} >
                                <Box fontSize={'18px'} display={'flex'} gap={'5px'}>
                                    <CheckIcon sx={{color:"#4BA38C"}} />
                                    <Typography variant="subtitle1" color={'#4F4F4F'}>
                                       Cancel anytime
                                    </Typography>
                                </Box>
                                <Box fontSize={'18px'} display={'flex'} gap={'5px'}>
                                    <CheckIcon sx={{color:"#4BA38C"}} />
                                    <Typography variant="subtitle1" color={'#4F4F4F'}>
                                       Access to all content
                                    </Typography>
                                </Box>
                                <Box fontSize={'18px'} display={'flex'} gap={'5px'}>
                                    <CheckIcon sx={{color:"#4BA38C"}} />
                                    <Typography variant="subtitle1" color={'#4F4F4F'}>
                                       Expert support
                                    </Typography>
                                </Box>
                          </Stack>
                          <Box display={'flex'} justifyContent={'center'} marginTop={'20px'}>
                             <Button sx={{textTransform : 'none', borderRadius : '7px', background : '#007AFF', fontSize : '20px'}} variant="contained">Start my free 14-day trial</Button>
                          </Box>

                  </Stack>

                  <Box display={'flex'} justifyContent={'center'} marginTop={'80px'}>
                     <Avatar sx={{width:'60%', height: '100%'}} src="https://assets-global.website-files.com/61ba09162b87002e87715b91/6257545171ca7fb94c53f294_funnel-editor-outro-p-1080.webp" alt="" variant="square"/>
                  </Box>
                </Stack>
                
          
            </Box>
        </Container>

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
    </>
  );
}
