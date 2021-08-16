import React, { useState, useEffect } from "react";
import { Button, Card, Container, Icon, Image } from 'semantic-ui-react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Values from "../interfaces/value";
import axios from "axios";


const ViewCustomer : React.FC<RouteComponentProps<any>> = props => {
    const defaultView: Values[] = []
    const [Info, setInfo]: [Values[], (fetch: Values[]) => void] = useState(defaultView);

    useEffect(() => {
        let url: string = 'http://localhost:5000/getbyid/'+props.match.params.id
        axios.get<Values[]>(url, {
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then(res => {
            console.log("res.data", res.data)
            setInfo(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [props.match.params.id])
    
    console.log("data",Info)
    return (
            <Container textAlign='center'>
                {Info.map((ele, index) => 
                    <Card key = {index}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{ele.Name}</Card.Header>
                            <Card.Meta>
                                <p><span className='date'><Icon name='phone' /> {ele.Phone_Number}</span> </p>
                                <p><span className='date'><Icon name='mail' /> {ele.Email}</span></p>
                            </Card.Meta>
                            <Card.Description>
                                <p> Address: &nbsp; 
                                    {ele.Address.House_Number}, {ele.Address.Street_Name}, {ele.Address.City}, {ele.Address.State}
                                </p>
                            </Card.Description>
                            <Card.Description>
                                <Button>
                                    <Link to={"/clientform/" + ele.Id}>
                                        <Icon.Group>
                                            <Icon link name='user' />
                                            <Icon corner='top left' name='edit' />
                                        </Icon.Group> Edit
                                    </Link>
                                </Button>
                            </Card.Description>
                        </Card.Content>
                    </Card> 
                )}   
            </Container>
    )
}

export default withRouter(ViewCustomer)