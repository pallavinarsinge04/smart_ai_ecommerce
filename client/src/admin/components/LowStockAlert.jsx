
function LowStockAlert({ stock }) {

  if (stock >= 10) return null;

  return (

    <div className="alert">

      ⚠ Low Stock Remaining

    </div>

  );

}

export default LowStockAlert;

