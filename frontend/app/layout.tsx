
export const metadata = {
  title: "MVW Store",
  description: "Bespoke Storefront"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container py-10">
          <header className="mb-10 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">MVW Store</h1>
            <nav className="space-x-4">
              <a className="btn" href="/">Home</a>
              <a className="btn" href="/divisions">Divisions</a>
              <a className="btn" href="/cart">Cart</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
