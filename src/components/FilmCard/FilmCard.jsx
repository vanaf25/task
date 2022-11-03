import React, {useState} from 'react';

const FilmCard =React.memo( ({title,dateOfRelease,description,setCommonTags,filmId,tags,deleteTag}) => {
    const [inputTagValue,setInputTagValue]=useState("")
    const [isCreateMode,setIsCreateMode]=useState(false)
    const addTagHandle=()=>{
        setIsCreateMode(false);
        if (tags.length<=4 && inputTagValue.trim()) {
            setCommonTags({id:Math.random(),text:inputTagValue,filmId})
        }
    }
    return (
        <div key={Math.random()} className={"film-card"}>
            <h3>{title.map(titlePart=>`${titlePart} `)}</h3>
            <p>{description}</p>
            <p>{new Date(dateOfRelease).toLocaleDateString()}</p>
            <div className="tags">
                {tags.map(tag=><div className="tag">
                    {tag.text} <span onClick={()=>deleteTag(tag.id)} className={"tag__delete"}>X</span></div>)}
            </div>
            {isCreateMode ? <div>
                <input value={inputTagValue} onChange={e=>setInputTagValue(e.target.value)} type="text"/>
                <button onClick={addTagHandle}>Create</button>
                <button onClick={()=>setIsCreateMode(false)}>Cancel</button>
            </div>:  <button onClick={()=>setIsCreateMode(true)}>Add Tag</button>}
        </div>
    );
});

export default FilmCard;
