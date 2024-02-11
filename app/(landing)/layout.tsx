export const metadata = {
  title: 'library',
  description: 'Library his N.M Ambition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
