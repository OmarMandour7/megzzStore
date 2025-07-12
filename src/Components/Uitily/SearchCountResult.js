import React from 'react'
import UnopDropdown from "unop-react-dropdown";
const SearchCountResult = ({title}) => {
    const handler=()=> {

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile cor">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-2 cor  ">
                           
                           Sort By
                           <i class="fa-solid fa-arrow-down-short-wide mx-2"></i>
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item cor ">Best Seller</div>
                        <div className="border-bottom card-filter-item cor">Top Rated</div>
                        <div className="border-bottom card-filter-item cor">
                           Price From Higher To Lower
                        </div>
                        <div className=" card-filter-item cor"> Price From Lower To Higher</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
