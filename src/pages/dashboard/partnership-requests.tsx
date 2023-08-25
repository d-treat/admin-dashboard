import Head from "next/head"
import { useState } from "react"


export default function Doctors() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Head>
                <title>D Treat | Partnership requests</title>
            </Head>
            <div
            >
                {/* {showModal && <AddNewDoctor />} */}
                <div className="sm:flex sm:items-center pb-3 border-b">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold leading-6 text-gray-900">Doctors</h1>
                        <p className="mt-2  text-gray-700">
                            those are the partnership requests submitted by different people.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flow-root p-3 rounded-lg"
                    style={{
                        borderTop: "0.2px solid #D9D9D9",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                    }}
                >
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            submitted by
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Title
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Role
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}