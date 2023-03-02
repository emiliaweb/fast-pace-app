import Filters from "../../components/Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";

const CatalogPage = () => {
    return (
        <>
            <div class="spacer-170">
                <div class="container">
                    <h1 class="title title--big">Find your <span>new sneakers</span></h1>
                    <div class="body-text">Explore our catalog and find your best fit.</div>
                </div>
            </div>
            <Filters />
            <Catalog />
        </>
    )
}

export default CatalogPage;