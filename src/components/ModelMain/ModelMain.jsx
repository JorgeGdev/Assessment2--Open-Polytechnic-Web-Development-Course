import { Canvas } from '@react-three/fiber';
import MainExperience from './MainExperience';

export default function ModelMain() {

 
  return (
 
    <Canvas 
      camera={{
        
        fov: 75,
        near: 0.1,
        far: 200,
      }}
    >
      <MainExperience />
    </Canvas>

 
    
  );
}