import useRequests from "@/auth/useRequests";
import Loader from "@/components/Loader";
import EmptyState from "@/components/states/emptyState";
import LoadingState from "@/components/states/loadingState";
import Head from "next/head";
import Link from "next/link";

export default function Doctors() {
    const { requests, isLoading, approveRequest, rejectRequest, approvingRequest, rejectingRequest } = useRequests();

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

                {(requests && requests.length > 0) && <div className="mt-8 flow-root p-3 rounded-lg min-h-[70vh]"
                    style={{
                        borderTop: "0.2px solid #D9D9D9",
                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
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
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0">
                                            Contacts
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
                                        requests && requests.map((request, index) => (
                                            <tr key={index} className="">
                                                <td className="td px-0 text-gray-600 max-w-md">{request.fullName}</td>
                                                <td className="td ">
                                                    <div className="flex flex-col">
                                                        <div className=" font-medium text-gray-900">
                                                            {request.email}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {request.phoneNumber}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="td px-0 text-gray-600 max-w-md">{request.message}</td>
                                                <td className="td px-0 text-gray-600 max-w-md">
                                                    <a href="#" className="text-blue-600 hover:underline bg-gray-100 p-1 rounded-lg">{request.proofOfOwnership.filename}</a>
                                                </td>
                                                <td className="td px-0 text-gray-600 max-w-md space-x-2">
                                                    <button disabled={approvingRequest ? true : false} onClick={() => approveRequest(request)} className="text-blue-600 hover:underline bg-gray-100 p-1 rounded-lg">{approvingRequest === request ? <Loader green /> : "Accept"}</button>
                                                    <button onClick={() => rejectRequest(request)} className="text-red-600 hover:underline bg-gray-100 p-1 rounded-lg">{rejectingRequest === request ? <Loader green /> : "Reject"}</button>
                                                    <Link href={`mailto:${request.email}`}>
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
                </div>}
                {isLoading && <LoadingState message="fetching requests ..." />}
                {requests?.length === 0 && <EmptyState message="No Active Requests!" />}
            </div>
        </>
    )
}