
import { Slide } from "@mui/material";

const SlideOption = ({ dir, delay, start, children }) => {
    return (
        <Slide direction={dir} in={start} style={{
            transitionDelay: start ? `${delay}ms` : "0ms"
        }} >
            {children}
        </Slide>
    )
};

export default SlideOption;