import React,{useState} from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const finalSpaceCharacters = [
  {
    id: '1',
    title: 'buy grocery',
    description: 'pulses, wheat flour, spices'
  },
  {
    id: '2',
    title: 'buy vegitables',
    description: 'potato, tomato, chilli'
  },
  {
    id: '3',
    title: 'buy vegitables',
    description: 'potato, tomato, chilli'
  },
  {
    id: '4',
    title: 'buy vegitables',
    description: 'potato, tomato, chilli'
  },
]
const DragableItem = () => {
  const classes = useStyles(style)();
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const handleOnDragEnd=(result)=>{
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <div className= {classes.dragItem}>
         <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, title, description}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <h3>{ title }</h3>
                          <p>{description}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      
    </div>
  );
};

export default DragableItem;
