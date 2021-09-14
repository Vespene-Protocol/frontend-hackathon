import Wallet from './Wallet'

export default function Header() {
  return (
    <div className="flex justify-between py-2 px-4">
      <p>Vespene</p>
      <Wallet />
    </div>
  )
}