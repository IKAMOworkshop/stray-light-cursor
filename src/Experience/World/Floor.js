import Experience from "../Experience";
import * as THREE from 'three'

export default class Floor{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.scene.fog = new THREE.Fog( 0x232e40, 10, 40)

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    };

    setGeometry(){
        this.geometry = new THREE.PlaneGeometry(100, 100);
    }

    setMaterial(){
        this.material = new THREE.MeshStandardMaterial({
            color: 0x415575,
            metalness: .5,
            smoothness: .5
        })
    }

    setMesh(){
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.y = -2.5
        this.mesh.rotation.x = -Math.PI * .5
        this.mesh.receiveShadow = true;
        this.scene.add(this.mesh)
    }
}