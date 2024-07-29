import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineOppositeContent, TimelineContent } from "@mui/lab"
import { Typography, Slide } from "@mui/material";

import { useState, useEffect } from "react";

const TimeLineResume = ({ option, time, school, index, icon, company }) => {



    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false)
        }
    }, [])



    return (


        <Slide direction="down" in={loading} style={{
            transitionDelay: loading ? `${index + 1}100ms` : "0ms"
        }}>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ mt: 2 }}
                        align="right"
                        variant="body2"
                        color="text.secondary">
                        {time}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" sx={{ color: "whitesmoke" }}>
                            {icon}
                        </TimelineDot>
                        {index === 0 ? <TimelineConnector sx={{ height: "5rem", mt: 2.5 }} /> : null}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="body1" color="whitesmoke">
                            {option}
                        </Typography>
                        <Typography color="whitesmoke" variant="caption">
                            {school || company}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>


        </Slide>


    )
};

export default TimeLineResume;