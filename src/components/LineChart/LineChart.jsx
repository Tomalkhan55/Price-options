import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {


    const studentData = [
        { id: 1, name: "Student 1", mathMarks: 85, physicsMarks: 70, chemistryMarks: 75 },
        { id: 2, name: "Student 2", mathMarks: 78, physicsMarks: 68, chemistryMarks: 80 },
        { id: 3, name: "Student 3", mathMarks: 92, physicsMarks: 85, chemistryMarks: 90 },
        { id: 4, name: "Student 4", mathMarks: 65, physicsMarks: 60, chemistryMarks: 70 },
        { id: 5, name: "Student 5", mathMarks: 80, physicsMarks: 75, chemistryMarks: 82 },
        { id: 6, name: "Student 6", mathMarks: 88, physicsMarks: 82, chemistryMarks: 87 },
        { id: 7, name: "Student 7", mathMarks: 70, physicsMarks: 65, chemistryMarks: 72 },
        { id: 8, name: "Student 8", mathMarks: 95, physicsMarks: 88, chemistryMarks: 93 },
        { id: 9, name: "Student 9", mathMarks: 73, physicsMarks: 70, chemistryMarks: 75 },
        { id: 10, name: "Student 10", mathMarks: 82, physicsMarks: 76, chemistryMarks: 85 }
    ];
    
    

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="chemistryMarks" stroke='yellow'></Line>
                <YAxis></YAxis>
                <XAxis dataKey={"name"}></XAxis>
            </LChart>
        </div>
    );
};

export default LineChart;