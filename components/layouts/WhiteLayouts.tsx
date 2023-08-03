import { FC, PropsWithChildren } from 'react'


export const WhiteLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '40px',
        borderRadius: '5px',
    }}>
        <h3>White-Layout</h3>
        <div>
          {children}  
        </div>

    </div>
  )
}
