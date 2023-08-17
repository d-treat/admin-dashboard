import { RecoilState } from "recoil"

export interface ILink {
  name: string
  href: string
  icon: any
  current?: boolean,
  atom?: RecoilState<boolean>
}

export interface IPerson {
  firstName: string
  lastName: string
  email: string
  joinedAt: string
  phoneNumber: string
}


export interface IPhoneNumber {
  _id: string;
  prefix: number
  number: number
  assigned?: boolean,
  price: number,
  createdAt: number
  blocked: boolean
}
export interface IUser {
  _id: string;
  firstName: string
  lastName: string
  email: string
  balance: number;
  walletAddress: string;
  availableCallMins: number;
  phoneNumber?: IPhoneNumber,
  suspended: boolean,
  role: 'admin' | 'client'
  createdAt: string
  updatedAt: string
}

export interface IClientNumber {
  number: string
  type: 'mobile' | 'landline'
  status: 'active' | 'inactive'
  orderedAt: string
  price: number
}

export interface INumberRequest {
  _id: string;
  orderedBy: IUser,
  prefix: number,
  status: "pending" | "completed" | "cancelled",
  createdAt: string
}

export interface ITicket {
  _id: string;
  title: string,
  body: string,
  createdAt: string,
  createdBy: IUser,
  response?: string,
  status: "open" | "closed"
}

export interface ICall {
  from: IPerson
  to: IPerson
  callDuration: string
  startedAt: Date
  status: 'ongoing' | 'ended'
  type?: 'incoming' | 'outgoing'
}

export interface IOrder {
  orderedBy: IPerson
  orderedAt: Date
  status: 'pending' | 'completed' | 'cancelled'
}


export interface IClientOrder {
  expectedPrice: number
  prefix: string
  orderedAt: Date
  status: 'pending' | 'completed' | 'cancelled'
}

export interface IPackage {
  _id: string
  name: string
  price: number
  availableCallMins: number;
  createdAt: string
  updatedAt: string
}

export interface IPurchaseHistory {
  _id: string,
  pkg: IPackage,
  user: IUser,
  createdAt: string,
  updatedAt: string
}