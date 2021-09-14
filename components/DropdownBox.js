export default function DropdownBox(props) {
    return (
      <div className="bg-pink-400 border rounded-2xl border-white shadow-xl min-w-full">
        {props.children}
      </div>
    )
  }