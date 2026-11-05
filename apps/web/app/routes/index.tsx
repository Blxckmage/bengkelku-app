import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Bengkelku</h1>
      <p>Welcome to Bengkelku - Your workshop management system</p>
    </div>
  )
}
