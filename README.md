# TransactionCleaner

A Node.js application to identify and sort duplicate transactions from a given set of transaction data. This service reads transaction data from a JSON file, identifies duplicates based on specified criteria, and outputs the results.

## Example

Find all transactions that have the same `sourceAccount`, `targetAccount`, `category`, `amount`, and the time difference between each consecutive transaction is less than 1 minute.

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/TransactionCleaner.git
    ```
2. Navigate to the project directory:
    ```bash
    cd TransactionCleaner
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Usage

1. Add your transactions to the `src/transactions.json` file.

2. Run the service:
    ```bash
    npm start
    ```