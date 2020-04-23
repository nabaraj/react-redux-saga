import React from 'react'

export default function UserAddress({ user }) {
    return (
        <div className='address-block top-fixed'>
            <div className="add-1">{user.address.city},
            {user.address.street},
            {user.address.suite}</div>
            <div className="add-2">{user.address.zipcode}</div>
        </div>
    )
}
