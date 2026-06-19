import { useWishlist } from "../context/WishlistContext";
import "./Page.css";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="page-container">

      <h1 className="page-title">❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-card">
          <h2>No Products Added</h2>
        </div>
      ) : (
        <div className="grid">

          {wishlist.map((item) => (

            <div className="item-card" key={item._id}>

              <img src={item.image} alt={item.name} />

              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

              <button
                className="delete-btn"
                onClick={() => removeFromWishlist(item._id)}
              >
                Remove
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}