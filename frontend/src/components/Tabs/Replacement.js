import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Replacement.css'; // Custom CSS for additional styling

const data = {
  BY: {
    color: {
      L: { value: 83.98, error: 0.01 },
      a: { value: 1.35, error: 0.01 },
      b: { value: 16.83, error: 0.02 },
      Chroma: { value: 16.88, error: 0.02 },
      HueAngle: { value: 85.40, error: 0.02 },
      DeltaE: { value: 21.79, error: 0.02 },
      WhitenessIndex: { value: 76.73, error: 0.02 }
    }
  },
  SD_BY: {
    color: {
      L: { value: 90.73, error: 0.05 },
      a: { value: 1.01, error: 0.01 },
      b: { value: 12.73, error: 0.02 },
      Chroma: { value: 12.76, error: 0.03 },
      HueAngle: { value: 85.47, error: 0.04 },
      DeltaE: { value: 13.89, error: 0.05 },
      WhitenessIndex: { value: 84.23, error: 0.04 }
    }
  },
  BAW: {
    color: {
      L: { value: 102.78, error: 0.09 },
      a: { value: -0.54, error: 0.01 },
      b: { value: 4.81, error: 0.01 },
      Chroma: { value: 4.84, error: 0.02 },
      HueAngle: { value: -83.54, error: 0.09 },
      DeltaE: { value: 1.33, error: 0.05 },
      WhitenessIndex: { value: 94.42, error: 0.05 }
    }
  },
  BAW10: {
    
    flowability: {
      AOR: { value: 18.49, error: 2.29 },
      HR: { value: 1.23, error: 0.03 },
      CI: { value: 18.59, error: 2.43 }
    }
  },
  BAW25: {
    flowability: {
      AOR: { value: 10.40, error: 1.87 },
      HR: { value: 1.20, error: 0.04 },
      CI: { value: 16.69, error: 2.96 }
    }
  },
  AW: {
    color: {
      L: { value: 102.76, error: 0.03 },
      a: { value: -0.50, error: 0.28 },
      b: { value: 6.28, error: 0.00 },
      Chroma: { value: 6.30, error: 0.00 },
      HueAngle: { value: 85.44, error: 0.04 },
      WhitenessIndex: { value: 93.12, error: 0.01 }
    },
    flowability: {
      AOR: { value: 15.15, error: 0.71 },
      HR: { value: 1.11, error: 0.00 },
      CI: { value: 10.00, error: 0.00 }
    }
  },
  LAW10: {
    color: {
      L: { value: 99.19, error: 0.04 },
      a: { value: -0.20, error: 0.01 },
      b: { value: 6.02, error: 0.14 },
      Chroma: { value: 2.46, error: 0.03 },
      HueAngle: { value: -88.14, error: 0.08 },
      WhitenessIndex: { value: 93.92, error: 0.13 }
    },
    flowability: {
      AOR: { value: 22.26, error: 4.18 },
      HR: { value: 1.11, error: 0.00 },
      CI: { value: 10.00, error: 0.00 }
    }
  },
  LAW25: {
    color: {
      L: { value: 99.60, error: 0.08 },
      a: { value: -0.03, error: 0.01 },
      b: { value: 7.04, error: 0.04 },
      Chroma: { value: 2.65, error: 0.01 },
      HueAngle: { value: -89.74, error: 0.06 },
      WhitenessIndex: { value: 92.95, error: 0.03 }
    },
    flowability: {
      AOR: { value: 17.90, error: 4.72 },
      HR: { value: 1.14, error: 0.04 },
      CI: { value: 11.93, error: 3.34 }
    }
  },
  K0: {
    color: {
      L: { value: 74.72, error: 0.26 },
      a: { value: 1.36, error: 0.01 },
      b: { value: 8.78, error: 0.14 },
      DeltaE: { value: 14.04, error: 0.29 },
      Hue: { value: 80.82, error: 0.00 },
      Chroma: { value: 8.88, error: 0.15 }
    },
    flowability: {
      AOR: { value: 26.52, error: 0.97 },
      HR: { value: 1.16, error: 0.03 },
      CI: { value: 13.90, error: 2.92 }
    }
  },
  KAW12_5: {
    color: {
      L: { value: 97.79, error: 0.39 },
      a: { value: 0.33, error: 0.01 },
      b: { value: 3.07, error: 0.01 },
      DeltaE: { value: 17.97, error: 0.16 },
      Hue: { value: 96.17, error: 0.00 },
      Chroma: { value: 1.58, error: 2.63 }
    },
    flowability: {
      AOR: { value: 7.40, error: 0.43 },
      HR: { value: 1.10, error: 0.02 },
      CI: { value: 8.87, error: 2.42 }
    }
  },
  KAW25: {
    color: {
      L: { value: 91.22, error: 0.07 },
      a: { value: -0.28, error: 0.03 },
      b: { value: 3.56, error: 0.00 },
      DeltaE: { value: 14.10, error: 0.09 },
      Hue: { value: 94.64, error: 0.00 },
      Chroma: { value: 1.88, error: 2.92 }
    },
    flowability: {
      AOR: { value: 29.11, error: 2.60 },
      HR: { value: 1.04, error: 0.03 },
      CI: { value: 3.34, error: 2.87 }
    }
  },
  KAW50: {
    color: {
      L: { value: 88.98, error: 0.07 },
      a: { value: -0.34, error: 0.01 },
      b: { value: 3.61, error: 0.00 },
      DeltaE: { value: 13.47, error: 0.03 },
      Hue: { value: 95.41, error: 0.04 },
      Chroma: { value: 1.93, error: 2.95 }
    },
    flowability: {
      AOR: { value: 29.68, error: 0.72 },
      HR: { value: 1.02, error: 0.00 },
      CI: { value: 2.13, error: 0.85 }
    }
  },
  PureProso: {
    color: {
      L: { value: 79.42, error: 0.44 },
      a: { value: -0.12, error: 0.02 },
      b: { value: 11.44, error: 0.18 },
      Chroma: { value: 11.44, error: 0.18 },
      Hue: { value: 90.54, error: 0.11 }
    }
  },
  PAW50: {
    color: {
      L: { value: 76.95, error: 0.4 },
      a: { value: -0.77, error: 0.02 },
      b: { value: 15.82, error: 0.21 },
      Chroma: { value: 15.82, error: 0.21 },
      Hue: { value: 92.81, error: 0.04 }
    },
    flowability: {
      AOR: { value: 33.31, error: 2.92 },
      HR: { value: 1.02, error: 0.00 },
      CI: { value: 2.17, error: 0.91 }
    }
  },
  PAW100: {
    color: {
      L: { value: 76.34, error: 0.45 },
      a: { value: 0.01, error: 0.02 },
      b: { value: 15.99, error: 0.21 },
      Chroma: { value: 15.99, error: 0.21 },
      Hue: { value: 89.92, error: 0.02 }
    }
  },
  PAW12_5: {
    flowability: {
      AOR: { value: 4.72, error: 3.51 },
      HR: { value: 1.05, error: 0.02 },
      CI: { value: 4.38, error: 2.17 }
    }
  },
  PAW25: {
    flowability: {
      AOR: { value: 29.39, error: 2.58 },
      HR: { value: 1.03, error: 0.00 },
      CI: { value: 3.30, error: 0.06 }
    }
  },
  P0: {
    flowability: {
      AOR: { value: 32.90, error: 2.88 },
      HR: { value: 1.15, error: 0.11 },
      CI: { value: 13.90, error: 2.92 }
    }
  },
  CBF: {
    flowability: {
      AOR: { value: 27.13, error: 0.95 },
      HR: { value: 1.09, error: 0.04 },
      CI: { value: 7.96, error: 3.59 }
    }
  }
};

