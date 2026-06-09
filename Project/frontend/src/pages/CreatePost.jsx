import React from 'react'

const CreatePost = () => {
  return (
   <Section className='create-post-section'>
        <h1>Create Post</h1>
        <form>
            <input type='file' name='image' accept='image/*'/>
            <input type='text' name='caption' placeholder='
            Enter Caption' accept='image/*'/>


        </form>
   </Section>
  )
}

export default CreatePost
