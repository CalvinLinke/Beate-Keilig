'use client'

interface TruckBandProps {
  /** Fahrtdauer in Sekunden. Default: 7 */
  speed?: number
}

function Wheel({ left, top }: { left: number; top: number }) {
  return (
    <>
      {/* Außenring */}
      <div
        style={{
          position: 'absolute',
          left,
          top,
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#1C201E',
        }}
      />
      {/* Felge */}
      <div
        style={{
          position: 'absolute',
          left: left + 8,
          top: top + 8,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#39443d',
        }}
      />
      {/* Speichen – drehen sich */}
      <div
        className="animate-kspin"
        style={{
          position: 'absolute',
          left: left + 8,
          top: top + 8,
          width: 20,
          height: 20,
          animation: 'kspin 0.7s linear infinite',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 9,
            top: 1,
            width: 2,
            height: 18,
            background: '#7fae90',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 1,
            top: 9,
            width: 18,
            height: 2,
            background: '#7fae90',
          }}
        />
        {/* Rote Nabe */}
        <div
          style={{
            position: 'absolute',
            left: 7.5,
            top: 7.5,
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#C8202A',
          }}
        />
      </div>
    </>
  )
}

function Truck() {
  return (
    <div style={{ position: 'relative', width: 260, height: 132 }}>

      {/* Auspuff-Rohr */}
      <div style={{ position: 'absolute', left: 150, top: 4, width: 5, height: 12, background: '#1C201E' }} />

      {/* Wölkchen 1 */}
      <div
        style={{
          position: 'absolute', left: 140, top: 2, width: 10, height: 10,
          background: '#b9c4bb', borderRadius: '50%',
          animation: 'kpuff 1.8s ease-out infinite',
        }}
      />
      {/* Wölkchen 2 */}
      <div
        style={{
          position: 'absolute', left: 140, top: 2, width: 8, height: 8,
          background: '#cdd6cd', borderRadius: '50%',
          animation: 'kpuff 1.8s ease-out 0.9s infinite',
        }}
      />

      {/* Kofferaufbau grün */}
      <div style={{ position: 'absolute', left: 6, top: 14, width: 156, height: 64, background: '#14572F' }} />
      {/* Roter Streifen unten am Aufbau */}
      <div style={{ position: 'absolute', left: 6, top: 70, width: 156, height: 8, background: '#C8202A' }} />

      {/* Keil-Chevron auf dem Aufbau */}
      <div
        style={{
          position: 'absolute', left: 13, top: 23, width: 16, height: 16,
          background: '#fff',
          clipPath: 'polygon(0 0, 58% 0, 100% 50%, 58% 100%, 0 100%, 42% 50%)',
        }}
      />

      {/* KEILIG Schriftzug */}
      <div
        style={{
          position: 'absolute', left: 37, top: 18,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800, fontSize: 27, lineHeight: 1,
          letterSpacing: '0.04em', color: '#fff',
        }}
      >
        KEILIG
      </div>

      {/* Slogan */}
      <div
        style={{
          position: 'absolute', left: 13, top: 47, width: 144,
          fontStyle: 'italic', fontWeight: 500, fontSize: 9.5,
          lineHeight: 1.15, color: 'rgba(255,255,255,0.92)',
        }}
      >
        &bdquo;Haben Sie es eilig? Dann fahren Sie es mit Keilig.&ldquo;
      </div>

      {/* Fahrerhaus */}
      <div
        style={{
          position: 'absolute', left: 162, top: 34, width: 62, height: 44,
          background: '#14572F',
          clipPath: 'polygon(0 0, 62% 0, 100% 42%, 100% 100%, 0 100%)',
        }}
      />
      {/* Frontscheibe */}
      <div
        style={{
          position: 'absolute', left: 168, top: 40, width: 30, height: 15,
          background: '#cfe0d8',
          clipPath: 'polygon(0 0, 86% 0, 100% 80%, 0 100%)',
        }}
      />
      {/* Roter Streifen Fahrerhaus */}
      <div style={{ position: 'absolute', left: 162, top: 64, width: 62, height: 6, background: '#C8202A' }} />

      {/* Scheinwerfer */}
      <div style={{ position: 'absolute', left: 218, top: 66, width: 6, height: 6, background: '#ffd24a' }} />
      {/* Stoßstange */}
      <div style={{ position: 'absolute', left: 224, top: 72, width: 6, height: 10, background: '#1C201E' }} />

      {/* Chassis-Querbalken */}
      <div style={{ position: 'absolute', left: 8, top: 78, width: 216, height: 6, background: '#1C201E' }} />

      {/* Hinterrad */}
      <Wheel left={36} top={80} />
      {/* Vorderrad */}
      <Wheel left={170} top={80} />
    </div>
  )
}

export default function TruckBand({ speed = 7 }: TruckBandProps) {
  return (
    <div
      style={{
        position: 'relative',
        height: 150,
        background: '#fff',
        borderTop: '1px solid #e3e8e3',
        borderBottom: '1px solid #e3e8e3',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Straße: gestrichelte Mittellinie */}
      <div
        style={{
          position: 'absolute', left: 0, right: 0, bottom: 25,
          height: 1, background: '#dde4dd',
        }}
      />
      <div
        style={{
          position: 'absolute', left: 0, right: 0, bottom: 22,
          height: 3,
          background: 'repeating-linear-gradient(90deg, #c4cfc6 0 18px, transparent 18px 34px)',
        }}
      />

      {/* Fahrender LKW */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: -280,
          animation: `kdrive ${speed}s linear infinite, kbob 1.2s ease-in-out infinite`,
        }}
      >
        <Truck />
      </div>
    </div>
  )
}
