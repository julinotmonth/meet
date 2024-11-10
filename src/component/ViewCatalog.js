import { Link } from "react-router-dom";

function ViewCatalog() {
    return (
        <>
        <div className="wadah_view_catalog">
            <div className="margin_kanankiri">
                <div className="view_catalog">
                    <h3 className="name_view_product">MEET LUMINOUS</h3>
                    <p className="name_view_dijual">Product On Sale</p>
                    <Link href="#"><div className="btn_view_catalog">View Catalog</div></Link>
                </div>
            </div>
        </div>
        <div className="wadah_view_catalog_2">
            <div className="margin_kanankiri">
                <div className="view_catalog_2">
                    <h3 className="name_view_product">MEET CYBER</h3>
                    <p className="name_view_dijual">New Collection</p>
                    <Link href="#"><div className="btn_view_catalog">View Catalog</div></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default ViewCatalog;