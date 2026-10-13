import { useContext, useMemo, useState } from "react";
import { CardContext } from "../contexts/CardContext";
import { useForm } from "react-hook-form";

function Checkout() {
  const { state, dispatch } = useContext(CardContext);

  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const totalPrice = useMemo(() => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [state.cart]);

  const onSubmit = (data) => {
    console.log(data);

    dispatch({
      type: "CLEAR_CART",
    });

    reset();

    setSuccessMessage("Order placed successfully! 🎉");
  };

  return (
    <div className="page checkout">
      <h1 className="page-title">Checkout</h1>

      {successMessage && <div className="success">{successMessage}</div>}

      <div className="checkout-grid">
        <div>
          <h2 className="section-title">Your items</h2>

          {state.cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="cart-list">
              {state.cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />

                  <div className="cart-info">
                    <h3>{item.title}</h3>
                    <p className="cart-meta">
                      ${item.price} &times; {item.quantity}
                    </p>
                  </div>

                  <div className="cart-side">
                    <strong className="cart-line-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                    <button
                      type="button"
                      className="btn danger small"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="section-title">Shipping details</h2>

          <div className="total">
            Total Price <span>${totalPrice.toFixed(2)}</span>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full Name is required",
                  minLength: {
                    value: 3,
                    message: "Full Name must be at least 3 characters",
                  },
                })}
              />
              {errors.fullName && (
                <p className="error">{errors.fullName.message}</p>
              )}
            </div>

            <div className="field">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="field">
              <input
                type="text"
                placeholder="Enter your shipping address"
                {...register("shippingAddress", {
                  required: "Shipping Address is required",
                })}
              />
              {errors.shippingAddress && (
                <p className="error">{errors.shippingAddress.message}</p>
              )}
            </div>

            <button className="btn" type="submit">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;