import { Dispatch, SetStateAction } from "react";

export interface LangContextInterface {
    lang : string, 
    setLang : Dispatch<SetStateAction<string>>
}