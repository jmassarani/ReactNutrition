import React, { Component } from 'react';

/* Import Components */
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button'
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container'
// import extractNutritionInfo from '../api'
import FoodView from './FoodView'
import { pick } from 'lodash'
import apiCall from '../api'

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            previous: {},
            current: false,

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    /* This life cycle hook gets executed when the component mounts */

    handleFormSubmit(e) {
        e.preventDefault()
        const userQuery = e.target.query.value;
        
        
        const extractNutritionInfo = async (query) => {
            const relevantInfo = ['nf_calories', 'nf_carbohydrates', 'serving_qty', 'nf_protein', 'nf_cholesterol', 'nf_sugars', 'nf_total_carbohydrate', 'photo', 'food_name', 'nf_total_fat', 'serving_unit', 'serving_weight_grams']
            const response = await apiCall(query);
            const allFood = response
            this.setState({current: allFood.map(food => {
                return <FoodView key={food.food_name} food ={pick(food, relevantInfo)} />;
              })})
            }
            
        extractNutritionInfo(userQuery)
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
               
                
                {this.state.current}

            </Container>

        );
    }
}

export default FormContainer;
