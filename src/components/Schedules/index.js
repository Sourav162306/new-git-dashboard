import { useEffect, useState } from "react"
import ScheduleItem from "../ScheduleItem"

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Schedules = () => {
  const [schedule, setSchedule] = useState([])

  const fetchUserData = () =>
  fetch("https://api.tvmaze.com/schedule/web?date=2020-05-29")
    .then(response => response.json())
    .then(data => setSchedule(data));

    useEffect(() => {
      fetchUserData()
    }, [])


  return(
  <>
    <Header pageTitle='Schedules' />
    <div className="main-product-sections">
      <div className='product-container'>
        {/* <p>Hello Schedules</p> */}
        <div className="schedule-main-container">
            {schedule.map(sched => (
              <ScheduleItem scheduleData={sched} key={sched.id} />
            ))}
        </div>
        <Footer/>
      </div>
    </div>
  </>
  )
}

export default Schedules
