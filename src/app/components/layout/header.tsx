import { Box, Container, createTheme, List, ListItem, Stack, ThemeProvider, Link, Avatar, Typography, Button } from "@mui/material";



export default function Header(){
     return (
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
     )
}