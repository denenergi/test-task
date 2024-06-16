import { Box, Container } from "@mui/material";

export const metadata = {
  title: "Home",
  description: "First page",
};

export default function Home() {
  return (
    <section style={{height: '100vh'}}>
      <Container maxWidth="lg" sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box>
          Home page
        </Box>
      </Container>
    </section>
  )
}