const flowabilityLevels = {
  CI: [
    { label: 'Extremely poor', range: [38, Infinity], color: '#ffe6cc' },
    { label: 'Very poor', range: [32, 37], color: '#ffcc99' },
    { label: 'Poor', range: [26, 31], color: '#ffb366' },
    { label: 'Passable', range: [21, 25], color: '#ff9933' },
    { label: 'Fair', range: [16, 20], color: '#ff8000' },
    { label: 'Good', range: [11, 15], color: '#ff6600' },
    { label: 'Excellent', range: [-Infinity, 10], color: '#ff4d00' }
  ],
  HR: [
    { label: 'Extremely poor', range: [1.60, Infinity], color: '#dff0d8' },
    { label: 'Very poor', range: [1.46, 1.59], color: '#c8e6c9' },
    { label: 'Poor', range: [1.35, 1.45], color: '#a5d6a7' },
    { label: 'Passable', range: [1.26, 1.34], color: '#81c784' },
    { label: 'Fair', range: [1.19, 1.25], color: '#66bb6a' },
    { label: 'Good', range: [1.12, 1.18], color: '#4caf50' },
    { label: 'Excellent', range: [-Infinity, 1.11], color: '#388e3c' }
  ],
  AOR: [
    { label: 'Extremely poor', range: [66, Infinity], color: '#e0f7fa' },
    { label: 'Very poor', range: [56, 65], color: '#b2ebf2' },
    { label: 'Poor', range: [46, 55], color: '#80deea' },
    { label: 'Passable', range: [41, 45], color: '#4dd0e1' },
    { label: 'Fair', range: [36, 40], color: '#26c6da' },
    { label: 'Good', range: [31, 35], color: '#00bcd4' },
    { label: 'Excellent', range: [-Infinity, 30], color: '#0097a7' }
  ]
};

