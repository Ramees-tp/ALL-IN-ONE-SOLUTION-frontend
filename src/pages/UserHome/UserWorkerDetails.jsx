import React from 'react'
import UworkerDetails from '../../components/User/UworkerDetails'
import Header from '../../components/User/Header'
import Ufooter from '../../components/User/Ufooter'

function UserWorkerDetails() {
  return (
    <div>
      <div>
      <div className="p-2 bg-black">
        <Header/>
        <UworkerDetails />
        <Ufooter/>
      </div>
    </div>
    </div>
  )
}

export default UserWorkerDetails
