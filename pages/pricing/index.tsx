import { MainLayouts } from "../../components/layouts/MainLayouts"
import Link from "next/link"

export default function Pricing() {
  return (
    <MainLayouts>
        <h1>Pricing Page</h1>
        <h1 className={'title'}>
          {/*  <a href='/about'>About</a> */}
          Ir a <Link href='/'>
            Home
          </Link>
        </h1>
          
          <h2>Tarea 1 </h2>
          <p className={'decription'}>
            Get started by editing{' '}
            <code className={'code'}>pages/Pricing.jsx</code>
          </p>
    </MainLayouts>
  )
}
