const { getBalance, computeBalanceToSol } = require('./index')

describe('getBalance', () => {
    it('should get the balance of a publicKey', async () => {
        const balance = await getBalance('7h5o5Zm1XQ6L6W4k7qYB6X3bZ7yY9dQgW8CgK5Qj9P8T')
        expect(balance).toBeGreaterThanOrEqual(0)
    })
})

describe('computeBalanceToSol', () => {
    it('should compute the balance in Sol', () => {
        const balance = 1000000000
        const balanceInSol = computeBalanceToSol(balance)
        expect(balanceInSol).toBe(1)
    })
})