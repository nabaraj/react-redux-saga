import React from 'react'

export default function UserList(props) {
    let { name, age, sex, id } = props.data;
    return (
        <>
            <div className="row" onClick={() => { props.showAddressOnClick(id) }}>

                <div className="col">
                    <h5>{name}</h5>
                </div>
                <div className="col">
                    <h5>{age}</h5>
                </div>
                <div className="col">
                    <h5>{sex}</h5>
                </div>
            </div>

        </>
    )
}
