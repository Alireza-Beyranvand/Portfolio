
import { Box , Typography } from "@mui/material";

const Name = ({color , NameAn}) => {


    return(
        <>
             <Box className="particle" />
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <Typography variant="h4" ref={NameAn} color={color} sx={{
                            fontSize: {
                                xs: "3rem",
                                md: "5rem"
                            }
                        }}
                        >
                            {"علیرضا سپه وند"}
                        </Typography>
                    </Box>
        </>
     
    )
};

export default Name;