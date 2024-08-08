import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import { AnimationMixer} from 'three';


export default function Main() {
  const modelMain =  useGLTF('../models/supermarket.glb');
  const mixer = useRef(null);

  useEffect(() => {
    if (Main && modelMain.animations.length) {
      mixer.current = new AnimationMixer(modelMain.scene);
      const action = mixer.current.clipAction(modelMain.animations[0]);
      action.play();
    }
  }, [modelMain]);

  return (
    <>
    <group>
        <primitive scale={1} position={[0, -4, 1.5]}   object={modelMain.scene} />
    </group>
    
    </>
  );
}
