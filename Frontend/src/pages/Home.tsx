import React, {useState, useEffect} from 'react';
import {Segment, Header, Dimmer, Loader} from 'semantic-ui-react'

import ClientView from '../components/ClientView';
import '../css/App.css'
import axios from 'axios';
import Values from '../interfaces/value';

// const onSubmit = () =>{
//   console.log("Submit clicked!")
// }

// interface Address {
//   Street_Name: String;
//   House_Number: Number;
//   City: String;
//   State: String;
// }

// interface Values {
//   Id: String;
//   Name: String;
//   Address: Address;
//   Phone_Number: String;
//   Email: String;
// }

const Home:React.FC = () =>{ 
  const defaultView:Values[] = [];
  const [customer, setCustomer]: [Values[], (fetch: Values[]) => void] = useState(defaultView);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
    .get<Values[]>("http://localhost:5000/", {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => {
      setCustomer(response.data);
      setLoading(false)
      console.log(customer)
    })
    .catch(ex => {
      const error =
      ex.response.status === 404
        ? "Resource Not found"
        : "An unexpected error has occurred";
      setError(error);
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
        {loading? 
          <Segment>
            <Dimmer active inverted>
              <Loader inverted content="Loading Data" />
            </Dimmer> 
          </Segment>
          : 
          <Segment>
            <Header as='h1'>LifeRaft Clients</Header>
            <ClientView customer = {customer}/>
          </Segment>
        }  
    </div>
  );
}

export default Home;
