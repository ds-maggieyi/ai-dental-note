import PatientDetailClient from './PatientDetailClient'

// Generate static params for all patient IDs
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  return <PatientDetailClient patientId={params.id} />
}
