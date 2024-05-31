import Input from "../../components/Input";
import sendIcon from "../../assets/arrow.png";
import Loader from "../../components/Loader";
import ChartLayout from "../../layout/ChartLayout";
import { useGeneratePost } from "./useGeneratePost";
import Posts from "../../components/Posts";
import Button from "../../components/Button";

const GeneratePost = () => {
  const { prompt, loading, promptResponse, inputChangeHandler, handleSubmit } =
    useGeneratePost();

  return (
    <ChartLayout>
      <>
        <div className=" text-center font-extrabold text-xl">
          Generate Social Post
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-[60px] flex items-center justify-center m-[15px] p-[10px] "
        >
          <Input
            style="w-[80%]"
            placeholder="Enter a prompt to generate social posts"
            handleChange={inputChangeHandler}
            value={prompt}
          />
          <Button disable={loading}>
            <img
              src={sendIcon}
              alt="send"
              className="h-[50px] w-[50px] object-contain"
            />
          </Button>
        </form>
        <div className="flex justify-center items-center">
          <div className="h-[calc(100dvh_-_200px)] overflow-auto  text-justify my-[15px] py-[10px] w-[90%]">
            {loading && <Loader />}
            {!loading && <Posts data={promptResponse} />}
          </div>
        </div>
      </>
    </ChartLayout>
  );
};

export default GeneratePost;
