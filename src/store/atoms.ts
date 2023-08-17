import { INumberRequest, IPackage, IUser } from '@/types'
import { atom } from 'recoil'

export const showAddUserModalAtom = atom({
  key: 'showAddUser',
  default: false,
})

export const showDeletAccountAtom = atom({
  key: 'showDeletAccount',
  default: false,
})

export const showSuspendAccountAtom = atom({
  key: 'showSuspendAccount',
  default: false,
})

// email of account we want to suspende
export const accountToSuspendAtom = atom<IUser | null>({
  key: 'accountToSuspend',
  default: null,
})

export const accountToDeleteAtom = atom<IUser | null>({
  key: 'accountToDelete',
  default: null,
})

export const showClearHistoryAtom = atom({
  key: 'showClearHistory',
  default: false,
})

export const SelectedOverViewNavigation = atom({
  key: 'SelectedOverViewNavigation',
  default: 'All',
})

export const showNewCallModalAtom = atom({
  key: 'showNewCallModal',
  default: false,
})

export const showOrderNumberModalAtom = atom({
  key: 'showOrderNumberModal',
  default: false,
});

export const showGenerateNumberAtom = atom({
  key: "showGenerateNumber",
  default: false
})

export const showAddPackageModalAtom = atom({
  key: 'showAddPackageModal',
  default: false,
})

export const packageToDeleteAtom = atom<IPackage | null>({
  key: 'packageToDelete',
  default: null
});

export const showDeletePackageModalAtom = atom({
  key: 'showDeletePackageModal',
  default: false,
});

export const showEditPackageModalAtom = atom({
  key: 'showEditPackageModal',
  default: false,
});

export const packageToEditAtom = atom<IPackage | null>({
  key: 'packageToEdit',
  default: null
});

export const showBuyPackageModalAtom = atom({
  key: 'showBuyPackageModal',
  default: false,
});

export const packageToBuyAtom = atom<IPackage | null>({
  key: 'packageToBuy',
  default: null
});

export const showAddMinutesModalAtom = atom({
  key: 'showAddMinutesModal',
  default: false,
});

export const userToAddMinutesAtom = atom<IUser | null>({
  key: 'userToAddMinutes',
  default: null
});

export const showCreateTicketModalAtom = atom({
  key: 'showCreateTicketModal',
  default: false,
});

export const showTicketDetailsModalAtom = atom({
  key: 'showTicketDetailsModal',
  default: false,
});

export const ticketDetailsAtom = atom<{ title: string, body: string, response?: string } | null>({
  key: 'ticketDetails',
  default: null,
});

export const showAnswerTicketModalAtom = atom<{
  show: boolean, ticket: {
    id: string, body: string, response?: string
  }
} | null>({
  key: "showAnswerTicket",
  default: null
});

export const showChangePasswordModalAtom = atom({
  key: 'showChangePasswordModal',
  default: false,
});

export const showDeleteOwnAccountModalAtom = atom({
  key: 'showDeleteAccountModal',
  default: false,
});

export const showAssignNumberModalAtom = atom<{
  show: boolean, request: INumberRequest
} | null>({
  key: 'showAssignNumberModal',
  default: null,
});