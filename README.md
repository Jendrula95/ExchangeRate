# Currency Exchange Application

## Description
A currency exchange application that uses the external API of the National Bank of Poland (NBP) to fetch current exchange rates. The PLN currency has been manually added by me. The project is written in JavaScript, HTML, and CSS.

## Features
- Fetching current exchange rates from the NBP API.
- Displaying exchange rates in a table.
- Converting currency values based on current exchange rates.

## Technologies
- **JavaScript**: Application logic.
- **HTML**: Page structure.
- **CSS**: Page styling.

## Usage
1. Select the currency you want to convert.
2. Enter the amount to be converted.
3. The application will automatically fetch the current rate from the NBP API and display the converted value.

## API
The application uses the NBP API to fetch exchange rates:
- Endpoint: `http://api.nbp.pl/api/exchangerates/tables/C/`
- Response format: JSON
