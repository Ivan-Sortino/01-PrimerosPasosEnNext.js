import { MainLayouts } from '../../components/layouts/MainLayouts'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayouts>
      <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a <Link href='/'>Home</Link>
        </h1>
          
          <p className={'decription'}>
            Get started by editing{' '}
            <code className={'code'}>pages/Contact.jsx</code>
          </p>
    </MainLayouts>
  )
}
