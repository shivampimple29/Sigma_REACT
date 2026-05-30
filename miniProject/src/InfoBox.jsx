import "./infoBox.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    const HOT_URL="";
    const RAINY_URL="";
    const COLD_URL="";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={INIT_URL} title={info.city} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}'s weather
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;C</p>
              <p>Maximum temperature : {info.tempMax}&deg;C</p>
              <p>Minimum temperature : {info.tempMin}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>Temperature feels like : {info.feels_like}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
