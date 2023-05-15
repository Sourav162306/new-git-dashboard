import {FaSortAmountDownAlt, FaBtc} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'
import {HiUsers} from 'react-icons/hi'
import { useAuth0 } from '@auth0/auth0-react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

let validUser;
let validEmail;

const data = [
  {
    group_name: "Week 1",
    Guest: 400,
    Users: 420,
  },
  {
    group_name: "Week 2",
    Guest: 180,
    Users: 200,
  },
  {
    group_name: "Week 3",
    Guest: 450,
    Users: 300,
  },
  {
    group_name: "Week 4",
    Guest: 300,
    Users: 450,
  },
]

const data1 = [
  {
    count: 55,
    language: "Basic Tees",
  },
  {
    count: 31,
    language: "Custom Short Pants",
  },
  {
    count: 14,
    language: "Super Hoodies",
  },
]

const DataFormatter = (number) => {
  if (number > 1000) {
    return `${(number / 1000).toString()}k`
  }
  return number.toString()
}

const Dashboard = () => {
  const {user} = useAuth0()


  if(user !== undefined){
      validUser = user.name
      validEmail = user.email
  }
  
  

  return(
    <>
      <Header pageTitle='Dashboard' />
      <div className="main-product-sections">
        <div className='product-container'>
          <p>Hello <strong>{validUser}</strong>, Welcome to dashboard.</p>
          <p>You have registered with <strong>{validEmail}</strong> this emailid.</p>
          <div className='big-container-main'>
            <div className='big-cart-container'>
              <FaSortAmountDownAlt className="" />
              <p>Total Revenues</p>
              <p>$ 2129430</p>
  
            </div>
            <div className='big-cart-container'>
              <FaBtc className="" />
              <p>Total Transactions</p>
              <p>1520</p>
  
            </div>
            <div className='big-cart-container'>
              <BiLike className="" />
              <p>Total Likes</p>
              <p>1005</p>
  
            </div>
            <div className='big-cart-container'>
              <HiUsers className="" />
              <p>Total Users</p>
              <p>10</p>
  
            </div>
          </div>
          {/* new */}
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{
                top: 5,
              }}
            >
              <XAxis
                dataKey="group_name"
                tick={{
                  stroke: "gray",
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={DataFormatter}
                tick={{
                  stroke: "gray",
                  strokeWidth: 0,
                }}
              />
              <Legend
                wrapperStyle={{
                  padding: 30,
                }}
              />
              <Bar dataKey="Guest" name="Guest" fill="#1f77b4" barSize="20%" />
              <Bar dataKey="Users" name="Users" fill="#fd7f0e" barSize="20%" />
            </BarChart>
          </ResponsiveContainer>
          {/* new */}
          <p className='product-paragraph'>Top Products</p>
          <div className='lower-part-container'>
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  cx="70%"
                  cy="40%"
                  data={data1}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="40%"
                  outerRadius="70%"
                  dataKey="count"
                >
                  <Cell name="Basic Tees" fill="#fecba6" />
                  <Cell name="Custom Short Pants" fill="#b3d23f" />
                  <Cell name="Super Hoodies" fill="#a44c9e" />
                </Pie>
                <Legend
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
            <div className='lower-right-side-container'>
              <p>Today's schedule</p>
              <div>
                <div className='lower-right-cart-container'>
                    <p>Meeting with the suppliers from kuta ball</p>
                    <p>14:00 - 15:00</p>
                    <p>At Worli</p>
                </div>
                <div className='lower-right-cart-container'>
                    <p>Meeting with the suppliers from kuta ball</p>
                    <p>14:00 - 15:00</p>
                    <p>At Worli</p>
                </div>
                <div className='lower-right-cart-container'>
                    <p>Meeting with the suppliers from kuta ball</p>
                    <p>14:00 - 15:00</p>
                    <p>At Worli</p>
                </div>
              </div>
            </div>
          </div>
          {/* new */}
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
