import React from 'react';

const Blogs = () => {
    return (
        <div className='gap-12 grid grid-cols-3 p-8 text-slate-600'>
            <div className='bg-cyan-100 p-4 rounded-lg'>
                <h3 className='flex font-medium h-28 items-center text-xl text-indigo-400'>What is Context API?</h3>
                <p>Normally, to pass data from a parent component to a child component, we use <strong>props</strong>. But if the child is not a direct child, it becomes tedious to send data through multiple parents which is called <strong>props drilling</strong>. To avoid this, we can use the <em>Context API</em> without having to explicitly pass a prop through every parent.</p>
            </div>
            <div className='bg-cyan-100 p-4 rounded-lg'>
                <h3 className='flex font-medium h-28 items-center text-xl text-indigo-400'>What is Semantic Tags?</h3>
                <p>Every tag in html has its own purpose and uses. But we can't understand all of them just by seeing their name. If it's possible to understand the purpose and the uses of a tag by its name, then the tag can be called a <strong>Semantic Tag</strong>. In short, a tag with a meaningful name is called a <em>Semantic Tag</em>.</p>
            </div>
            <div className='bg-cyan-100 p-4 rounded-lg'>
                <h3 className='flex font-medium h-28 items-center text-xl text-indigo-400'>What is the difference between Inline, Block and Inline-Block elements?</h3>
                <ol className='list-decimal list-inside'>
                    <li className='my-2'>Inline elements don't have a <strong>fixed width, height and top and bottom margins/paddings</strong>. But Block and Inline-Block elements have these properties.</li>
                    <li className='my-2'>Block elements add a <strong>line-break</strong> after the element, but other elements don't.</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;