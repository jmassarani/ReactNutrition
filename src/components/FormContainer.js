import React, { Component } from 'react';

/* Import Components */
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button'
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container'
import extractNutritionInfo from '../api'
import FoodView from './FoodView'
import {forEach} from 'lodash'

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            previous: {},
            current: [],

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    /* This life cycle hook gets executed when the component mounts */

    handleFormSubmit(e) {
        e.preventDefault()
        const userQuery = e.target.query.value;
        // this.state.current = (extractNutritionInfo(userQuery))
        const data = extractNutritionInfo(userQuery)
        // extractNutritionInfo(userQuery).map(f => {
        //     console.log(this.state.current)
        //     return <FoodView food={f} />
        // })
        console.log('submitting')
        console.log(data)
        forEach(data, f => {
                // console.log(this.state.current)
                console.log(f)
        return this.render( <FoodView food={f} /> )})
        


        // this.state.query = '';
    }
    handleClearForm() {
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleFormSubmit}>
                    <legend>Nutrition</legend>
                    <Input value={this.state.query} onChange={e => this.setState({ query: e.target.value })}
                        name="query" label="Enter your last meal here" placeholder="Use natural language, ex: 2 eggs and a piece of toast" />
                    <Button color="primary" disabled={this.state.query === ''} type="submit" variant="raised">Submit</Button>
                </Form>
                {/* {
                    this.state.current.map(f => {
                        console.log(this.state.current)
                        return <FoodView food={f} />
                    })
                } */}
            </Container>

        );
    }
}

export default FormContainer;
