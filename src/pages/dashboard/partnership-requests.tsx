import Head from "next/head"
import Link from "next/link"
import { useState } from "react"



interface PartnershipRequest {
    submittedBy: {
        name: string,
        email: string,
    },
    message: string,
    documents: string[],
}

const request: PartnershipRequest = {
    submittedBy: {
        name: "Mugisha Genia",
        email: "mugishagenia@gmail.com"
    },
    message: "I would like to partner with you guys. I have a small hospital and I would like to use your system to manage my patients.",
    documents: [
        'business-registration.pdf',
        'certificate-of-incorporation.pdf',
    ]
}

export default function Doctors() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Head>
                <title>D Treat | Partnership requests</title>
            </Head>
            <div
            >
                <div className="sm:flex sm:items-center pb-3">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold leading-6 text-gray-900">Partnership Requests</h1>
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
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0">
                                            submitted by
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left  font-semibold text-gray-900">
                                            Message
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left font-semibold text-gray-900">
                                            Documents
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left  font-semibold text-gray-900">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {
                                        new Array(10).fill(request).map((request, index) => (
                                            <tr key={index} className="">
                                                <td className="td  ">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <div className=" font-medium text-gray-900">
                                                                {request.submittedBy.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {request.submittedBy.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="td px-0 text-gray-600 max-w-md">{request.message}</td>
                                                <td className="td px-0 text-gray-600 max-w-md">
                                                    <ul className="flex space-y-2 py-2 flex-col">
                                                        {
                                                            request.documents.map((document, index) => (
                                                                <li key={index}>
                                                                    <a href="#" className="text-blue-600 hover:underline bg-gray-100 p-1 rounded-lg">{document}</a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </td>
                                                <td className="td px-0 text-gray-600 max-w-md space-x-2">
                                                    <button onClick={() => setShowModal(true)} className="text-blue-600 hover:underline bg-gray-100 p-1 rounded-lg">Accept</button>
                                                    <button onClick={() => setShowModal(true)} className="text-red-600 hover:underline bg-gray-100 p-1 rounded-lg">Reject</button>
                                                    <Link href={`mailto:${request.submittedBy.email}`}>
                                                        <button className="text-blue-600 hover:underline bg-gray-100 p-1 rounded-lg">Contact Individual</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}