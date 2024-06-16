import { Card, CardContent, Container, Typography } from "@mui/material"

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id)

  return ({
    title: post.title,
    description: post.description,
    applicationName: "test"
  })
}

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const result = await res.json()
  return result
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const result = await res.json()
  return result.map(el => ({
    id: el.id.toString()
  }))
}

const PagePost = async ({ params: { id } }) => {
  const post = await fetchData(id)
  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="p" component="div" sx={{ fontSize: 12 }}>
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default PagePost