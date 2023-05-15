import { useEffect, useState } from "react"

import {FaSortAmountDownAlt, FaBtc} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'
import {HiUsers} from 'react-icons/hi'

import Header from '../Header'
import Footer from '../Footer'
import Transaction from "../Transaction"

import './index.css'

const Transactions = () => {
  const [transactions, setTransactions] = useState([])

  const fetchUserData = () =>
  fetch("https://bitpay.com/api/rates")
    .then(response => response.json())
    .then(data => setTransactions(data));

    useEffect(() => {
      fetchUserData()
    }, [])


  return(
  <>
    <Header pageTitle='Transactions' />
    <div className="main-product-sections">
      <div className='product-container'>
        <div className='big-container-main'>
          <div className='transaction-big-cart-container'>
            <FaSortAmountDownAlt className="" />
            <p>Total Revenues</p>
            <p>$ 2129430</p>

          </div>
          <div className='transaction-big-cart-container'>
            <FaBtc className="" />
            <p>Total Transactions</p>
            <p>1520</p>

          </div>
          <div className='transaction-big-cart-container'>
            <BiLike className="" />
            <p>Total Likes</p>
            <p>1005</p>

          </div>
          <div className='transaction-big-cart-container'>
            <HiUsers className="" />
            <p>Total Users</p>
            <p>10</p>

          </div>
        </div>

        <div className="trainsaction-main-container">
          {transactions.map(transaction => (
              <Transaction transactionData={transaction} key={transaction.code} />
            ))}
        </div>
        <Footer/>
      </div>
    </div>
  </>
)
}

export default Transactions
