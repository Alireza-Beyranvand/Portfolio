import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineOppositeContent, TimelineContent } from "@mui/lab"
import { SchoolRounded } from "@mui/icons-material"
import { Typography } from "@mui/material";


const TimeLineResume = ({ option, time, school , index , icon , company}) => {


    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{  mt:2 }}
                    align="right"
                    variant="body2"
                    color="text.secondary">
                    {time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" sx={{ color: "whitesmoke" }}>
                       {icon}
                    </TimelineDot>
                    {index === 0 ?  <TimelineConnector sx={{height:"5rem" , mt:2.5}}/> : null}
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
    )
};

export default TimeLineResume;