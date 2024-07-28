
import { Helmet } from "react-helmet"


const HelmetOption = ({ option, title }) => {
    return (
        <Helmet>
            {option}
            <title>{title ?`صفحه شخصی | ${title}`: "صفحه شخصی علیرضا سپه وند"}</title>
        </Helmet>
    );
}
export default HelmetOption;