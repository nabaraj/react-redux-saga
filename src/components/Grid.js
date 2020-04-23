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
            currentUserAddress: null
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
            currentUserAddress: currentUser
        })
    }
    render() {
        let { allUser } = this.props;
        return (
            <div className="row">
                <div className="col userList">
                    {allUser.length > 0 ?
                        allUser.map((item, index) => <UserList data={item} key={item.name} showAddressOnClick={this.showAddress}></UserList>) : "Loading"}
                </div>
                <div className="col userAddress">
                    {this.state.currentUserAddress && <UserAddress user={this.state.currentUserAddress[0]}></UserAddress>}
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
