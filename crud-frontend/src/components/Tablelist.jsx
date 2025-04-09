import React from 'react'

const Tablelist = () => {

    const clients = [
        {id: 1, name: "John Doe", email: "Johndoe@gmail.com", job: "Developer", rate: "100", isActive: true},
        {id: 2, name: "John1 Doe", email: "John1doe@gmail.com", job: "Developer", rate: "100", isActive: false},
        {id: 3, name: "John2 Doe", email: "John2doe@gmail.com", job: "Developer", rate: "100", isActive: true},
    ]
  return (
    <>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody className="">
            {/* row 1 */}
            {clients.map((client) => (
            <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                    <button className={`btn rounded-full w-20 ${client.isActive ? 'btn-primary' : 'btn-outline'}`}>
                        {client.isActive ? 'Active' : 'Inactive'}
                    </button>
                </td>
            </tr>
            ))}
            
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Tablelist