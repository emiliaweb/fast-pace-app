import { motion } from "framer-motion";

import Hero from "../../components/Hero/Hero";
import Showcase from "../../components/Showcase/Showcase";
import Spotlight from "../../components/Spotlight/Spotlight";
import params from "../../services/pageTransitionParams";

const HomePage = () => {
    return (
        <motion.div {...params}>
            <Hero />
            <Showcase />
            <Spotlight sectionID={'about'} />
        </motion.div>
    )
}

export default HomePage;