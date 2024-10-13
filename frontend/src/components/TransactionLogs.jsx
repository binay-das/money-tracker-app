import DeleteIcon from '@mui/icons-material/Delete';

export default function TransactionLogs({ transactions, setTransactions }) {
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/transaction/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTransactions((prevTransactions) =>
                    prevTransactions.filter(
                        (transaction) => transaction._id !== id
                    )
                );

            } else {
                console.error('Failed to delete transaction');
            }

        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    const formatAmount = (amount) => {
        const symbol = amount > 0 ? '+' : '-';
        const absAmount = Math.abs(amount);
        return `${symbol}₹${absAmount}`;
    };

    return (
        <div className="transactions">
            {transactions.map((transaction) => (
                <div className="transaction" key={transaction._id}>
                    <div className="transaction-details">
                        <div className="first">
                            <div className="name">{transaction.name}</div>
                            <div
                                className="amount"
                                style={{ color: transaction.amount > 0 ? '#0bb822' : 'red' }}
                            >
                                {formatAmount(transaction.amount)}
                            </div>
                        </div>

                        <div className="second">
                            <div className="description">{transaction.description}</div>
                            <div className="date">
                                {new Date(transaction.dateTime).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                    <DeleteIcon
                        sx={{
                            cursor: 'pointer',
                        }}
                        onClick={() => handleDelete(transaction._id)}
                    />
                </div>
            ))}
        </div>
    );
}
