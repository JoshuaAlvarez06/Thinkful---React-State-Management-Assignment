import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ addPost }) {
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  const initialFormData = {
    type: "Text",
    content: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    addPost( formData.type, formData.content );
    setFormData({ ...initialFormData });
  };
  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={submitHandler}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
            id="type" 
            name="type" 
            required={true}
            onChange={changeHandler}
            value={formData.type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="text">Content: </label>
          {formData.type === "Text" ? (
            <textarea 
              id="text" 
              type="text" 
              name="content" 
              onChange={changeHandler} 
              value={formData.text}
              required={true} 
              rows={3} />
          ) : (
            <input 
              id="text" 
              type="url" 
              name="content"  
              onChange={changeHandler} 
              value={formData.content}
              required={true} />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;