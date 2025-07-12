import React from "react"
import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <h1 className="fw-bold text-center py-5">Welcome to the Dashboard</h1>
                    <div className="text-center">
                        <Link to="/" className="p-3 bg-primary text-white under border-1 rounded-1 text-decoration-none">Logout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}