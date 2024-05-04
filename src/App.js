import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';



const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  //alerts
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  //WarningAlert
  useEffect(() => {
    let infoText;
    if (navigator.onLine) {
      infoText = ""
    } else {
      infoText = "You are currently offline. Please check your internet connection.";
    }
    setWarningAlert(infoText);
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}

      </div>

      <h1>MyApp</h1>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} />
      <NumberOfEvents currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert} />
       <div className='charts-container'>
        <EventGenresChart events={events}/>
      <CityEventsChart allLocations={allLocations}
        events={events} />
        </div>
      <EventList events={events} />
    </div>
  );
}

export default App;
