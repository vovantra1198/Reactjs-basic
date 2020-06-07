import React, { PropTypes } from 'react';
import { Modal,ModalHeader, ModalBody, ModalFooter,Input, InputGroup, Label, Table, Button, FormGroup } from 'reactstrap';
import axios from 'axios';
class User extends React.Component {
  state = {
    users: [],
    newuserdata: {
      name: '',
      age: '',
      createdAt: ''
    },
    edituserdata:{
      id: '',
      name: '',
      age: '',
      createdAt: ''
    },
    show: false,
    showedit: false,
  }
  componentWillMount(){
    this._refreshUsers();
  }
  toggleNewModal(){
    this.setState({
      show: ! this.state.show
    })
  }
  handleClose(){
    this.setState({
      show: false,
      showedit:false  })
  }
  Adduser(){
    axios.post('https://5eb91678bb17460016b32e84.mockapi.io/users', this.state.newuserdata)
        .then((response)=>{
          let {users} = this.state;
          users.push(response.data);
          this.setState({
            users,
            show: false,
            newuserdata: {
            name: '',
            age: '',
            createdAt: ''
          }
          })
        })
  }
  editUser(id, name, age, createdAt){
    this.setState({
      edituserdata: {id, name, age, createdAt},  showedit: !this.state.showedit
    })
  }
  updateUser(){
    let {name, age, createdAt} = this.state.edituserdata;
    axios.put('https://5eb91678bb17460016b32e84.mockapi.io/users/'+this.state.edituserdata.id, {
      name, age, createdAt
    }).then((response)=>{
        this._refreshUsers();
        this.setState({
          showedit: !this.state.showedit
        })
      })
  }
  _refreshUsers(){
    axios.get('https://5eb91678bb17460016b32e84.mockapi.io/users')
         .then((response)=> {
          this.setState({
            users: response.data
          })
         })

  }
  deleteUser(id){
    axios.delete('https://5eb91678bb17460016b32e84.mockapi.io/users/'+id).then((response)=>{
      this._refreshUsers()
    })
  }
  render(){
    const users = this.state.users.map((user)=>{
      return (
        <tr key={user.id}>
          <th>{user.id}</th>
          <th>{user.name}</th>
          <th>{user.age}</th>
          <th>{user.createdAt}</th>
          <th>
            <Button color="success" size="sm" className= "mr-2" onClick={this.editUser.bind(this, user.id, user.name, user.age, user.createdAt)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteUser.bind(this, user.id)}>Delete</Button>
          </th>
        </tr>
      )
    });
    return (
      <div className="w-75 mx-auto">
        <h2>User</h2>
        <Button color="primary" className="my-3" onClick={this.toggleNewModal.bind(this)}>Add User</Button>
        <Modal isOpen={this.state.show} toggle={this.toggleNewModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewModal.bind(this)}>add user</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="name" value={this.state.newuserdata.name} onChange={(e)=>{
                let {newuserdata} = this.state;
                newuserdata.name = e.target.value;
                this.setState({newuserdata});
              }}/>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number" min="1" name="age" id="age" placeholder="age" value={this.state.newuserdata.age} onChange={(e)=>{
                let {newuserdata} = this.state;
                newuserdata.age = e.target.value;
                this.setState({newuserdata});
              }}/>
            </FormGroup>
            <FormGroup>
              <Label for="createdAt">CreateAt</Label>
              <Input type="datetime-local" name="createdAt" id="createdAt" placeholder="createdAt" value={this.state.newuserdata.createdAt} onChange={(e)=>{
                let {newuserdata} = this.state;
                newuserdata.createdAt = e.target.value;
                this.setState({newuserdata});
              }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.Adduser.bind(this)}>Add User</Button>{' '}
            <Button color="secondary" onClick={this.handleClose.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.showedit} toggle={this.editUser.bind(this)}>
          <ModalHeader toggle={this.editUser.bind(this)}>Edit user</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="name" value={this.state.edituserdata.name} onChange={(e)=>{
                let {edituserdata} = this.state;
                edituserdata.name = e.target.value;
                this.setState({edituserdata});
              }}/>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number" min="1" name="age" id="age" placeholder="age" value={this.state.edituserdata.age} onChange={(e)=>{
                let {edituserdata} = this.state;
                edituserdata.age = e.target.value;
                this.setState({edituserdata});
              }}/>
            </FormGroup>
            <FormGroup>
              <Label for="createdAt">CreateAt</Label>
              <Input type="datetime-local" name="createdAt" id="createdAt" placeholder="createdAt" value={this.state.edituserdata.createdAt} onChange={(e)=>{
                let {edituserdata} = this.state;
                edituserdata.createdAt = e.target.value;
                this.setState({edituserdata});
              }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateUser.bind(this)}>Edit User</Button>
            <Button color="secondary" onClick={this.handleClose.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>CreateAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default User;
