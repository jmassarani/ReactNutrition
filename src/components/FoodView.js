import Container from 'muicss/lib/react/container'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
// const relevantInfo = ['nf_calories', 'serving_qty', 'nf_protein', 'nf_cholesterol', 'nf_sugars', 'nf_total_carbohydrate', 'photo', 'food_name']
// const mapping = {
//     nf_calories: 'calories',
//     nf_total_carboydrate: 'total carbohydrates',
//     nf_protein: 'protein',
//     nf_cholesterol: 'cholesterol',
//     nf_sugars: 'sugar'

// }
const FoodView = (food) => {
    return (
        <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body>
                <Card.Title>{food.food_name}</Card.Title>
                <Card.Text>
                    Servings: {food.serving_qty}
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Calories: {food.nf_calories} </ListGroupItem>
                <ListGroupItem>Total Fat {food.nf_total_fat}</ListGroupItem>
                <ListGroupItem>Carbohydrates {food.nf_total_carbohydrate}</ListGroupItem>
                <ListGroupItem>Sugars {food.sugars}</ListGroupItem>
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