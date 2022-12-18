import React, { useState } from 'react';
import AudioSpectrum from 'react-audio-spectrum'
import audio from '../../assets/audios/1.mp3'

// const onInputChange = (e) => {
//     var sound = document.getElementById('sound');
//     sound.src = URL.createObjectURL(e.target.files[0]);
// }
const getLocalSettings = () => ({
    capColor: localStorage.getItem('capColor') || ' ',
    capHeight: Number(localStorage.getItem('capHeight') || 4),
    meterWidth: Number(localStorage.getItem('meterWidth') || 3),
    meterCount: Number(localStorage.getItem('meterCount') || 512),
    gap: Number(localStorage.getItem('gap') || 5),
    meterColor1: localStorage.getItem('meterColor1') || '#f00',
    meterColor2: localStorage.getItem('meterColor2') || '#0C70FD',
    meterColor3: localStorage.getItem('meterColor3') || '#0CFD70',
})

export default function AudioVisualizer() {

    const [defaultSettings] = useState(getLocalSettings)
    
    const [capColor, setCapColor] = useState(defaultSettings.capColor)
    const [capHeight, setCapHeight] = useState(defaultSettings.capHeight)
    const [meterWidth, setMeterWidth] = useState(defaultSettings.meterWidth)
    const [meterCount, setMeterCount] = useState(defaultSettings.meterCount)
    const [gap, setGap] = useState(defaultSettings.gap)
    const [meterColor1, setMeterColor1] = useState(defaultSettings.meterColor1)
    const [meterColor2, setMeterColor2] = useState(defaultSettings.meterColor2)
    const [meterColor3, setMeterColor3] = useState(defaultSettings.meterColor3)

    return (
        <>
            <div className="App">
       
        <div style={{
          display: 'flex',
        }}>
          <div className="setting-section file">
            {/* <input type="file" id="input" accept="audio/*" onChange={onInputChange} /> */}
            <audio id="sound" src={audio} controls></audio>
          </div>
         
        </div>
        <AudioSpectrum
          id="audio-canvas"
          style={{
            padding: 10
          }}
          height={200}
          width={200}
          audioId={'sound'}
          capColor={capColor}
          capHeight={capHeight}
          meterWidth={meterWidth}
          meterCount={meterCount}
          meterColor={[
            {stop: 0, color: meterColor1},
            {stop: 0.5, color: meterColor2},
            {stop: 1, color: meterColor3}
          ]}
          gap={gap}
        />
      </div>
        </>
    )
}
