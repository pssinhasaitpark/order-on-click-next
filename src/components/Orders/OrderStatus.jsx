import { useState } from "react";
import trolly from "../../assets/images/trolly.png";

const OrderStatus = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a valid mobile number or email ID");
      return;
    }
    console.log("Submitted:", input);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 500px)", margin: "20px 0" }}
    >
      <div
        className="bg-white rounded shadow p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {/* Red circle with shopping cart icon */}
        <div className="d-flex justify-content-center mb-5">
          <div
            className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: "75px", height: "75px", marginTop: "-50px" }}
          >
            <img
              src={trolly}
              alt="trolley"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
        </div>

        {/* Form title */}
        <h5 className="text-center fw-bold mb-5">Order History And Status</h5>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Please Enter Registered Mobile No/ Email Id"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ height: "45px" }}
          />
          <button
            type="submit"
            className="btn w-100 fw-semibold mb-4"
            style={{
              height: "45px",
              backgroundColor: "#E62E04",
              color: "white",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderStatus;
