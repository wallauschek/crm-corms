export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      <div className="mt-4 text-xl font-bold tracking-wider text-gray-900">
        Carregando...
      </div>
    </div>
  )
}
