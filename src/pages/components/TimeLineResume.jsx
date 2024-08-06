import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineOppositeContent,
    TimelineContent
} from "@mui/lab";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import SlideOption from "../../helpers/SlideOption";



const TimeLineResume = ({ option, time, school, index, icon, company, delay }) => {

    // for slideOption
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false)
        }
    }, [])


    return (

        <SlideOption dir="up" start={loading} delay={`${index + 3}${delay}`}>
            <Timeline position="alternate" color="text.primary">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ mt: 2 }}
                        align="right"
                        variant="body2"
                        color="text.primary">
                        {time}
                    </TimelineOppositeContent>
                    <TimelineSeparator >
                        <TimelineDot variant="outlined" sx={{ color: "text.primary" }} >
                            {icon}
                        </TimelineDot>
                        {index === 0 ? <TimelineConnector sx={{ height: "5rem", mt: 2.5 }} /> : null}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="body1" color="text.primary">
                            {option}
                        </Typography>
                        <Typography variant="caption" color="text.primary">
                            {school || company}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </SlideOption>
    )
};

export default TimeLineResume;