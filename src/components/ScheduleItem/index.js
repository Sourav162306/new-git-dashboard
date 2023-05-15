import './index.css'

const ScheduleItem = props => {
  const {scheduleData} = props
  const {name, season, number, type, airdate, airstamp, runtime} = scheduleData

  return (
    <div className='schedule-card-container'>
        <p className="name">Name: {name}</p>
        <p className="name">Season: {season}</p>
        <p className="name">Number: {number}</p>
        <p className="name">Type: {type}</p>
        <p className="name">Airdate: {airdate}</p>
        <p className="name">Airstamp: {airstamp}</p>
        <p className="name">Runtime: {runtime} Minutes</p>
    </div>
  )
}
export default ScheduleItem