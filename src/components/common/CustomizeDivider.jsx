import { Chip, Divider, Typography } from "@mui/material";
import SlideOption from "../../helpers/SlideOption";


const CustomizeDivider = ({ color, label, chipIcon, borderC, sx,
    dividerVarinat, textColor, textVariant, loading, delay, dir, className , divider}) => {
    return (
        <>

            {divider === true ? (
                <SlideOption dir={dir} start={loading} delay={delay}>
                    <Divider variant={dividerVarinat} sx={{
                        px: 1,
                        "&::before , &::after":
                            { borderColor: borderC }
                    }} >
                        <Chip label={
                            <Typography variant={textVariant} color={textColor} className={className}>
                                {label}
                            </Typography>
                        } variant="filled"
                            color={color} icon={chipIcon} sx={{ p: 3, ...sx }}
                        />
                    </Divider>
                </SlideOption>
            ) : (
                <SlideOption dir={dir} start={loading} delay={delay}>
                    <Chip label={
                        <Typography variant={textVariant} color={textColor} className={className}>
                            {label}
                        </Typography>
                    } variant="filled"
                        color={color} icon={chipIcon} sx={{ ...sx }}
                    />
                </SlideOption>
            )}
        </>

    )
};

export default CustomizeDivider;