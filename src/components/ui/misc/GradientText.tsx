type TextGradientProps = {
  children: React.ReactNode,
  from?: string
  via?: string
  to?: string
}

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || 'from-purple-700'
  const via = props.via || 'via-blue-500'
  const to = props.to || 'to-green-400'

  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
    >
      {props.children}
    </span>
  )
}