const Replacement = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('BY');
  const [isColorBoxVisible, setIsColorBoxVisible] = useState(true);
  const [isFlowabilityBoxVisible, setIsFlowabilityBoxVisible] = useState(true);

  const handleMaterialChange = (event) => {
    const material = event.target.value;
    setSelectedMaterial(material);
  };

  const renderSliders = (material) => {
    const properties = data[material].color;
    if (!properties) return null;
    return Object.keys(properties).map((param) => {
      const value = properties[param].value;
      const minValue = properties[param].value - properties[param].error;
      const maxValue = properties[param].value + properties[param].error;
      return (
        <div key={param} className="slider-container">
          <label>{param}</label>
          <Slider
            range
            min={minValue}
            max={maxValue}
            defaultValue={[minValue, maxValue]}
            trackStyle={[{ backgroundColor: 'rgba(75, 192, 192, 0.6)' }]}
            handleStyle={[
              { borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'white' },
              { borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'white' },
            ]}
            disabled
          />
          <div className="values">
            <span>Min: {minValue.toFixed(2)}</span>
            <span>Max: {maxValue.toFixed(2)}</span>
          </div>
        </div>
      );
    });
  };

  const renderFlowability = (material) => {
    const ci = data[material].flowability?.CI;
    const hr = data[material].flowability?.HR;
    const aor = data[material].flowability?.AOR;

    const getFlowabilityLabel = (value, error, levels) => {
      const minValue = value - error;
      const maxValue = value + error;
      return levels.filter(level => (minValue <= level.range[1] && maxValue >= level.range[0]));
    };

    return (
      <div className="flowability-container">
        <div className="flowability-box">
          {ci && (
            <div className="flowability-parameter">
              <h4>CI: {(ci.value - ci.error).toFixed(2)} - {(ci.value + ci.error).toFixed(2)}</h4>
              {flowabilityLevels.CI.map((level, index) => (
                <div
                  key={index}
                  className={`flowability-level ${getFlowabilityLabel(ci.value, ci.error, flowabilityLevels.CI).some(l => l.label === level.label) ? 'selected' : 'blurred'}`}
                  style={{ backgroundColor: level.color }}
                >
                  {level.label}
                </div>
              ))}
            </div>
          )}
          {hr && (
            <div className="flowability-parameter">
              <h4>HR: {(hr.value - hr.error).toFixed(2)} - {(hr.value + hr.error).toFixed(2)}</h4>
              {flowabilityLevels.HR.map((level, index) => (
                <div
                  key={index}
                  className={`flowability-level ${getFlowabilityLabel(hr.value, hr.error, flowabilityLevels.HR).some(l => l.label === level.label) ? 'selected' : 'blurred'}`}
                  style={{ backgroundColor: level.color }}
                >
                  {level.label}
                </div>
              ))}
            </div>
          )}
          {aor && (
            <div className="flowability-parameter">
              <h4>AOR: {(aor.value - aor.error).toFixed(2)} - {(aor.value + aor.error).toFixed(2)}</h4>
              {flowabilityLevels.AOR.map((level, index) => (
                <div
                  key={index}
                  className={`flowability-level ${getFlowabilityLabel(aor.value, aor.error, flowabilityLevels.AOR).some(l => l.label === level.label) ? 'selected' : 'blurred'}`}
                  style={{ backgroundColor: level.color }}
                >
                  {level.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const hasFlowabilityData = (material) => {
    return data[material].flowability && data[material].flowability.CI && data[material].flowability.HR && data[material].flowability.AOR;
  };

  const hasColorData = (material) => {
    return data[material].color;
  };

  return (
    <div className="container mt-5">
      <h2>Material Properties</h2>
      <div className="form-group">
        <label htmlFor="material-select">Choose a material:</label>
        <select
          id="material-select"
          className="form-control"
          onChange={handleMaterialChange}
          value={selectedMaterial}
        >
          <option value="BY">BY</option>
          <option value="SD_BY">SD_BY</option>
          <option value="BAW">BAW</option>
          <option value="BAW10">BAW 10</option>
          <option value="BAW25">BAW 25</option>
          <option value="AW">AW</option>
          <option value="LAW10">LAW 10</option>
          <option value="LAW25">LAW 25</option>
          <option value="K0">K0</option>
          <option value="KAW12_5">KAW (12.5)</option>
          <option value="KAW25">KAW (25)</option>
          <option value="KAW50">KAW (50)</option>
          <option value="PureProso">Pure Proso</option>
          <option value="P0">P0</option>
          <option value="PAW12_5">PAW (12.5)</option>
          <option value="PAW25">PAW (25)</option>
          <option value="PAW50">PAW (50)</option>
          <option value="PAW100">PAW (100)</option>
          <option value="CBF">CBF</option>
        </select>
      </div>
      {
        hasColorData(selectedMaterial) && (
          <div className="collapsible-box">
          <div className="box-header" onClick={() => setIsColorBoxVisible(!isColorBoxVisible)}>
            <h3>Color</h3>
            <FontAwesomeIcon icon={isColorBoxVisible ? faChevronUp : faChevronDown} />
          </div>
          {isColorBoxVisible && (
            <div className="property-box">
              {renderSliders(selectedMaterial)}
            </div>
          )}
        </div>

        )
      }

      
      {hasFlowabilityData(selectedMaterial) && (
        <div className="collapsible-box">
          <div className="box-header" onClick={() => setIsFlowabilityBoxVisible(!isFlowabilityBoxVisible)}>
            <h3>Flowability</h3>
            <FontAwesomeIcon icon={isFlowabilityBoxVisible ? faChevronUp : faChevronDown} />
          </div>
          {isFlowabilityBoxVisible && renderFlowability(selectedMaterial)}
        </div>
      )}
    </div>
  );
};

export default Replacement;
