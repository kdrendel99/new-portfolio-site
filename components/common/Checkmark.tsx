import React from 'react';

const Checkmark: React.FC<{}> = ({
}) => {
    return (
      <div className={`flex justify-center items-center`}>
        <svg width="26" height="22" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.2221 2.1979C24.0581 1.2859 25.3881 2.6159 24.5521 3.5279C19.9161 8.77189 15.2421 13.9399 10.5681 19.1459C10.3401 19.4119 10.1121 19.6399 9.88409 19.9059C9.54209 20.2859 8.89609 20.2479 8.55409 19.9059C6.19809 17.6639 3.84209 15.3839 1.48609 13.1419C0.612089 12.3059 1.94209 10.9379 2.81609 11.8119C4.94409 13.8259 7.03409 15.8399 9.16209 17.8919C13.8741 12.6479 18.5481 7.44189 23.2221 2.1979Z"  stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
    </div>
    );
};

export default Checkmark;