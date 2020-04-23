import React from 'react'

export default function UserList(props) {
    let { name, age, sex, id } = props.data;
    return (
        <>
            <div className="media" onClick={() => { props.showAddressOnClick(id) }}>

                <div className="media-body">
                    <h5 className="mt-0">{name}</h5>
                    <p>{sex}.{age}</p>
                </div>
            </div>

        </>
    )
}
