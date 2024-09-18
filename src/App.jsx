/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Dynamic pricing plans data
const pricingPlans = [
  {
    type: "FREE",
    price: "₹0/month",
    features: [
      { name: "Single User", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: false },
      { name: "Dedicated Phone Support", available: false },
      { name: "Free Subdomain", available: false },
      { name: "Monthly Status Reports", available: false },
    ],
  },
  {
    type: "PLUS",
    price: "₹199/month",
    features: [
      { name: "5 Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: false },
    ],
  },
  {
    type: "PRO",
    price: "₹499/month",
    features: [
      { name: "10 Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: true },
    ],
  },
];

// Component to render individual pricing cards
const PricingCard = ({ plan }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card text-center shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3>{plan.type}</h3>
        </div>
        <div className="card-body">
          <h2>{plan.price}</h2>
          <ul className="list-group list-group-flush">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  !feature.available ? "text-muted" : ""
                }`}
              >
                <span>
                  {feature.available ? "✔" : "✘"} {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">BUTTON</button>
        </div>
      </div>
    </div>
  );
};

// Component to render the pricing cards dynamically
const PricingPlans = () => {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center mb-4" style={{ color: "white" }}>
        Pricing Plan
      </h1>
      <div className="row justify-content-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <PricingPlans />
    </div>
  );
};

export default App;
