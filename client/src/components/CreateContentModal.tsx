import { useRef, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface CreateContentModalProps {
    isActive: boolean;
    onClose: () => void;
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

const CreateContentModal = ({ isActive, onClose }: CreateContentModalProps) => {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    return (

        <div>
            {
                isActive && <div className='w-screen h-screen fixed top-0 left-0 bg-opacity-70 bg-slate-500 flex justify-center'>
                    <div className='flex flex-col justify-center'>
                        <div className='opacity-100 bg-white p-4 w-80 rounded-lg'>

                            <div className="flex justify-between p-2">
                                <h3 className="text-turquoise-900">Add content</h3>
                                <span className="text-slate-500 cursor-pointer" onClick={onClose}>
                                    <CloseIcon />
                                </span>
                            </div>

                            <div className="w-full">
                                <Input reference={titleRef} placeholder="Title" />
                                <Input reference={linkRef} placeholder="Link" />
                            </div>

                            <div>
                                <div className="flex gap-2 justify-center p-2">
                                    <Button
                                        text="Youtube"
                                        variant={type === ContentType.Youtube ? "secondary" : "primary"}
                                        onClick={() => setType(ContentType.Youtube)} />
                                    <Button
                                        text="Twitter"
                                        variant={type === ContentType.Twitter ? "secondary" : "primary"}
                                        onClick={() => setType(ContentType.Twitter)} />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Button onClick={() => console.log("adding content")} variant="primary" size="lg" text="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateContentModal