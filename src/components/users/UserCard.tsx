import { accountToDeleteAtom, accountToSuspendAtom, showAddMinutesModalAtom, showDeletAccountAtom, showSuspendAccountAtom, userToAddMinutesAtom } from '@/store/atoms';
import { IUser } from '@/types';
import { constructName } from '@/utils';
import { useRecoilState } from 'recoil';


export default function UserCard({ firstName, lastName, email, createdAt, ...user }: IUser) {
    const [_showDeleteAccount, setShowDeleteAccount] = useRecoilState(showDeletAccountAtom);
    const [_showSuspendAccount, setShowSuspendAccount] = useRecoilState(showSuspendAccountAtom);
    const [_accountToSuspend, setAccountToSuspend] = useRecoilState(accountToSuspendAtom);
    const [_accountToDelete, setAccountToDelete] = useRecoilState(accountToDeleteAtom);
    const [_, setShowAddMinutes] = useRecoilState(showAddMinutesModalAtom);
    const [_u, setUserToAddMinutes] = useRecoilState(userToAddMinutesAtom);

    return (
        <tr className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                {constructName(firstName, lastName)}
            </td>

            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(createdAt).toLocaleDateString()}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.availableCallMins} minutes</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                <button
                    onClick={() => {
                        setAccountToSuspend({ firstName, lastName, email, createdAt, ...user })
                        setShowSuspendAccount(true)
                    }}
                    className="text-orange-400 hover:text-orange-500">
                    {user.suspended ? "Unsuspend Account" : "Suspend Account"}<span className="sr-only">, {firstName + " " + lastName}</span>
                </button>
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                <button
                    onClick={() => {
                        setAccountToDelete({ firstName, lastName, email, createdAt, ...user })
                        setShowDeleteAccount(true)
                    }}
                    className="text-red-600 hover:text-red-700">
                    Delete Account<span className="sr-only">, {constructName(firstName, lastName)}</span>
                </button>
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                <button
                    onClick={() => {
                        setUserToAddMinutes({ firstName, lastName, email, createdAt, ...user });
                        setShowAddMinutes(true);
                    }}
                    className="text-white bg-black/90 px-2 py-1 rounded-md hover:text-white hover:bg-black/80">
                    Add Minutes
                </button>
            </td>
        </tr >
    )
}
