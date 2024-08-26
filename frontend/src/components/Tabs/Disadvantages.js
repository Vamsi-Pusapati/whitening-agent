import React from 'react';
import './Disadvantages.css';

const Disadvantages = () => (
  <div className="container mt-5">
    <h2 className="text-center mb-4">Titanium Dioxide (TiO₂)</h2>
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Introduction</h4>
        <p className="lead">Titanium Dioxide (TiO₂), particularly in its food-grade form (E171), is extensively used in the food industry for its color-enhancing properties. Its primary role is to whiten and opacify various food items such as chewing gum, sweets, baked goods, confectionery items, and salad dressings. This bright white color improves the appearance and texture of food products, enhancing their marketability and contributing to consumer satisfaction.</p>
        <p className="lead">Beyond its use as a colorant, TiO₂ is also utilized in food packaging due to its photocatalytic UV blocking and antimicrobial properties, which help to enhance food safety and extend shelf life.</p>
      </div>
    </div>

    <div className="card mt-4">
      <div className="card-body">
        <h4 className="card-title">Disadvantages of TiO₂</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Health Risks</h5>
            <p>TiO₂ particles, particularly in their nanoparticle form (NPs), can induce DNA strand breaks and chromosomal damage, raising concerns about their genotoxic potential and the risk of long-term genetic effects.</p>
            <p>TiO₂ particles have a long half-life and tend to accumulate in the body, posing long-term safety concerns. Research has indicated potential systemic exposure and placental transfer, with TiO₂ particles detected in human blood and placenta.</p>
          </li>
          <li className="list-group-item">
            <h5>Environmental Concerns</h5>
            <p>TiO₂ is not biodegradable and can persist in the environment, leading to potential bioaccumulation in ecosystems.</p>
          </li>
          <li className="list-group-item">
            <h5>Regulatory Actions</h5>
            <p>The EFSA has concluded that E171 can no longer be considered safe as a food additive, leading to regulatory bans in regions such as France and the European Union.</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="card mt-4">
      <div className="card-body">
        <h4 className="card-title">Why We Should Not Use TiO₂</h4>
        <p className="lead">The use of TiO₂ in food products is increasingly being scrutinized due to the health and environmental risks. The European Food Safety Authority (EFSA) has concluded that E171 can no longer be considered safe as a food additive, leading to regulatory bans in regions such as France and the European Union. This growing regulatory caution highlights the need to reconsider the use of TiO₂ in food products to protect public health and the environment.</p>
      </div>
    </div>

    <div className="card mt-4 mb-5">
      <div className="card-body">
        <h4 className="card-title">Why We Need a Replacement for TiO₂</h4>
        <p className="lead">Given the safety concerns and regulatory changes, there is a pressing need for the food industry to find natural alternatives to TiO₂. The drive towards natural alternatives is not only a response to safety and regulatory pressures but also aligns with increasing consumer demand for cleaner labels and safer, more sustainable food products.</p>
        <p className="lead">Research into natural compounds that can replicate the functional benefits of TiO₂ without the associated health risks is paramount. This transition represents a significant challenge but also an opportunity for innovation in the development of safer food products and additives.</p>
      </div>
    </div>
  </div>
);

export default Disadvantages;
