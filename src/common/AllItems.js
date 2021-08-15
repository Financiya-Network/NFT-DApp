import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import InfiniteScroll from "react-infinite-scroll-component";

let cardData = [
  { id: 1, title: "Ether" },
  { id: 2, title: "matic" },
  { id: 3, title: "cardano" },
  { id: 4, title: "binance" },
  { id: 5, title: "alice" },
  { id: 6, title: "polkabridge" },
  { id: 7, title: "polka" },
  { id: 8, title: "bridge" },
];

function AllItems() {
  // const [collection, setCollection] = useState([]);
  // const [itemCategories, setItemCategories] = useState(localCategories);
  const [numbers, setNumbers] = useState([1, 5, 4, 2, 3]);
  const [selectedCat, setSelectedCat] = useState("All");
  const [pageNo, setPageNo] = useState(0);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(cardData);
  }, []);

  const fetchMoreItems = async () => {
    setItemList([...itemList, ...cardData]);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={itemList.length}
        next={fetchMoreItems}
        hasMore={true}
      >
        <div className="row mt-3">
          {" "}
          <h5 style={{ color: "white", paddingBottom: 30 }}>View All Items</h5>
          {itemList.map((item, index) => (
            <div className="col-12 col-md-3" key={item._id}>
              <div className="d-flex justify-content-center">
                <CategoryCard />
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default AllItems;
