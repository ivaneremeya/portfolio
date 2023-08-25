import React from "react";
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';



function PostFilter ({filter, setFILTER}) {
    return (
        <div>
            <MyInput
                value = {filter.query}
                onChange = {event => setFILTER({...filter, query: event.target.value})}
                placeholder= 'поле поиска'
            />
            <MySelect 
                value={filter.sort}
                onChange={event => setFILTER({...filter, sort: event})}
                defoltVel= 'сортировка'
                options={[
                    {value: 'title', name: 'по названию'},
                    {value: 'discr', name: 'по описанию'},
                ]}
            />
        </div>
    )
}

export default PostFilter;