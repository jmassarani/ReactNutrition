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
        // this.state.current = (extractNutritionInfo(userQuery))
        // const data = extractNutritionInfo(userQuery)
        // extractNutritionInfo(userQuery).map(f => {
        //     console.log(this.state.current)
        //     return <FoodView food={f} />
        // })
        console.log('submitting')
        // console.log(data)
        // this.setState({current: data.then(f => f.map(f => {
        //     // console.log(this.state.current)
        //     return f
        // }))})
        // apiCall('2 eggs')
        const extractNutritionInfo = async (query) => {
            const relevantInfo = ['nf_calories', 'nf_carbohydrates', 'serving_qty', 'nf_protein', 'nf_cholesterol', 'nf_sugars', 'nf_total_carbohydrate', 'photo', 'food_name', 'nf_total_fat']
            const response = await apiCall(query);
            console.log(response)
            const allFood = response
            this.setState({current: allFood.map(food => {
                return <FoodView key={food.food_name} food ={pick(food, relevantInfo)} />;
              })})
            }
            
          
          
        // const resolvedData = data.then(f => f.map(f => {
        //     // console.log(this.state.current)

        //     return <FoodView food={f} />
        // }))
        // this.setState({ current: resolvedData })
        // // forEach(data, f => {
        // //         // console.log(this.state.current)
        // //         console.log(f)
        // // return this.render( <FoodView food={f} /> )})



        // // this.state.query = '';
        // console.log(this.state.current)
        extractNutritionInfo(userQuery)
    }
    handleClearForm() {
    }

    render() {
        const flag = this.state.current
        return (
            <Container>
                <Form onSubmit={this.handleFormSubmit}>
                    <legend>Nutrition</legend>
                    <Input value={this.state.query} onChange={e => this.setState({ query: e.target.value })}
                        name="query" label="Enter your last meal here" placeholder="Use natural language, ex: 2 eggs and a piece of toast" />
                    <Button color="primary" disabled={this.state.query === ''} type="submit" variant="raised">Submit</Button>
                </Form>
               
                {/* {this.state.current ? this.state.current.then(f => {
                    console.log(f)
                    f.map(g => 
                         (<FoodView food={g} />)
                    )
                }) : console.log('FAIL')}} */}
                {this.state.current}

            </Container>

        );
    }
}

export default FormContainer;
