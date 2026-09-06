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
      0
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
    <div>
      <h1>Checkout</h1>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

      {state.cart.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            width="150"
          />

          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div>
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
            <p>{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
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

          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </div>

        {/* Shipping Address */}
        <div>
          <input
            type="text"
            placeholder="Enter your shipping address"
            {...register("shippingAddress", {
              required: "Shipping Address is required",
            })}
          />

          {errors.shippingAddress && (
            <p>{errors.shippingAddress.message}</p>
          )}
        </div>

        <button type="submit">
          Place Order
        </button>
      </form>

      {successMessage && (
        <h2>{successMessage}</h2>
      )}
    </div>
  );
}

export default Checkout;