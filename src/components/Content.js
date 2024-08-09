import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardModel from "./Elements/CardModel";

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardModel
            Titre="Cours Méthode Agile"
            Description="Ce cours explore les principes et pratiques des méthodes Agiles, un ensemble d'approches flexibles et collaboratives pour la gestion de projets, particulièrement dans le développement logiciel."
          />
        </Grid>
        <Grid item xs={4}>
          <CardModel Titre="Cours Git & Github" Description="Ce cours se concentre sur l'apprentissage de Git, un système de contrôle de version distribué, et de GitHub, une plateforme de collaboration qui héberge des projets de développement logiciel." />
        </Grid>
        <Grid item xs={4}>
          <CardModel Titre="Cours DevOps" Description="Le cours DevOps se concentre sur l'apprentissage des concepts et pratiques qui favorisent une collaboration étroite entre les équipes de développement et d'opérations." />
        </Grid>
      </Grid>
    </Box>
  );
}
