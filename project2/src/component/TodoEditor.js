import './TodoEditor.css'

const TodoEditor = ({todo, Input}) => {
    return(
        <div className='TodoEditor'>
            <h4>새로운 할 일 작성하기✏️</h4>
            <div className='editor_wrapper'>
                <input placeholder='새로운 할 일...'
                    type="text"
                    value={todo.content}
                />
                <button type="button" onClick={Input}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;