import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Values from '../interfaces/value';
import CustomerForm from '../components/CustomerForm';
import ResultMessage from '../components/ResultMessage';


const ClientForm: React.FC<RouteComponentProps<any>> = props => {
  
  const defaultView: Values[] = []
  const [form, setForm]: [Values[], (fetch: Values[]) => void] = useState(defaultView);
  const [MessageShow, setMessageShow] = useState<boolean>(false)
  const [Status, setStatus] = useState('')
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    if (props.match.params.id) {
      let url: string = 'http://localhost:5000/getbyid/'+props.match.params.id
      axios.get<Values[]>(url, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        console.log("response.data", response.data)
        setForm(response.data)
        console.log("form",form)
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      setForm([{
        "Id": "",
        "Name":"",
        "Email":"",
        "Address" : {
          "House_Number":NaN,
          "Street_Name":"",
          "City":"",
          "State":"",
        },
        "Phone_Number":""
      }])
    }
  
  }, [props.match.params.id])

  function handleDropDown(e: any, data: any){
    const { name, value } = data;
    console.log(name, value)
    // console.log(e.target.name)
    let Arr= [...form]
    let newArr = Arr.map(item => ({
      ...item, Address:{
      ...item.Address, [name]: value}
    }))
    setForm(
      newArr
    );
  }

  function handleChangeAddress(e:React.ChangeEvent<HTMLInputElement>):void{
    const { name, value } = e.target;
    console.log(name, value)
    // console.log(e.target.name)
    let newArr= form.map(item => ({
      ...item, Address:{
      ...item.Address, [name]: value}
    }))
    setForm(newArr);
  }

  function handleChange(e:React.ChangeEvent<HTMLInputElement>):void{
    const { name, value } = e.target;
    console.log(name, value)
    // console.log(e.target.name)
    let newArr= form.map(item => ({
      ...item, [name]: value
    }))
    setForm(newArr);
  }

  
  function handleSubmit(): void {
    let raw_data = form.map((elem: Values) => ({
      'name': elem.Name,
      'street_name' : elem.Address.Street_Name,
      'house_number': elem.Address.House_Number,
      'city': elem.Address.City,
      'state': elem.Address.State,
      'phone_number': elem.Phone_Number,
      'email': elem.Email
    }))
    // console.log("raw_data")
    var url: string=""
    if(props.match.params.id){
      console.log("Update")
      url = 'http://localhost:5000/update/'+props.match.params.id
    } else {
      console.log("Create")
      url= 'http://localhost:5000/create/'
    }
    
    axios.put<Values[]>(url, raw_data[0])
    .then((response) => {
      console.log("response.data", response)
      setMessageShow(prev => prev =true)
      setStatus(prev => prev ='success')
      setMessage(prev => prev ="Data is updated successfully!!")
      // console.log("form",form)
    })
    .catch((error) => {
      console.log("EROORRRR", error.response.data.error)
      var msg = "An error occured!! " + error.response.data.error.message
      setMessageShow(prev => prev =true)
      setStatus(prev => prev ='negative')
      setMessage(prev => prev = msg)
    })
    
  }
  
  return (
    <div>
      {MessageShow?
        <ResultMessage message={message} status={Status} ></ResultMessage>
        :
        <CustomerForm data = {form} setf = {setForm} handleChange = {handleChange} handleSubmit = {handleSubmit} 
        handleDropDown= {handleDropDown} handleChangeAddress= {handleChangeAddress} />
      }
    </div>
  )
}

export default ClientForm


