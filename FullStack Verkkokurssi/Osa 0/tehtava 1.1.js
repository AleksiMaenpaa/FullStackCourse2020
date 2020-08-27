import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <h1>
                {props.Main}
            </h1>
        </div>
    )
}
const Content = (props) => {
    return (
        <div>
            <p>
                {props.text1} {props.int1}
                <br />
                {props.text2} {props.int2}
                <br />
                {props.text3} {props.int3}
                <br />
            </p>
        </div>
    )
}
const Total = (props) => {
    return (
        <div>
            <p>
                Number of exercises {props.sum}
            </p>
        </div>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header Main={course} />
            <Content text1={part1} int1={exercises1} text2={part2} int2={exercises2} text3={part3} int3={exercises3} />
            <Total sum={exercises1 + exercises2 + exercises3} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
