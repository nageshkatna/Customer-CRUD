import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import {Grid, Segment, Header, Icon, Menu, Table} from 'semantic-ui-react';

interface Address {
    Street_Name: String;
    House_Number: Number;
    City: String;
    State: String;
}

interface Values {
Id: String;
Name: String;
Address: Address;
Phone_Number: String;
Email: String;
}

interface Props {
    customer: Values[];
    pages: any;
    handleDelete: (id:String) => void;
    setPageNumber: (pageNumber: Number) => void;
}


const AllCustomer: React.FC<Props & RouteComponentProps<any>> = ({customer, handleDelete, pages, setPageNumber}) => {
    return(
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Customer</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customer.map((ele, index) =>
            <Table.Row key = {index}>
              <Table.Cell>
                <Header as='h4' image>
                  <Icon name='user outline' size='huge' />
                  <Header.Content>
                    {ele.Name}
                    <Header.Subheader>{ele.Email}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Segment>
                  <Grid columns={3} relaxed='very'>
                    {/*View */}
                  <Grid.Column>
                      <Link to={"/clientview/" + ele.Id}>
                        <Icon.Group  size='large'>
                          <Icon link name='user' />
                          <Icon corner='top left' name='list alternate' />
                        </Icon.Group>
                      </Link>
                    </Grid.Column>
                    {/* Update */}
                    <Grid.Column>
                      <Link to={"/clientform/" + ele.Id}>
                        <Icon.Group  size='large'>
                          <Icon link name='user' />
                          <Icon corner='top left' name='edit' />
                        </Icon.Group>
                      </Link>
                    </Grid.Column>
                    {/* Delete and View */}
                    <Grid.Column>
                      <Icon.Group  size='large' onClick = {()=> handleDelete(ele.Id)}>
                        <Icon link name='user' />
                        <Icon corner='top left' name='close' />
                      </Icon.Group>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>  

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Link to={"/clientform/"}>
                    <Icon.Group  size='large'>
                      <Icon link name='user' />
                      <Icon corner='top left' name='add' />
                    </Icon.Group>
                  </Link>
                </Menu.Item>
                { pages.map((pageIndex:number) =>
                  <Menu.Item as='a' key={pageIndex} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</Menu.Item>
                )}
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    
)}

export default withRouter(AllCustomer);