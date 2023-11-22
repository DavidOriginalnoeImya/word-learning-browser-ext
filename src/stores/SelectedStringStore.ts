import {makeAutoObservable} from "mobx";
import axios from "axios";
import getPhraseServerPath from "../utils/getPhraseServerPath";

interface TranslatorResponse {
    responseData: ResponseData;
}

interface ResponseData {
    translatedText: string;
}

class SelectedStringStore {
    private phraseServiceUrlPrefix = "/phrase-service/api/phrases";
    private translationServiceUrlPrefix = "/translation-service/api/translations";

    selectedString = "";
    translatedString = "";

    constructor() {
        makeAutoObservable(this);
    }

    public translateString = async () => {
        if (this.selectedString) {
            const urlParams = new URLSearchParams([
                ["text", this.selectedString.trim()],
                ["sl", "en"], ["dl", "ru"]
            ]);

            const {data} = await axios.get<string>(
                getPhraseServerPath(this.translationServiceUrlPrefix), {params: urlParams}
            );

            this.translatedString = data;
        }
    }

    public saveTranslation = async () => {
        await axios.post(
            getPhraseServerPath(this.phraseServiceUrlPrefix), {
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
