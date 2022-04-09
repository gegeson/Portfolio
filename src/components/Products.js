import * as React from "react";
import { products } from "../config";
import "../css/Products.scss";

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
import LinkIcon from "@mui/icons-material/Link";
import Icon from "./icons/icon";

const card = ({ title, discription, skills, image, code_url, page_link }) => (
  <Card
    // variant="outlined"
    sx={{ maxWidth: 345 }}
    color="dark"
    className="product-card"
  >
    <CardMedia
      component="img"
      alt={title}
      height="140"
      src={`${process.env.PUBLIC_URL}/images/products/${image}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        color="text.secondary"
        component="div"
      >
        {discription}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
        <Stack direction="row" spacing={1}>
          {skills.map((skill, i) => (
            <Chip key={i} label={skill} />
          ))}
        </Stack>
      </Typography>
    </CardContent>
    <CardActions>
      {code_url ? (
        <Button href={code_url} className="product-github">
          <Icon name="GitHub" />
        </Button>
      ) : (
        ""
      )}

      {page_link ? (
        <Button href={page_link} className="product-pagelink">
          <LinkIcon />
        </Button>
      ) : (
        ""
      )}
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
