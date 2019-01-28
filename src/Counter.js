import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, undo, redo } from './ducks/counter'

class Counter extends Component {
    render() {
        const { increment, decrement, undo, redo, currentValue } = this.props
        return (
            <div className='app'>
                <section className='counter'>
                    <h1 className='counter__current-value'>{currentValue}</h1>
                    <div className='counter__button-wrapper'>
                        <button
                            className='counter__button increment-one'
                            onClick={() => increment(1)}>
                            +1
                        </button>
                        <button
                            className='counter__button increment-five'
                            onClick={() => increment(5)}>
                            +5
                        </button>
                        <button
                            className='counter__button decrement-one'
                            onClick={() => decrement(1)}>
                            -1
                        </button>
                        <button
                            className='counter__button decrement-five'
                            onClick={() => decrement(5)}>
                            -5
                        </button>
                        <br />
                        <button className='counter__button undo' onClick={undo}>
                            Undo
                        </button>
                        <button className='counter__button redo' onClick={redo}>
                            Redo
                        </button>
                    </div>
                </section>
                <section className='state'>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(
    mapStateToProps,
    { increment, decrement, undo, redo }
)(Counter)
