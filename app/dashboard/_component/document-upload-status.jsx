import DocumentUploadIcon from "@/icons/document-upload";

const DocumentUploadStatus = () => {
    return(
        <div className="flex gap-4 px-6 py-8 bg-[#375F90] rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_4px_8px_0px_rgba(0,0,0,1)]">
            <div>
                <DocumentUploadIcon />
            </div>
            <div>
                <h2 className="mb-2 text-2xl leading-[34.8px] font-semibold text-white">You are almost there</h2>
                <p className="mb-[30px] text-[#E3E2E2] text-base leading-[23.2px] font-normal">Upload property document to make your insurance policy active</p>
                <div className="mb-8">

                </div>
                <button className="mb-4 px-6 py-2 rounded-xl text-white text-lg leading-[26.1px] font-normal bg-custom-red">
                    Upload document
                </button>
                <p className="text-[#E3E2E2] font-normal text-[12px] leading-[17.4px]">ID verification( NIN) , CAC, CO2,CO7, pictures of the property</p>
            </div>
        </div>
    )
}

export default DocumentUploadStatus;