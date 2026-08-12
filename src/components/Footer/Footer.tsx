export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="wrap footer-inner">
        <span>© {year} Md. Rakibul Hasan</span>
        <span>Built with React + TypeScript.</span>
      </div>
    </footer>
  )
}
