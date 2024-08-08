import { useGLTF } from '@react-three/drei';


export default function Poster() {
  const modelPoster =  useGLTF('../models/posters.glb');
  
  return (
    <>
    <group>
        <primitive scale={4} position={[-14, 0.5, 8]} rotation-y={Math.PI * 0.50}    object={modelPoster.scene} />
    </group>
    
    </>
  );
}
