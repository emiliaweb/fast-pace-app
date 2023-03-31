import { motion } from "framer-motion";

import Showcase from "../../components/Showcase/Showcase";
import params from "../../services/pageTransitionParams";

const NoMatch = () => {
    return (
        <motion.div {...params}>
            <div className="container spacer-170">
                <h1 className="title title--medium">Requested page was <span>not found</span></h1>
                <a href="#" className="body-text arrow-link">Back to home page</a>
                <div className="body-text">Or check out our other products:</div>
            </div>
            <Showcase />
        </motion.div>
    )
}

export default NoMatch;