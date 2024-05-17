import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 8000;



let kucoin_data_route={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
}


let bybit_data_route={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let mexc_data_route={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let htx_data_route={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let asd_data_route={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let gate_data_route={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};

let kucoin_data_dfyn={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
}


let bybit_data_dfyn={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let mexc_data_dfyn={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let htx_data_dfyn={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let asd_data_dfyn={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};
let gate_data_dfyn={
    "0.3%": 0,
    "0.5%": 0,
    "1%": 0
};

app.use(express.json());

// Define a route to handle proxy requests
app.get('/hello', async (req, res) => {
    res.send('Hare Krishna');
});




const fetchData = async () => {

    //kucoin
    let symbol="ROUTE-USDT"
    let orderbookUrl = `https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol=${symbol}`;
    let tickerUrl = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${symbol}`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.data.bids;
            const lastTradedPrice = parseFloat(tickerData.data.price);

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                        kucoin_data_route[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            
           
            // for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
            //     console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            // }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }


     symbol="DFYN-USDT"
     orderbookUrl = `https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol=${symbol}`;
     tickerUrl = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${symbol}`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.data.bids;
            const lastTradedPrice = parseFloat(tickerData.data.price);

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                        kucoin_data_dfyn[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            
           
            // for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
            //     console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            // }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }


    //mexc

     symbol="ROUTEUSDT"
    orderbookUrl = `https://api.mexc.com/api/v3/depth?symbol=ROUTEUSDT`;
  tickerUrl = `https://api.mexc.com/api/v3/ticker/price?symbol=ROUTEUSDT`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.bids;
            const lastTradedPrice = parseFloat(tickerData.price);

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                       mexc_data_route[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            // Print the results
            // console.log(`Symbol: ${symbol}`);
            // console.log(`Last traded price: ${lastTradedPrice.toFixed(6)} USDT`);
            // for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
            //     console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            // }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }

    symbol="DFYNUSDT"
    orderbookUrl = `https://api.mexc.com/api/v3/depth?symbol=DFYNUSDT`;
  tickerUrl = `https://api.mexc.com/api/v3/ticker/price?symbol=DFYNUSDT`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.bids;
            const lastTradedPrice = parseFloat(tickerData.price);

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                       mexc_data_dfyn[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            // Print the results
            // console.log(`Symbol: ${symbol}`);
            // console.log(`Last traded price: ${lastTradedPrice.toFixed(6)} USDT`);
            // for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
            //     console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            // }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }

    //houbi

    symbol="routeusdt"
    orderbookUrl="https://api.huobi.pro/market/depth?symbol=routeusdt&depth=5&type=step0"
    tickerUrl="https://api.huobi.pro/market/trade?symbol=routeusdt"
    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.tick.bids;
            const lastTradedPrice = tickerData.tick.data[0].price;

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };
            // console.log(ranges)

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                
                const quantity = parseFloat(bid[1]);
              
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                       htx_data_route[rangeKey]=totalValues[rangeKey]

                    }
                }
            });
          

            // Print the results
            // console.log(`Symbol: ${symbol}`);
            // console.log(`Last traded price: ${lastTradedPrice.toFixed(6)} USDT`);
            // for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
            //     console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            // }

          
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }

    
    // ascendx

    symbol="ROUTE/USDT"
    orderbookUrl = `https://ascendex.com/api/pro/v1/depth?symbol=ROUTE/USDT`;
    tickerUrl = `https://ascendex.com/api/pro/v1/spot/ticker?symbol=ROUTE/USDT`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.data.data.bids;
            const lastTradedPrice = parseFloat(tickerData.data.close);
            // console.log(lastTradedPrice)

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                       asd_data_route[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            //Print the results
            
            // for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
            //     console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            // }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }


   

    // gate

    symbol="ROUTE_USDT"
    orderbookUrl = `https://api.gateio.ws/api/v4/spot/order_book?currency_pair=ROUTE_USDT`;
    tickerUrl = `https://api.gateio.ws/api/v4/spot/trades?currency_pair=ROUTE_USDT`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.bids;
            const lastTradedPrice = parseFloat(tickerData[0].price);
            console.log(lastTradedPrice)
        

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                       gate_data_route[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            //Print the results
            
            for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
                console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }

    symbol="DFYN_USDT"
    orderbookUrl = `https://api.gateio.ws/api/v4/spot/order_book?currency_pair=DFYN_USDT`;
    tickerUrl = `https://api.gateio.ws/api/v4/spot/trades?currency_pair=DFYN_USDT`;

    try {
        // Make the API requests
        const orderbookResponse = await fetch(orderbookUrl);
        const tickerResponse = await fetch(tickerUrl);

        // Check if the requests were successful
        if (orderbookResponse.ok && tickerResponse.ok) {
            const orderbookData = await orderbookResponse.json();
            const tickerData = await tickerResponse.json();
            const bids = orderbookData.bids;
            const lastTradedPrice = parseFloat(tickerData[0].price);
            console.log(lastTradedPrice)
        

            // Define the ranges
            const ranges = {
                "0.3%": lastTradedPrice * 0.997,
                "0.5%": lastTradedPrice * 0.995,
                "1%": lastTradedPrice * 0.99
            };

            // Calculate the total value within each range
            const totalValues = {
                "0.3%": 0,
                "0.5%": 0,
                "1%": 0
            };

            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const quantity = parseFloat(bid[1]);
                const value = price * quantity;

                for (const [rangeKey, rangeValue] of Object.entries(ranges)) {
                    if (price >= rangeValue) {
                        totalValues[rangeKey] += value;
                       gate_data_dfyn[rangeKey]=totalValues[rangeKey]

                    }
                }
            });

            //Print the results
            
            for (const [rangeKey, totalValue] of Object.entries(totalValues)) {
                console.log(`Total bid value within ${rangeKey} range: ${totalValue.toFixed(2)} USDT`);
            }

            
        } else {
            console.log(`Failed to retrieve data for ${symbol} from the API.`);
        }
    } catch (error) {
        console.log(`Error occurred while making the API request for ${symbol}: ${error}`);
    }


   

    }
fetchData();

const interval = setInterval(fetchData, 3 * 1000);

app.get('/kucoindata',(req,res)=>{
    
    const token=req.query.token;
    if(token=="route")
    res.send(kucoin_data_route)
    else
    res.send(kucoin_data_dfyn)
})
app.get('/bybitdata',(req,res)=>{
    res.send(bybit_data_route)
})

app.get('/mexcdata',(req,res)=>{
    const token=req.query.token;
    if(token=="route")
    res.send(mexc_data_route)
    else
    res.send(mexc_data_dfyn)
})

app.get('/htxdata',(req,res)=>{
    res.send(htx_data_route)
})

app.get('/asddata',(req,res)=>{
    res.send(asd_data_route)
})

app.get('/gatedata',(req,res)=>{
    const token=req.query.token;
    if(token=="route")
    res.send(gate_data_route)
    else
    res.send(gate_data_dfyn)
})





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

