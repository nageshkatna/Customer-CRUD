import React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Select,
    Segment,
} from 'semantic-ui-react';
import Values from '../interfaces/value'


interface Props {
  data: Values[];
  handleChange: (e:React.ChangeEvent<HTMLInputElement>)=> void;
  handleSubmit: () => void;
  handleChangeAddress: (e:React.ChangeEvent<HTMLInputElement>)=> void;
  handleDropDown: (e:any, data: any) => void;
  setf: (fetch: Values[]) => void;
}
const options = [
  { key: 'NL', text: 'Newfoundland and Labrador	', value: 'NL' },
  { key: 'PE', text: 'Prince Edward Island	', value: 'PE' },
  { key: 'NS', text: 'Nova Scotia', value: 'NS' },
  { key: 'NB', text: 'New Brunswick', value: 'NB' },
  { key: 'QC', text: 'Quebec', value: 'QC' },
  { key: 'ON', text: 'Ontario', value: 'ON' },
  { key: 'MB', text: 'Manitoba', value: 'MB' },
  { key: 'SK', text: 'Saskatchewan', value: 'SK' },
  { key: 'AB', text: 'Alberta', value: 'AB' },
  { key: 'BC', text: 'British Columbia', value: 'BC' },
  { key: 'YT', text: 'Yukon', value: 'YT' },
  { key: 'NT', text: 'Northwest Territories', value: 'NT' },
  { key: 'NU', text: 'Nunavut', value: 'NU' }
]

const CustomerForm: React.FC<Props> = ({data, handleChange, handleChangeAddress, handleSubmit, handleDropDown}) => {
  return(
    <Segment>
      {data.map((ele , index) => 
        <Form onSubmit={handleSubmit} key={index}>
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              name = 'Name'
              label='Full name'
              defaultValue = {ele.Name}
              placeholder='Full name'
              onChange = {handleChange}
            />
            <Form.Field
              control={Input}
              label='Phone Number'
              name = 'Phone_Number'
              defaultValue = {ele.Phone_Number}
              placeholder='Phone Number'
              onChange = {handleChange}
            />
            <Form.Field
              control={Input}
              label='Email'
              name = 'Email'
              type="email"
              defaultValue = {ele.Email}
              placeholder='Email'
              onChange = {handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              label='Street Name'
              field="Address"
              name = 'Street_Name'
              defaultValue = {ele.Address.Street_Name}
              placeholder='Street Name'
              onChange = {handleChangeAddress}
            />
            <Form.Field
              control={Input}
              label='House Number'
              name = 'House_Number'
              defaultValue = {ele.Address.House_Number? ele.Address.House_Number: ""}
              placeholder='House Number'
              onChange = {handleChangeAddress}
            />
            <Form.Field
              control={Input}
              label='City'
              name = 'City'
              defaultValue = {ele.Address.City}
              placeholder='City'
              onChange = {handleChangeAddress}
            />
            <Form.Field
                control={Select}
                label='State/Province'
                name = 'State'
                options={options}
                defaultValue = {ele.Address.State}
                placeholder='State/Province'
                onChange ={handleDropDown}
              />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Segment>
)}

export default CustomerForm