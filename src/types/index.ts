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