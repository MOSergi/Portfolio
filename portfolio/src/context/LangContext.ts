import React from "react";
import { LangContextInterface } from "../interfaces/LangContextInterface";

const LangContext = React.createContext<LangContextInterface | any>({});

export default LangContext;