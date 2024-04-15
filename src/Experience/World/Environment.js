import Experience from "../Experience";
import * as THREE from 'three'

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;

        // Debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.setSunLight();
    };

    setSunLight() {
        // this.AmbientLight = new THREE.AmbientLight('#ffffff', 0)
        // this.sunLight = new THREE.DirectionalLight('#ffffff', 1)
        // this.sunLight.position.set(3.5, 2, 1.25)
        // this.AmbientLight.position.set(0, 2, 0)
        // this.sunLight.castShadow = true
        // this.sunLight.shadow.camera.far = 15
        // this.sunLight.shadow.mapSize.set(1024, 1024)
        // this.sunLight.shadow.normalBias = 0.05
        // this.scene.add(this.AmbientLight)

        // // Debug
        // if(this.debug.active){
        //     this.debugFolder.add(this.sunLight, 'intensity').name('Sun Light').min(0).max(10).step(.001)
        //     this.debugFolder.add(this.sunLight.position, 'x').name('Sun X').min(-5).max(5).step(.001)
        //     this.debugFolder.add(this.sunLight.position, 'y').name('Sun Y').min(-5).max(5).step(.001)
        //     this.debugFolder.add(this.sunLight.position, 'z').name('Sun Z').min(-5).max(5).step(.001)
        // }
    }
}