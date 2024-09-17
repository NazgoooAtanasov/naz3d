"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import Header from "./Header";
import FileInput from "./FileInput";
import ContentHolder from "./ContentHolder";
import PreviewCard from "./Card";
import { api } from "~/trpc/react";

export function ModelRenderer({ fileUrl }: { fileUrl: string }) {
  const previewer = useRef<HTMLElement>(null);
  const scene = useMemo(() => new THREE.Scene(), []);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>();
  const [controls, setControls] = useState<TrackballControls>();

  useEffect(() => {
    const previewerBox = previewer.current?.getBoundingClientRect();
    const camera = new THREE.PerspectiveCamera(
      75,
      (previewerBox?.width ?? 0 - 12) / (previewerBox?.height ?? 0 - 12),
      0.1,
      1000,
    );
    setCamera(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(1, 1, 1));
    renderer.setSize(
      previewerBox?.width ?? 0 - 12,
      previewerBox?.height ?? 0 - 12,
    );
    previewer.current?.appendChild(renderer.domElement);

    const controls = new TrackballControls(camera, renderer.domElement);
    controls.update();
    setControls(controls);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      previewer.current?.removeChild(renderer.domElement);
    };
  }, [scene]);

  useEffect(() => {
    const stlLoader = new STLLoader();
    stlLoader.load(fileUrl, (geometry: THREE.BufferGeometry) => {
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      const boundingBox = new THREE.Box3().setFromObject(mesh);
      const centerOfObject = new THREE.Vector3();
      boundingBox.getCenter(centerOfObject);

      scene?.clear();
      scene?.add(mesh);

      if (camera && controls) {
        camera.position.set(
          centerOfObject.x,
          centerOfObject.y,
          centerOfObject.z,
        );
        controls.update();
      }
    });
  }, [fileUrl, scene, camera, controls]);

  return <section className="h-full w-full" ref={previewer}></section>;
}

export default function ModelPreviewer() {
  const [fileName, setFileName] = useState<string>("");
  const { data } = api.files.getSignedGetUrl.useQuery(fileName, {
    enabled: !!fileName,
  });

  async function onFileSumit(filename: string) {
    setFileName(filename);
  }

  return (
    <>
      <Header
        head="Preview Your 3D Model"
        description="Upload your STL file and preview it in 3D before placing your order."
      >
        <FileInput onFileSubmitted={onFileSumit} />
      </Header>

      <ContentHolder>
        <div className="w-[600px]">
          <PreviewCard
            header="3D Model Preview"
            description="Your uploaded 3D model will be displayed here."
          >
            {data ? <ModelRenderer fileUrl={data.url} /> : <></>}
          </PreviewCard>
        </div>
      </ContentHolder>
    </>
  );
}
