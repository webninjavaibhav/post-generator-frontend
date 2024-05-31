import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { PLATFORMS } from "./constant";
import { generatePrompts } from "../../utils/generatePromp";

export const useGeneratePost = () => {
  const [prompt, setPropmt] = useState<string>("");
  const [error , setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);
  const [promptResponse, setPromptResponse] = useState<string[]>([]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPropmt(e.target.value)
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!prompt) {
      toast.error("Please enter a prompt ");
    } else {
      let results = [];
      for (const ele of PLATFORMS) {
        let gpt = generatePrompts(ele, prompt);
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/generate-post`,
            { content: gpt }
          );

          let m1 = response.data.text.split(".");
          m1.shift();
          let m2 = m1.join(".");
          results.push(m2);
        } catch (error) {
          results.push(null);
        }
      }
      setPropmt("")
      setError(results?.filter((e)=> e === null)?.length === 3)
      setPromptResponse(results ?? []);
    }

    setLoading(false);
  };

  return { prompt, loading, error ,promptResponse, inputChangeHandler, handleSubmit };
};
