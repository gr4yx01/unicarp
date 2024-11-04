'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import Button from '../common/Button';
import useProMembers from '@/store/proMember';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const EditMessage = () => {
    const [title, setTitle] = useState('')
    const messageToEdit = useProMembers((state) => state.messageToEdit)
    const [markdown, setMarkdown] = useState(messageToEdit?.description);

    return (
        <>
            <div className="container space-y-5 flex flex-col">
                <input value={messageToEdit?.title} onChange={(e) => setTitle(e.target.value)} className='border p-3 outline-none rounded-lg'  placeholder={"Enter Title"} />
                <span className='font-medium'>Description : </span>
                <MDEditor
                    value={messageToEdit?.description || markdown}
                    onChange={(value) => setMarkdown(value || '')}
                />
                <div className="preview">
                    <h2>Preview</h2>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
                <div className='w-full flex justify-center '>
                    <Button label={"Update"} bgStyle={"w-1/3"}/>
                </div>
            </div>
        </>
    );
};

export default EditMessage;
