import { Text,Html, Center, Environment, OrbitControls } from '@react-three/drei';
import Main from './Main.jsx';
import '../../styles/index.css'
import Poster from './Poster.jsx';


export default function MainExperience() {

  return (
    <>
        <OrbitControls makeDefault />
      <Environment preset='city' />
      <directionalLight cast position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
        <group >
          <Center>
            <Html position={[-3, -1.5, -8]} center distanceFactor={17} wrapperClass='label'> Switch</Html>
            <Html position={[-3, 0.3, -8]} center distanceFactor={17} wrapperClass='label'> Firewall</Html>
            <Html position={[-3, 1.8, -8]} center distanceFactor={17} wrapperClass='label'> Router</Html>
            <Html position={[-3, 7, -10]} center distanceFactor={17} wrapperClass='label'> Internet</Html>
            <Html position={[1.5, 3.85, -8]} center distanceFactor={17} wrapperClass='label'> Wired Connections (Green)</Html>
            <Html position={[8.5, 3.85, -8]} center distanceFactor={17} wrapperClass='label'> Ethernet Cable</Html>
            <Html position={[3.5, 3, -8]} center distanceFactor={17} wrapperClass='label'> Wireless Connections (Blue)</Html>
            <Html position={[-8, -1.2, -8]} center distanceFactor={17} wrapperClass='label'> Printer</Html>
            <Html position={[-9.8, -1.2, -8]} center distanceFactor={17} wrapperClass='label'> Laptop</Html>
            <Html position={[-16, -1.2, -8]} center distanceFactor={20} wrapperClass='label'> Desktop PC</Html>
            <Html position={[-10, 2, -8]} center distanceFactor={17} wrapperClass='label'> Wifi Access Point</Html>
            <Html position={[9, 2, -8]} center distanceFactor={17} wrapperClass='label'> Wifi Access Point</Html>
            <Html position={[-12, 5, -8]} center distanceFactor={17} wrapperClass='label'> Remote access to databases</Html>
            <Html position={[-8.2, 4.5, -8]} center distanceFactor={17} wrapperClass='label'> VPN</Html>
            <Html position={[14, -2, 6]} center distanceFactor={22} wrapperClass='label'> EFTPOS LOTTO</Html>
            <Html position={[14, -2, 14]} center distanceFactor={22} wrapperClass='label'> EFTPOS Cash Register</Html>
            <Html position={[-14, 1.2, -3]} center distanceFactor={22} wrapperClass='label_places'> Office</Html>
            <Html position={[-3, -3.2, -5]} center distanceFactor={17} wrapperClass='label_places'> Data Cupboard</Html>
            <Html position={[4, 1.2, -3]} center distanceFactor={17} wrapperClass='label_places'> Storage</Html>
            <Html position={[11, 1.2, -3]} center distanceFactor={17} wrapperClass='label_places'> Staff Room</Html>
            <Html position={[14, 1.8, 6]} center distanceFactor={20} wrapperClass='label_places'> Lotto Terminal</Html>
            <Html position={[14, 1.8, 14]} center distanceFactor={20} wrapperClass='label_places'> Cash Register</Html>
         <Main />
         <Poster />
         <Text color= "#6190E6" position={[0, 9, -4]} fontSize={2} font='./AtBriega-Regular.woff'> Eketāhuna Supermarket</Text>

          </Center>
        </group>
    </>
  );
}
