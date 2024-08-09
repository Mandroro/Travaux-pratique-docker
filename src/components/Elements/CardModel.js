import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function CardModel({Titre, Description}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
            {Titre}
          </Typography>
          <Typography variant="body2">
            {Description}
          </Typography>
        </CardContent>
        <CardActions sx={{paddingBottom:3}}>
          <Button variant="contained" size="small">Lire <ReadMoreIcon sx={{ml:2}}/></Button>
          <Button variant="contained" color="warning" size="small">Télécharger <FileDownloadIcon sx={{ml:2}}/></Button>
        </CardActions>
      </Card>
    </Box>
  );
}
