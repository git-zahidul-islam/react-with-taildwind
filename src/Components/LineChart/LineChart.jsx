// import PropTypes from 'prop-types';
import { Bar, BarChart as LChart, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentScores = [
        { id: 1, student: "Alice", math: 85, bangla: 78, accounting: 92 },
        { id: 2, student: "Bob", math: 72, bangla: 85, accounting: 68 },
        { id: 3, student: "Charlie", math: 90, bangla: 80, accounting: 95 },
        { id: 4, student: "David", math: 78, bangla: 75, accounting: 80 },
        { id: 5, student: "Emma", math: 88, bangla: 90, accounting: 85 },
        { id: 6, student: "Frank", math: 68, bangla: 60, accounting: 72 },
        { id: 7, student: "Grace", math: 95, bangla: 92, accounting: 98 },
        { id: 8, student: "Hannah", math: 82, bangla: 88, accounting: 75 },
        { id: 9, student: "Isaac", math: 75, bangla: 70, accounting: 68 },
        { id: 10, student: "Jack", math: 87, bangla: 85, accounting: 90 }
    ];



    return (
        <div>
            <LChart width={700} height={400} data={studentScores}>
                <XAxis dataKey="math"></XAxis>
                <YAxis dataKey={"math"}></YAxis>
                <Bar dataKey="math" fill='green'></Bar>
                <Bar dataKey={'bangla'} fill='pink'></Bar>
            </LChart>
        </div>
    );
};

LineChart.propTypes = {

};

export default LineChart;