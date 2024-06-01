const fs = require('fs');

const transactions = JSON.parse(fs.readFileSync('./src/transactions.json', 'utf-8'));

function findDuplicateTransactions(transactions = []) {
    transactions.sort((a, b) => new Date(a.time) - new Date(b.time));
    
    const duplicates = [];
    const groupedTransactions = {};

    // Group transactions by identical fields
    transactions.forEach(transaction => {
        const key = `${transaction.sourceAccount}-${transaction.targetAccount}-${transaction.amount}-${transaction.category}`;
        if (!groupedTransactions[key]) {
            groupedTransactions[key] = [];
        }
        groupedTransactions[key].push(transaction);
    });

    // Find duplicates within each group
    for (const key in groupedTransactions) {
        const group = groupedTransactions[key];
        const groupDuplicates = [];
        for (let i = 0; i < group.length - 1; i++) {
            if (new Date(group[i + 1].time) - new Date(group[i].time) <= 60000) { // Check if the two transactions are within a minute
                groupDuplicates.push(group[i]);
            }
        }
        if (groupDuplicates.length > 0) {
            groupDuplicates.push(group[groupDuplicates.length]); // Add last checked transaction
            duplicates.push(groupDuplicates);
        }
    }

    return duplicates;
}

const result = findDuplicateTransactions(transactions);
console.log(JSON.stringify(result, null, 2));
