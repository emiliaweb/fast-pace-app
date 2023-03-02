import Filters from "../../components/Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";

const CatalogPage = () => {
    return (
        <>
            <div className="spacer-170">
                <div className="container">
                    <h1 className="title title--big">Find your <span>new sneakers</span></h1>
                    <div className="body-text">Explore our catalog and find your best fit.</div>
                </div>
            </div>
            <Filters />
            <Catalog />
        </>
    )
}

export default CatalogPage;