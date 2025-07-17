import { useEffect, useState } from "react";

const AddMarquee = () => {
  const [title, setTitle] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [file, setFile] = useState(null);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }
    useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  const upLoadImage = async (e) => {
    e.preventDefault();
    const formData=new FormData()
    formData.append("image", file); // key = image
    formData.append("title", title);
    try {
      const response = await fetch("https://proshieldcybersecurity.onrender.com/api/uplod", {
        method: "POST",
        body:formData,
      });
      const data=response.json()
      if(response.ok){
        alert("The marquee data is added successfully")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-black/80 flex justify-center">
      <div className="w-66 h-96 bg-white p-10 mt-10">
        <form onSubmit={upLoadImage} className="flex flex-col gap-5">
          <h1 className=" text-[#010535] text-xl font-sans font-semibold text-center">
            Add Marquee
          </h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter the title"
            className="py-2 px-5 outline-none border-[1px] border-gray-500 rounded-lg"
          />
          <input
            onChange={handleChange}
            type="file"
            placeholder="upload"
            className="py-2 px-5 outline-none border-[1px] border-gray-500 rounded-lg"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Uploaded preview"
              className="w-20 h-20 shadow-lg"
            />
          )}
          <button
            type="Submit"
            className="py-3 px-5 text-[#010535] bg-green-500 rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddMarquee;
