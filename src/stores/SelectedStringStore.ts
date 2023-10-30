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

    translatedString = "";

    constructor() {
        makeAutoObservable(this);
    }

    public translateString = async (str: string) => {
        const urlParams = new URLSearchParams([
            ["q", str], ["langpair", "en|ru"]
        ]);

        const { data } = await axios.get<TranslatorResponse>(
            this.translatorUrl, { params: urlParams }
        );

        this.translatedString = data.responseData.translatedText;
    }
}

const selectedStringStore = new SelectedStringStore();
export default selectedStringStore;
