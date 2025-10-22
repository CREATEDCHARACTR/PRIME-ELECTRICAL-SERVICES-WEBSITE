import React, { useEffect } from 'react';

const POCKETSUITE_WIDGET_ID = 'ps-booking-widget';
const POCKETSUITE_SCRIPT_ID = 'ps-widget-script';
const POCKETSUITE_SCRIPT_SRC = 'https://pocketsuite.io/widget.js';
const POCKETSUITE_BUSINESS_ID = 'prime-electrical-services-colorado';

const PocketSuiteWidget: React.FC = () => {
  useEffect(() => {
    // Check if the script is already added
    if (document.getElementById(POCKETSUITE_SCRIPT_ID)) {
      // Potentially re-initialize widget if needed, PocketSuite's script should handle this
      return;
    }

    const script = document.createElement('script');
    script.id = POCKETSUITE_SCRIPT_ID;
    script.src = POCKETSUITE_SCRIPT_SRC;
    script.async = true;

    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      const existingScript = document.getElementById(POCKETSUITE_SCRIPT_ID);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      id={POCKETSUITE_WIDGET_ID}
      data-business-id={POCKETSUITE_BUSINESS_ID}
      style={{ minHeight: '800px' }} // Set a min-height to prevent layout shift while widget loads
    >
      {/* PocketSuite widget will be rendered here by the script */}
    </div>
  );
};

export default PocketSuiteWidget;
