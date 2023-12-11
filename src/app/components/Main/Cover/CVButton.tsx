'use client'

export const CVButton = () => {
  const handleClick = () => {
    alert('Em breve')
  }

  return (
    <button
      className="cursor-pointer text-white bg-violet-600 hover:bg-violet-700 border-2 border-violet-600 shadow-md hover:text-zinc-200 hover:border-violet-700 text-sm focus:ring-4 focus:ring-violet-300 font-medium rounded-lg py-2.5 px-5 flex justify-center items-center"
      onClick={handleClick}
    >
      Download CV
    </button>
  )
}
