
import { Box, Typography } from "@mui/material";

import {
    CreateOutlined,
    CopyrightOutlined,
} from "@mui/icons-material"

const SideBarFooter = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 2,
            textAlign: "center",
            justifyContent: 'center',
            mt: 3
        }}>
            <Typography variant="subtitle2" color="text.primary" sx={{ mt: 2 }}>
                ساخته شده توسط علیرضا
                <CreateOutlined sx={{
                    verticalAlign: "middle",
                    height: 20
                }} />
            </Typography>
            <Typography variant="caption" color="text.primary" sx={{ mt: 1 }}>
                کپی رایت 1403
                <CopyrightOutlined sx={{
                    verticalAlign: "middle",
                    height: 16,
                }} />
            </Typography>
        </Box>
    )
};

export default SideBarFooter;