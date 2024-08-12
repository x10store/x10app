import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

interface ModelProps {
    path: string;
    scale: number[];
}

interface GLBViewerProps {
    modelPath: string;
    scale: number[];
    isActive: boolean;
}

const Model = ({ path, scale }: ModelProps) => {
    const gltf = useLoader(GLTFLoader, path);
    return <primitive object={gltf.scene} scale={scale} />;
};

const GLBViewer = ({ modelPath, scale, isActive }: GLBViewerProps) => {
    return (
        <Canvas
            camera={{ position: [20, 20, 20], near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <Suspense fallback={null}>
                <Model path={modelPath} scale={scale} />
            </Suspense>
            {isActive && (
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                />
            )}
        </Canvas>
    );
};

export default GLBViewer;