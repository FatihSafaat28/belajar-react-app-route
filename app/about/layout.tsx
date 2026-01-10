export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>ABOUT</div>
      {children}
    </div>
  );
}
