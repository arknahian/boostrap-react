import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import './News.css';

const News = (props) => {
    const news = props.news;
    const clickHandler = props.clickHandler;
    return (
        <div>
        {
            news.map(x => {
        return <Container>
            <Row>
          <Col sm={6} className="card">
          <Card>
                <Card.Img variant="top" src={x.urlToImage} />
                <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>
                    {x.description}
                </Card.Text>
                <Button onClick={() => clickHandler(props.news)} className="btn btn-primary">Read More</Button>
                </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
        

            })
        }

        </div>

    );
};

export default News;