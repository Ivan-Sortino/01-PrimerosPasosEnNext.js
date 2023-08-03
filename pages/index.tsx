import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayouts } from '../components/layouts/MainLayouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayouts>
      <h1>Home Page</h1>
        <h1 className={'title'}>
          {/*  <a href='/about'>About</a> */}
          Ir a <Link href='/about'>
            About
          </Link>
        </h1>
          
          <p className={'decription'}>
            Get started by editing{' '}
            <code className={'code'}>pages/indes.jsx</code>
          </p>
    </MainLayouts>
  );
}
