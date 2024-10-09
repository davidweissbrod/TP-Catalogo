"use client"
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button';
 
function Router({ children, href }) {
  const router = useRouter()
 
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
 
  return (
    <Button variant='primary' onClick={handleClick}>
      {children}
    </Button>
  )
}

export default Router