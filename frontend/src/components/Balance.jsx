export default function Balance({ transactions }) {
    let balance = 0;
    for (const transaction of transactions) {
        balance += transaction.amount;
    }
    return <h1>Balance: &#8377; {balance}</h1>;
}