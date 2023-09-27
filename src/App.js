import React from "react";
import "./App.css";
import Card from "./card";

const tiers = [
  {
    title: "FREE",
    cost: "$0",
    per: "/month",
    user: "Single User",
    storage: "5GB Storage",
    publicProjects: "Unlimited Public Projects",
    access: "Community Access",
    privateProjects: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    reportStatus: "Monthly Status Reports",
    button: "Button"
  },
  {
    title: "PLUS",
    cost: "$9",
    per: "/month",
    user: "5 Users",
    storage: "50GB Storage",
    publicProjects: "Unlimited Public Projects",
    access: "Community Access",
    privateProjects: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    reportStatus: "Monthly Status Reports",
    button: "Button"
  },
  {
    title: "PRO",
    cost: "$49",
    per: "/month",
    user: "Unlimited Users",
    storage: "150GB Storage",
    publicProjects: "Unlimited Public Projects",
    access: "Community Access",
    privateProjects: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Unlimited Free Subdomains",
    reportStatus: "Monthly Status Reports",
  },
];

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
        {tiers.map((tier) => {
            return (
              <Card key={tier.title}
              title={tier.title}
              cost={tier.cost}
              per={tier.per}
              user={tier.user}
              storage={tier.storage}
              publicProjects={tier.publicProjects}
              access={tier.access}
              privateProjects={tier.privateProjects}
              support={tier.support}
              subdomain={tier.subdomain}
              reportStatus={tier.reportStatus}/>
            );
          })} 
        </div>
      </div>
    </section>
  );
}

export default App;