import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ImageController {
    constructor() {
        console.log('image controller loaded');
        this.getImage()
        AppState.on('image', this.drawBackground)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.toast('could not get image', 'error')
            console.error(error)
        }

    }
    drawBackground() {
        // console.log('drawing background')
        const bgImg = AppState.image
        // console.log('bg image', bgImg)
        document.body.style.backgroundImage = `url(${bgImg.lgImgUrl})`
    }
}