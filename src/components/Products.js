import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const items = [
  {
    title: "Portfolio",
    discription: "This is my portforio. ",
    skills: ["Javascript", "React"],
    code_url: "https://github.com/gegeson/Portfolio",
  },
  {
    title: "Portfolio",
    discription: "This is my portforio. ",
    skills: ["Javascript", "React"],
    code_url: "https://github.com/gegeson/Portfolio",
  },
  {
    title: "Portfolio",
    discription: "This is my portforio. ",
    skills: ["Javascript", "React"],
    code_url: "https://github.com/gegeson/Portfolio",
  },
  {
    title: "Portfolio",
    discription: "This is my portforio. ",
    skills: ["Javascript", "React"],
    code_url: "https://github.com/gegeson/Portfolio",
  },
];

const card = ({ title, discription, skills, code_url }) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2">{discription}</Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Stack direction="row" spacing={1}>
          {skills.map((skill, i) => (
            <Chip label={skill} />
          ))}
        </Stack>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <section id="products">
      <h1>
        <span>03.</span> Products
      </h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item, i) => (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <Card variant="outlined">{card(item)}</Card>{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}
