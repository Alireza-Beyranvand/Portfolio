import { useContext } from "react";
import MainContext from "../../../context/index";
import { Typography, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SlideOption from "../../../helpers/SlideOption";


const DevDocuments = ({ loading , devDocuments }) => {

    
    return (
        <>
            {devDocuments && devDocuments.map((dD, index) => (
                <SlideOption dir="up" start={loading} delay={`${index + 3}90`}>
                    <Grid item xs={7}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={5}
                        key={index} sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 8
                        }}>
                        <Card sx={{
                            width: {
                                xs: "100%",
                                sm: "60%",
                                lg: "60%",
                                xl: "80%"
                            },
                            boxShadow: 5
                        }} textAlign="center"  >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={dD.image}
                                    alt={dD.DocumentName}
                                />
                                <CardContent>
                                    <Typography gutterBottom textAlign="center" variant="body1" component="div">
                                        {dD.DocumentName}
                                    </Typography>
                                    <Typography variant="body2">
                                        {dD.level}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </SlideOption>

            ))}
        </>
    )
};

export default DevDocuments;