
import { useEffect, useState } from "react";

function RecentlyViewed() {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(
        localStorage.getItem("recent")
      ) || [];

    setItems(data);

  }, []);

  return (

    <div>

      <h2>Recently Viewed</h2>

      <div className="grid">

        {items.map((item) => (

          <div
            className="recommend-card"
            key={item._id}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RecentlyViewed;