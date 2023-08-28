import axios from '@/axios.config';
import { IRequest } from '@/types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';


export default function useRequests() {
    const [approvingRequest, setApprovingRequest] = useState<IRequest | null>(null);
    const [rejectingRequest, setRejectingRequest] = useState<IRequest | null>(null);
    const { data, error, mutate } = useSWR('/requests', async () => {
        try {
            const { data } = await axios.get('/requests');
            return data.requests as IRequest[];
        } catch (error) {
            console.log(error);
            return []
        }
    });

    const approveRequest = async (request: IRequest) => {
        setApprovingRequest(request);
        try {
            const { data } = await axios.put(`/requests/approve/${request._id}`,);
            if (data.success) {
                toast.success("Request approved");
                mutate();
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setApprovingRequest(null);
        }
    }

    const rejectRequest = async (request: IRequest) => {
        setRejectingRequest(request);
        try {
            const { data } = await axios.put(`/requests/reject/${request._id}`,);
            if (data.success) {
                toast.success("Request rejected");
                mutate();
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setRejectingRequest(null);
        }
    }
    
    return {
        requests: data,
        isLoading: !error && !data,
        isError: error,
        mutate,
        approvingRequest,
        rejectingRequest,
        approveRequest,
        rejectRequest
    }
}
