import * as React from "react";
import { products } from "../config";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const card = ({ title, discription, skills }) => (
  <Card sx={{ maxWidth: 345 }} color="dark" className="product-card">
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      src="../../images/liella.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {discription}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Stack direction="row" spacing={1}>
          {skills.map((skill, i) => (
            <Chip key={i} label={skill} />
          ))}
        </Stack>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default function OutlinedCard() {
  return (
    <section id="products">
      <h1 className="numbered-heading">Products</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, i) => (
            <Grid item xs={4} sm={4} md={4} key={i}>
              {card(product)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}
