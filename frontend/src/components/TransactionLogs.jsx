import DeleteIcon from '@mui/icons-material/Delete';

export default function TransactionLogs({ transactions }) {
    
    return (
        <div className="transactions">
            {transactions.map((transaction) => (
                <div className="transaction" key={transaction._id} >
                    <div className='transaction-details'>
                        <div className="first">
                            <div className="name">{transaction.name}</div>
                            <div
                                className="amount"
                                // style={{ color: transaction.amount > 0 ? '#4eed63' : 'red' }}
                                style={{ color: transaction.amount > 0 ? '#0bb822' : 'red' }}
                            >
                                &#8377;{transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}</div>
                        </div>

                        <div className="second">
                            <div className="description">{transaction.description}</div>
                            <div className="date">{new Date(transaction.dateTime).toLocaleDateString()}</div>
                        </div>
                    </div>
                    <DeleteIcon
                        sx={{ 
                            cursor: 'pointer'                        
                        }}
                    />
                </div>
            ))}
        </div>
    );
}