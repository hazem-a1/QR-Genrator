import * as React from 'react';
function SvgQR(props) {
  return (
    <svg id="QR" data-name="Layer 1" viewBox="0 0 600 600" {...props}>
      <image
            width={600}
            height={600}
            xlinkHref={props.qrImageString}
          />
    </svg>
  );
}
const MemoCollectionNewQR = React.memo(SvgQR);
export default MemoCollectionNewQR;
