import { parseISO, formatDistanceToNow } from "date-fns-jalali";

const Time = ({ timestamp }) => {

    let timeAgo = ""
    if (timestamp) {
        const time = parseISO(timestamp);
        const viewTime = formatDistanceToNow(time);
        timeAgo = `${viewTime} قبل `
    };

    return (
        <>
            <span>
                <i>
                    {timeAgo}
                </i>
                &nbsp;
            </span>
        </>
    )
};

export default Time;