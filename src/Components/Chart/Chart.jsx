import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Chart = () => {
    const data = [
        {name: 'Page A', uv: 400, pv: 2100, amt: 2400},
        {name: 'Page B', uv: 500, pv: 2800, amt: 2400},
        {name: 'Page C', uv: 600, pv: 2700, amt: 2400},
        {name: 'Page D', uv: 400, pv: 400, amt: 2400},
        {name: 'Page E', uv: 400, pv: 200, amt: 2400},
        {name: 'Page F', uv: 800, pv: 2500, amt: 2400},
        {name: 'Page G', uv: 200, pv: 3000, amt: 2400},
        {name: 'Page H', uv: 100, pv: 2600, amt: 2400},

    ];
    return (
        <div>
              {/* <LineChart width={800} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              </LineChart> */}

              <BarChart width={730} height={450} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
               </BarChart>
        </div>
    );
};

export default Chart;