const { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } = require('@solana/web3.js')

const connection = new Connection(clusterApiUrl('devnet'))

async function getBalance(publicKey) {
    const address = new PublicKey(publicKey)
    const balance = await connection.getBalance(address)

    // console.log(`The balance of ${publicKey} is ${balance}`)

    return balance
}

function computeBalanceToSol(balance) {
    return balance / LAMPORTS_PER_SOL
}

module.exports = {
    getBalance,
    computeBalanceToSol
}