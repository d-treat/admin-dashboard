import { RecoilState } from "recoil"

export interface ILink {
  name: string
  href: string
  icon: any
  current?: boolean,
  atom?: RecoilState<boolean>
}


interface Stats {
  deposits: number
  spent: number
  verifications: number
}

export interface ChartData {
  [key: string]: Stats
}

export interface IFile {
  filename: string
}

export interface IRequest {
  _id: string;
  fullName: string,
  email: string,
  address: string,
  phoneNumber: string,
  message: string,
  proofOfOwnership: IFile,
  status: "pending" | "accepted" | "rejected"
  organization: string
}