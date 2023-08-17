import { Button } from "@/components/Button";
import EmptyState from "@/components/states/emptyState";
import LoadingState from "@/components/states/loadingState";
import UsersTable from "@/components/users/UsersTable";
// import { useUsers } from "@/hooks/useUsers";
import { showAddUserModalAtom } from "@/store/atoms";
import { IPerson } from "@/types";
import Head from "next/head";
import { useRecoilState } from "recoil";

export const people: IPerson[] = [
  { firstName: 'Lindsay', lastName: 'Walton', email: 'lindsay.walton@example.com', joinedAt: '2020-01-07', phoneNumber: '+908501234567' },
  {
    firstName: 'Courtney', lastName: 'Henry', email: 'courtneyhen@gmail.com', joinedAt: '2020-01-07', phoneNumber: '+908509876543'
  }
]

export default function Users() {
  const [_showAdduser, setShowAddUser] = useRecoilState(showAddUserModalAtom);
  // const { users, isLoading } = useUsers();

  return (
    <>
      <Head>
        <title>Santsuonono | Registered users</title>
      </Head>
      <div className="">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users  you have created including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              onClick={() => setShowAddUser(true)}
              color="black"
              variant="solid"
              className="rounded-md"
            >
              Add user
            </Button>
          </div>
        </div>
        {/* {(users && users.length > 0) && <UsersTable people={users} />}
        {users?.length === 0 && <EmptyState message="No users found" />}
        {isLoading && <LoadingState message="Loading users ..." />} */}
      </div>
    </>
  )
}
