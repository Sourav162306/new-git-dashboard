import './index.css'

const Transaction = props => {
  const {transactionData} = props
  const {code, name, rate} = transactionData

  return (
    <div className='transaction-card-container'>
        <p className="code">Code: {code}</p>
        <p className="username">Name: {name}</p>
        <p className="price">Rate: {rate}</p>
    </div>
  )
}
export default Transaction