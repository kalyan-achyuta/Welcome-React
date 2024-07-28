import CategoryList from "./CategoryList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  const handleClick = () => {
    console.log("clicked");
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-2xl p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold text-2xl">∨</span>
        </div>
        {showItems && <CategoryList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
