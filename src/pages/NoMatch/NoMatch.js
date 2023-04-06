import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Showcase from "../../components/Showcase/Showcase";
import params from "../../services/pageTransitionParams";

const NoMatch = () => {
    return (
        <motion.div {...params}>
            <div className="container spacer-170">
                <h1 className="title title--medium">Запрошенная страница <span>не найдена</span></h1>
                <Link to="/" className="body-text arrow-link">Назад на главную</Link>
                <div className="body-text">Или посмотрите наши другие товары:</div>
            </div>
            <Showcase />
        </motion.div>
    )
}

export default NoMatch;