export function Footer(){
  return (
    <footer className="border-t">
      <div className="py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Personal Budget. All rights reserved.</p>
      </div>
    </footer>
  )
}