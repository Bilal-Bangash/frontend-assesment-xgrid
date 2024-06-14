import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  //   move seconds hand
  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000)

    // clean up
    return () => clearInterval(intervalId)
  }, [])

  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  const anHour = hour * 30
  const anMinute = minute * 6
  const anSecond = second * 6
  const rotate = `rotate(${anHour + anMinute + anSecond}deg)`

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="center" />
        <div
          className="hand hour"
          style={{ transform: `rotate(${hour}deg)` }}
        />
        <div
          className="hand minute"
          style={{ transform: `rotate(${minute}deg)` }}
        />
        <div
          className="hand second"
          style={{ transform: `rotate(${second}deg)` }}
        />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-marker"
            style={{
              transform: `rotate(${i * 30}deg) translate(0, -180px)`,
            }}
          />
        ))}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`minute-marker ${i % 5 === 0 ? 'hour' : ''}`}
            style={{
              transform: `rotate(${i * 6}deg) translate(0, -190px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Clock
