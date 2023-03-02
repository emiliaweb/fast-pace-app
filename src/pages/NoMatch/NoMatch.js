import Showcase from "../../components/Showcase/Showcase";

const NoMatch = () => {
    return (
        <>
            <div className="container spacer-170">
                <h1 className="title title--medium">Requested page was <span>not found</span></h1>
                <a href="#" className="body-text arrow-link">Back to home page</a>
                <div className="body-text">Or check out our other products:</div>
            </div>
            <Showcase />
        </>
    )
}

export default NoMatch;