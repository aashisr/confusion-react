import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        //Must be called to access 'this'
        super(props);

        console.log("Constructor of  dish detail componennt");
    }

    render() {
        const dish = this.props.dish;

        if (dish) {
            //Return a comment
            const comment = dish.comments.map(comment => {
                return (
                    <div key={comment.id}>
						<ul className="list-unstyled">
							<li>{comment.comment}</li>
							<li>
								-- {comment.author}, 
								{new Intl.DateTimeFormat("en-FI", {year: "numeric", month: "long", day: "2-digit"})
								.format(new Date(comment.date))}
							</li>
						</ul>
                    </div>
                );
            });

            return (
                <div className="row">
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card className="p-1">
                            <h4>Comments</h4>

                            {comment}
                        </Card>
                    </div>
                </div>
            );
        } else {
            //Return empty div
            return <div />;
        }
    }
}

export default DishDetail;
