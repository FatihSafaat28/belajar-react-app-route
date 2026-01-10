interface ContactIdProps {
  params: Promise<{ id: string }>;
}
export default async function contactID({ params }: ContactIdProps) {
  const { id } = await params;
  return <div>Contact {id}</div>;
}
