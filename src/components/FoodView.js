import Container from 'muicss/lib/react/container'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const FoodView = (food) => {
    food = food.food;
    return (
        <Card style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img width="200px" height="180px" variant="top" src={food['photo']['thumb']} />
            <Card.Body>
                <Card.Title>{food.food_name}</Card.Title>
                <Card.Text>
                    Servings: {food.serving_qty} {food.serving_unit} ({food.serving_weight_grams} g)
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Calories: {food.nf_calories} </ListGroupItem>
                <ListGroupItem>Total Fat {food.nf_total_fat}</ListGroupItem>
                <ListGroupItem>Carbohydrates {food.nf_total_carbohydrate}</ListGroupItem>
                <ListGroupItem>Sugars {food.nf_sugars}</ListGroupItem>
                <ListGroupItem>Protein {food.nf_protein}</ListGroupItem>

            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        
    )
}
export default FoodView