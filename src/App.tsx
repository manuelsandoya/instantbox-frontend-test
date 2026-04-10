/**
 * InstantBox challenge: fixed markup — do not change structure or text.
 * Implement styling in src/challenge/weather.css only.
 */
import './challenge/weather.css'

function App() {
  return (
    <div className="weather-widget">
      <div className="weather-header">
        <div className="location">
          <span className="city">San Francisco</span>
          <span className="country">US</span>
        </div>
        <div className="date-label">Friday, Mar 13</div>
      </div>

      <div className="weather-main">
        <div className="temp-block">
          <span className="temp-value">64</span>
          <span className="temp-unit">°F</span>
        </div>
        <div className="condition-block">
          <div className="condition-icon">⛅</div>
          <div className="condition-text">Partly Cloudy</div>
        </div>
      </div>

      <div className="weather-stats">
        <div className="stat">
          <span className="stat-label">Humidity</span>
          <span className="stat-value">72%</span>
        </div>
        <div className="stat">
          <span className="stat-label">Wind</span>
          <span className="stat-value">14 mph</span>
        </div>
        <div className="stat">
          <span className="stat-label">UV Index</span>
          <span className="stat-value">3</span>
        </div>
      </div>

      <div className="forecast-row">
        <div className="forecast-day">
          <span className="day-name">SAT</span>
          <span className="day-icon">🌧️</span>
          <span className="day-temp">58°</span>
        </div>
        <div className="forecast-day">
          <span className="day-name">SUN</span>
          <span className="day-icon">☀️</span>
          <span className="day-temp">71°</span>
        </div>
        <div className="forecast-day">
          <span className="day-name">MON</span>
          <span className="day-icon">🌤️</span>
          <span className="day-temp">68°</span>
        </div>
        <div className="forecast-day active">
          <span className="day-name">TUE</span>
          <span className="day-icon">⛈️</span>
          <span className="day-temp">55°</span>
        </div>
      </div>
    </div>
  )
}

export default App
