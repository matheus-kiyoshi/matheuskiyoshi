import Introduction from './Introduction'
import Me from './Me'

export default function Cover() {
  return (
    <div className="flex flex-col lg:flex-row gap-40 justify-between items-center">
      <Me />
      <Introduction />
    </div>
  )
}
