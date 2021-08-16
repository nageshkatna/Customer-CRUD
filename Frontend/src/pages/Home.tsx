import React, {useState, useEffect} from 'react';
import {Segment, Header, Dimmer, Loader} from 'semantic-ui-react'

import AllCustomer from '../components/AllCustomer';
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

  function fetchData() : void{
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
  }
  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleDelete(id:String) : void{
    console.log(id)
    axios
    .delete<any>("http://localhost:5000/delete/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => {
      // setCustomer(customer);
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
      
      fetchData()
      // console.log(customer)
    })
    .catch(ex => {
      console.log(ex)
    });
  }

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
            <Header as='h1'>LifeRaft All Clients </Header>
            <AllCustomer customer = {customer} handleDelete = {handleDelete}/>
          </Segment>
        }  
    </div>
  );
}

export default Home;
