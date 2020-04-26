import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsers } from './../actions/actionCreators';
import { bindActionCreators } from 'redux';
import UserList from './UserList';
import UserAddress from './UserAddress';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserAddress: [],
            currentId: ""
        }
        this.showAddress = this.showAddress.bind(this);
    }
    componentDidMount() {
        this.props.getUsers()
    }
    showAddress(id) {
        console.log('click ', id);
        let currentUser = this.props.allUser.filter((item) => {
            return item.id === id
        });
        console.log(currentUser);
        this.setState({
            currentUserAddress: currentUser,
            currentId: id
        })
    }
    genarateTable(allUser) {
        return <div className="table-responsive"><table className="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Profile Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            {allUser.map((item, index) => <UserList data={item} key={item.name} showAddressOnClick={this.showAddress} currentId={this.state.currentId}></UserList>)}
        </table></div>
    }
    render() {
        let { allUser } = this.props;
        return (
            <div className="row">
                <div className="col-md-6 userList">
                    {allUser.length > 0 ?
                        this.genarateTable(allUser) : "Loading"}
                </div>
                <div className="col-md-6 userAddress offset-md-6 top-fixed">
                    {this.state.currentUserAddress.length > 0 ? <UserAddress user={this.state.currentUserAddress[0]}></UserAddress> : (<p>Click on list item to view address</p>)}
                </div>
            </div>
        )
    }
}

// export default connect()(Grid);
const mapStateToProps = (state) => {
    return { allUser: state.userData.allUser }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
