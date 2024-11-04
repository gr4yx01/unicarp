'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import Button from '../common/Button';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const CreateMessage = () => {
    const [markdown, setMarkdown] = useState("**Hello world!**");
    const [title, setTitle] = useState('')

    console.log(markdown)

    return (
        <>
            <div className="container space-y-5 flex flex-col">
                <input className='border p-3 outline-none rounded-lg'  placeholder={"Enter Title"} />
                <span className='font-medium'>Description : </span>
                <MDEditor
                    value={markdown}
                    onChange={(value) => setMarkdown(value || '')}
                />
                <div className="preview">
                    <h2>Preview</h2>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
                <div className='w-full flex justify-center '>
                    <Button label={"Publish"} bgStyle={"w-1/3"}/>
                </div>
            </div>
        </>
    );
};

export default CreateMessage;
