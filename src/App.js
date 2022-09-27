import React from 'react';
import './App.css';
import QRCode from 'qrcode'
import saveSvgAsPng from 'save-svg-as-png';
import SvgQR from './svgQR';
function App() {

  const [qrImageString, setQrImageString] = React.useState('');

  const [imageOptions] = React.useState({
    scale: 2,
    encoderOptions: 1,
    backgroundColor: '#fff',
  });

  async function GenerateQr(event) {
    event.preventDefault();
    const qrImageString = await QRCode.toDataURL(event.target.value,{
      width: 1200,
    });
    
    setQrImageString(qrImageString);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <div> */}
        <div style={{
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          margin: 20,
        }}>

<input type={'text'} onChange={GenerateQr}></input>
<button onClick={() => saveSvgAsPng.saveSvgAsPng(
  document.getElementById('QR'),
  `QR.png`,
  imageOptions,
)}>Save</button>
</div>

        <SvgQR qrImageString={qrImageString} />
       
      </header>
    </div>
  );
}

export default App;
