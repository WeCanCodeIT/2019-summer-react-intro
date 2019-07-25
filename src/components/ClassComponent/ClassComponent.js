import React from 'react'

import styles from './ClassComponent.module.css'

class ClassComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            author: {},
            count: 0
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/authors/1')
            .then(res => res.json())
            .then(author => {
                this.setState({ author })
            })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    isGreaterThanZero() {
        return this.state.count > 0;
    }

    render() {
        const { firstName, lastName } = this.state.author
        return (
            <>
                <h2>{`${firstName} ${lastName}`}</h2>
                <button className={styles.button} onClick={this.decrement}>-</button>
                <span style={{ color: this.isGreaterThanZero() ? 'green' : 'red' }}>{this.state.count}</span>
                <button className={styles.button} onClick={this.increment}>+</button>
            </>
        )
    }

}

export default ClassComponent