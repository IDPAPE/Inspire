import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"

class ImageService {


    async getImage() {
        const response = await api.get('api/images')
        console.log(response.data)
        let image = AppState.image
        AppState.image = new Image(response.data)
        console.log(image)
        console.log(AppState.image)
    }
}

export const imageService = new ImageService()