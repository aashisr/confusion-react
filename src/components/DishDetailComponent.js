import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

//Functional component

//User defined components always start with capital letters
function RenderDish({dish}) {
    return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name} width="100%" />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments){
		//Return a comment
		const commentsJSX = comments.map(comment => {
			return (
				<div key={comment.id}>
					<ul className="list-unstyled">
						<li>{comment.comment}</li>
						<li>
							-- {comment.author}, &nbsp;
							{new Intl.DateTimeFormat("en-FI", {
								year: "numeric",
								month: "long",
								day: "2-digit"
							}).format(new Date(comment.date))}
						</li>
					</ul>
				</div>
			);
		});
	
		return (
			<div className="col-12 col-md-5 m-1">
				<Card className="p-1">
					<h4>Comments</h4>
					{commentsJSX}
				</Card>
			</div>
		);
		
	} else {
		return <div />
	}
}

const DishDetail = props => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    } else {
        //Return empty div
        return <div />;
    }
};

export default DishDetail;
