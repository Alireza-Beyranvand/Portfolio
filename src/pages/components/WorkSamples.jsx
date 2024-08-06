import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box, CardActionArea, Divider, Chip, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HelmetOption from "../../helpers/HelmetOption";
import { CodeOutlined } from "@mui/icons-material";
import { workSample } from "../../constants/workSample";
import SlideOption from "../../helpers/SlideOption";

const WorkSamples = () => {



    // state for animation
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, [])


    
    return (
        <>
            <HelmetOption title="نمونه کار های من" />
            <SlideOption start={loading} dir="down" delay="400" >
                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "silver"
                    },
                    mt: 3
                }}>
                    <Chip label={<Typography variant="body1" color="text.primary">
                        نمونه کار های من
                    </Typography>} icon={<CodeOutlined />} sx={{ p: 3, px: 5 }} />
                </Divider>
            </SlideOption>

            {workSample && workSample.map((ws, index) => (
                <SlideOption start={loading} dir="up" delay={`${index + 3}80`} >
                    <Tooltip title={
                        `برای دیدن سورس کد کلیک کنید 
                        ${ws.url}`
                    } placement="top">
                        <Card key={ws.id} sx={{
                            maxWidth: "90%", margin: "0 auto", mt: 7.5, mb: 5,
                            borderRadius: 8, border: "1px solid silver", boxShadow: 20
                        }} >
                            <CardActionArea href={ws.url} target="_blank">
                                <CardMedia
                                    component="img"
                                    image={ws.image}
                                    alt="project"
                                    sx={{ maxHeight: "40rem" }}
                                />
                                <CardContent sx={{ display: "flex", justifyContent: 'space-around' }}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={8}>
                                            <Divider sx={{
                                                "&::before, &::after": {
                                                    borderColor: "silver"
                                                },
                                            }}>
                                                <Chip label={
                                                    <Typography variant="body1" sx={{ mt: .5 }}>
                                                        {ws.name}
                                                    </Typography>
                                                } />
                                            </Divider>

                                            <Typography variant="body2" color="text.primary" sx={{
                                                width: "75%",
                                                margin: "1rem auto", boxShadow: 8, p: 1, borderRadius: 4
                                            }}>
                                                {ws.description}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Box component="div">
                                                <Divider sx={{
                                                    "&::before, &::after": {
                                                        borderColor: "silver"
                                                    },
                                                }}>
                                                    <Chip label={<Typography variant="body1">
                                                        موارد به کار رفته
                                                    </Typography>} variant="body1" />
                                                </Divider>
                                                <Typography variant="body2" sx={{
                                                    boxShadow: 8,
                                                    mt: 3.2, borderRadius: 4, p: 1,

                                                }}>
                                                    {ws.usedItem.join("\n , ")}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Tooltip>
                </SlideOption>

            ))}
        </>
    )
};

export default WorkSamples;