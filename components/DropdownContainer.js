export default function DropdownContainer(props) {
  return (
    <div className="block absolute pt-10 pr-0 z-1000 mb-4 last: mb-0">
        {props.children}
    </div>
  )
}