import {makeAutoObservable} from "mobx";
import axios from "axios";

interface TranslatorResponse {
    responseData: ResponseData;
}

interface ResponseData {
    translatedText: string;
}

class SelectedStringStore {
    private translatorUrl = "https://api.mymemory.translated.net/get"
    private serverUrl = "http://localhost:8086/api/phrases"

    selectedString = "";
    translatedString = "";

    constructor() {
        makeAutoObservable(this);
    }

    public translateString = async () => {
        if (this.selectedString) {
            const urlParams = new URLSearchParams([
                ["q", this.selectedString], ["langpair", "en|ru"]
            ]);

            const {data} = await axios.get<TranslatorResponse>(
                this.translatorUrl, {params: urlParams}
            );

            this.translatedString = data.responseData.translatedText;
            this.saveTranslation();
        }
    }

    public saveTranslation = async () => {
        await axios.post(
            this.serverUrl, {
                phrase: this.selectedString,
                translation: this.translatedString
            }
        );
    }

    public setSelectedString = (selectedString: string) => {
        this.selectedString = selectedString;
    }

    public setTranslatedString = (translatedString: string) => {
        this.translatedString = translatedString;
    }

}

const selectedStringStore = new SelectedStringStore();
export default selectedStringStore;
