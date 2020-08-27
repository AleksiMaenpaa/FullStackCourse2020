import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {

    return (
        <div>
            <p>{props.section1}</p>

            <p>{props.section2}</p>

            <p>{props.section3}</p>


        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.Main}
            </h1>
        </div>
    )
}
const Content = () => {
    return (
        <div>
            <Part section1={App.part1} />

            <Part section2={App.part2} />

            <Part section3={App.part3} />

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
            <Content />
            <Total sum={exercises1 + exercises2 + exercises3} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
