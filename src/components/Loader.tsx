import React from 'react'
import {Html,useProgress} from '@react-three/drei'
export const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{fontSize:'14px',color:'#f1f1f1',fontWeight:'800',marginTop:'40px',textAlign:'center'}}>Carregando Imagem,por favor aguarde {progress.toFixed(2)}%</p>
    </Html>
  )
}

