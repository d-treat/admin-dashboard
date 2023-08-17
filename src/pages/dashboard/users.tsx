import { Button } from "@/components/Button";
// import { useUsers } from "@/hooks/useUsers";
import Head from "next/head";



export default function Users() {
  // const [_showAdduser, setShowAddUser] = useRecoilState(showAddUserModalAtom);
  // const { users, isLoading } = useUsers();

  return (
    <>
      <Head>
        <title>d-treat | Registered users</title>
      </Head>
      <div className="">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users we have including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              // onClick={() => setShowAddUser(true)}
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
