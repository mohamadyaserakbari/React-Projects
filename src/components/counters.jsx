import React, { Component } from 'react';
import Counter from './counter';
import {
    Button,
    Container
} from 'reactstrap';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDecrease = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        if (counters[index].value > 0) {
            counters[index].value--;
        } else {
            counters[index].value = 0;
        }
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    render() {
        return (
            <Container>
                <div style={{ float: "right" }}>
                    {this.state.counters.map(counter =>
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onIncrement={this.handleIncrement}
                            onDecrease={this.handleDecrease}
                            onDelete={this.handleDelete}
                        />
                    )}
                </div>
            </Container>
        );
    }
}

export default Counters;