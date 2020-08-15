import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Chart(props) {
  return (
    <Svg width={120} height={60} viewBox="0 0 120 60">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#e7e7e7"
        d="M87.6 1.9h2.45v57.05H87.6V1.9zm9.65 0h2.45v57.05h-2.45V1.9zm9.6.2h2.5v56.85h-2.5V2.1zm9.65-.2h2.45v57.05h-2.45V1.9zM77.95 4.05h2.5V59h-2.5V4.05zm-9.6.95h2.45v53.9h-2.45V5z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#8A05BE"
        d="M58.7 6.35h2.5v52.6h-2.5V6.35zM39.45 59V10.35h2.45V59h-2.45zm-28.9-34.35h2.5v34.3h-2.5v-34.3zm-9.6 1.2H3.4V59H.95V25.85zM29.8 11.8h2.5V59h-2.5V11.8zm-9.6 11.75h2.45v35.4H20.2v-35.4zM49.1 9.9h2.45V59H49.1V9.9z"
      />
    </Svg>
  );
}

export default Chart;
