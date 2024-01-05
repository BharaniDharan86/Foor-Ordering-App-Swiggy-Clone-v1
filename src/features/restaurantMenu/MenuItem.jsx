/* eslint-disable react/prop-types */
function MenuItem({ item }) {
  const { name, price, imageId, description, defaultPrice } = item;
  return (
    <div className="item">
      <div>
        <p className="item-name">{name}</p>
        <p className="item-price">{(price || defaultPrice) / 100} rs</p>
        <p className="item-description">{description}</p>
      </div>
      <div>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
          alt=""
        />
        <button>Add</button>
      </div>
    </div>
  );
}

export default MenuItem;
