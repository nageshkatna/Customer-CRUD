import axios from 'axios';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import {
//     Button,
//     Form,
//     Input,
//     Select,
//     Segment,
//   } from 'semantic-ui-react';
import Values from '../interfaces/value'
import CustomerForm from '../components/CustomerForm'

// interface Props {
//   id?: String
// }

// const options = [
//   { key: 'NL', text: 'Newfoundland and Labrador	', value: 'NL' },
//   { key: 'PE', text: 'Prince Edward Island	', value: 'PE' },
//   { key: 'NS', text: 'Nova Scotia', value: 'NS' },
//   { key: 'NB', text: 'New Brunswick', value: 'NB' },
//   { key: 'QC', text: 'Quebec', value: 'QC' },
//   { key: 'ON', text: 'Ontario', value: 'ON' },
//   { key: 'MB', text: 'Manitoba', value: 'MB' },
//   { key: 'SK', text: 'Saskatchewan', value: 'SK' },
//   { key: 'AB', text: 'Alberta', value: 'AB' },
//   { key: 'BC', text: 'British Columbia', value: 'BC' },
//   { key: 'YT', text: 'Yukon', value: 'YT' },
//   { key: 'NT', text: 'Northwest Territories', value: 'NT' },
//   { key: 'NU', text: 'Nunavut', value: 'NU' }
// ]

const ClientForm: React.FC<RouteComponentProps<any>> = props => {
  
  const defaultView: Values[] = []
  const [form, setForm]: [Values[], (fetch: Values[]) => void] = useState(defaultView);
  
  useEffect(() => {
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
  
  }, [props.match.params.id])

  function handleChange(e:React.ChangeEvent<HTMLInputElement>):void{
    const { name, value } = e.target;
    // console.log(name, value)
    let newArr= [...form]
    newArr.map((f: any) => ({
      ...f, [name]: value
    }))

    // let newArr= [...form]
    // console.log(newArr[0])
    // newArr[name] = value;
    console.log("newArr",newArr)
    setForm(newArr)
    console.log("handle",form)
  }
  function handleSubmit(): void {
    let url: string = 'http://localhost:5000/update/'+props.match.params.id
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
  }

  return (
    <CustomerForm data = {form} setf = {setForm} handleChange = {handleChange} handleSubmit = {handleSubmit} />
  )
}

export default ClientForm


